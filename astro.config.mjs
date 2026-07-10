import { defineConfig } from 'astro/config';

// `site` = canonical origin (used for <link rel="canonical"> + Open Graph).
// `base` = the GitHub Pages project subpath for this preview deploy. Both the
// local root deploy and the real domain would just drop `base` (or set '/').
export default defineConfig({
  site: 'https://lenafilatova.co.uk',
  base: '/lenafilatova-astro-preview',
  trailingSlash: 'always',
});
