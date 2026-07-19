# Handover — old-page redirects (cloud session, 19 Jul 2026)

Branch: `claude/lenafilatova-redirects-astro-8hvpaf` (created for this work;
**no redirect commits yet** apart from this note — the task is at square one).

This cloud session had no access to mempalace (isolated container, no local
MCP servers), so this note is the memory. Repo facts below were verified
directly from the working tree and git history.

## Current redirect state (what already exists on `main`)

The ONLY old→new redirects live in `astro.config.mjs` (`TOOL_REDIRECTS`),
added at cutover for the four standalone tools:

- `/resources/aid-comparison` → `/aid-comparison.html`
- `/resources/cgm-comparison` → `/cgm-comparison.html`
- `/resources/blood-sugar-investigator` → `/blood-sugar-investigator.html`
- `/resources/carb-gi-table` → `/carb-gi-table.html`
- …plus the four `/ua/resources/...` → `/...-ua.html` variants.

Nothing else: no `_redirects`-style map, no redirect logic in a 404 page,
no legacy-URL handling beyond the fact that most old paths (`/about/`,
`/blog/<slug>/`, `/recipes/<slug>/`, legal pages) are served at the same
paths by the Astro site anyway.

## Known gaps / notes for the local session

- Old SPA hash routes (`/#/blog`, `/#/about`, …) can't be redirected
  server-side (fragments never reach the server). CUTOVER.md's position:
  the real pages at the same paths cover them. If mempalace says otherwise,
  a tiny hash-router shim in `BaseLayout` would be the fix.
- The full list of old Divhunt-era URLs is recoverable from git history
  (the deleted `*/index.html` tree pre-Astro) and from the old
  `sitemap.xml` (deleted, in history at commit `9538559^` and earlier).

## Open questions (unanswered in this session)

1. **`.com` vs `.co.uk`**: the request said "old pages from
   lenafilatova.com", but the live domain is lenafilatova.co.uk. If a
   separate `.com` domain exists and should forward, that's DNS/hosting
   (e.g. Namecheap domain forwarding or a second Pages repo), not this
   repo's Astro config. Unconfirmed — check mempalace / with Lena.
2. Whatever redirect mapping/progress was recorded in mempalace from the
   earlier sessions — not visible from the cloud; reconcile it with the
   "current state" section above.

## Suggested next steps

1. Pull this branch locally; open mempalace records for the redirect task.
2. Decide the `.com` question (item 1 above).
3. Build the old→new URL map (git history + old sitemap.xml) and add any
   genuinely-moved URLs to `TOOL_REDIRECTS`-style entries in
   `astro.config.mjs`; leave same-path URLs alone.
4. Keep using this `memory/` folder for cross-session state — cloud
   sessions can't see mempalace, but they can always see the repo.
