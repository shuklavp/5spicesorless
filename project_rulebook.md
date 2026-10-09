# 5 Spices or Less: Master Project Specification and Rulebook

This document serves as the single source of truth, architectural blueprint, and editorial standard for the **5 Spices or Less** personal platform, boutique advisory practice, and literary publication founded by Vivek Shukla.

## 1. Project Overview and Brand Philosophy

### 1.1 Core Purpose

*5 Spices or Less* is an editorial and advisory publication built on the philosophy of **The Simplification Advantage**. The platform celebrates radical simplicity across Life, Food, and Work:

* **The Core Thesis:** The things that last longest in life, work, and cooking come from taking away rather than adding. When unnecessary elements are removed, clarity, speed, and flavour emerge naturally. Less often works better than more.

* **Dual Mission:**

  1. Publishing reflective personal essays, culinary observations, operator playbooks, and short fiction.

  2. Providing fractional executive sparring and founder advisory, acting as "A Ben to your Jules" (*The Intern*).

### 1.2 Digital Properties and Hosting Infrastructure

* **Production Domain:** `https://5spicesorless.com` (with `www.5spicesorless.com`)

* **Edge Deployment:** Cloudflare Pages (`https://5spicesorless.pages.dev`)

* **Source Repository:** `github.com/shuklavp/5spicesorless` (automated edge build and deployment on push to `main`)

* **Cost Architecture:** \$0/month serverless edge architecture, completely replacing legacy WordPress hosting.

* **Tech Stack:** React 18, Vite, Tailwind CSS, PostCSS, Autoprefixer, Lucide React icons.

## 2. Linguistic, Editorial, and Voice Standards

### 2.1 Strict British English Mandate

All website copy, component metadata, article drafts, form labels, and code comments must strictly use British English spelling and terminology. American English is strictly forbidden.

* **Suffix Rules:** Always `-ise` over `-ize` (*utilise*, *organise*, *realise*, *prioritise*, *categorise*, *specialise*).

* **Vowel Rules:** Always `-our` over `-or` (*flavour*, *honour*, *colour*, *behaviour*).

* **Vocabulary:**

  * *kilometres* instead of *miles* or *kilometers*

  * *bonnet* instead of *hood*

  * *theatre* instead of *theater*

  * *pre-authorisation* instead of *pre-authorization*

  * *programme* instead of *program* (except computer programming)

  * *practise* (verb) versus *practice* (noun)

### 2.2 Punctuation and Syntax Discipline

