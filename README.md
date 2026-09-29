# NEW Advisory Group — Website

A multi-page, content-driven Next.js website for NEW Advisory Group. Editorial, institutional design — no bento grids, no single-page scroll.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** — subtle scroll reveals only
- **next-mdx-remote** + **gray-matter** — for `/blog` and `/case-studies`, prepared but unpopulated
- **lucide-react** — icons

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Editing Content

**Almost everything on the site comes from one file:**

```
src/data/siteConfig.ts
```

- Add a client → add an entry to the `clients` array. It appears on `/experience` and the homepage automatically.
- Add an advisor → add an entry to the `team` array with a unique `slug`. A page is automatically generated at `/team/[slug]`, and they appear on `/team`.
- Add/edit a service → edit the `services` array (grouped by category: Strategic, Financial, Risk & Structure).
- Change the contact email → edit `contact.email`. It's used everywhere (footer, contact page, API route) — nowhere else.
- Edit About page copy → edit the `about` object.
- Edit Who We Serve / How We Work → edit `whoWeServe` / `howWeWork` arrays.

**You should not need to touch any file under `src/components/` or `src/app/` to update business content.**

## Long-Form Content (Blog / Case Studies)

Add `.mdx` files to:

```
src/content/blog/
src/content/case-studies/
```

with frontmatter like:

```md
---
title: Example Article
description: A short summary.
date: 2026-04-04
readTime: 6 min
tags: [Strategy, Finance]
slug: example-article
---

Your long-form content here.
```

The `/blog` and `/case-studies` index pages pick these up automatically — no code changes needed. Until files are added, both pages show a clean empty state.

## Hire Us Form → Email

The form on `/contact` posts to `src/app/api/contact/route.ts`.

- **Without any setup**, submissions are logged server-side (visible in your hosting provider's function logs) so nothing is lost during development.
- **To actually send emails**, sign up for [Resend](https://resend.com) (free tier is generous), get an API key, and set the environment variable:

```
RESEND_API_KEY=re_your_key_here
```

Once set, inquiries are emailed to whatever address is in `contact.email` in `siteConfig.ts`. You'll also want to verify a sending domain in Resend and update the `from` address in `route.ts` (currently uses Resend's shared test sender).

## Deployment

Built for Vercel:

```bash
npx vercel
```

Set `RESEND_API_KEY` as an environment variable in the Vercel project settings. Connect your domain (e.g. `NewAdvisory.Group`) under Project → Settings → Domains.

## Design System

- **Palette**: navy (`#1E2761`), ice blue (`#CADCFC`), warm off-white page background (`#F7F6F3`). Tokens live in `src/app/globals.css`.
- **Typography**: serif for headlines (`Georgia` stack — swap for a licensed serif like `Freight Text` or `Tiempos` when available), system sans for body copy.
- **No bento grids, no card-heavy homepage.** Sections use editorial layouts: numbered lists, horizontal rules, alternating two-column grids, large pull quotes.

## What's Intentionally Not Built 

Per the project brief, this does **not** include:
- A database or CMS
- An admin dashboard
- Complex state management

If Isaac needs to add content himself without a developer, the next step would be wiring `siteConfig.ts` and `src/content/` to a headless CMS (Sanity is a good fit) — the data shapes here are already structured so that migration would be straightforward.