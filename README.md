
# Evaluación de Adopción de IA en Ventas — versión corregida

Proyecto React + Vite listo para Vercel. Basado en tu repo original, adaptado para evaluar **uso de IA en equipos de ventas**.

## ¿Qué cambió?

- **Preguntas y áreas** (8 dimensiones × 4 ítems = 32 preguntas) en `src/data/questions.js`.
- **Escala Likert 1–5** y **puntajes dinámicos** (el reporte calcula máximos por área según cantidad de preguntas).
- **Recomendaciones automáticas** por área en `src/data/recommendations.js` (30/60/90 días).
- **Botones**: _Anterior_, **Omitir**, _Siguiente_ y **guardar progreso** en `localStorage`.
- **Landing full-screen** centrada con gradiente sutil.
- **SPA fallback** para Vercel (`vercel.json`).

## Scripts

```bash
pnpm install   # o npm install / yarn
pnpm dev       # desarrollo
pnpm build     # build para producción (Vercel)
pnpm preview   # previsualización local
```

## Personalización rápida

- Cambia textos/preguntas en `src/data/questions.js`.
- Ajusta recomendaciones en `src/data/recommendations.js`.
- Colores/estilos: `src/App.css` y utilidades Tailwind ya incluidas por shadcn/ui.
- Para imagen de portada, añade tu imagen a `public/` y úsala en `LandingPage.jsx` como background si lo deseas.

## Notas

- El **reporte** usa Recharts (Radar + Barras) y calcula el nivel global con cuartiles del máximo posible.
- El botón **“Descargar Reporte”** genera PDF/imagen (si estaba en tu base; de lo contrario, puedes integrarlo con jsPDF/html2canvas).
