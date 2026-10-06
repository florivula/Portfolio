# florivula.com — Machine Portraits

A dated, retaken portrait of Flori Vula, written by the AI systems he works
with. Each reading is a real prompt and the model's unedited response. The
newest reading is the page; earlier readings stay below it, whole.

| Reading | Model | Captured |
|---|---|---|
| 002 | Claude Opus 5.5 | 6 October 2026 |
| 001 | Claude Opus 5 | 25 July 2026 |

The previous developer portfolio is preserved on the `portfolio-v1` branch.

## Adding a reading

1. Add `src/content/portrait-NNN.ts` with the exact prompt and response, never
   rewritten, and `status: 'verified-exact-source'`.
2. Put it first in `portraits` in `src/content/reading.ts` and map its hinge and
   quote paragraphs there. Earlier readings are not edited.
3. Add its snapshot of the record to `src/content/record.ts`.
4. `npm run og:generate`, then `npm run verify`, then merge to `main`.

`scripts/guard-publish.mjs` fails the **production** build if any reading in
the series lacks its source, or a role index lands on a long paragraph.

## Local development

Use Node `22.13.1`.

```powershell
fnm use 22.13.1
npm install
npm run dev
```

## Checks

```powershell
npm run verify     # content gate + gate tests + lint + typecheck + build
```

## Deployment

Vercel, from this repository. `main` is production (florivula.com, proxied
through Cloudflare); every other branch gets a preview deployment.
