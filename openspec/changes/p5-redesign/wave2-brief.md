# Wave 2 shared brief

Read this first, then `proposal.md`, `design.md`, `specs/*/spec.md`, `tasks.md`. Specs win over this brief if they conflict.

## Goal

Build the Persona-5-styled pages of the portfolio on top of the Wave 1 foundation. Five agents work in parallel, each in its own git worktree and branch, on DISJOINT files. A coordinator merges the branches afterwards.

## Ownership matrix (edit ONLY your own files)

| Agent | Branch | Owns |
|-------|--------|------|
| shell | wave2/shell | `src/styles/p5.css`, `src/layouts/Layout.astro` (body only, never the SEO head), `src/components/P5Frame.astro`, `P5Menu.tsx`, `StripeTransition.tsx`, new `P5Background.astro`, new `BackgroundMusic.tsx`, `src/lib/menu.ts`, `tests/unit/menu.test.ts`, `public/` |
| home | wave2/home | `src/pages/index.astro`, `src/components/home/**`, `src/styles/home.css` |
| about | wave2/about | `src/pages/about.astro`, `src/components/about/**`, `src/styles/about.css` |
| projects | wave2/projects | `src/pages/projects.astro`, `src/components/projects/**`, `src/lib/projects.ts`, `tests/unit/projects.test.ts`, `src/styles/projects.css` |
| resume-contact | wave2/resume-contact | `src/pages/resume.astro`, `contact.astro`, `gracias.astro`, `src/components/resume/**`, `src/components/contact/**`, `src/components/Contact.tsx`, `src/styles/resume.css`, `src/styles/contact.css` |

Never edit: `src/data/info.ts`, `package.json`, lockfiles, `astro.config.mjs`, `vercel.json`, the SEO head of `Layout.astro`, another agent's files. If you need a dependency or a shared change, do not make it: describe it in your report. Page-specific styles go in your own CSS file imported by your page, using only the CSS variables from `p5.css` (`--p5-red`, `--p5-black`, `--p5-white`, `--p5-surface`, `--p5-font-display`, `--p5-font-body`). Do not hardcode hex colors.

## Design language (reference: /tmp/p5, read-only, mechanics only)

Read `/tmp/p5/src/P5Menu.jsx`, `PageTransition.jsx`, `AboutMe.jsx`, `ResumePage.jsx`, `SideProjectsPage.jsx`, `Socials.jsx`, `App.css` for the feel, and re-implement in your own code (do not copy files, do not import from /tmp/p5).

- Palette: red `#d92323`, black `#0d0d0d`, white. One surface tone. High contrast. Red is the loud color; use it with intent, not everywhere.
- Shapes: skewed blocks (`skewX(-6deg..-12deg)`), clip-path polygons with torn/angled edges, diagonal stripes, a thin white vertical stripe on the right edge, halftone dots, drop shadows in solid black or red offsets (no soft blurry glow except the active-item white glow).
- Type: display font in uppercase for titles, varied sizes per element, slight rotation/skew, text with solid offset shadow. Body in Inter, 65-75ch max line length.
- Layout: break symmetry, overlap elements, angled section edges. No three-equal-cards feature rows, no centered-everything, no nested cards, no gradient text, no side-stripe borders.
- Motion: CSS transforms and opacity only, ease-out exponential curves, staggered entry, each effect under 600 ms. Everything must have a `prefers-reduced-motion` fallback (no movement, short fade). No video. No layout-property animation.
- Assets: franchise images come ONLY from `src/lib/p5-assets.ts` (`import { p5Assets } from "../../lib/p5-assets"`), rendered with Astro `<Image>` or `<img>` using `.src/.width/.height`, always with meaningful `alt` (decorative: `alt=""` and `aria-hidden`). Lazy-load below the fold. Do not import from `src/assets/p5` directly. Do not use any asset from `/tmp/p5`.
- Fan font `/fonts/Persona5main.ttf` is for big titles only; the shell agent registers it as `--p5-font-fan` via `@font-face`. Fall back to `--p5-font-display`.

## Copy rules

- Page content (bio, experience, project text) comes from `src/data/info.ts` as-is (Spanish). UI chrome labels (menu, buttons, section titles) are English, short and plain.
- No em dashes. No marketing clichés ("seamless", "elevate", "unleash", "game-changer"). No exclamation marks in system messages. No invented numbers or claims: use only what `info.ts` states.

## Quality rules (apply to every page)

- Exactly one `<h1>`, correct heading order, semantic landmarks, visible focus ring on every interactive element, tap targets >= 44 px, no horizontal scroll at 375 px, text contrast >= 4.5:1.
- Pass a unique `title` (<= 60 chars) and `description` (120-160 chars) to `Layout`. Do not touch the canonical/OG/JSON-LD code. Primary content must be in the prerendered HTML (islands only enhance). Menu/nav items are real `<a href>`.
- Files <= 300 lines, functions < 25 lines, early returns, no dead code, no magic numbers, no commented-out code.
- Strict TDD for any pure logic (filters, mappers, validators): failing vitest first (show RED), then GREEN, then refactor; one commit per cycle. Pure presentational Astro/React markup needs no unit test but must build.
- Conventional commits, small and atomic, NO Co-Authored-By or any AI attribution.

## Environment

- Your worktree is your `cwd`. `node_modules` is symlinked from the main checkout; if a command fails because of that, run `npm install --no-audit --no-fund` inside the worktree.
- Gates before you report: `npx astro check` 0 errors, `npm run build` succeeds, `npm test` green (it must still pass if you did not add tests). Show real output.
- Do not push. Do not switch branches. Do not touch the main checkout or other worktrees.

## Report format

1. `git log --oneline` of your branch relative to its base.
2. Files created/changed.
3. Gate outputs.
4. Requests for shared changes you could not make (exact diff suggestions).
5. Deviations from the specs, each with a reason.

Do not ask questions; choose the safest reversible option and report it.
