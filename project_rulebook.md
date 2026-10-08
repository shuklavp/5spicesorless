# 5 Spices or Less: Master Project Specification and Rulebook

This document serves as the single source of truth, architectural blueprint, and editorial standard for the **5 Spices or Less** personal platform, boutique advisory practice, and literary publication founded by Vivek Shukla.

## 1. Project Overview and Brand Philosophy

### 1.1 Core Purpose

*5 Spices or Less* is an editorial and advisory publication built on the philosophy of **The Subtractive Advantage**. The platform celebrates radical simplicity across Life, Food, and Work:

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
| **Advisory Terracotta** | `#BC5259` | Dedicated warm terracotta background for the Advisory Practice (`#consulting`) in light mode (dark mode: `#2A1417`) | 
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

## 5. Page Layout and Section Architecture

The platform combines a rich single-page broadside with dedicated permalink reader pages and desk archives:

```
1. HOME BROADSIDE (/)
   ├── Hero Section (The Subtractive Philosophy & 5 Core Levers)
   ├── The Three Desks (The Reader's Contract: Life, Food, Work)
   ├── Curated Dispatches (Writing Board with Search & Tags)
   ├── The Letterbox (Community Q&A: Letters to the Table)
   ├── Advisory Practice (Bespoke Executive Sparring: Ben to Jules)
   ├── About Vivek Shukla (The Personal Memoir & Scars)
   └── Manifesto Footer (Colophon, Newsletter, Social Links)

2. DEDICATED STORY PAGES (/stories/:slug)
   └── Clean, distraction-free reading canvas with takeaways, quotes, and author bio

3. DESK ARCHIVES (/life, /food, /work, /stories)
   └── Topic archives with real-time keyword search and tag filtering
```

### Detailed Component Specifications

#### 1. Hero Section (`src/components/Hero.jsx`)

* **Top Header:** `SIMPLICITY IN LIFE, FOOD, AND WORK` with pulsing berry dot, accompanied by `The Subtractive Advantage` (with "Subtractive" underlined in magenta).

* **Display Title:** Two-tone headline: **Five Spices** (Midnight Ink) / **Or Less.** (Berry Magenta).

* **Subtext:** *"The best things in life, work, and cooking are born from subtraction. When you remove what is unnecessary, clarity, speed, and flavour take care of themselves. In the end, less almost always works better than more."*

* **Metric Card:** `05 Core Levers` aligned horizontally with `Zero Operational Bloat`, followed by: *"Five levers are enough to move a mountain, and few enough that none can hide. When you refuse complexity, focus does the heavy lifting."*

* **The 5 Spice Drawers:**

  1. `01 / Cumin` (`THE FOUNDATION`): Patient heat extraction; establishing solid foundations in life, love, and work.

  2. `02 / Turmeric` (`GROUND TRUTH`): A pinch heals, excess ruins; the fine line in professional and personal bonds.

  3. `03 / Coriander` (`COHESION`): The forgiving binder; akin to honest monthly board updates that keep partners aligned.

  4. `04 / Red Chillies` (`CALCULATED RISK`): Courage with spice; bold bets, because playing not to lose is quiet failure.

  5. `05 / Aromatics` (`EXECUTIVE RESTRAINT`): Added off the flame; knowing when the work is finished and exiting with honour.

* **Interactivity:** Hovering updates the active drawer and lower display card; clicking locks the selection.

#### 2. The Three Desks (`src/components/ValueProps.jsx`)

* **Background:** Soft slate grey `#E6E9EF` in light mode (`dark:bg-canvas-dark`).

* **Header:** `THE THREE DESKS` / `What You Will Find Here.`

* **Subhead:** *"I write about Life, Food, and Work drawn directly from thirty years of living, making mistakes, and surviving rather unusual odds. Writing helps me make sense of it all, and sharing it might help you navigate your own journey with a little more calm and a lot less clutter."*

* **Desk 01 (LIFE):**

  * Kicker: `LIFE`

  * Title: `Life, Relationships, & Perspective`

  * Body: Everyday lessons from joy, mistakes, fatherhood, and surviving near-fatal odds. Becoming a kinder human being rather than playing a love guru.

  * Cadence: `Fortnightly Essays`

  * Route: `/life`

* **Desk 02 (FOOD):**

  * Kicker: `FOOD`

  * Title: `One Simple Recipe a Week`

  * Body: Lucknow roots where aroma precedes taste. Five spices or fewer, simple steps, cooking for pure joy.

  * Cadence: `Fortnightly Recipe & Technique`

  * Route: `/food`

