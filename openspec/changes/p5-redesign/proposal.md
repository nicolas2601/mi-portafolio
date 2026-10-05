## Why

The current portfolio (Astro 5 + React islands + Tailwind) is functional and SEO-tuned but visually generic: it reads like any dark SaaS template. The owner wants a memorable, stylized identity inspired by the Persona 5 UI language (skewed type, red/black/white palette, stripe transitions, keyboard-navigable menu) while keeping what already works: recruiter-focused content, SEO/GEO metadata, and Vercel deploy.

Reference: https://github.com/ffaneto/persona5-website-theme (Vite + React Router + framer-motion SPA). Audit findings that shape this change:

- The reference is a client-rendered SPA with no SEO metadata. Adopting it as-is would drop `nicolasmoreno.site` out of search and hide content from crawlers and ATS-style link previews.
- Its visual identity depends on copyrighted Atlus assets (character art, Joker sprites, `Persona5main.ttf`, background music, 6 videos stored in Git LFS). The repo has no license. These cannot ship on a public job-search site.
- Its core mechanics are original-code and portable: skewed clip-path menu, keyboard navigation, skewed stripe page transitions, active-item glow.

## What Changes

- Re-skin the whole site with an original Persona-5-inspired design system (tokens, type, shapes, motion) built in code (CSS/SVG), not copied assets.
- Port the reference's interaction mechanics into React islands inside the existing Astro app (menu, stripe transitions, keyboard nav).
- Restructure routes into a P5-style flow: Home menu, About, Projects, Resume, Contact. Old routes get permanent redirects.
- Keep all real content in server-rendered HTML so crawlers see it; islands only enhance.
- Remove dead components and the Tailwind v3/v4 dependency mismatch.
- Add a test baseline (vitest for logic, Playwright smoke) and audit gates.

## Capabilities

### New Capabilities
- `p5-shell`: design tokens, shared layout, menu, stripe page transitions, keyboard navigation, reduced-motion and mobile behavior.
- `portfolio-pages`: About, Projects, Resume, Contact pages rendered from `src/data/info.ts`.
- `seo-preservation`: metadata, JSON-LD, sitemap, redirects, performance and accessibility budgets carried over from the current site.
- `asset-policy`: franchise fan assets isolated behind one manifest, optimized, audio opt-in, attribution footer.

### Modified Capabilities
None (no archived specs exist yet).

## Impact

- Code: `src/components/**`, `src/pages/**`, `src/layouts/Layout.astro`, `src/styles/global.css`, `package.json`, `tailwind.config.mjs`, `vercel.json`.
- Deploy: Vercel auto-deploy from `main`; work happens on `feature/p5-redesign`, merged via PR.
- Risk: SEO regression (mitigated by redirects + audit gate), a11y regression from heavy motion (mitigated by reduced-motion spec), content claims (see design.md, Open Items).
