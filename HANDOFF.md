# 5 Spices or Less: Master Handoff & Continuity Document

**Date:** October 9, 2026

**Author:** Vivek Shukla / Personal Research Assistant

**Live Production Site:** https://5spicesorless.com

**GitHub Repository:** `shuklavp/5spicesorless` (Branch: `main`)

**Deployment Platform:** Cloudflare Pages (`5spicesorless.pages.dev`)

**Status:** All morning requests completed, tested, and packaged into `5spicesorless_source.zip`.

## 1. Executive Summary & Work Completed This Morning

1. **Architecture Overhaul (Concept 1 Implementation):**

   * Transformed the monolithic \~8,500px single page into a lean, fast, scroll-fatigue-free broadside (\~3,200px) paired with dedicated standalone pages.

   * **Home Broadside (`/`):**

     * **Hero:** One bold line headline: *Five Spices Or Less.*

     * **Terminology:** Replaced all occurrences of "Subtraction" / "Subtractive" with "Simplification".

     * **5 Spice Levers:** Styled per Screenshot 2 (Spice code in red on top, core lever in big font, description, and subtle background spice artwork).

     * **Rollover Effect Box:** Restored the dynamic display card below the 5 cards per Screenshot 1 (active spice sketch, role, quote, and `Rule #X in Practice` badge).

     * **Section 2 (`HomeAboutTeaser.jsx`):** Compact human anchor card with framed portrait sketch, Lucknow roots badge, and direct button to `/about`.

     * **Section 3 (`ValueProps.jsx`):** The Three Desks (*Life*, *Food*, *Work*) with dedicated links routing directly to individual desk archives.

     * **Section 4 (`WritingBoard.jsx`):** Featured curated dispatches with category filters and link to `/stories`.

     * **Section 5 (`HomeAdvisoryTeaser.jsx`):** Warm terracotta invitation card linking to `/advisory`.

     * **Section 6 (`Letterbox.jsx`):** Letters to the Table with panoramic streetscape sketch and anti-spam verification shield (honeypot + dwell-time).

     * **Section 7 (`Footer.jsx`):** Dynamic manifesto card with page-specific theme, quote, and transparent sketch, plus newsletter signup and navigation links.

2. **Dedicated Standalone Pages:**

   * **`/about` (`AboutPage.jsx`):** Exact two-column layout from Screenshot 5:

     * Left Column: Large portrait sketch frame (`/profile-sketch.png`), Lucknow Roots / Advisor & Storyteller caption, verified LinkedIn & X connection cards.

     * Right Column: Headline, continuous 6-paragraph personal memoir (college PC venture, heartbreak & B-school, May 13 2004 craniotomy and recovery, the two bosses, water IoT category creation and orderly exit), and *The Mission Today* card.

   * **`/advisory` (`AdvisoryPage.jsx`):** Exact older design from Screenshots 7, 8, 9:

     * Deep terracotta `#BC5259` background with full visual styling.

     * The 3 complete advisory mode cards (*The Fractional Operator*, *Entrepreneur in Residence*, *A Ben to Your Jules*) with detailed paragraphs and Scope of Collaboration checklists.

     * *My Guiding Operating Principle* banner with the direct 1:1 engagement badge.

     * Complete *Start an Honest Conversation* intake form with hidden anti-spam honeypot and dwell-time bot protection.

   * **`/stories`, `/life`, `/food`, `/work` (`DeskPage.jsx`):** Dedicated archive pages with real-time keyword search and tag filtering.

   * **`/stories/:slug` (`StoryPage.jsx`):** Standalone distraction-free reading canvas for any essay with takeaways, lead quote, full body, and author bio.

3. **Top Navigation, Logo Contrast & Page Clearance Fixes:**

   * **Automatic Logo Switching:** On terracotta `#BC5259` (and in dark mode), the navbar automatically loads `/logo_dark.png` (white letters and magenta) so the logo is crisp and high-contrast instead of dark-on-dark. On light pages, it loads dark navy `/logo.png`.

   * **Eliminated Text Collisions:** Removed the redundant "Back to Home Broadside" button at the top of the Advisory and About page containers that was colliding with the fixed navbar logo.

   * **Top Clearance (`pt-32`):** Added generous top padding (`pt-32 pb-24`) to all pages so headers start cleanly below the fixed navbar.

   * **Nav Link Contrast:** On `/advisory`, nav links render in crisp `text-white/90` with subtle translucent active pills and zero blue browser focus outlines (`focus:outline-none`).

