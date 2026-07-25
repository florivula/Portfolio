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

The exact prompt and response are the central artifact.

**The capture (25 July 2026).** The source is a real exchange: Flori's prompt, answered by
**Claude Opus 5 running as Claude Code inside Airise's private company repository**, reading
the internal files it had access to. That provenance is stated on the page in the source
conditions strip, and it is the reason the page works. A chatbot handed a bio would be a
weaker exhibit than the machine that does the work describing its operator.

- **Never invent, complete, paraphrase, or "improve" the strings.** The page's premise is
  that this is exactly what a machine said. Writing that content for the layout destroys
  the only thing the page is.
- **The prompt keeps its original casing and typos.** It is the exhibit, not a caption.
- Exact strings live in `src/content/source.ts`. Layout annotations live separately in
  `src/content/reading.ts` so the source is never edited to fit a design. Dropping a
  paragraph from the designed view or promoting one to a pull quote is a layout decision;
  the raw response mode always shows every paragraph in order.
- Redactions must stay visibly marked rather than silently applied.
- `Codex's second read` is a distinct authorship claim. Do not write those annotations as
  another model. `secondReadNotes` is empty for that reason, and the tab hides itself until
  it is not.
- **Two claims on the page depend on the response being unedited:** the `Editing` condition
  ("None. Returned text, unchanged.") and section 03 ("Nothing was softened."). Edit the
  response and both have to change or come out.

`scripts/content-gate.mjs` defines "the portrait has a real source" — status, prompt,
response, mapped sections. It backs both `npm run content:check` and
`scripts/guard-publish.mjs`, which fails **production** builds while the gate is red so an
empty portrait cannot reach the live domain. Previews still build. Missing Codex notes are
reported as a non-blocking note, not a failure: they make the page incomplete, not empty.

The guard is currently **unwired** from `vercel.json` (it was removed to ship the shell on
25 July 2026). Re-arming it is one line: `"buildCommand": "node scripts/guard-publish.mjs && npm run build"`.

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
