# CLAUDE.md: Personal academic website of MD Shafikul Islam (Sohan)

This file is loaded automatically at the start of every Claude Code session. It is committed to a PUBLIC repository, so it must never contain private information.

## What this site is

Personal academic and professional website, served by GitHub Pages at https://shafikul-islam.github.io from this repository. Built with Jekyll. Audience: industry recruiters (Physical AI, robotics, manufacturing AI, applied science) and academic researchers.

Identity to convey: a PhD researcher building Physical AI for manufacturing. Machines that sense, predict, and correct themselves: multimodal perception, learned dynamics and digital twins, predictive control, and real-time edge deployment on robotic systems.

## Commands

- Install dependencies: `bundle install`
- Local preview: `bundle exec jekyll serve --livereload` then open http://localhost:4000
- Production build check: `JEKYLL_ENV=production bundle exec jekyll build`
- Always preview locally and confirm the build succeeds before committing.

## Architecture rules

- Content lives in data files, not in page markup. Pages loop over data:
  - `_data/news.yml`, `_data/publications.yml`, `_data/projects.yml`, `_data/awards.yml`, `_data/coursework.yml`, `_data/gallery.yml`
- One design system: all colors, spacing, radii, and fonts are CSS custom properties defined once. Never hardcode a color inside a page or include.
- Light and dark themes are both first-class. Every component must be checked in both. No light-gray cards on dark backgrounds.
- Mobile-first layout. Test at 375 px, 768 px, and 1280 px widths.
- Respect `prefers-reduced-motion`. Animation is subtle and optional.
- Images: compressed WebP or optimized JPEG/PNG, `loading="lazy"`, explicit width and height. Videos: muted, looped, with a poster image, under about 4 MB.
- No emoji as icons. Use inline SVG icons.

## Never commit

Build output and caches: `_site/`, `vendor/`, `.sass-cache/`, `.jekyll-cache/`, `.DS_Store`. Office documents (`.docx`). Keep these in `.gitignore`.

## Privacy rules (strict)

Never publish or commit: transcripts, date of birth, visa or immigration status, student ID, home address, or personal documents. Contact on the site is email, LinkedIn, Google Scholar, GitHub, and city-level location only.

## Content accuracy rules (strict)

- Never invent facts, dates, metrics, author lists, venues, or results. If a detail is missing or uncertain, ask Sohan before writing it.
- Author lists and author order must match the published paper exactly. Bold Sohan's name.
- Label workshop papers explicitly as workshop papers (for example "New in ML Workshop, NeurIPS 2023").
- Distinguish status honestly: published, accepted, under review, major revision, preprint, in progress.
- Simulation or surrogate results must be described as such, never as physical experiments.
- Citation format for publications: IEEE style.
- Writing style: never use em dashes anywhere. Use colons, commas, or parentheses instead. Plain, precise English that non-native readers can follow.

## Verified facts (source of truth)

- Name: MD Shafikul Islam. Goes by Sohan.
- Ph.D. program: Industrial Engineering, Department of Mechanical and Industrial Engineering, Louisiana State University. Started January 2025. Cumulative GPA 4.05.
- M.S. in Industrial Engineering (Thesis Option), Louisiana State University. Conferred August 14, 2026.
- M.S. thesis: "Trustworthy Artificial Intelligence for Real-Time Quality Assurance in Additive Manufacturing."
- B.S. in Industrial and Production Engineering, Shahjalal University of Science and Technology, Bangladesh, 2024. GPA 3.74/4.00, top 5 percent.
- Advisor: Dr. Mahathir Mohammad Bappy. Lab: AnalyticsIQ Lab.
- Founder and Director, Computational Intelligence and Operations Lab (CIOL), since January 2022.
- Publication counts (as of the July 2026 CV): 13 journal papers, 11 conference and workshop papers, 8 preprints. Update these numbers whenever publications change.

## How to handle common update requests

- "Add a news item": append to `_data/news.yml` with date, short text, optional link and image. Newest first. Keep each item to one or two sentences.
- "Add a publication": add to `_data/publications.yml` with type (journal, conference, workshop, preprint), status, authors, title, venue, year, links, and topic tags. Then update the counts above.
- "Update the CV": replace the PDF in `assets/docs/` and keep the filename stable so links do not break.
- After every change: preview locally, check light and dark theme on mobile and desktop, then make one focused commit with a clear message, and summarize what changed.
