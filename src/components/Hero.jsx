import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass, Flame, Sparkles } from 'lucide-react';

const SPICE_PILLARS = [
  {
    id: 1,
    name: 'Restraint',
    metaphor: 'Cumin (The Foundation)',
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
    metaphor: 'Red Chili (Kinetic Energy)',
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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-36 pb-20 px-6 md:px-12 bg-paper-50 dark:bg-forest-950 bg-editorial-grid transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Editorial Top Kicker & Accent Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-paper-200 dark:border-forest-850">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta-600 animate-pulse" />
            <span className="text-xs font-mono tracking-widestEditorial uppercase text-forest-800 dark:text-paper-300 font-semibold">
              SIMPLICITY IN LIFE · FOOD · STRATEGY
            </span>
          </div>
          <div className="flex flex-col sm:items-end">
            <span className="text-xs font-semibold text-ink-700 dark:text-paper-300">
              The Subtractive Advantage
            </span>
            <div className="w-10 h-0.5 bg-terracotta-600 rounded-full mt-1.5" />
          </div>
        </div>

        {/* Dual-Tone Split Headline (Inspired by "Book Lovers" and "India's Sex Ratio Has Changed.") */}
        <div className="space-y-0 tracking-tightest">
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black text-forest-900 dark:text-paper-50 leading-[0.95]">
            Five Spices
          </h1>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black text-terracotta-600 dark:text-terracotta-400 leading-[0.95] mt-1">
            Or Less.
          </h1>
        </div>

        {/* Subhead & Callout Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-2xl text-ink-800 dark:text-paper-200 font-normal leading-relaxed max-w-2xl font-sans">
              The most enduring things in life, cooking, and company building are achieved through subtraction. We strip away the non-essential to unlock clarity, speed, and flavor.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#writing"
                className="group px-7 py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-sm flex items-center gap-2.5 transition-all shadow-lg shadow-terracotta-600/25 active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Explore Essays & Lessons</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenInquiry}
                className="group px-7 py-3.5 rounded-full border-2 border-forest-900 dark:border-paper-200 text-forest-900 dark:text-paper-100 hover:bg-forest-900 hover:text-white dark:hover:bg-paper-100 dark:hover:text-forest-950 font-semibold text-sm flex items-center gap-2.5 transition-all active:scale-95"
              >
                <Compass className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
                <span>Bespoke Founder Advisory</span>
              </button>
            </div>
          </div>

          {/* Bold Metric Badge (Inspired by "60 Libraries" poster callout) */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-paper-100 dark:bg-forest-900/70 border border-paper-200 dark:border-forest-800 shadow-xl space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-5xl font-black text-forest-900 dark:text-terracotta-400 leading-none">
                05
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-ink-900 dark:text-paper-100 leading-tight">
                  Core Levers
                </span>
                <span className="text-xs font-mono text-terracotta-600 dark:text-terracotta-400 font-semibold">
                  Zero Operational Bloat
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-paper-200 dark:bg-forest-800" />

            <div className="space-y-1.5 text-xs text-ink-700 dark:text-paper-300 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-700 dark:bg-paper-400" />
                <span>Weekly Long-Form Strategy Memos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-700 dark:bg-paper-400" />
                <span>Direct 1:1 Founder Sparring Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-600" />
                <span>Strictly Capped Client Capacity</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Disciplines Interactive Matrix */}
        <div className="mt-16 pt-10 border-t border-paper-200 dark:border-forest-850">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest text-ink-600 dark:text-paper-400 font-mono font-semibold">
              The Five Disciplines of Restraint:
            </span>
            <span className="text-xs font-mono text-terracotta-600 dark:text-terracotta-400 font-medium">
              Selected: [{activePillar.metaphor}]
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
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'bg-paper-100 dark:bg-forest-900 border-terracotta-600 shadow-md shadow-terracotta-600/10 -translate-y-0.5'
                      : 'bg-paper-50 dark:bg-forest-950/60 border-paper-200 dark:border-forest-850 hover:border-paper-300 dark:hover:border-forest-700'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-terracotta-600" />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-terracotta-600 dark:text-terracotta-400">
                      0{pillar.id}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-terracotta-600' : 'bg-transparent'}`} />
                  </div>
                  <div className="font-serif font-bold text-sm text-forest-900 dark:text-paper-100 mt-2.5">
                    {pillar.name}
                  </div>
                  <div className="text-[11px] text-ink-600 dark:text-paper-400 truncate mt-0.5 font-light">
                    {pillar.metaphor.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Principle Card */}
          <div className="mt-4 p-6 rounded-2xl bg-paper-100 dark:bg-forest-900/80 border border-paper-200 dark:border-forest-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-terracotta-600 dark:text-terracotta-400 uppercase tracking-wider font-semibold block">
                {activePillar.domain}
              </span>
              <p className="font-serif italic text-base sm:text-lg text-forest-950 dark:text-paper-100 font-medium">
                "{activePillar.principle}"
              </p>
            </div>
            <div className="shrink-0 text-xs font-mono text-forest-900 dark:text-paper-200 bg-paper-200 dark:bg-forest-950 px-4 py-2 rounded-xl border border-paper-300 dark:border-forest-800 font-medium">
              Discipline #{activePillar.id} in Practice
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
