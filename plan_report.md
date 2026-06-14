# Portfolio Upgrade Plan & Report

## 1. Current Setup Overview

### Next.js Version & Router
The existing portfolio uses **Next.js 14.2.5** and is configured with the **App Router** (indicated by the `app` directory structure).

### Tailwind CSS Configuration
Tailwind CSS is already configured with a custom theme. The `tailwind.config.ts` file defines:
-   **Font Families**: `Geist Sans` (variable `--font-geist-sans`) and `Geist Mono` (variable `--font-geist-mono`).
-   **Colors**: A dark theme with `bg`, `border`, `text`, and `accent` palettes. The `accent` color is set to `#6366f1` (indigo).
-   **Animations & Keyframes**: Custom `fade-up`, `fade-in`, and `blink` animations are defined.

### Existing Pages & Components
-   **Pages**: `/` (Home), `/about`, `/blog`, `/contact`, `/projects`, `/uses`. All are implemented using the App Router.
-   **Components**: `CommandMenu.tsx`, `Hero3D.tsx`, `Motion.tsx`, `Navbar.tsx`, `ProjectCard.tsx`, `SectionHeader.tsx`.

### Content Storage
-   **Projects**: Stored in `lib/projects.ts` as an array of `Project` objects. This includes `slug`, `title`, `description`, `longDescription`, `tags`, `github`, `live`, `featured`, and `status`.
-   **About Page**: Content (timeline, focuses, certifications, bio) is currently hardcoded directly within `app/about/page.tsx`.
-   **Uses Page**: Content is stored in `lib/uses.ts`.

## 2. Missing vs. Spec

Based on the provided specification, the following key features and elements are currently missing or require significant updates:

### Tech Stack
-   **Framer Motion**: Partially implemented with basic `FadeUp` and `FadeIn` components, but needs to be extended for all entrances, scroll reveals, hover states, and page transitions as per the spec.
-   **`lucide-react`**: Not currently used for icons.
-   **`cmdk`**: Basic implementation exists for the command menu, but needs expansion for quick actions and better animation.
-   **`embla-carousel-react`**: Missing for testimonials.
-   **`react-activity-calendar`**: Missing for GitHub contributions heatmap.
-   **`React Hook Form` + `Zod`**: Missing for the contact form.

### Design System
-   **Typography**: Geist Sans and Geist Mono are already configured via Tailwind, but specific sizing and line-heights need to be applied.
-   **Layout & Spacing**: Max content width, vertical spacing, and card border-radius need to be consistently applied.
-   **Motion Principles**: Easing, entrance durations, hover states, scroll reveals, and page transitions need to be implemented using Framer Motion, including `prefers-reduced-motion` fallback.

### Global Components
-   **Navigation**: Sticky top nav with scroll-reactive transparency, mobile full-screen drawer, and updated primary links.
-   **Command Menu**: Needs to be expanded with searchable pages, projects, and quick actions (e.g., "Copy email", "Open resume").
-   **Footer**: Social links and copyright line are present, but might need styling updates.

### Pages & Sections
-   **Home (`/`)**: Hero section needs animated headline, location/role pills, updated CTAs, and optional avatar. Featured Work needs richer project cards (screenshots, highlights). Skills/Stack needs a grid/orbiting ring. Marquee strip and Testimonials carousel are missing. Contact CTA needs styling.
-   **About (`/about`)**: Bio needs photo. Experience timeline needs to be data-driven with company/role/achievements. GitHub contributions heatmap is missing. Education section needs to be data-driven.
-   **Work/Projects (`/projects`)**: Full grid with optional tag filter. Project detail pages (`/projects/[slug]`) are missing, including hero image, overview, problem/solution, tech stack, links, gallery, and "next project" navigation.
-   **Blog (`/blog`)**: Currently a placeholder. If kept, needs MDX support and syntax highlighting.
-   **Contact (`/contact`)**: Needs a functional form with `React Hook Form` and `Zod` validation, an API route for submission, and optional scheduling embed.

