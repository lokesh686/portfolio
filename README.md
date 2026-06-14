# Lokesh Vodnala — Portfolio

Dark, minimal developer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Command Menu**: cmdk (⌘K)
- **Icons**: Simple Icons CDN
- **Deployment**: Vercel (free tier)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero + featured projects |
| `/about` | Bio, timeline, education, certs |
| `/projects` | Full project grid with filter tabs |
| `/uses` | Hardware, tools, stack, AI tools |
| `/blog` | Blog posts (connect Hashnode/Dev.to) |
| `/contact` | Email + social links |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Customization Checklist

### Before deploying:
- [ ] Add your photo to `public/avatar.jpg` (used in About page)
- [ ] Update hardware section in `lib/uses.ts` (laptop, phone, peripherals)
- [ ] Add live demo URLs to projects in `lib/projects.ts`
- [ ] Update Twitter/X handle in `app/layout.tsx` metadata
- [ ] Update Peerlist URL in `components/Navbar.tsx` and `app/contact/page.tsx`
- [ ] Add blog posts to `app/blog/page.tsx` once you start writing
- [ ] Update `vercel.json` domain if using custom domain

### Deploy to Vercel:
```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Push to GitHub → import at vercel.com
git init && git add . && git commit -m "init"
# Create repo on GitHub, push, then import on vercel.com
```

### Custom Domain:
1. Buy domain (Namecheap, Porkbun, or Cloudflare Registrar)
2. In Vercel dashboard → Settings → Domains → Add domain
3. Point DNS records as instructed by Vercel

## File Structure

```
lokesh-portfolio/
├── app/
│   ├── page.tsx              # Home / Hero
│   ├── layout.tsx            # Root layout + metadata
│   ├── globals.css           # Base styles + CSS variables
│   ├── about/page.tsx        # About page
│   ├── projects/page.tsx     # Projects grid with filters
│   ├── uses/page.tsx         # /uses page with icon grid
│   ├── blog/page.tsx         # Blog list
│   └── contact/page.tsx      # Contact page
├── components/
│   ├── Navbar.tsx            # Fixed navbar with active links
│   ├── CommandMenu.tsx       # ⌘K command palette (cmdk)
│   ├── ProjectCard.tsx       # Project card component
│   ├── SectionHeader.tsx     # Numbered section headers
│   └── Motion.tsx            # Framer Motion wrappers
├── lib/
│   ├── projects.ts           # All project data
│   └── uses.ts               # Hardware/tools/stack data
├── public/                   # Static assets
├── tailwind.config.ts        # Design tokens
├── next.config.mjs           # Next.js config
└── vercel.json               # Vercel deployment config
```

## Design Tokens

Colors are defined in `tailwind.config.ts`:

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#0a0a0a` | Page background |
| `bg-secondary` | `#111111` | Cards |
| `bg-tertiary` | `#1a1a1a` | Hover states |
| `border` | `#222222` | Borders |
| `text-primary` | `#f5f5f5` | Headlines |
| `text-secondary` | `#888888` | Body text |
| `text-muted` | `#555555` | Labels |
| `accent` | `#6366f1` | Indigo — CTAs, highlights |
