## Context

Current: Astro 5 (static prerender) + `@astrojs/react` islands + Tailwind 3 + framer-motion 12, deployed on Vercel. Pages: index, about, projects, services, contact, gracias, privacy-policy. Single data source: `src/data/info.ts`. SEO already tuned in `src/layouts/Layout.astro` (canonical, hreflang, OG, JSON-LD WebSite/Person).

Reference theme: Vite SPA, `react-router-dom`, framer-motion, plain CSS, 6 LFS videos, copyrighted art and audio.

## Decisions

### D1. Keep Astro; port mechanics as React islands (not clone the SPA)
- Chosen: Astro pages render real HTML; `P5Menu`, `StripeTransition`, keyboard handling are islands.
- Alternative A: clone the reference as a Vite SPA and swap content. Rejected: no SSR/prerender, loses SEO and link previews, and the site is a job-search asset.
- Alternative B: Astro with no islands. Rejected: loses the keyboard-driven menu and transitions that define the look.
- Cost: more integration work than a find-and-replace clone. Benefit: SEO and recruiter-readable content preserved.

### D2. Original assets only
- Characters, Joker art, `Persona5main.ttf`, music, videos are not copied. Identity comes from: skewed typography, clip-path shapes, halftone/duotone treatment of the owner's own photo (`/perfil1.jpg`), SVG stripes, animated CSS patterns.
- Fonts: OFL-licensed display face via `@fontsource` (candidate: Anton or Bebas Neue for display, Inter for body; keep `@fontsource/inter`). Verify license before adding.
- Audio: none in v1. If a select sound is wanted later, it must be original or CC0, off by default.
- Footer line: "Visual style inspired by Persona 5. Fan tribute, not affiliated with Atlus."

### D3. Content-first, motion as enhancement
- Home shows the P5 menu AND a visible one-line value proposition + CTA (CV, GitHub, contact) without requiring interaction. Menu items are real `<a href>` links so they work without JS and are crawlable.
- Every transition respects `prefers-reduced-motion` (replace stripes with a 120 ms fade).
- Mobile: menu is tap-first; keyboard nav is additive.

### D4. Routes
| New | Source | Notes |
|-----|--------|-------|
| `/` | menu + value prop | replaces Hero/Projects/TechStack/FinalCTA stack |
| `/about` | About.tsx content | bio, education, certifications |
| `/projects` | Projects.tsx | filter by `projectCategories`, featured first |
| `/resume` | ExperienceTimeline + skills | experience, skills, CV download |
| `/contact` | Contact.tsx | keep form + `/gracias` |
| `/services` | removed | 301 to `/` in `vercel.json` |

Cross-page transitions: Astro View Transitions (`<ClientRouter />`) with a stripe overlay island; fallback is a normal navigation.

### D5. Styling
- Remove `@tailwindcss/vite` (v4) because the project runs Tailwind 3 via `@astrojs/tailwind`; the two coexist today by accident. Stay on v3 for this change.
- P5 look lives in `src/styles/p5.css` (tokens as CSS variables + shape utilities). Tailwind used for layout only.
- Tokens: `--p5-red #d92323`, `--p5-black #0d0d0d`, `--p5-white #ffffff`, plus one muted surface. Contrast must pass WCAG AA for body text.

### D6. Testing (strict TDD per owner standards)
- vitest for pure logic: menu index reducer (clamp, wrap rules), keyboard handler mapping, data validators (no empty required fields, URLs well-formed).
- Playwright smoke: each route returns 200, has one `<h1>`, canonical present, menu keyboard flow works.
- Gates: `astro check` + `astro build` green; Lighthouse mobile perf >= 90, a11y >= 95, SEO >= 95; squirrelscan score >= 95 on the preview URL.

## Architecture sketch

```
Layout.astro (SEO head, ClientRouter, p5.css)
  |- <P5Frame/>            shared chrome: stripes, skewed title bar, footer attribution
  |- pages/*.astro         server-rendered content from src/data/info.ts
  |- islands (client:load / client:visible)
       P5Menu.tsx          skewed menu, <a> items, arrow/enter nav, active glow
       StripeTransition.tsx  overlay on astro:before-preparation / after-swap
       ProjectFilter.tsx   category chips
```

## Risks and pre-mortem ("it failed in one month, why?")
1. SEO dropped: redirects missed or metadata lost. Mitigation: seo-preservation spec + squirrel gate before merge; keep old canonical URLs for retained routes.
2. Looks like a copy of the reference: too-literal layout. Mitigation: original shapes and own photo treatment; review against the reference side by side.
3. Motion hurts LCP/INP on low-end phones. Mitigation: CSS transforms only, no video, budgets enforced.
4. Hiring managers cannot find info in 10 seconds. Mitigation: D3 value prop + visible CTAs on `/`.
5. Rollback: all work on `feature/p5-redesign`; Vercel preview per push; `main` untouched until PR merge.

## Open Items (owner decision, not blocking UI work)
- `workExperience` lists "Accasoft ERP". Owner memory marks it as prohibited in CVs. Decide: keep, rename, or remove on the portfolio. Do not change data until confirmed.
- Unverified claims in `info.ts` and `Layout.astro`: "Ganador regional Hackathon Colombia 5.0", metrics (100+ devices, <100ms, ~80%). Confirm or soften; data stays as-is until then.
- Real screenshots exist for only 3 projects (`iot.png`, `lsc-app.png`, `reservas-dashboard.png`); others need generated or captured covers.
