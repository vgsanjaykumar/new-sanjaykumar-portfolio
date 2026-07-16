# Sanjaykumar V — Portfolio (v2)

A complete redesign of the original portfolio: React + Vite + Tailwind CSS +
Framer Motion, with dark/light mode, scroll-reveal animations, a filterable
project grid, and a custom cursor.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## What changed from the original

- **Full visual redesign** — new type system (Space Grotesk / Inter / JetBrains
  Mono), a cyan → indigo → violet accent gradient, glassmorphism cards, an
  ambient grid + aurora backdrop, and a signature "code window" hero element.
- **Dark & light themes**, system-aware on first load, persisted to
  `localStorage`, toggle in the navbar and footer, no flash on load.
- **Rebuilt every section**: sticky glass navbar with scroll-spy, animated
  hero, About with animated stats, categorized Skills with progress bars, a
  vertical Experience timeline, an alternating Education timeline, a
  searchable/filterable Projects grid with a detail modal, a Services
  section, Resume preview/download, and a validated Contact form (still
  wired to the same Web3Forms endpoint) with a WhatsApp quick-contact widget.
- **Removed heavier dependencies** (`react-slick`, `swiper`,
  `react-simple-typewriter`, `@heroicons/react`) in favor of small,
  purpose-built Framer Motion components — smaller bundle, fewer moving
  parts.
- **Reorganized folder structure**: `components/layout`, `components/ui`,
  `sections`, `data`, `hooks`, `context` — content (copy, links, project
  list) lives in `src/data/*.js` so it's easy to update without touching
  markup.
- **Custom cursor** on desktop only (auto-disabled on touch/small screens),
  scroll progress bar, back-to-top button, and `prefers-reduced-motion`
  support.

## Editing your content

All real content lives in `src/data/`:

- `profile.js` — name, bio, contact info, social links, resume paths, stats
- `skills.js` — skill categories and levels
- `experience.js` — work/internship history
- `education.js` — education timeline
- `projects.js` — project cards (image, description, tech, live link)
- `services.js` — the "How I can help" cards

To swap the resume, replace `public/asset/resume.pdf` and
`public/asset/resume.png` (used as the preview thumbnail) — filenames must
stay the same, or update `resumePdf` / `resumePreview` in `profile.js`.

## Notes

- The original project referenced a couple of certification/achievement
  sections in a general sense, but no certification or award data existed
  in the source project, so nothing was invented — add a `certifications.js`
  data file and a matching section if you'd like that added later.
- Contact and WhatsApp forms use the same Web3Forms access key and WhatsApp
  number as the original project.
