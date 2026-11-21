# Rawafed Al Nile Website Plan

## Objective

Turn the current single-file landing page into a maintainable, bilingual static website without changing the intended visual identity or business content unless explicitly approved.

## Current baseline

- One main `index.html` page.
- Inline CSS and JavaScript.
- English and Arabic content duplicated inside the markup.
- One embedded logo image.
- Eleven visual placeholders awaiting real imagery.
- Language switching, header scroll styling, and an automatic two-slide hero carousel.
- No build process, tests, documentation, CMS, or content model.

## Guiding rules

- Preserve the current page as the baseline before restructuring.
- Make one logical change per commit.
- Keep business facts, addresses, names, registration numbers, and translations unchanged unless approved.
- Use real, licensed, optimized image assets only.
- Keep the first implementation lightweight; avoid adding a large framework without a clear need.
- Test both English and Arabic after every structural change.

## Phase 0 — Repository and baseline

- [ ] Create the Git repository.
- [ ] Commit the untouched original HTML as the baseline.
- [x] Add a short README with local preview instructions.
- [ ] Record the current page sections, content, and known placeholders.

## Phase 1 — Separate the code safely

- [x] Extract inline CSS into `css/styles.css`.
- [x] Extract inline JavaScript into `js/site.js`.
- [x] Move the embedded logo into `assets/`.
- [ ] Keep the page visually identical during this phase.
- [ ] Remove unused CSS only after confirming it has no visual dependency.

Suggested structure:

```text
index.html
css/styles.css
js/site.js
assets/logo.jpg
assets/hero/
assets/sectors/
assets/project/
content/
README.md
```

## Phase 2 — Establish content ownership

- [x] Decide which content is expected to change regularly: navigation and site metadata are data-driven; business copy remains owner-approved page content for now.
- [x] Move bilingual copy into clearly named content files or data objects for navigation and site metadata.
- [x] Create one source of truth for navigation labels and site metadata in `content/site-content.js`.
- [x] Add a translation checklist so English and Arabic cannot silently diverge.
- [ ] Confirm all company facts and contact details with the owner.

## Phase 3 — Replace visual placeholders

- [ ] Collect approved images for the hero slides.
- [ ] Collect the about image.
- [x] Remove unnecessary sector image placeholders; keep sector labels text-only for now.
- [ ] Collect three project gallery images.
- [ ] Confirm usage rights and ownership for every image.
- [ ] Resize and compress images for web delivery.
- [ ] Add meaningful alternative text and captions where appropriate.
- [ ] Use responsive image sizing and lazy loading for below-the-fold images.

## Phase 4 — Mobile and accessibility

- [x] Add a keyboard-accessible mobile navigation menu.
- [x] Replace carousel `<i>` indicators with accessible buttons.
- [x] Add carousel labels, pause/resume behavior, and keyboard support.
- [x] Respect `prefers-reduced-motion`.
- [x] Apply the UI/UX Pro Max review: Swiss/corporate direction, skip link, visible focus, and touch-sized controls.
- [x] Check heading hierarchy, focus states, contrast, and link/button semantics.
- [x] Ensure Arabic direction and alignment work correctly at mobile widths.
- [ ] Test with keyboard navigation and a screen reader.

## Phase 5 — SEO and contact conversion

- [x] Add a useful meta description.
- [x] Add canonical, Open Graph, and social preview metadata.
- [x] Add a favicon and appropriate site identity metadata.
- [x] Keep English and Arabic on one page for the current release; revisit separate URLs after search-performance data.
- [x] Add structured organization and location data using approved site contact details.
- [x] Add direct telephone and email actions, plus office map links. WhatsApp is intentionally excluded.
- [ ] Decide whether a real contact form is required; if so, define its backend and spam protection before implementation.

## Phase 6 — Quality checks

- [ ] Test at desktop, tablet, and mobile widths.
- [ ] Test English and Arabic after refresh and on a new browser session.
- [x] Test direct navigation to every section anchor at the markup level.
- [ ] Test the hero carousel manually and after the browser tab is inactive.
- [ ] Validate HTML and check the browser console for errors.
- [ ] Check image loading, font fallback, and offline behavior.
- [ ] Run a basic Lighthouse audit for performance, accessibility, SEO, and best practices.
- [ ] Check that no sensitive or unapproved business information is exposed.

## Phase 7 — Publishing and ongoing maintenance

- [ ] Choose hosting and connect the repository.
- [x] Add a simple GitHub Pages deployment workflow.
- [ ] Add a preview environment for review before production.
- [ ] Document how to update copy, translations, people, contact details, and images.
- [ ] Establish who approves content and how updates are recorded.
- [ ] Keep a changelog for business-critical changes.

## Recommended implementation order

1. Repository and untouched baseline.
2. Safe CSS/JS/asset separation.
3. Content and translation organization.
4. Mobile and accessibility improvements.
5. SEO and contact improvements.
6. Validation, deployment, and documentation.
7. Approved image replacement as the final visual phase.

## Definition of done

- The website can be maintained without editing one giant HTML file.
- Text, translations, images, and behavior have clear ownership.
- English and Arabic work consistently on desktop and mobile.
- All visible imagery is approved, optimized, and accessible.
- The site has repeatable preview and deployment instructions.
- Future updates can be reviewed and reverted through Git.
