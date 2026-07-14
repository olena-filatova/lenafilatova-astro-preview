# Project notes — lenafilatova.co.uk (repo: `olena-filatova/lenafilatova-website`)

Renamed from `lenafilatova-astro-preview` on 14 Jul 2026 — old links redirect.

**This is the LIVE site** for `lenafilatova.co.uk` since the 13 Jul 2026 cutover
(see `CUTOVER.md`). It is an Astro rebuild of the old Divhunt site. The old Divhunt repo,
`olena-filatova/lenafilatova-website-old`, is **retired** — do not ship fixes there;
its deploys no longer reach visitors. Content added there after 13 Jul 2026 must
be re-added here (`src/data/blog.js`, `src/data/recipes.js`).

- **Hosting:** GitHub Pages via `.github/workflows/deploy.yml` (builds on push to
  `main`). Custom domain comes from `public/CNAME` + the repo's Pages settings.
  **Never delete `public/CNAME` or unset the custom domain** — the site silently
  falls back to the github.io URL while the domain serves nothing/stale content.
- The DNS TXT record `_github-pages-challenge-olena-filatova` at Namecheap keeps
  the domain verified for this GitHub account — never remove it.
- **Structure:** pages in `src/pages` (+ `ua/` mirrors), shared components in
  `src/components`, content data in `src/data`. Standalone interactive tools
  (carb/GI table, CGM comparison, AID comparison, blood sugar investigator — EN
  and `-ua` variants) are self-contained HTML files in `public/`, served at
  `/carb-gi-table` etc. (GitHub Pages resolves extensionless URLs to `.html`).
- **Tables & Safari:** all wide tables use `border-collapse: separate` with a
  sticky first column — Safari cannot stick cells in a collapsed table. Keep that
  pattern when adding tables.
- **Cookie banner** (`src/components/CookieConsent.astro` + `public/cookie-consent.js`):
  shares `localStorage.lf_cookie` with the old site; GA4 (`G-0F8T9VQFQ0`) loads
  only after acceptance. `.cookie-bar[hidden]{display:none}` must stay — the
  flex display otherwise overrides the `hidden` attribute.
- The embedded calculators are a separate app (repo `olena-filatova/helsico`,
  served at `calculator.lenafilatova.co.uk`), mounted via widget scripts —
  see `src/data/calculators.js`.

## Working branches
Each Claude session works on its own `claude/*` branch; changes land on `main`
via squash-merged PRs. Deploys run automatically on merge.