* **Commas Over Dashes:** Strictly **no em-dashes (\`\`)** anywhere in the copy. Use commas, colons, or clean full stops instead.

* **Sentence Structure:** Keep sentences short, crisp, and direct. Avoid rambling subordinate clauses.

* **Editorial Tone:** A blend of understated, dry British wit and warm Lakhnawi storytelling dignity (*tehzeeb*). Self-effacing, grounded, and observant.

* **Zero Corporate Jargon:** Never use empty marketing buzzwords ("synergy", "paradigm shift"). Speak in honest, grounded human language.

* **No Superlatives:** Avoid bragging or exaggerated claims ("flawlessly", "perfection", "world-class"). Maintain quiet confidence.

### 2.3 Author Identity and Exclusion Rules

* **Identity:** Positioned as an *Advisor, Operator, and Storyteller*. He is no longer referred to as an active founder, but as a seasoned operator and confidant.

* **Excluded Pomp:** Do not include academic titles or overseas credentials (such as "ENPC Paris MBA" or "living in Kuala Lumpur") in primary headers and badges. His origins are proudly and simply stated as *Lucknow roots*.

## 3. Biographical Ground Truths (Vivek Shukla)

Any biographical mention, essay, or profile element must respect these verified historical facts:

1. **The College Secret:** To his parents, he was a quiet, introverted boy dutifully reading biology for his Bachelor's degree. In secret, he was running an active computer assembly and sales business from his bedroom, fuelled by roadside chai, samosas (forever an eternal priority), cinema tickets (all of them), and big dreams.

2. **Heartbreak and Business School:** He fell in love three times with three extraordinary girls. Following his second heartbreak, he sought an escape from melancholy, trading an aching chest for brain-breaking study and enrolling in B-school in 2003 so marketing strategy could dull the pain.

3. **The Peacemaker Incident (May 13, 2004):** With his degree nearly complete, at age 27, he stepped in to separate two fighting groups. He was struck from behind by a heavy iron rod. Pronounced beyond hope at the first clinic, a few stubborn souls rushed him across town to another hospital, where a 10-hour emergency craniotomy saved his life.

4. **The Defiant Recovery:** Doctors warned of permanent paralysis, seizures, and early-onset dementia, prescribing years of dark rooms and low expectations. Driven by stubborn grit, he mounted an aggressive, fast-paced recovery against all medical advice, relearning speech, writing, and analytical thought months ahead of schedule.

5. **The Two Bosses (Archetypes, Kept Anonymous):**

   * *Boss One:* A wonderfully eccentric, flamboyant, and wildly passionate early-stage founder who operated purely on instinct and chaotic energy.

   * *Boss Two:* A masterclass in structured strategy, logic, and problem-solving, whose only flaw was a legendary habit of sitting on fences. Vivek worked with him across four separate ventures over his career.

6. **The Two-Year Double Life:** While architecting a nationwide medical insurance pre-authorisation platform for his mentor's firm by day, he spent his nights sweating over his own punishing IoT hardware startup.

7. **Category Creation and Clean Exit:** He founded the company that created the category of residential water sub-metering in India, pioneered Metering-as-a-Service, raised institutional venture capital (including Macquarie), built a team of 160+ people across 4 regional offices, and steered an orderly exit to protect his shareholders over personal financial windfall.

8. **The Role of Max Kelly:** When fundraising was at a critical bottleneck, Max Kelly stepped in without fees or equity clawbacks to help unlock backing from Macquarie. Max remains a close mentor and was the primary catalyst who persistently urged Vivek to write down his lessons and build *5 Spices or Less*.

9. **The Two Core Convictions:**

   * First, how remarkably little any of us truly knows.

   * Second, how much hard-won perspective there is to write down and pass along before signing off.

## 4. Visual Design and Art System

### 4.1 Colour Palette

| Token Name | Hex Code | Role and Application | 
| ----- | ----- | ----- | 
| **Canvas Pure** | `#FFFFFF` | Primary light mode surface background | 
| **Section Accent** | `#E6E9EF` | Dedicated background for The Three Desks section | 
| **Midnight Ink** | `#0C1427` | Primary dark mode canvas (`canvas-dark`, `canvas-darkCard`), primary text | 
| **Berry Magenta** | `#DE2573` | Electric brand accent, highlights, active indicator dots, primary CTA buttons | 
| **Cobalt Blue** | `#2563EB` | Architectural sketch linework, secondary accents, LinkedIn icons | 
| **Canvas Border** | `#E2E8F0` | Subtle clean card borders (dark mode: `#1E293B`) | 
| **Advisory Terracotta** | `#BC5259` | Dedicated warm terracotta background for the Advisory Practice (`#consulting`, `/advisory`) in light mode (dark mode: `#2A1417`) | 
| **Advisory Surface** | `#FAF8F5` | Warm cream card and intake form surface within the Advisory Practice section | 

*Rule:* The Advisory Practice section intentionally utilises a warm terracotta rust-red block (`#BC5259` / `#2A1417`) paired with `#FAF8F5` cards to create visual gravity, warmth, and psychological safety for founder sparring. Other sections maintain crisp canvas pure surfaces and clean slate accents.

### 4.2 Background Textures

* **Sandpaper Grain:** The entire body uses a subtle SVG fractal noise letterpress texture (`.bg-sandpaper-texture`).

* **Zero Grid Clutter:** Checkered grid patterns (`.bg-modern-grid`) are strictly prohibited.

### 4.3 Typography Scale

* **Display / Headlines:** Elegant serif typeface (`font-serif`, Playfair Display / Georgia style) with tight tracking (`tracking-tightest` / `tracking-tight`).

* **Body Text:** Modern, readable sans-serif (`font-sans`, Inter style) set with comfortable line heights (`leading-relaxed`).

* **Metadata and Kickers:** Monospace typeface (`font-mono`), uppercase, tracking-wider (`tracking-widestEditorial`), small font sizes (11px to 13px).

### 4.4 Illustration and Dark Mode Standards

All illustrations are rendered in **Cobalt Blue Architectural Fine Line Art** with delicate cross-hatching.

> **CRITICAL DARK MODE RULE (Never use CSS Invert):** Never use `mix-blend-screen` on images with white backgrounds, and never use CSS `dark:invert` on colour sketches. Inverting cobalt blue turns lines into an unappealing yellowish-tan ("seashells") and produces harsh black boxes inside dark navy containers.

**The Mandatory Dual-Asset Architecture:** Every illustration must exist as two native transparent PNG files (processed with an alpha channel so backgrounds are 100% transparent):

1. **Light Mode Asset (`/public/<name>.png`):** Transparent background with rich cobalt blue ink lines. In light mode, apply `mix-blend-multiply` so any anti-aliased edges melt seamlessly into off-white surfaces (`dark:hidden`).

2. **Dark Mode Asset (`/public/<name>-dark.png`):** Transparent background with crisp, luminous silver-white or ice-blue lines (`#D2E6FF`). Rendered natively on dark navy surfaces (`hidden dark:block`).

## 5. Page Layout and Section Architecture (Concept 1: The Lean Broadside)

To eliminate scroll fatigue and give long-form content the breathing room it deserves, the platform uses a hybrid architecture:

```
1. LEAN HOME BROADSIDE (/)
   ├── 1. Hero Section (The Simplification Philosophy & 5 Core Levers)
   ├── 2. The Human Anchor (About Vivek Shukla Teaser & Link to /about)
   ├── 3. The Three Desks (The Reader's Contract: Life, Food, Work)
   ├── 4. Curated Dispatches (Writing Board with Search & Tags)
   ├── 5. Advisory Invitation Card (Bespoke Sparring & Link to /advisory)
   ├── 6. The Letterbox (Community Q&A: Letters to the Table)
   └── 7. Manifesto Footer (Colophon, Newsletter, Social Links)

2. DEDICATED ABOUT PAGE (/about)
   └── Full-width personal memoir, historical milestones, Lucknow roots, portrait sketch, and Mission Today callout

3. DEDICATED ADVISORY PAGE (/advisory)
   └── Full breakdown of 3 modes, collaboration scope, terracotta aesthetic, and strategic intake form

4. DEDICATED STORY PAGES (/stories/:slug)
   └── Full-width distraction-free reading canvas with takeaways, quotes, and author bio

5. DEDICATED DESK ARCHIVES (/life, /food, /work, /stories)
   └── Real-time keyword search and sub-tag filtering
```

### Detailed Component Specifications

#### 1. Hero Section (`src/components/Hero.jsx`)

* **Top Header:** `SIMPLICITY IN LIFE, FOOD, AND WORK` with pulsing berry dot, accompanied by `The Simplification Advantage` (with "Subtractive" underlined in magenta).
* **Display Title:** Two-tone headline: **Five Spices** (Midnight Ink) / **Or Less.** (Berry Magenta).
* **Subtext:** *"The best things in life, work, and cooking are born from subtraction. When you remove what is unnecessary, clarity, speed, and flavour take care of themselves. In the end, less almost always works better than more."*
* **Metric Card:** `05 Core Levers` aligned horizontally with `Zero Operational Bloat`.
* **The 5 Spice Drawers:** Cumin (`THE FOUNDATION`), Turmeric (`GROUND TRUTH`), Coriander (`COHESION`), Red Chillies (`CALCULATED RISK`), Aromatics (`EXECUTIVE RESTRAINT`).

#### 2. The Human Anchor Teaser (`src/components/HomeAboutTeaser.jsx`)

* **Placement:** Positioned directly after the Hero section on the Home broadside.
* **Layout:** Compact 2-column card featuring the portrait line-art sketch on the left and a 2-paragraph narrative overview on the right.
* **Headline:** *"If falling in love three times was not quite dramatic enough, I decided to almost die once, just to keep things interesting."*
* **Core Action:** `Read the Full Memoir (/about) →` accompanied by direct verified LinkedIn and X links.

#### 3. The Three Desks (`src/components/ValueProps.jsx`)

* **Background:** Soft slate grey `#E6E9EF` in light mode (`dark:bg-canvas-dark`).
* **Header:** `THE THREE DESKS` / `What You Will Find Here.`
* **Desks:** Desk 01 (`LIFE` → `/life`), Desk 02 (`FOOD` → `/food`), Desk 03 (`WORK` → `/work`).

#### 4. The Dispatches (`src/components/WritingBoard.jsx`)

* **Purpose:** Curated editorial grid with real-time keyword search and sub-tag filtering.
* **Cards Action:** Clicking an essay navigates directly to its dedicated reading canvas (`/stories/:slug`).
* **Catalog:** 6 essays including *Hiring Without Hype*, *Declared Dead at 27*, *The $4.5M Category Creation*, *The Deal That Failed*, *The Five-Spice Chemistry*, and *The Blue Skoda*.

#### 5. Advisory Invitation Card (`src/components/HomeAdvisoryTeaser.jsx`)

* **Placement:** Positioned directly after Dispatches on the Home broadside.
* **Layout:** Bold terracotta callout card (`#BC5259`) introducing *"A Ben to Your Jules"*, the three modes, and a direct button to `/advisory`.

#### 6. The Letterbox (`src/components/Letterbox.jsx`)

* **Section ID:** `#letterbox`
* **Title:** `Letters to the Table.`
* **Features:** Panoramic streetscape line-art background, anonymous toggle, anti-spam honeypot shield, dwell-time verification, and X handles.

#### 7. Dedicated About Page (`src/components/AboutPage.jsx` · Route `/about`)

* **Canvas:** Full-width unhurried memoir detailing the college PC business, heartbreak, the May 13 2004 craniotomy, the two bosses, water sub-metering category creation, and exit.
* **Markers:** Historical milestones box, verified social links, and the Mission Today callout.

#### 8. Dedicated Advisory Page (`src/components/AdvisoryPage.jsx` · Route `/advisory`)

* **Canvas:** Full breakdown of the three advisory modes (*The Fractional Operator*, *EIR*, *A Ben to Your Jules*), collaboration scope checklists, operating principle banner, and confidential intake form.

#### 9. Footer (`src/components/Footer.jsx`)

* **The Five Spices Manifesto:** *"True mastery is subtractive. The amateur adds ingredients to mask poor technique. The master uses only what is essential, and executes with quiet confidence."*
* **Visual Asset:** Stone mortar and pestle asset (`/mortar-pestle-dark.png`).
* **Colophon:** `Lucknow roots · Crafted with Vite, React, and Tailwind`.

## 6. Maintenance and Development Protocol

### 6.1 Git and Cloudflare Deployment Hygiene

* **Atomic Component Verification:** Never commit an `App.jsx` referencing a component that has not yet been written or committed into `src/components/`. A missing import will trigger a Rollup error and break the Cloudflare Pages build.
* **Build Verification:** When running locally or before pushing, run `npm run build` to confirm zero missing modules or JSX syntax defects.
* **Verification in Cloudflare:** If changes do not reflect on `https://5spicesorless.com/`, check Cloudflare Dashboard > **Workers & Pages** > **5spicesorless** > **Deployments** for red build logs.
* **No Raw Zip Commits:** Always commit raw source files into `src/` and static images into `public/`. Do not commit `.zip` archives into the repository.

### 6.2 Adding Future Essays to `src/data/essays.js`

Follow the schema: `id`, `slug`, `title`, `subtitle`, `category` (Life, Food, Work, Fiction), `tags` (array of strings), `readTime`, `date`, `author` ("Vivek Shukla"), `leadQuote`, `takeaways` (3-4 points), and `markdownBody`.
Use strict British English and commas/colons; avoid em-dashes.

## 7. URL Routing, Desk Archives, and Tagging Architecture

* **`/`**: Lean Home Broadside
* **`/about`**: Dedicated Memoir Canvas
* **`/advisory`**: Dedicated Founder Advisory Canvas & Intake
* **`/stories/:slug`**: Dedicated Essay Reading Canvas
* **`/life`, `/food`, `/work`, `/stories`**: Dedicated Desk Archives
* **`public/_redirects`**: `/* /index.html 200` ensures seamless Cloudflare Pages SPA client-side routing.

## 8. Anti-Spam Security Protocol

* **Honeypot Shield:** Hidden `hp_comment` (Letterbox) and `hp_company_url` (Advisory) fields silently catch and drop automated scrapers.
* **Dwell Time Verification:** Submissions occurring under 2.5 seconds are flagged as automated scripts and rejected.
* **Cloudflare Turnstile:** Ready for drop-in background cryptographic verification without visual puzzle captchas.