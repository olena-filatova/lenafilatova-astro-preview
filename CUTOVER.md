# Cutover runbook — lenafilatova.co.uk → this Astro site

Everything is migrated and verified on the preview
(https://olena-filatova.github.io/lenafilatova-astro-preview/).
This is the step-by-step for switching the real domain. **Nothing here has
been executed** — it's Lena's call when.

## Content freeze first

Any blog post / recipe / copy change made to the OLD repo
(`olena-filatova/lenafilatova-website`) after 13 July 2026 must be re-added
here (blog lives in `src/data/blog.js`, recipes in `src/data/recipes.js`).
Easiest: freeze the old repo once you decide to switch.

## The switch (≈15 minutes)

1. **This repo:** in `astro.config.mjs` set `const BASE = '/'`.
   Everything follows from it: URLs, redirect targets, and the preview-only
   `noindex` meta (it disappears automatically when BASE is `/`).
2. **Add the domain file:** create `public/CNAME` containing exactly
   `lenafilatova.co.uk` (one line). Commit + push both changes.
3. **Old repo:** Settings → Pages → remove the custom domain
   (`lenafilatova.co.uk`). This frees the domain for the new repo.
4. **This repo:** Settings → Pages → set custom domain `lenafilatova.co.uk`,
   tick "Enforce HTTPS" once the certificate is issued (can take ~15 min).
5. **DNS at Namecheap: no changes needed** — the apex A records and the
   `www` CNAME already point at GitHub Pages; GitHub routes the domain to
   whichever repo claims it via CNAME.

## Verify (same hour)

- https://lenafilatova.co.uk/ loads the Astro home page (hard-refresh; CDN
  may cache the old site a few minutes).
- Spot-check: `/blog/` (+ a category filter), one recipe, `/resources/`
  + one calculator, `/ua/`, `/about`, one legal page.
- `view-source:` on any page — the `noindex` meta must be GONE.
- `/sitemap.xml` and `/robots.txt` respond.
- `/resources/aid-comparison` redirects to the AID comparison tool.
- Cookie banner appears in a private window; Accept loads GA
  (check Realtime in GA4 — property `G-0F8T9VQFQ0`).

## Search Console (same day)

- Property is already verified and the sitemap is already submitted as
  `sitemap.xml` — same filename this site serves, so nothing to resubmit.
  Optionally: URL Inspection → request indexing for `/` and `/blog/`.
- Over the following weeks watch Coverage for the old SPA-hash URLs
  (`/#/…`) dropping out — that's expected and harmless.

## Rollback (if anything looks wrong)

Reverse steps 3–4: remove the custom domain from this repo, re-add it to
the old repo. The old site is untouched and comes straight back.

## Known intentional differences vs the old site

- **Shop stays hidden**: not in nav, not in sitemap, `noindex` — the
  `/shop/` URL shows a no-prices "coming soon" page (nothing on sale yet).
- Blog index has **category filters** (new), and posts/pages now ship
  hreflang alternates everywhere (the old site only had them on blog posts).
- The two SPA-only articles (perimenopause & T1D, reading-glucose-patterns)
  now have real URLs: `/blog/perimenopause-diabetes-blood-sugar/` etc.
- Old SPA hash-routes (`/#/blog`, `/#/about`…) don't exist as such;
  the server pages at the same paths cover them.
- The Divhunt runtime (`support.js`, React vendor bundle, `<x-dc>` wrappers)
  is gone — pages are static HTML.
