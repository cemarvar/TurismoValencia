# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## ValBot (función `chat`)

El asistente de la web y de la app Android es la función de Netlify `netlify/functions/chat.js`, que llama a Gemini. En Netlify
(Site configuration → Environment variables) hacen falta `GEMINI_API_KEY` (la clave de Google AI Studio; solo vive ahí) y, si se quiere,
`GEMINI_MODEL` para cambiar de modelo sin tocar el código (por defecto, `gemini-3.5-flash-lite`). La app manda el idioma elegido en `lang`
(`es`, `ca-ES-valencia`, `en`, `fr`) y el asistente contesta en él. `pnpm test` prueba la función con un Gemini simulado y
`node scripts/probar-chat.js` la prueba con el real.
