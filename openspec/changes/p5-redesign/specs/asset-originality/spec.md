## ADDED Requirements

### Requirement: No third-party copyrighted assets
The repository SHALL NOT contain images, video, audio or fonts copied from the Persona 5 franchise or from the reference theme repository.

#### Scenario: Forbidden files absent
- WHEN the repository is scanned
- THEN no file named like `Persona5main.ttf`, `jokerlanding*`, `jokerfail*`, `P5S_*`, `P5MM*` or `main1.mp4` exists

### Requirement: Licensed fonts only
Every font used SHALL be under an open license (for example SIL OFL) and installed through a package.

#### Scenario: Font license recorded
- WHEN a new font package is added
- THEN its license is noted in the pull request description

### Requirement: Attribution footer
The shared frame SHALL include a footer line crediting the visual inspiration without implying affiliation.

#### Scenario: Footer on every page
- WHEN any page is rendered
- THEN the footer text states the style is inspired by Persona 5 and not affiliated with Atlus
