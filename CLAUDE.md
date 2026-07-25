# CLAUDE.md — florivula.com

Context for AI sessions working on this repository.

## What this is

**Machine Portrait 001** — Flori Vula's personal surface. A static, dated artifact:
*"Flori Vula, according to the machines"*, a portrait assembled from the AI systems he
works with. It replaces the previous Next.js developer portfolio (preserved on the
`portfolio-v1` branch). It carries the single Instagram-bio link and is meant to be
shareable on LinkedIn.

Deliberately: no CMS, no database, no runtime model call, no ongoing maintenance. A
portrait captured at one moment, so it becomes an artifact rather than going stale.

## Stack

Vite + React + TypeScript, static output to `dist/`. Node `22.13.1`. Deployed on Vercel;
`main` is production (florivula.com, proxied through Cloudflare), other branches get
preview deployments. `vercel.json` pins the Vite build explicitly.

## The content rule — read before touching content

The exact Claude prompt and response are the central artifact.

- **Never invent, complete, paraphrase, or "improve" them.** The page's premise is that
  this is exactly what a machine said. Writing that content for the layout destroys the
  only thing the page is.
- Exact strings live in `src/content/source.ts`. Layout annotations live separately in
  `src/content/reading.ts` so the source is never edited to fit a design.
- Redactions must stay visibly marked rather than silently applied.
- `Codex's second read` is a distinct authorship claim. Do not write those annotations as
  another model.

`scripts/content-gate.mjs` defines "the source has been supplied". It backs both
`npm run content:check` and `scripts/guard-publish.mjs`, which fails **production** builds
while the gate is red so an empty portrait cannot reach the live domain. Previews still build.

## Commands

```powershell
npm install
npm run dev        # vite, 127.0.0.1:5173
npm run lint
npm run typecheck
npm run build
npm run verify     # content gate + lint + typecheck + build
npm run og:generate
```

## Conventions

- Frontend-only static site. No backend, auth, or analytics.
- Keep private/company-internal material out of source, bundles, metadata, and comments —
  this repository is public.
- Do not add a contact form, newsletter, availability badge, or "hire me" pitch.
- Visual register: editorial research dossier crossed with a small museum exhibit. No AI
  gradients, chat bubbles, fake terminals, emoji, skill bars, or typewriter effects.
- Verify externally linked URLs before changing them.