* **Desk 03 (WORK):**

  * Kicker: `WORK`

  * Title: `Career, Startups & Boardrooms`

  * Body: Thirty years of enterprise leaving behind hard-won scars and practical lessons. Cutting through operational noise and boardroom theatre.

  * Cadence: `Weekly Field Note on Sunday`

  * Route: `/work`

#### 3. The Dispatches (`src/components/WritingBoard.jsx`)

* **Purpose:** The curated editorial board containing recent essays, real-time search, sub-tags, and links to full reading canvases.

* **Categories:** `All`, `Life`, `Food`, `Work`, `Fiction`.

* **Current Catalog (`src/data/essays.js`):**

  1. *Declared Dead at 27: What a 10-Hour Surgery and Relearning to Speak Taught Me* (Life) · Slug: `waking-up-declared-dead`

  2. *The \$4.5M Category Creation: Building, Scaling, and Exiting with Honour* (Work) · Slug: `category-creation-water-exit`

  3. *The Deal That Failed, The Mentor Who Stayed: On Max Kelly, Macquarie, and the Art of Quiet Encouragement* (Work) · Slug: `the-deal-that-failed-max-kelly`

  4. *Hiring Without Hype: What 160 Interviews and Four Regional Offices Taught Me* (Work) · Slug: `hiring-without-hype`

  5. *The Five-Spice Chemistry: Why a Paris MBA and a Lucknow Kitchen Share the Same Physics* (Food) · Slug: `food-and-the-five-spices`

  6. *The Blue Skoda: A Short Story on Strangers, Mechanics, and Long Roads* (Fiction) · Slug: `the-blue-skoda-story`

#### 4. The Letterbox (`src/components/Letterbox.jsx`)

* **Section ID:** `#letterbox`

* **Kicker:** `THE LETTERBOX`

* **Title:** `Letters to the Table.`

* **Background:** High-visibility panoramic streetscape sketch (`/streetscape-sketch.png` and `/streetscape-sketch-dark.png`) rendered from the top divider line downward with a frosted glass card overlay.

* **Desk Categories:**

  * `LIFE`: Personal growth, human relationships, fatherhood, and finding quiet perspective.

  * `FOOD`: Five-spice recipes, aroma and heat control, rescuing dishes, and the joy of honest cooking.

  * `WORK`: Career crossroads, navigating politics, early startups, fundraising, and boardroom reality.

* **Key Features:** Anonymous toggle (`Post anonymously` with pen name/city), optional alert email, direct textarea, anti-spam honeypot shield, dwell time verification, and social links to `@5spicesorless` and `@vivekshukla` on X.

#### 5. Advisory Practice (`src/components/ConsultingModule.jsx`)

* **Section ID:** `#consulting`

* **Visual Identity:** Warm terracotta rust-red canvas (`bg-[#BC5259]` / `dark:bg-[#2A1417]`) with warm cream card containers (`bg-[#FAF8F5]` / `dark:bg-canvas-darkCard`) creating visual gravity and warmth.

* **Three Advisory Modes:**

  1. *The Fractional Operator:* Organisational decluttering, reporting memos over slides, unit economics.

  2. *Entrepreneur in Residence (EIR):* Category validation, early operational design, capital efficiency.

  3. *A Ben to Your Jules:* Dedicated 1:1 confidential sparring for high-agency founders under pressure.

* **Built-in Intake Form:** Interactive submission capturing name, email, organisation, collaboration style, bottleneck, and anti-spam protection.

#### 6. About Vivek Shukla (`src/components/Profile.jsx`)

* **Placement:** Positioned immediately after Advisory to provide the human ground truth.

* **Left Column:**

  * Portrait sketch container with `/profile-sketch.png` and sub-caption: `Lucknow Roots` (left) / `Advisor & Storyteller` (right).

  * Direct verified LinkedIn card (`linkedin.com/in/vivekshukla`).

  * Direct verified X card (`@vivekshukla`).

* **Right Column:**

  * Headline: *"If falling in love three times was not quite dramatic enough, I decided to almost die once, just to keep things interesting."*

  * Narrative paragraphs covering the college bedroom PC business, heartbreak, the May 2004 peacemaker injury, the defiant recovery, the two bosses, the two-year double life, the water IoT venture, and the two core truths.

  * The Mission Today Callout: *"I write because survival taught me to pay attention, and I advise because I know how lonely the founder's chair can get. No buzzwords, no posturing, and no desire to be bucketed. Just warm Lakhnawi tea, hard-won operational judgment, and steady counsel when things get noisy."*

#### 7. Footer (`src/components/Footer.jsx`)

