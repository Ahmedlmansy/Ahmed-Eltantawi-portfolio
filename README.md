# Flutter Developer Portfolio

Next.js 15 · React 19 · Tailwind CSS 3.4 · shadcn/ui · Framer Motion · Three.js (react-three-fiber) · DM Sans

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Contact form (EmailJS)
1. Create an EmailJS email service and a template addressed to the portfolio owner.
2. Set the template's reply-to field to `{{reply_to}}` and include `{{from_name}}`,
   `{{engagement_type}}`, and `{{message}}` in its subject/body.
3. Copy `.env.local.example` to `.env.local` and fill in the service ID, template ID,
   and public key from the EmailJS dashboard. These are browser-side public settings;
   never put an EmailJS private key in a `NEXT_PUBLIC_*` variable.
4. Restart the Next.js server after changing environment variables.
5. Restrict the EmailJS service to the deployed site origin and enable the provider's
   available anti-abuse protections. The form also applies a per-browser 10-second
   send throttle.

## Pages
- `/` — full portfolio (hero, stats, skills, experience, app lab, projects, contact)
- `/app-showcase` — 3D phone showcase (Three.js)

## Content
Portfolio content lives in `src/data/*.js`; section data types are in `src/types/index.ts`.
Images go in `public/images/...` and screen textures in `public/textures/...`; reference them as `/images/...`.

## Colors
Palette from DESIGN.md is in `src/styles/tokens.css` and wired in `tailwind.config.ts`
(`bg-canvas`, `bg-section`, `text-ink`, `bg-sage-dark`, `text-dusty-dark`, `bg-sand-light`, ...).
shadcn variables (`--primary`, `--border`, ...) are mapped to the same palette.
