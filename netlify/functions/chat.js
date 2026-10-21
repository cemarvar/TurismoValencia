// ValBot, el asistente de turismo de Valencia, con Gemini. Lo usan la web (`/api/chat`) y la app Android de Turismo Valencia.
//
// Petición:  POST { message, history?: [{ role: 'user' | 'assistant', text }], lang? }
//   `lang` es el idioma elegido en la app (es, ca-ES-valencia, en, fr). La web no lo manda: entonces el asistente contesta en el idioma
//   en que escribe el usuario, como siempre. Cualquier otro valor de `lang` se ignora.
// Respuesta: 200 { reply }; si algo falla, un estado de error con { error }.
//
// Variables de entorno de Netlify: GEMINI_API_KEY (obligatoria; la clave solo vive aquí) y GEMINI_MODEL (opcional: el modelo a usar).

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Modelo por defecto: barato y con el razonamiento al mínimo, que es lo que pide un chat de turismo. Se cambia sin tocar el código con
// GEMINI_MODEL. Si el modelo configurado ya no existe (404: es lo que le pasó a gemini-2.5-flash) se prueban estos por orden.
const DEFAULT_MODEL = 'gemini-3.5-flash-lite';
const FALLBACK_MODELS = ['gemini-3.6-flash', 'gemini-3.8-flash'];

const MAX_MESSAGE_CHARS = 300; // lo mismo que el campo de texto de la web y el de la app
const MAX_HISTORY_TURNS = 10; // ídem
const MAX_HISTORY_CHARS = 1000;
// Tope de la respuesta, razonamiento incluido. Sin `temperature`: los modelos 3.6 o posteriores la ignoran y en la familia 3 se
// recomienda dejarla en su valor por defecto.
const MAX_OUTPUT_TOKENS = 2048;

// Límite por IP «de mejor esfuerzo»: la memoria solo dura mientras la función está caliente, así que no es una garantía. Lo que de
// verdad protege el saldo de Gemini es el prepago y el tope de gasto de Google AI Studio.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX_REQUESTS = 20;
const recentRequests = new Map();

const LANGUAGES = {
  es: 'español',
  ca: 'valenciano (la variedad del catalán que se habla en la Comunitat Valenciana)',
  en: 'inglés',
  fr: 'francés',
};

const PROMPT_INTRO = `Eres un asistente virtual de turismo de Valencia (España).
Tu nombre es "ValBot". Ayudas a los visitantes con información sobre:
- Lugares turísticos: La Lonja de la Seda, Catedral y Santo Cáliz, Barrio del Carmen, Mercado Central, L'Oceanogràfic, La Marina, Jardín del Turia, Museo de Bellas Artes, Ruzafa, Playas, La Albufera, Iglesia de San Nicolás, Mestalla.
- Eventos: Fallas (marzo), Gran Feria de Julio, Corpus Christi, Festivales de verano.
- Gastronomía: Paella valenciana, Fideuà, Arroz al horno, Esgarraet, Arroz negro, All i Pebre, Buñuelos con horchata, Arroz del Senyoret, Horchata y fartons.
- Alojamientos: zonas Centro, Ciudad de las Artes y Ciencias, Barrio Ruzafa, Gran Vía, Zona Playa/Paseo Marítimo.
- Transporte: metro, bus, bicicleta, bus turístico.
- Entradas y tours: Valencia Card, Bus Turístico, Tour Centro Histórico, Tour Ciencias y Artes, Tour en Bici, Tour Privado, Paseo Marítimo, Excursiones, Actividades Gastronómicas, Náuticas.`;

const PROMPT_STYLE = `Sé conciso, amable y útil. Si no sabes algo específico, sugiere que el usuario contacte con la oficina de turismo de Valencia.
No respondas preguntas que no estén relacionadas con el turismo en Valencia.`;

const json = (statusCode, payload) => ({ statusCode, headers, body: JSON.stringify(payload) });

/** El nombre del idioma de la app (`lang` es una etiqueta como «ca-ES-valencia»), o null si no es uno de los cuatro que ofrece la app. */
function languageName(lang) {
  if (typeof lang !== 'string') return null;
  return LANGUAGES[lang.trim().toLowerCase().split(/[-_]/)[0]] ?? null;
}

function systemPrompt(language) {
  const rule = language
    ? `Responde siempre en ${language}, aunque el usuario escriba en otro idioma, salvo que te pida expresamente que contestes en otro.`
    : 'Responde siempre en el mismo idioma que el usuario (si escribe en inglés, responde en inglés; si escribe en español, responde en español; etc.).';
  return `${PROMPT_INTRO}\n\n${rule}\n${PROMPT_STYLE}`;
}

