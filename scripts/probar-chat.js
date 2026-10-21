// Prueba la función `chat` con Gemini de verdad (usa tu clave y gasta una petición). La clave se pone en el entorno, nunca en un archivo:
//   $env:GEMINI_API_KEY = "tu clave"; node scripts/probar-chat.js "¿Qué puedo ver en un día?" fr
// El segundo argumento es el idioma de la app (es, ca-ES-valencia, en, fr); sin él, contesta en el idioma de la pregunta.
import { handler } from '../netlify/functions/chat.js';

const [message = '¿Qué puedo ver en Valencia en un día?', lang] = process.argv.slice(2);
if (!process.env.GEMINI_API_KEY) {
  console.error('Falta GEMINI_API_KEY en el entorno.');
  process.exit(1);
}

const response = await handler({ httpMethod: 'POST', headers: {}, body: JSON.stringify({ message, history: [], lang }) });
console.log(response.statusCode, JSON.parse(response.body));
