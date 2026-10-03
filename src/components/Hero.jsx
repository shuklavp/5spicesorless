import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass, Sparkles } from 'lucide-react';

const SPICE_PILLARS = [
  {
    id: 1,
    name: 'Restraint',
    metaphor: 'Cumin (Base Note)',
    principle: 'Perfection is reached not when there is nothing left to add, but when nothing more can be stripped away.',
    domain: 'Product Architecture & Life',
  },
  {
    id: 2,
    name: 'Ground Truth',
    metaphor: 'Turmeric (The Purifier)',
    principle: 'Confront operational reality early. Ground truth beats comfortable executive narratives every single time.',
    domain: 'Founder Diagnostics',
  },
  {
    id: 3,
    name: 'Catalyst',
    metaphor: 'Red Chili (Kinetic Drive)',
    principle: 'Controlled friction spurs innovation. Without bold urgency, clean concepts remain theoretical artifacts.',
    domain: 'Go-to-Market Velocity',
  },
  {
    id: 4,
    name: 'Structure',
    metaphor: 'Coriander (The Binder)',
    principle: 'Rigorous systems do not constrain imagination; they grant the cognitive clearance for it to thrive.',
    domain: 'Operational Simplicity',
  },
  {
    id: 5,
    name: 'Nuance',
    metaphor: 'Garam Masala / Saffron (The Finish)',
    principle: 'Timing and elevation. Lasting value emerges from the final 5% of care, taste, and executive judgment.',
    domain: 'Brand & Strategic Moats',
  },
];

export default function Hero({ onOpenInquiry }) {
  const [activePillar, setActivePillar] = useState(SPICE_PILLARS[0]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-36 pb-24 px-6 md:px-12 overflow-hidden bg-obsidian-950 bg-deep-vignette">
      {/* Deep Atmospheric Layered Auras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-to-tr from-spice-amber/15 via-spice-saffron/10 to-transparent blur-[160px] pointer-events-none -z-10 rounded-full animate-atmospheric-slow" />
      <div className="absolute bottom-1/4 right-10 w-[550px] h-[450px] bg-spice-turmeric/10 blur-[140px] pointer-events-none -z-10 rounded-full animate-atmospheric-reverse" />
      <div className="absolute top-2/3 left-10 w-[400px] h-[350px] bg-amber-900/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      
      {/* Subtle Structural Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-20 pointer-events-none" />

      {/* Floating Ember Light Sparks */}
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-spice-saffron/40 blur-[1px] animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-spice-amber/30 blur-[1px] animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-amber-200/30 blur-[1px] animate-pulse" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Editorial Eyebrow Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-spice-amber/30 bg-obsidian-900/80 backdrop-blur-md text-spice-saffron text-xs font-mono tracking-wider mb-8 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-spice-amber" />
          <span>WRITING BOARD · LIFE LESSONS · BOUTIQUE ADVISORY</span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-parchment-50 max-w-5xl leading-[1.08]">
          The most enduring things in life, food, and business are made with{' '}
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-spice-saffron via-spice-amber to-amber-200 drop-shadow-sm">
            five spices or less.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl text-parchment-400 font-light max-w-2xl leading-relaxed">
          A dedicated space exploring radical subtraction. We isolate the vital few from the trivial many—whether refining personal habits, publishing deep-form essays, or partnering with founders to streamline high-growth ventures.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#writing"
            className="group px-7 py-3.5 rounded-full bg-parchment-100 text-obsidian-950 font-semibold text-sm flex items-center gap-2.5 transition-all hover:bg-white hover:shadow-2xl hover:shadow-spice-amber/20 active:scale-95"
          >
            <BookOpen className="w-4 h-4 text-obsidian-950" />
            <span>Explore Essays & Lessons</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={onOpenInquiry}
            className="group px-7 py-3.5 rounded-full border border-white/15 bg-obsidian-900/70 backdrop-blur-md text-parchment-100 font-medium text-sm flex items-center gap-2.5 transition-all hover:border-spice-amber/60 hover:bg-obsidian-850 active:scale-95"
          >
            <Compass className="w-4 h-4 text-spice-amber" />
            <span>Bespoke Founder Advisory</span>
          </button>
        </div>

        {/* Interactive 5-Spice Pillar Matrix */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest text-parchment-400 font-mono">
              The Five Disciplines of Restraint:
            </span>
            <span className="text-xs font-mono text-spice-amber">
              Selected Principle: [{activePillar.metaphor}]
            </span>
          </div>

          {/* Pillar Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {SPICE_PILLARS.map((pillar) => {
              const isSelected = activePillar.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'bg-obsidian-850 border-spice-amber/70 shadow-xl shadow-spice-amber/15 -translate-y-0.5'
                      : 'bg-obsidian-900/40 border-white/5 hover:border-white/20 hover:bg-obsidian-900'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-spice-amber via-spice-saffron to-amber-200" />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-parchment-400">0{pillar.id}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-spice-amber' : 'bg-transparent'}`} />
                  </div>
                  <div className="font-serif font-medium text-sm text-parchment-100 mt-2.5">
                    {pillar.name}
                  </div>
                  <div className="text-[11px] text-parchment-400 truncate mt-0.5 font-light">
                    {pillar.metaphor.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Principle Card */}
          <div className="mt-4 p-6 rounded-2xl bg-obsidian-900/70 border border-white/10 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-spice-amber uppercase tracking-wider block">
                {activePillar.domain}
              </span>
              <p className="font-serif italic text-base sm:text-lg text-parchment-100">
                "{activePillar.principle}"
              </p>
            </div>
            <div className="shrink-0 text-xs font-mono text-parchment-400/80 bg-obsidian-950/90 px-4 py-2 rounded-lg border border-white/5">
              Discipline #{activePillar.id} in Practice
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