/** Añade un turno; si el anterior es del mismo rol los junta (Gemini espera que los turnos se alternen). */
function addTurn(turns, role, text) {
  const last = turns[turns.length - 1];
  if (last && last.role === role) {
    last.parts[0].text += `\n${text}`;
  } else {
    turns.push({ role, parts: [{ text }] });
  }
}

/** El historial en el formato de Gemini: sin turnos vacíos ni demasiado largos, alternado y empezando por el usuario (la web manda el saludo del bot como primer turno). */
function cleanHistory(history) {
  const turns = [];
  if (!Array.isArray(history)) return turns;
  for (const item of history.slice(-MAX_HISTORY_TURNS)) {
    const text = typeof item?.text === 'string' ? item.text.trim().slice(0, MAX_HISTORY_CHARS) : '';
    if (text) addTurn(turns, item.role === 'user' ? 'user' : 'model', text);
  }
  while (turns.length > 0 && turns[0].role === 'model') turns.shift();
  return turns;
}

function clientIp(event) {
  const h = event.headers ?? {};
  return h['x-nf-client-connection-ip'] || h['client-ip'] || String(h['x-forwarded-for'] ?? '').split(',')[0].trim();
}

function rateLimited(ip, now = Date.now()) {
  if (!ip) return false;
  const recent = (recentRequests.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX_REQUESTS) {
    recentRequests.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentRequests.set(ip, recent);
  if (recentRequests.size > 5000) {
    for (const [key, times] of recentRequests) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) recentRequests.delete(key);
    }
  }
  return false;
}

/** Pregunta a Gemini; si el modelo ya no existe (404) pasa al siguiente. Devuelve { data, model } o { error: { status, message, model } }. */
async function askGemini(apiKey, models, geminiBody) {
  const base = process.env.GEMINI_API_BASE || 'https://generativelanguage.googleapis.com/v1beta';
  let failure = { status: 502, message: 'Sin modelo disponible', model: null };
  for (const model of models) {
    const response = await fetch(`${base}/models/${encodeURIComponent(model)}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify(geminiBody),
    });
    const data = await response.json().catch(() => ({}));
    if (response.ok) return { data, model };
    failure = { status: response.status, message: data?.error?.message || 'Error de Gemini', model };
    if (response.status !== 404) break;
    console.warn(`Gemini: el modelo ${model} no está disponible (404), se prueba otro. ${failure.message}`);
  }
  return { error: failure };
}

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json(500, { error: 'API key no configurada' });
  }

  if (rateLimited(clientIp(event))) {
    return json(429, { error: 'Demasiadas peticiones: inténtalo de nuevo en un minuto' });
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return json(400, { error: 'JSON inválido' });
  }
  if (!body || typeof body !== 'object') {
    return json(400, { error: 'JSON inválido' });
  }

  const { message, history, lang } = body;
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return json(400, { error: 'Mensaje vacío' });
  }
  if (message.trim().length > MAX_MESSAGE_CHARS) {
    return json(400, { error: 'Mensaje demasiado largo' });
  }

  const contents = cleanHistory(history);
  addTurn(contents, 'user', message.trim());

  const geminiBody = {
    systemInstruction: { parts: [{ text: systemPrompt(languageName(lang)) }] },
    contents,
    generationConfig: { maxOutputTokens: MAX_OUTPUT_TOKENS },
  };

  const configured = (process.env.GEMINI_MODEL || '').trim() || DEFAULT_MODEL;
  const models = [configured, ...FALLBACK_MODELS.filter((m) => m !== configured)];

  try {
    const { data, error } = await askGemini(apiKey, models, geminiBody);
    if (error) {
      console.error(`Gemini ${error.model} respondió ${error.status}: ${error.message}`);
      // El mensaje de Gemini se queda en el registro de Netlify: a quien llama solo le llega un texto genérico y el número de estado
      // (404: modelo no disponible, 429: cuota, 400 o 403: clave...), que ayuda a diagnosticar sin enseñar detalles del proyecto.
      return error.status === 429
        ? json(429, { error: 'ValBot está recibiendo muchas consultas: inténtalo de nuevo en un momento', upstreamStatus: 429 })
        : json(502, { error: 'Error al contactar con Gemini', upstreamStatus: error.status });
    }

    const parts = data?.candidates?.[0]?.content?.parts;
    const reply = Array.isArray(parts)
      ? parts.filter((p) => typeof p?.text === 'string' && !p.thought).map((p) => p.text).join('').trim()
      : '';
    if (!reply) {
      console.error(`Respuesta vacía de Gemini: ${data?.candidates?.[0]?.finishReason ?? data?.promptFeedback?.blockReason ?? 'sin motivo'}`);
      return json(502, { error: 'Respuesta vacía de Gemini' });
    }

    return json(200, { reply });
  } catch (e) {
    console.error('Error al contactar con Gemini', e);
    return json(502, { error: 'Error al contactar con Gemini' });
  }
};
