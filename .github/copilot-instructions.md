# Copilot Instructions

## Build and run

- `npm install` — install dependencies
- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — run Next.js linting

This repo does not currently define a dedicated test script or test files.

## Architecture

- Next.js 14 App Router site with route segments under `app/`.
- Shared UI lives in `components/` and is split into client wrappers for motion, navigation, and the command menu.
- Content is mostly data-driven:
  - `lib/projects.ts` powers the home and projects pages.
  - `lib/uses.ts` powers the `/uses` page.
- `app/layout.tsx` is the global shell: metadata, navbar, command menu, and footer.
- Styling is centralized in `tailwind.config.ts` and `app/globals.css`; both define the dark palette and the site’s visual system.

## Conventions

- Keep route-level metadata close to each page with `export const metadata`.
- Reuse `SectionHeader`, `FadeUp`, `StaggerContainer`, and `StaggerItem` for page structure and motion instead of duplicating patterns.
- Keep project and tools content in `lib/` rather than inlining large arrays inside pages.
- Client-only behavior stays in `use client` components:
  - `Navbar` for active-link detection and the command-menu shortcut
  - `CommandMenu` for `cmdk` navigation
  - `Motion` for Framer Motion wrappers
- Use the existing Tailwind tokens (`bg-*`, `border-*`, `text-*`, `accent-*`) instead of ad hoc colors.
- External icons on `/uses` are loaded from the Simple Icons CDN; add new mappings in `app/uses/page.tsx` if needed.
- Prefer the existing fixed-width layout (`max-w-3xl mx-auto px-6`) and section spacing used across pages.
