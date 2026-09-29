# House of Marka — houseofmarka.com

The corporate website for **Marka Modern Retail Private Limited**, trading as House of
Marka: an applied-AI and product-engineering studio working with merchants and enterprises
across the US, UK and Europe.

**Live:** https://houseofmarka.com

A static Next.js site — no server, no database, no runtime cost. It builds to plain HTML
and is served from Azure Static Web Apps behind a global CDN.

---

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, `output: 'export'`) |
| UI | React 19 · Tailwind CSS 3 |
| Motion | Framer Motion · Lenis smooth scroll |
| 3D | Three.js via React Three Fiber + drei |
| Content | Markdown (`gray-matter` + `marked`) |
| Hosting | Azure Static Web Apps (Free tier) |

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export into ./out
```

Serve the build locally with any static server, e.g. `python3 -m http.server 4321 --directory out`.

## Project layout

```
app/
  (site)/              route group — every public page shares the nav/footer layout
    page.tsx           home
    about|services|work|marketplaces|contact|insights|apps|privacy|terms/
    work/[slug]/       case studies, generated from lib/site.ts
    insights/[slug]/   articles, generated from content/insights/*.md
    apps/marka-*/      one folder per Shopify app + its privacy/terms/support pages
  layout.tsx           fonts, metadata, Organization JSON-LD, skip link
  not-found.tsx        404 (outside the route group, so it composes its own chrome)
  sitemap.ts           derives routes from the filesystem — see note below
  globals.css          design tokens and the .card/.btn/.prose-insights component layer
components/            all UI; hero/ holds the WebGL scene
content/
  insights/            54 articles as markdown with YAML frontmatter
  appdocs/             privacy, terms and support copy for the three Shopify apps
lib/
  site.ts              single source of truth for site copy
  blog.ts              article loader
  appdocs.ts           app-document loader
public/
  staticwebapp.config.json   redirects, security headers, cache rules
```

## Editing content

**Almost all site copy lives in `lib/site.ts`** — services, case studies, metrics, FAQs,
process, marketplace list, contact details. Edit the strings there and rebuild; no component
changes needed.

**To add an article**, drop a markdown file into `content/insights/`:

```yaml
---
title: "The full, descriptive headline — used as the page H1"
seoTitle: "Shorter title for search results"   # optional; add when title > 58 chars
description: "Meta description, 150–158 characters."
date: 2026-08-05
category: "AI & Agents"
tags: [tag-one, tag-two]
---
```

Then rebuild. The sitemap, category filters, related-posts and Article schema all pick it
up automatically.

## Things that will bite you

Three traps this codebase has already hit in production. All three fail silently.

**1. Tailwind opacity modifiers must be on the standard scale.** `bg-ink-950/97` compiles to
*nothing* — no CSS, no build error, no warning. Tailwind only generates `/70`, `/75`, `/80`,
`/85`, `/90`, `/95`, `/100`. For anything else use bracket syntax: `bg-ink-950/[0.97]`. This
shipped once and left the mobile menu with no background.

**2. There is exactly one `staticwebapp.config.json`, and it lives in `public/`.** Next's
static export copies `public/` into `out/`, and Azure serves the copy inside the deployed
artifact. A second copy at the project root is ignored at runtime *even though the SWA CLI
prints that it found it*. Do not create one.

**3. `app/sitemap.ts` derives its route list by walking `app/(site)`.** Do not replace it
with a hand-maintained array — a page someone forgets to add is invisible to Google with
nothing to warn you.

Also worth knowing: `components/Counter.tsx` parses its value inside `useMemo`. Inlining
that parse back into the render body restarts the animation every frame and pins the number
near zero. There is a comment in the file saying so.

## Deploying

```bash
npm run build
npx swa deploy ./out --env production --deployment-token <TOKEN>
```

The token comes from the Azure Portal under the Static Web App's **Manage deployment token**.
Never commit it — `.gitignore` covers the usual places it ends up.

Connecting this repository to the Static Web App under *Deployment* in the Azure Portal is
the better long-term setup: every push to `main` then deploys automatically, with preview
environments for pull requests.

## Accessibility and SEO

The site is kept at zero axe-core violations, one `<h1>` per page, no horizontal overflow
from 360px up, and no meta description over 160 characters. It emits Organization, Article,
BreadcrumbList, SoftwareApplication and FAQPage structured data. Please keep it that way.

---

© Marka Modern Retail Private Limited. All rights reserved.
