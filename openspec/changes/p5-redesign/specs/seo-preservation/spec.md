## ADDED Requirements

### Requirement: Crawlable server-rendered content
Every page SHALL ship its primary content in the prerendered HTML, with exactly one `<h1>`, a canonical URL, title, description and Open Graph tags.

#### Scenario: Content present without JavaScript
- WHEN a page's HTML is fetched without executing scripts
- THEN the h1 and the main body text are present in the response

### Requirement: Structured data retained
The site SHALL keep the existing WebSite and Person JSON-LD blocks.

#### Scenario: JSON-LD valid
- WHEN `/` is fetched
- THEN it contains valid `application/ld+json` for `WebSite` and `Person`

### Requirement: Removed routes redirect permanently
Routes removed by this change SHALL return a 301 to their replacement.

#### Scenario: Services redirect
- WHEN a client requests `/services`
- THEN the response is a 301 to `/`

### Requirement: Quality budgets
The preview deployment SHALL meet: Lighthouse mobile performance >= 90, accessibility >= 95, SEO >= 95, and squirrelscan overall score >= 95 with full coverage.

#### Scenario: Gate before merge
- WHEN the pull request is ready for review
- THEN the recorded Lighthouse and squirrelscan results meet every budget
