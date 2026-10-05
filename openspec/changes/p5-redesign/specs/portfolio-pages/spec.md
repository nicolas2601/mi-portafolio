## ADDED Requirements

### Requirement: Home states the value proposition
The home page SHALL show, without interaction, the owner's name, role, a one-line value proposition, and links to CV, GitHub and contact, in addition to the menu.

#### Scenario: Ten-second recruiter test
- WHEN a visitor loads `/` on desktop or mobile
- THEN name, role, availability and a CV link are visible in the first viewport

### Requirement: Content rendered from a single data source
About, Projects, Resume and Contact SHALL render their content from `src/data/info.ts` and SHALL NOT duplicate that data in components.

#### Scenario: Data change propagates
- WHEN a project title is edited in `src/data/info.ts`
- THEN the new title appears on `/projects` after rebuild with no other file edited

### Requirement: Projects page
The projects page SHALL list all projects, show featured projects first, and allow filtering by `projectCategories`.

#### Scenario: Filter by category
- WHEN the visitor selects the "Seguridad" category
- THEN only projects whose category is "Seguridad" are shown

#### Scenario: Project without a cover image
- WHEN a project has no `image`
- THEN a generated typographic cover is shown instead of a broken image

### Requirement: Resume page
The resume page SHALL show experience, education, certifications and skills, and SHALL offer the CV PDF for download.

#### Scenario: CV download
- WHEN the visitor activates the CV link
- THEN the browser requests an existing PDF under `/` that returns HTTP 200

### Requirement: Contact page
The contact page SHALL provide the existing validated contact form and direct links (email, LinkedIn, GitHub).

#### Scenario: Valid submission
- WHEN the visitor submits a valid form
- THEN they are redirected to `/gracias`