* **The Five Spices Manifesto:** *"True mastery is subtractive. The amateur adds ingredients to mask poor technique. The master uses only what is essential, and executes with quiet confidence."* (with stone mortar and pestle asset `/mortar-pestle-dark.png` featured on the right of the dark manifesto card).

* **The Sunday Reduction:** Weekly newsletter subscription form.

* **Navigation Links:** Back to Top, Life (`/life`), Food (`/food`), Work (`/work`), Stories & Essays (`/stories`), The Letterbox (`/#letterbox`), Advisory ("Ben to Jules"), About Vivek (`/#profile`).

* **Social and Channels:**

  * LinkedIn: `https://www.linkedin.com/in/vivekshukla/`

  * Publication on X: `@5spicesorless` (`https://x.com/5spicesorless`)

  * Personal on X: `@vivekshukla` (`https://x.com/vivekshukla`)

  * Domain: `https://5spicesorless.com`

* **Colophon:** `Lucknow roots · Crafted with Vite, React, and Tailwind`.

## 6. Maintenance and Development Protocol

### 6.1 Git and Cloudflare Deployment Hygiene

* **Atomic Component Verification:** Never commit an `App.jsx` referencing a component that has not yet been written or committed into `src/components/`. A missing import will trigger a Rollup error and break the Cloudflare Pages build.

* **Build Verification:** When running locally or before pushing, run `npm run build` to confirm zero missing modules or JSX syntax defects.

* **Verification in Cloudflare:** If changes do not reflect on `https://5spicesorless.com/`, check Cloudflare Dashboard > **Workers & Pages** > **5spicesorless** > **Deployments** for red build logs.

* **No Raw Zip Commits:** Always commit raw source files into `src/` and static images into `public/`. Do not commit `.zip` archives into the repository.

### 6.2 Adding Future Essays to `src/data/essays.js`

When writing and registering new essays:

1. Ensure British English spelling throughout the title, subtitle, takeaways, and markdown body.

2. Use commas and colons; strictly avoid em-dashes.

3. Follow the schema: `id`, `slug`, `title`, `subtitle`, `category` (Life, Food, Work, Fiction), `tags` (array of strings), `readTime`, `date`, `author` ("Vivek Shukla"), `leadQuote`, `takeaways` (3-4 points), and `markdownBody`.

4. Include at least one practical, humble Lakhnawi or operational takeaway.

## 7. URL Routing, Desk Archives, and Tagging Architecture

### 7.1 Single-Page to Multi-Route Architecture
The platform operates as a modern client-side routed Single-Page Application (SPA) on Cloudflare Pages, backed by `public/_redirects`:

* **`/*    /index.html   200`**: Direct URL hits to any path (e.g. `https://5spicesorless.com/stories/hiring-without-hype` or `https://5spicesorless.com/work`) are served by Cloudflare's edge cache and routed seamlessly in the client browser with zero reload.

### 7.2 Permalinks and Social Cards
* Every essay features a unique, canonical URL: `/stories/:slug`
* Social link unfurling on LinkedIn and X directs readers directly into the dedicated full-width reading view.
* The reading canvas features dedicated social sharing triggers (X, LinkedIn, Copy Link), adjacent article pagination, and author bio cards.

### 7.3 Tagging Taxonomy
* Broad Primary Desks: `Life`, `Food`, `Work`, `Fiction`.
* Sub-tags: Granular thematic labels attached to individual essays (e.g. `Hiring`, `Recruitment`, `Startups`, `Category Creation`, `Mentorship`, `Health`, `Recovery`).
* Instant Search: Client-side keyword search indexing across `title`, `subtitle`, `tags`, and full text in real time with zero server latency.

## 8. Anti-Spam Security Protocol

### 8.1 The Invisible Honeypot Shield
Both public intake forms (`The Letterbox` and `Advisory Intake`) embed an invisible input field styled with `display: none` and `aria-hidden="true"`:
* **Letterbox Field:** `hp_comment`
* **Advisory Field:** `hp_company_url`
* Human visitors never see or interact with these fields. Automated spam bots scanning DOM structures blindly fill them out. Any submission where these fields contain text is silently captured and discarded without notifying the bot.

### 8.2 Submission Velocity & Dwell Time Verification
* Human readers take 8 to 30 seconds to compose thoughtful messages. Automated scripts submit forms within 100 to 300 milliseconds.
* Both forms track a `formLoadedAt` timestamp initialized upon mounting. Submissions occurring under 2.5 seconds are flagged as automated scripts and rejected.

### 8.3 Cloudflare Turnstile Integration
* Ready for drop-in zero-friction background verification using Cloudflare Turnstile without intrusive visual puzzle captchas.