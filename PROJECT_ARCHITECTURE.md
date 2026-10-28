# 5SpicesOrLess — Master Project Architecture & Developer Handbook

This document serves as the single source of truth for the engineering, styling, and editorial principles governing 5spicesorless.com.

---

## 1. Editorial & Voice Guidelines

* **British English Throughout:** Always use UK spelling conventions (e.g., centre, favour, grey, programmes, rumour).
* **Strict Punctuation Guardrails:** Never use em-dashes. Use commas, semicolons, colons, or clean, direct sentences instead.
* **Prohibited Words:**
  * Do not use the word **"dispatches"**. Use essays, field notes, stories, or letters.
  * Do not use the word **"broadside"**. Use the front page or home.
* **Indicator Dots:** Never place coloured or circular indicator dots before kicker labels, navigation pills, or section titles (e.g., OPERATIONAL CLARITY, FICTION & ORIGINAL NARRATIVES, ON OPERATIONAL PERSPECTIVE, or ON THE STORIES & LETTERS ARCHIVE). Eyebrows must remain clean, plain uppercase text.

---

## 2. Technical Stack & File Tree

* **Framework:** Astro (Static Site Generation / SSG)
* **Interactive Engine:** React (.jsx components loaded with client:load)
* **Styling:** Tailwind CSS with custom font definitions
* **Local Development Port:** http://localhost:4321 (or 5173)
* **Production Commands:**
  * Build: npm run build
  * Dev Server: npm run dev

### Directory Overview

```text
5spicesorless/
├── public/                       # Static public assets served from root
│   ├── food-sketch-blue.png      # Transparent pencil-blue linework for Food Desk
│   ├── life-sketch-blue.png      # Transparent pencil-blue linework for Life Desk
│   ├── work-sketch-blue.png      # Transparent pencil-blue linework for Work Desk
│   ├── fiction-scooter-bridge.jpg# High-res art for Stories
│   └── footer/                   # High-contrast thematic footer silhouettes
│       ├── footer-kadai-spices.png
│       ├── footer-cairn-stones.png
│       ├── footer-drafting-tools.png
│       └── footer-typewriter.png
├── src/
│   ├── components/               # React UI modules
│   │   ├── DeskPage.jsx          # Unified engine for /food, /life, /work, /stories
│   │   ├── CoreLevers.jsx        # Homepage "Five Essentials" operational module
│   │   ├── AboutPage.jsx         # Operating Ground Truths & founder background
│   │   ├── AdvisoryPage.jsx      # Private venture counsel overview
│   │   ├── FictionPage.jsx       # Narrative archive showcase
│   │   ├── Navbar.jsx            # Sticky navigation with desk pills & theme toggle
│   │   └── Footer.jsx            # Global site footer
│   ├── data/
│   │   └── essays.js             # Master repository of all essays, categories, and slugs
│   ├── layouts/
│   │   └── Layout.astro          # HTML shell, metadata, CSS imports, dark mode script
│   └── pages/                    # Astro routes
│       ├── index.astro           # Front Page
│       ├── food.astro            # /food Desk
│       ├── life.astro            # /life Desk
│       ├── work.astro            # /work Desk
│       ├── about.astro           # /about Route
│       ├── advisory.astro        # /advisory Route
│       └── stories/
│           ├── index.astro       # /stories Route
│           └── [slug].astro      # Dynamic single essay reader
```

---

## 3. Desk Page Specifications (src/components/DeskPage.jsx)

All individual desks (/food, /life, /work) share a single layout component configured via DESK_CONFIG:

### Visual Hierarchy & Palette
* **Canvas Background:** Paper White (#FBF9F5 in light mode, #080D18 in dark mode).
* **Headlines:** Monumental Serif (font-serif text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]) with unique desk hues:
  * **The Life Desk:** Deep Forest Pine (text-[#1B4332] dark:text-emerald-400)
  * **The Food Desk:** Warm Spiced Amber (text-[#8C3E14] dark:text-amber-400)
  * **The Work Desk:** Obsidian Navy (text-[#0E1E38] dark:text-sky-400)
  * **Stories Archive:** Charcoal Noir (text-[#1A1A1A] dark:text-white)
* **Body Prose:** Pure Serif (font-serif font-light text-slate-700 leading-relaxed). Never render body text in sans-serif.

### Two-Column Hero Architecture
1. **Left Text Column:** Contained strictly within 48%–52% width (w-full lg:w-[50%]) to allow natural breathing room.
2. **Right Architectural Sketch:** 
   * Container width: w-[48%] lg:w-[50%]
   * Image rules: Must use object-contain object-right with h-auto max-h-[450px] so the focal subjects (desk, kitchen island, balcony chair) are never cropped.
   * Edge Blending: Feather the left edge into the canvas using a CSS gradient mask:
     ```jsx
     style={{
       WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 40%, black 100%)',
       maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 40%, black 100%)'
     }}
     ```
3. **Placard Cards:** Three white rounded cards anchored across the bottom floor of the hero block.

---

## 4. Line Art Image Processing Standards

When generating or replacing architectural line sketches:
* **Format:** Transparent PNG.
* **Linework Ink:** Signature Pencil Blue RGB (35, 75, 155) / #234B9B.
* **Alpha Extraction:** The linework must be extracted from the luminance of bright strokes over dark or tinted backings so the background is 100% transparent. Never invert the canvas into a solid blue block.

---

## 5. Content Updates (src/data/essays.js)

To publish an essay, add a structured entry to the essays array:

```javascript
{
  id: "article-slug",
  slug: "article-slug",
  title: "Essay Title in Proper Case",
  subtitle: "Secondary explanatory subtitle without em-dashes.",
  desk: "food", // options: 'food', 'life', 'work'
  readTime: "5 min read",
  date: "October 2026",
  summary: "Brief summary for card preview.",
  content: "Full essay body content..."
}
```
All desk indexes, search filters, and static routes compile automatically upon addition.
