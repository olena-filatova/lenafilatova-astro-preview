import { defineConfig } from 'astro/config';

// `site` = canonical origin (used for <link rel="canonical"> + Open Graph).
// `base` = the GitHub Pages project subpath for this preview deploy. Both the
// local root deploy and the real domain would just drop `base` (or set '/').
// At cutover set BASE = '/' — everything else (redirect targets, noindex,
// asset paths) follows from it.
const BASE = '/lenafilatova-astro-preview';
const withBase = (p) => (BASE === '/' ? p : BASE + p);

// Legacy live-site URLs for the carried-over standalone tools, which live
// here as flat .html files. Keeps old inbound links working after cutover.
const TOOL_REDIRECTS = Object.fromEntries(
  ['aid-comparison', 'cgm-comparison', 'blood-sugar-investigator', 'carb-gi-table'].flatMap((t) => [
    [`/resources/${t}`, withBase(`/${t}.html`)],
    [`/ua/resources/${t}`, withBase(`/${t}-ua.html`)],
  ])
);

export default defineConfig({
  site: 'https://lenafilatova.co.uk',
  base: BASE,
  trailingSlash: 'always',
  redirects: TOOL_REDIRECTS,
});