4. **Footer Manifesto Themes, Unique Quotes & Transparent PNG Sketches:**

   * Replaced the repeated stone mortar and pestle photograph with 7 unique white pencil sketches.

   * Converted all 7 sketches into native **transparent PNG files** with smooth alpha transparency so they float directly on each page's dark gradient card without bounding boxes:

     1. `footer-spice-box.png` (Home Broadside `/`) - Traditional Brass Masala Dabba

     2. `footer-journal-chai.png` (About Vivek Shukla `/about`) - Fountain Pen & Lakhnawi Chai

     3. `footer-chess-compass.png` (Advisory Practice `/advisory`) - Chess King/Knight & Brass Pocket Compass

     4. `footer-cairn-stones.png` (The Life Desk `/life`) - Balanced River Stones Cairn

     5. `footer-kadai-spices.png` (The Food Desk `/food`) - Cast-Iron Kadai with Wooden Spoon & Spices

     6. `footer-drafting-tools.png` (The Work Desk `/work`) - Precision Engineering Drafting Instruments

     7. `footer-typewriter.png` (Stories Archive `/stories`) - Vintage Manual Mechanical Typewriter

## 2. Master Footer Themes & Palettes Matrix

| Route | Kicker | Mood & Theme | Gradient Palette | Accent / Dot | Transparent PNG Sketch | 
| ----- | ----- | ----- | ----- | ----- | ----- | 
| **`/` (Home)** | `THE FIVE SPICES MANIFESTO` | Midnight Plum | `from-[#0B0F19] via-[#161224] to-[#1E0E1B]` | `#F472B6` | `footer-spice-box.png` | 
| **`/about`** | `ON SURVIVAL & SINCERITY` | Heritage Indigo | `from-[#0A101D] via-[#111927] to-[#181528]` | `#60A5FA` | `footer-journal-chai.png` | 
| **`/advisory`** | `ON OPERATIONAL PERSPECTIVE` | Smoked Mahogany | `from-[#1A0B0E] via-[#241014] to-[#2E1218]` | `#FCA5A5` | `footer-chess-compass.png` | 
| **`/life`** | `ON PATIENCE & HUMAN BONDS` | Forest Juniper | `from-[#0A1412] via-[#0E1D19] to-[#132620]` | `#34D399` | `footer-cairn-stones.png` | 
| **`/food`** | `ON CULINARY RESTRAINT` | Toasted Cumin Amber | `from-[#140D05] via-[#1E1308] to-[#2A180A]` | `#FBBF24` | `footer-kadai-spices.png` | 
| **`/work`** | `ON ENTERPRISE & CHARACTER` | Obsidian Steel Navy | `from-[#080C14] via-[#0D1524] to-[#121E33]` | `#38BDF8` | `footer-drafting-tools.png` | 
| **`/stories`** | `ON THE DISPATCH ARCHIVE` | Velvet Blackberry | `from-[#0E0C17] via-[#171226] to-[#1E1430]` | `#C084FC` | `footer-typewriter.png` | 

## 3. Cloudflare Pages & Git Deployment Protocol

* **Repository:** `github.com/shuklavp/5spicesorless`

* **Branch:** `main`

* **Build Command:** `npm run build`

* **Output Directory:** `dist`

* **Node Version:** Locked to `18.20.4` via `.nvmrc`

* **Edge SPA Routing:** Guaranteed by `public/_redirects` (`/* /index.html 200`) so deep links like `/about` or `/advisory` resolve on edge servers without 404 errors.

## 4. Evening Resumption Plan: Section 4 (The Dispatches & Stories / Writing Board)

When resuming this evening, we will proceed directly to **Section 4: The Dispatches & Stories (Writing Board)** shown in your uploaded screenshot:

* Review card typography, category tag pills, and reading times.

* Category filter tabs interaction (`All`, `Life`, `Food`, `Work`, `Fiction`).

* Bottom archive navigation card styling.

* Any new article additions or editorial adjustments Vivek wishes to introduce.

Everything is fully backed up, verified, and bundled in `5spicesorless_source.zip`. Have a great break!