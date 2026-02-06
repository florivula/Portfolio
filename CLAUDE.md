# CLAUDE.md - AI Assistant Guide

This file contains instructions and context for AI assistants (like Claude) working on this portfolio website.

## Project Overview

- **Type:** Personal portfolio website
- **Stack:** Next.js (static export), React, TypeScript, Tailwind CSS
- **Hosting:** Vercel
- **Repository:** florivula/Portfolio

## Development Workflow

1. Changes requested via WhatsApp
2. AI makes changes in local workspace
3. Commit and create pull request
4. Human reviews and approves PR
5. Changes deploy automatically to Vercel

## Project Structure

- `/app` - Next.js app directory (pages and components)
- `/public` - Static assets
- `*.jpg`, `*.svg`, `*.pdf` - Media files in root
- `out/` - Build output (static export)

## Guidelines

- This is a **frontend-only** static site
- Test changes locally before committing
- Keep commits focused and descriptive
- Create PRs for all changes (no direct pushes to main)

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server
npm run build        # Production build
npm run lint         # Run ESLint
```

---

*Last updated: 2026-02-06*
