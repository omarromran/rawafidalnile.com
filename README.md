# Rawafed Al Nile

Static bilingual landing page for Rawafed Al Nile for Investment and Development.

## Local preview

Open `index.html` in a browser, or use a VS Code-compatible live preview extension. Keep the project root as the preview server root so `css/`, `js/`, `content/`, and `assets/` resolve correctly.

## Cloudflare Pages deployment

The site deploys from `main` using Cloudflare Pages. The GitHub repository needs these Actions secrets: `CLOUDFLARE_API_TOKEN` with Pages edit permission and `CLOUDFLARE_ACCOUNT_ID`. The Cloudflare Pages project name is `rawafidalnile-com`. Attach `rawafedalnile.com` under Cloudflare Pages → Custom domains after the first successful deployment.

## Project structure

- `index.html` — page structure and bilingual business content.
- `css/styles.css` — layout, typography, responsive styles, and accessibility states.
- `js/site.js` — language switching, navigation, and carousel behavior.
- `content/site-content.js` — shared navigation and site metadata.
- `assets/rawafed-logo.webp` — supplied high-resolution logo displayed as the clickable header link and social preview image.

The remaining photo blocks are intentional placeholders until approved image assets are supplied.
