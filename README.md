# florivula.com — Machine Portrait 001

A static, dated portrait of Flori Vula assembled from the AI systems he works
with. It replaces the previous developer portfolio, which is preserved on the
`portfolio-v1` branch.

## Status: not publishable yet

The central artifact — the exact Claude prompt and response — has not been
supplied, so `src/content/source.ts` is still empty and the page renders
"the machine's answer has not been supplied yet" where the portrait belongs.

Nothing here invents that content on purpose. A portrait whose whole premise is
"this is the exact machine response" stops being worth publishing the moment the
response is written for the layout.

**To publish:**

1. Paste the original prompt and the full Claude response into
   `src/content/source.ts`, without rewriting either.
2. Set `status` to `'verified-exact-source'`.
3. Map the sections and write the Codex second-read notes in
   `src/content/reading.ts`.
4. Run `npm run verify`, then merge to `main`.

Until step 1–3 are done, `scripts/guard-publish.mjs` fails the **production**
build so a merge cannot quietly put the empty shell on the live domain. Preview
deployments still build, so the shell can be reviewed as-is.

## Local development

Use Node `22.13.1`.

```powershell
fnm use 22.13.1
npm install
npm run dev
```

## Checks

```powershell
npm run lint
npm run typecheck
npm run build
npm run verify
```

`npm run verify` intentionally fails while the exact Claude source is absent.

## Deployment

Vercel, from this repository. `main` is production (florivula.com, proxied
through Cloudflare); every other branch gets a preview deployment.
`vercel.json` pins the Vite build so the framework switch from Next.js is
explicit rather than inherited from the dashboard preset.
