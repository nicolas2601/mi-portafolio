## ADDED Requirements

### Requirement: Franchise assets are isolated and replaceable
Third-party Persona 5 fan assets (character art, icons, fan font, sound effects, music) SHALL live only under `src/assets/p5/`, `public/fonts/` and `public/audio/`, SHALL be referenced through a single manifest module, and SHALL be replaceable without editing page components.

#### Scenario: Single manifest
- WHEN a franchise image is used by a page or component
- THEN it is imported from `src/lib/p5-assets.ts` and not by a direct file path elsewhere

#### Scenario: Swap without touching pages
- WHEN a file listed in the manifest is replaced by an original image of the same name
- THEN the site builds and renders with no page component edited

### Requirement: Optimized delivery
Raster assets SHALL be served as WebP at most 1600 px on the long side, and no video SHALL be shipped.

#### Scenario: No video files
- WHEN the repository is scanned
- THEN no `.mp4`, `.webm` or `.mov` file exists under `src/` or `public/`

#### Scenario: Per-image weight
- WHEN the production build is inspected
- THEN no single image asset exceeds 400 KB

### Requirement: Audio is opt-in
Background music and sound effects SHALL be off by default, SHALL NOT preload, and SHALL start only after an explicit user action.

#### Scenario: Silent first load
- WHEN a first-time visitor loads any page
- THEN no audio request is issued and no sound plays

### Requirement: Attribution footer
The shared frame SHALL include a footer line crediting the visual inspiration without implying affiliation.

#### Scenario: Footer on every page
- WHEN any page is rendered
- THEN the footer states the style is inspired by Persona 5 and not affiliated with Atlus
