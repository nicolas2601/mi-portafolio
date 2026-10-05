## ADDED Requirements

### Requirement: Design tokens and shared frame
The site SHALL define Persona-5-inspired design tokens (red, black, white, one muted surface, display and body fonts) in a single stylesheet and SHALL render every page inside one shared frame component.

#### Scenario: Tokens are the single source
- WHEN a page is rendered
- THEN all colors and fonts resolve from the CSS variables defined in `src/styles/p5.css`
- AND no page hardcodes hex colors outside that file

### Requirement: Keyboard-navigable menu
The home menu SHALL expose five entries as real anchor links and SHALL support ArrowUp, ArrowDown and Enter navigation with the active entry visually highlighted.

#### Scenario: Arrow navigation clamps at the ends
- WHEN the first entry is active and ArrowUp is pressed
- THEN the first entry remains active

#### Scenario: Enter follows the active link
- WHEN an entry is active and Enter is pressed
- THEN the browser navigates to that entry's `href`

#### Scenario: Works without JavaScript
- WHEN JavaScript is disabled
- THEN every menu entry is still a working link to its page

### Requirement: Stripe page transitions
Navigation between pages SHALL play a skewed stripe overlay transition no longer than 600 ms.

#### Scenario: Normal motion
- WHEN the user navigates to another page and reduced motion is not requested
- THEN a stripe overlay covers and reveals the viewport in at most 600 ms

#### Scenario: Reduced motion
- WHEN `prefers-reduced-motion: reduce` is set
- THEN the transition is replaced by a fade of at most 150 ms and no stripes animate

### Requirement: Mobile behavior
The menu and pages SHALL be fully usable on a 375 px wide viewport using touch only.

#### Scenario: Touch navigation
- WHEN the viewport is 375 px wide
- THEN every menu entry has a tap target of at least 44 px and no horizontal scroll occurs
