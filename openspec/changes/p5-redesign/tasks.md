## Wave 1 - Foundation (serial, one agent; blocks later waves)

- [x] 1.1 Remove `@tailwindcss/vite`; confirm `astro build` still green on Tailwind 3
- [x] 1.2 Add vitest + Playwright config and `npm test` / `npm run test:e2e` scripts
- [x] 1.3 RED/GREEN: menu reducer in `src/lib/menu.ts` (clamp, next/prev, key mapping) with unit tests
- [ ] 1.4 Add OFL display font via `@fontsource`; record license in `docs/` note or PR text
- [ ] 1.5 Create `src/styles/p5.css` (tokens, skew/clip-path utilities, stripe keyframes, reduced-motion rules)
- [ ] 1.6 Create `P5Frame.astro` (chrome + attribution footer) and wire into `Layout.astro` without touching SEO head
- [ ] 1.7 Create `P5Menu.tsx` island (anchor items, keyboard nav, glow) using `src/lib/menu.ts`
- [ ] 1.8 Create `StripeTransition.tsx` + Astro `ClientRouter`; reduced-motion fallback
- [ ] 1.9 Add `vercel.json` 301 `/services` -> `/`
- [ ] 1.10 Gate: `astro check`, `astro build`, unit tests green; one commit per RED/GREEN cycle

## Wave 2 - Pages (parallel, 4 agents, disjoint files, each in its own worktree)

- [ ] 2.1 Home: `src/pages/index.astro` + `Home` content (value prop, CTAs, menu)
- [ ] 2.2 About: `src/pages/about.astro` (bio, education, certifications) from `info.ts`
- [ ] 2.3 Projects: `src/pages/projects.astro` + `ProjectFilter.tsx` + typographic cover fallback
- [ ] 2.4 Resume + Contact: `src/pages/resume.astro` (new), `src/pages/contact.astro` restyle, `/gracias` restyle

## Wave 3 - Hardening (serial)

- [ ] 3.1 Delete dead code: `Services`, `UseCases`, `FAQ`, unused `ui/*`, `services.astro`, `Welcome.astro`
- [ ] 3.2 Playwright smoke: every route 200, one h1, canonical, no-JS menu links, keyboard flow
- [ ] 3.3 Asset scan for forbidden files (asset-originality spec)
- [ ] 3.4 Lighthouse mobile + a11y, fix regressions
- [ ] 3.5 squirrelscan `--coverage full` on Vercel preview, fix to >= 95
- [ ] 3.6 Reviewer subagent pass (typescript-reviewer) and apply reasonable fixes
- [ ] 3.7 Open PR to `main` (no AI attribution, conventional commits), verify Vercel preview and CI green

## Owner-only decisions (not delegated)

- [ ] O.1 Accasoft entry: keep / rename / remove
- [ ] O.2 Confirm or soften "regional winner" claim and the three metrics
- [ ] O.3 Provide or approve cover images for projects without screenshots
