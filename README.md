# Flutter Developer Portfolio

Next.js 15 · React 19 · Tailwind CSS 3.4 · shadcn/ui · Framer Motion · Three.js (react-three-fiber) · DM Sans

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Pages
- `/` — full portfolio (hero, stats, skills, experience, app lab, projects, contact)
- `/app-showcase` — 3D phone showcase (Three.js)

## Content
All content lives in `src/data/*.js` (currently empty). Fill them in; types are in `src/types/index.ts`.
Images go in `public/images/...` and screen textures in `public/textures/...`; reference them as `/images/...`.

## Colors
Palette from DESIGN.md is in `src/styles/tokens.css` and wired in `tailwind.config.ts`
(`bg-canvas`, `bg-section`, `text-ink`, `bg-sage-dark`, `text-dusty-dark`, `bg-sand-light`, ...).
shadcn variables (`--primary`, `--border`, ...) are mapped to the same palette.
