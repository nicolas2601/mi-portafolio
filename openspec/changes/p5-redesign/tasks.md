## Wave 1 - Foundation (serial, one agent; blocks later waves)

- [x] 1.1 Remove `@tailwindcss/vite`; confirm `astro build` still green on Tailwind 3
- [x] 1.2 Add vitest + Playwright config and `npm test` / `npm run test:e2e` scripts
- [x] 1.3 RED/GREEN: menu reducer in `src/lib/menu.ts` (clamp, next/prev, key mapping) with unit tests
- [x] 1.4 Add OFL display font via `@fontsource`; record license in `docs/` note or PR text
- [x] 1.5 Create `src/styles/p5.css` (tokens, skew/clip-path utilities, stripe keyframes, reduced-motion rules)
- [x] 1.6 Create `P5Frame.astro` (chrome + attribution footer) and wire into `Layout.astro` without touching SEO head
- [x] 1.7 Create `P5Menu.tsx` island (anchor items, keyboard nav, glow) using `src/lib/menu.ts`
- [x] 1.8 Create `StripeTransition.tsx` + Astro `ClientRouter`; reduced-motion fallback
- [x] 1.9 Add `vercel.json` 301 `/services` -> `/`
- [x] 1.10 Gate: `astro check`, `astro build`, unit tests green; one commit per RED/GREEN cycle

## Wave 1.5 - Assets and data (done by owner session before Wave 2)

- [x] 1.11 Import 17 images as WebP into `src/assets/p5/`, font into `public/fonts/`, mp3 into `public/audio/`
- [x] 1.12 Remove Accasoft entry and the three unverified metrics from `src/data/info.ts`; keep the hackathon claim
- [x] 1.13 `src/lib/p5-assets.ts` manifest (single import point for franchise assets) + `@font-face` for the fan font in `p5.css` (agent: wave2-shell)

## Wave 2 - Pages (parallel, 4 agents, disjoint files, each in its own worktree)

Every page task has this acceptance in addition to its own: exactly one `<h1>`, unique `<title>` and meta description passed to `Layout`, canonical present, content in prerendered HTML, `astro build` green, nothing outside its own files edited.

- [x] 2.0 Shell extras (agent wave2-shell): manifest 1.13, opt-in BGM toggle (off by default, `preload="none"`), animated CSS/SVG background replacing video, mobile menu polish
- [x] 2.1 Home: `src/pages/index.astro` + `Home` content (value prop, CTAs, menu)
- [x] 2.2 About: `src/pages/about.astro` (bio, education, certifications) from `info.ts`
- [x] 2.3 Projects: `src/pages/projects.astro` + `ProjectFilter.tsx`; real screenshots for IoT, LSC, reservas; generated P5-style typographic covers (no image files) for the other six
- [x] 2.4 Resume + Contact: `src/pages/resume.astro` (new), `src/pages/contact.astro` restyle, `/gracias` restyle

## Wave 3 - Hardening (serial)

- [x] 3.1 Delete dead code: `Services`, `UseCases`, `FAQ`, unused `ui/*`, `services.astro`, `Welcome.astro`
- [x] 3.2 Playwright smoke: every route 200, one h1, canonical, no-JS menu links, keyboard flow
- [x] 3.3 Asset policy scan (manifest-only imports, no video, image weight, silent first load)
- [ ] 3.4 Lighthouse mobile + a11y, fix regressions
- [ ] 3.5 squirrelscan `--coverage full` on Vercel preview, fix to >= 95 (local audit: a11y, images, core SEO, E-E-A-T, legal all 100; remaining findings are localhost artifacts such as HTTP and sitemap domain)
- [x] 3.6 Reviewer subagent pass (typescript-reviewer) and apply reasonable fixes
- [x] 3.8 (verified locally with a header-applying server and no CSP violations; still to confirm with curl on a real preview) Security headers are NOT applied in production today (baseline 2026-10-05: no CSP, X-Frame-Options, nosniff, Referrer-Policy or Permissions-Policy on `https://nicolasmoreno.site/`, squirrel Security 84). Find why `vercel.json` headers and the `vercel-deploy.js` injection do not take effect, fix, and verify with `curl -sI` on the preview; confirm the CSP in `vercel.json` does not break fonts, audio or inline scripts
- [ ] 3.9 Baseline to beat (live site, squirrel surface): overall 79/C; titles all > 60 chars, descriptions all > 160, one a11y error (`label-content-name-mismatch`), `image-file-size` error, 16 a11y warnings (contrast, heading order, touch targets). Final target >= 95
- [ ] 3.7 Open PR to `main` (no AI attribution, conventional commits), verify Vercel preview and CI green

## Owner-only decisions (not delegated)

- [x] O.1 Accasoft entry: removed (owner, 2026-10-05)
- [x] O.2 Keep only the "regional winner" claim; three unverified metrics replaced with descriptive labels (owner, 2026-10-05)
- [x] O.3 Covers: 3 real screenshots + generated covers for the rest (owner, 2026-10-05)
