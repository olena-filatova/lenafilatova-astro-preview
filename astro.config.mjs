import { defineConfig } from 'astro/config';

// `site` = canonical origin (used for <link rel="canonical"> + Open Graph).
// `base` = the GitHub Pages project subpath for this preview deploy. Both the
// local root deploy and the real domain would just drop `base` (or set '/').
// Live at the real domain since the 2026-07-13 cutover — everything
// (redirect targets, noindex, asset paths) follows from BASE.
const BASE = '/';
const withBase = (p) => (BASE === '/' ? p : BASE + p);

// Legacy live-site URLs for the carried-over standalone tools, which live
// here as flat .html files. Keeps old inbound links working after cutover.
const TOOL_REDIRECTS = Object.fromEntries(
  ['aid-comparison', 'cgm-comparison', 'blood-sugar-investigator', 'carb-gi-table'].flatMap((t) => [
    [`/resources/${t}`, withBase(`/${t}.html`)],
    [`/ua/resources/${t}`, withBase(`/${t}-ua.html`)],
  ])
);

// Recipes removed from PUBLISHED (OPS-118 hidden-slug batch) that still 404
// while earning Search Console impressions (OPS-161). 301 the residual search
// interest to the closest surviving destination rather than let it hit a dead
// end. Their near-equivalents were hidden in the same batch, so there is no
// like-for-like recipe to point at — send them to the /recipes/ hub. We do NOT
// use a `?cat=` category URL: the hub's filter is chip-click only and ignores
// URL query params, so `?cat=snack` would land on the unfiltered hub anyway.
// 410 was rejected — these have real residual interest worth recovering, and a
// static host can't cleanly serve 410. Both EN and UA pages 404 (both build
// from PUBLISHED), so redirect both locales.
const REMOVED_RECIPE_REDIRECTS = Object.fromEntries(
  ['granola-bars-peanut-butter', 'granola-bars-date-coconut', 'masala-chai-latte'].flatMap((slug) => [
    [`/recipes/${slug}/`, withBase('/recipes/')],
    [`/ua/recipes/${slug}/`, withBase('/ua/recipes/')],
  ])
);

export default defineConfig({
  site: 'https://lenafilatova.co.uk',
  base: BASE,
  trailingSlash: 'always',
  redirects: { ...TOOL_REDIRECTS, ...REMOVED_RECIPE_REDIRECTS },
});
