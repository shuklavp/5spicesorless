# 5 Spices or Less — Landing Page

> A high-fidelity, cinematic landing page bridging personal life lessons, an editorial business writing board, and a boutique startup advisory practice.

## Tech Stack
- **Framework**: Vite + React 18
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **Icons**: Lucide React
- **Typography**: Playfair Display (Editorial Serif) + Inter (Clean Sans) + JetBrains Mono (Code/Metadata)

## Architecture & Structure
```text
site/
├── index.html                 # Entry HTML with custom font preconnects & metadata
├── package.json               # Dependencies and build scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom palette (obsidian, spice-amber, parchment)
├── vite.config.js             # Vite configuration
└── src/
    ├── main.jsx               # React DOM root mounting
    ├── App.jsx                # Main landing page composition
    ├── index.css              # Base styling, grid patterns, text glow utilities
    └── components/
        ├── CursorSpotlight.jsx # Ambient mouse cursor spotlight micro-interaction
        ├── Navbar.jsx          # Sticky morphing navbar (edge-to-edge -> floating pill)
        ├── Hero.jsx            # Full-bleed cinematic hero + interactive 5-spice selector
        ├── ValueProps.jsx      # 3 key value proposition modules with hover glows
        ├── WritingBoard.jsx    # Editorial essay board with category filter & reader modal
        ├── ConsultingModule.jsx# Boutique advisory engagement tiers & intake form
        └── Footer.jsx          # Subtractive manifesto, newsletter subscription, and links
```

## Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (outputs to dist/)
npm run build
```

## Production Deployment (Cloudflare Pages / Vercel / Netlify)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+
