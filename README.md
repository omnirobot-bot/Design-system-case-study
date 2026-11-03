# Design System Case Study

Case study of a multibrand, multiplatform design system: token architecture,
brand theming and the Supernova token pipeline.

Live: https://omnirobot-bot.github.io/Design-system-case-study/

## Stack

React 18, TypeScript, Vite 6, Tailwind CSS 4.

## Run locally

```bash
npm install
GITHUB_ACTIONS=true npm run dev
```

Images use the GitHub Pages base path, so they load locally only with
`GITHUB_ACTIONS=true`. Open http://localhost:5173/Design-system-case-study/

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages.

## Structure

- `src/app/App.tsx` – all page sections
- `src/app/components/`
  - `GlassCard` – card container used in every section
  - `Badge` – brand, platform and token-tier labels
  - `ThemeComparison` – light/dark comparison slider
  - `figma/ImageWithFallback` – not used by the page
- `src/styles/theme.css` – CSS variables, including the slider colors
- `public/images/` – hero background and theme screenshots
