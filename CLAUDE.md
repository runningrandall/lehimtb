# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Official website for the Lehi High School Mountain Bike Team. Static site deployed to GitHub Pages at lehimtb.com.

## Build & Development Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Dev server at http://localhost:3000
pnpm run build        # Static export to ./out/
pnpm run lint         # ESLint
```

Package manager is **pnpm** (v10). Node 22 in CI.

## Architecture

- **Framework**: Next.js 16 with App Router, static export (`output: 'export'`)
- **Styling**: Vanilla CSS with custom design system tokens (no Tailwind) — colors, spacing, typography defined as CSS variables in `globals.css`
- **TypeScript**: Strict mode, path alias `@/*` → `./src/*`

### Key Patterns

- Pages are **server components** by default. Client components (`'use client'`) are used only for interactivity: `Navbar`, `HeroSlider`, `ContactForm`
- All content data is **inline/hardcoded** — no CMS, no database, no API fetching for content
- Custom `imageLoader.ts` in `src/lib/` handles Next.js image optimization for static export
- Contact forms submit via **Web3Forms** API
- CSS uses **glassmorphism** panels (`.glass-panel`), button variants (`.btn-primary`, `.btn-accent`, `.btn-silver`), and a mountain silhouette SVG background
- Design tokens: purple primary (#572b9e), yellow accent, silver secondary; fonts are Inter, Outfit, Barlow Semi Condensed
- Responsive breakpoints: 768px (layout), 900px (nav mobile/desktop toggle)

### Kit Reveal Feature

`src/lib/kitReveal.ts` controls a date-based reveal (March 26, 2026 UTC). `HeroSlider` adjusts slides based on `isKitRevealed()`.

## Deployment

Automatic deploy to GitHub Pages on push to `main` via `.github/workflows/nextjs.yml`. Static output to `./out/`.

## External Integrations

- **TeamSnap**: Team registration
- **NICA PitZone**: League registration
- **Volt Cycle Wear**: Team store
- **Training Peaks**: Training plans (coupon code LEHIMTB)