### Responsiveness, Accessibility, Performance, SEO
-   **Mobile-first**: Needs thorough responsive QA.
-   **Accessibility**: Semantic HTML, heading hierarchy, alt text, keyboard navigation need to be verified/implemented.
-   **Performance**: `next/image` usage needs to be consistent, Lighthouse score target 90+.
-   **SEO**: Per-page metadata, OG images, `sitemap.xml`, `robots.txt` need to be implemented.

## 3. Plan: File Structure, Refactoring, & Additions

### New File Structure (Proposed Additions/Changes)

-   **`app/api/contact/route.ts`**: For handling contact form submissions.
-   **`app/projects/[slug]/page.tsx`**: Dynamic route for individual project detail pages.
-   **`components/ui/`**: Directory for new UI components (e.g., `Carousel.tsx`, `ActivityCalendar.tsx`, `Input.tsx`, `Button.tsx`, `Dialog.tsx` for `cmdk`).
-   **`lib/data/`**: Directory for data modules (e.g., `experience.ts`, `education.ts`, `testimonials.ts`) to centralize content currently hardcoded in `app/about/page.tsx`.
-   **`hooks/`**: For custom React hooks (e.g., `useScrollProgress.ts`, `useMediaQuery.ts`).
-   **`styles/`**: Potentially for global styles not handled by Tailwind (e.g., grain texture overlay).
-   **`public/`**: For static assets like resume PDF, avatar image, OG images.

### What's Being Added/Refactored

-   **Refactor `app/about/page.tsx`**: Extract `timeline`, `focuses`, `certs` into `lib/data/` modules. Implement data-driven experience timeline and GitHub heatmap.
-   **Refactor `app/page.tsx`**: Implement new Hero section, Marquee, Testimonials carousel, and update Featured Work section to use richer `ProjectCard` components.
-   **Refactor `components/CommandMenu.tsx`**: Enhance with quick actions, better search, and Framer Motion animations.
-   **Refactor `components/Navbar.tsx`**: Implement scroll-reactive transparency and mobile drawer.
-   **Refactor `components/Motion.tsx`**: Extend with `whileInView`, `AnimatePresence`, and `prefers-reduced-motion` fallbacks.
-   **New Project Detail Pages**: Create `app/projects/[slug]/page.tsx` to display detailed project information, including galleries and navigation.
-   **New Contact Form**: Implement `app/contact/page.tsx` with `React Hook Form` and `Zod` validation, and an API route for submission.
-   **SEO Enhancements**: Implement `sitemap.xml`, `robots.txt`, and per-page OG images.
-   **Tailwind Configuration**: Update `tailwind.config.ts` with precise typography, layout, and spacing tokens as per the design system spec.

### What's Being Kept As-Is (or Minor Styling Updates)

-   **Next.js App Router structure**: The overall `app` directory structure will be maintained.
-   **Existing content**: Name, bio, project descriptions, experience entries, skills, social links, resume, images will be preserved and migrated.
-   **`lib/projects.ts`**: The data structure for projects will be largely kept, but may be extended if needed for new fields (e.g., `screenshots`).
-   **`lib/uses.ts`**: Will be kept as-is, as it's an auxiliary route.
-   **`app/blog/page.tsx`**: Will be kept as a placeholder unless the user explicitly requests to build out the blog functionality.
-   **`components/SectionHeader.tsx`**: Will be kept, potentially with minor styling adjustments.

## 4. Library Installation Status

The following libraries have been successfully installed:

-   `lucide-react`
-   `embla-carousel-react`
-   `react-activity-calendar`
-   `react-hook-form`
-   `zod`
-   `@hookform/resolvers`
-   `clsx`
-   `tailwind-merge`
-   `framer-motion` (already present, but confirmed)
-   `cmdk` (already present, but confirmed)
-   `geist` (for Geist Sans and Geist Mono fonts)

**Note**: There were warnings about deprecated `eslint` and `next` versions during installation. These will be addressed during the refactoring phase if they cause issues, but for now, the necessary packages are installed.
