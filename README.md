# 5 Spices or Less (5spicesorless.com)

> A quiet editorial publication and private founder advisory practice by Vivek Shukla. Built on radical simplicity across Life, Food, and Work.

## Platform & Tech Stack
- Framework: Astro (Static Site Generation / SSG)
- Interactive Islands: React 18 (.jsx components)
- Styling: Tailwind CSS with custom editorial typography
- Visual Assets: Hand-hatched Cobalt/Royal pencil-blue architectural drawings with seamless gradient alpha blending
- Deployment: Cloudflare Pages (automated edge builds on push to main)

## Editorial Standards
- Strict British English spelling throughout (-ise, -our, theatre, judgement).
- Zero em-dashes. Use commas, colons, or clean, direct sentences.
- Banned lexicon: dispatches, broadside, and corporate buzzwords.
- Plain uppercase labels with zero decorative indicator dots.

## Developer Quick Start
```bash
# Install dependencies
npm install

# Start local development server (http://localhost:4321)
npm run dev

# Compile production build
npm run build
```

## Architectural Blueprint
For comprehensive component breakdowns, image processing pipelines, and typography rules, refer to PROJECT_ARCHITECTURE.md.

## Page metadata and share images

- Titles, descriptions, Open Graph / Twitter tags and JSON-LD are rendered by `src/components/SeoHead.astro` (used by `BaseLayout` and the Food, Life and Work desk pages). Pass `title`, `description` and `ogKey` to `BaseLayout`.
- A story's description comes from its `description` front matter (about 140 to 160 characters, written from the story itself). Add an optional `seoTitle` if the title is too long for search results.
- Story dates are written as "Month YYYY", so structured data uses `YYYY-MM`. Add a real `dateModified` in front matter only if the story is actually updated.
- Share images are 1200x630 WebP files in `public/og/`, made by `npm run generate-og` (edit the list in `scripts/generate-og-images.mjs`). A new story needs an entry there named after its slug; until then it falls back to `public/og/default.webp`.
