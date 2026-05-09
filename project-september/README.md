# Project September

Personal 16-week recomposition & metabolic protocol dashboard.
Editorial-luxury aesthetic. Dark warm palette. Mobile-friendly.

## Tabs

- **I · Aujourd'hui** — daily 5-metric check-in (calories, protein, training, steps, sleep)
- **II · Biologie** — bloodwork analysis, supplement stack, safety flags
- **III · Nutrition** — macros, meal templates, glucose-blunting tactics, grocery list
- **IV · Entraînement** — light split (Phase A gym → Phase B home)
- **V · Routine** — hour-by-hour schedule, cortisol regulation, posture practice
- **VI · Soins** — AM/PM skincare, hair/minoxidil protocol
- **VII · Finance** — monthly allocation, PEA plan, skill ROI
- **VIII · Suivi** — weight chart, history, compliance, executive briefing

All data stored in browser localStorage. No backend, no login, no cloud.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

### Option 1 — via GitHub (recommended)

1. Create a new repo on GitHub (private).
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial deploy"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/project-september.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), import the repo.
4. Click Deploy. Done — Vercel auto-detects Next.js.
5. Add a custom domain in Vercel project settings if desired.

### Option 2 — via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow prompts. First deploy is `vercel`, production deploy is `vercel --prod`.

## Editing protocol content

All static content lives in `lib/data.ts`. Edit values there, redeploy, done.

## Privacy

All tracking data stays in YOUR browser only (localStorage). Wiping browser data
or using a different device = fresh slate. To preserve across devices, export
periodically (planned feature) or use Chrome sync.
