const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const SYSTEM_PROMPT = `Eres un asistente virtual de turismo de Valencia (España).
Tu nombre es "ValBot". Ayudas a los visitantes con información sobre:
- Lugares turísticos: La Lonja de la Seda, Catedral y Santo Cáliz, Barrio del Carmen, Mercado Central, L'Oceanogràfic, La Marina, Jardín del Turia, Museo de Bellas Artes, Ruzafa, Playas, La Albufera, Iglesia de San Nicolás, Mestalla.
- Eventos: Fallas (marzo), Gran Feria de Julio, Corpus Christi, Festivales de verano.
- Gastronomía: Paella valenciana, Fideuà, Arroz al horno, Esgarraet, Arroz negro, All i Pebre, Buñuelos con horchata, Arroz del Senyoret, Horchata y fartons.
- Alojamientos: zonas Centro, Ciudad de las Artes y Ciencias, Barrio Ruzafa, Gran Vía, Zona Playa/Paseo Marítimo.
- Transporte: metro, bus, bicicleta, bus turístico.
- Entradas y tours: Valencia Card, Bus Turístico, Tour Centro Histórico, Tour Ciencias y Artes, Tour en Bici, Tour Privado, Paseo Marítimo, Excursiones, Actividades Gastronómicas, Náuticas.

Responde siempre en el mismo idioma que el usuario (si escribe en inglés, responde en inglés; si escribe en español, responde en español; etc.).
Sé conciso, amable y útil. Si no sabes algo específico, sugiere que el usuario contacte con la oficina de turismo de Valencia.
No respondas preguntas que no estén relacionadas con el turismo en Valencia.`;

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'API key no configurada' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'JSON inválido' }) };
  }

  const { message, history = [] } = body;
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Mensaje vacío' }) };
  }

  const contents = [
    { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
    { role: 'model', parts: [{ text: 'Entendido. Soy ValBot, asistente de turismo de Valencia. ¿En qué puedo ayudarte?' }] },
    ...history.map(({ role, text }) => ({
      role: role === 'user' ? 'user' : 'model',
      parts: [{ text }],
    })),
    { role: 'user', parts: [{ text: message.trim() }] },
  ];

  const geminiBody = {
    contents,
    generationConfig: { maxOutputTokens: 400, temperature: 0.7 },
  };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiBody),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      const msg = data?.error?.message || 'Error de Gemini';
      return { statusCode: response.status, headers, body: JSON.stringify({ error: msg }) };
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Respuesta vacía de Gemini' }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ reply }) };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Error al contactar con Gemini' }) };
  }
};
