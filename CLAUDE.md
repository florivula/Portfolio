# CLAUDE.md — florivula.com

Context for AI sessions working on this repository.

## What this is

**Machine Portraits** — Flori Vula's personal surface: *"Flori Vula, according to the
machines"*, a portrait written by the AI systems he works with, **retaken over time**.
Reading 001 (Claude Opus 5, 25 Jul 2026) and reading 002 (Claude Opus 5.5, 6 Oct 2026),
both from inside Airise's private company repository. It carries the Instagram-bio link
and is meant to be shareable on LinkedIn. The previous Next.js portfolio is on
`portfolio-v1`.

Deliberately: no CMS, no database, no runtime model call. Each reading is a dated capture;
the series is how the page stays current without going stale.

**Why a series (the 6 Oct 2026 rebuild).** Asked to "re-do it because some time has
passed", the honest move was a new capture, not a rewrite of the old one: 001's premise
is that it is exactly what a machine said, so it cannot be updated, only joined. The page
now leads with the newest reading and keeps every earlier one whole below it. The
distance between readings is part of the exhibit, which is what section 03 (the record,
measured at each capture) and the cover instrument (the record's daily changes, both
captures flagged) show.

## Stack

Vite + React + TypeScript, static output to `dist/`. Node `22.13.1`. Deployed on Vercel;
`main` is production (www.florivula.com; the apex 307s to www, proxied through Cloudflare),
other branches get preview deployments. `vercel.json` runs the publish guard before the
build.

## The content rule — read before touching content

- **Never invent, complete, paraphrase, or "improve" a prompt or response.** Each lives in
  `src/content/portrait-NNN.ts`. The prompt keeps its casing and typos.
- **Earlier readings are never edited.** 001's strings are byte-for-byte what was published
  on 25 Jul; only its wrapper changed in the series refactor.
- Layout lives apart from the source: `src/content/reading.ts` holds the series order and
  each reading's `hinge` / `quote` roles. Roles change typography only; every paragraph
  renders, in order. The content gate fails if a role index lands on a long paragraph.
- `src/content/record.ts` holds **counts only** from the private record (commits per day,
  files and words at each capture). Nothing from inside it is ever published here.
- Each reading's `Editing` condition ("None. Returned text, unchanged.") depends on the
  response being unedited. The "Nothing was softened" note belongs to 001 and sits with it.
- **A reading is the machine's own opinion of him, never his words.** Flori's rule, 6 Oct
  2026: a first draft of 002 quoted his private interview answers verbatim and he rejected
  it ("that page to be YOU ... opinions only and interesting"). So: no quoting him, no
  paraphrasing his private answers as fact, and page chrome speaks of him in the third
  person. The prompt block is the one place his words appear, as the provenance exhibit.
- 002 was written knowing it would be published, by a model that had read 001 and the
  brain. It names no clients, people or revenue, and nothing internal-only. Keep any future
  reading to the same standard: this repository and site are public.

`scripts/content-gate.mjs` defines "every reading has a real source". It backs
`npm run content:check` and `scripts/guard-publish.mjs`, which fails **production** builds
while the gate is red. Previews still build.

## Commands

```powershell
npm install
npm run dev        # vite, 127.0.0.1:5173
npm run verify     # content gate + gate tests + lint + typecheck + build
npm run og:generate  # renders scripts/og.html to public/og-image.png via headless Chrome
```

## Design

The Airise register on a personal subject: near-black `#0A0A0A`, off-white `#E6E7E8`, one
steel-blue accent `#8FB4D8`, hairlines; Satoshi for reading, JetBrains Mono for anything
measured, exactly one Instrument Serif italic moment (the title's "according to"). No
rounded corners, gradients, chat bubbles, fake terminals, emoji or typewriter effects.
External copy avoids em dashes. The Airise lockup does not appear; this is Flori's page.

## Conventions

- Frontend-only static site. No backend, auth, analytics, contact form, newsletter or
  "hire me" pitch.
- Keep private/company-internal material out of source, bundles, metadata and comments.
- Verify externally linked URLs before changing them.
