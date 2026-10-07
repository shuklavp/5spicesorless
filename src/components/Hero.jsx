import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass, Flame, Heart, Sparkles, ShieldCheck } from 'lucide-react';

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
    principle: 'Confront operational reality early. Honest, single-page memos beat comfortable 60-slide decks every single time.',
    domain: 'Founder Diagnostics & Reporting',
  },
  {
    id: 3,
    name: 'Catalyst',
    metaphor: 'Red Chili (Kinetic Drive)',
    principle: 'Take ambitious risks and back your people unconditionally when they dare to innovate.',
    domain: 'Team Leadership & Velocity',
  },
  {
    id: 4,
    name: 'Structure',
    metaphor: 'Coriander (The Binder)',
    principle: 'Simple systems scale across 165+ people and 4 offices without bureaucratizing creative intuition.',
    domain: 'Operational Simplicity',
  },
  {
    id: 5,
    name: 'Nuance',
    metaphor: 'Garam Masala / Amchur (The Finish)',
    principle: 'Patience is kinetic. Exceptional outcomes emerge from the final 5% of care, taste, and executive judgment.',
    domain: 'Brand & Advisory Moats',
  },
];

export default function Hero({ onOpenInquiry }) {
  const [activePillar, setActivePillar] = useState(SPICE_PILLARS[0]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-36 pb-20 px-6 md:px-12 bg-white dark:bg-canvas-dark bg-modern-grid transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Editorial Top Kicker & Accent Rule */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-canvas-border dark:border-canvas-darkBorder">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-berry-600 animate-pulse" />
            <span className="text-xs font-mono tracking-widestEditorial uppercase text-ink-700 dark:text-ink-200 font-bold">
              30 YEARS OF VENTURES, SURVIVAL & RADICAL SIMPLICITY
            </span>
          </div>
          <div className="flex flex-col sm:items-end">
            <span className="text-xs font-bold text-cobalt-600 dark:text-cobalt-400 font-mono tracking-wider">
              Kuala Lumpur · Global Practice
            </span>
            <div className="w-10 h-0.5 bg-berry-600 rounded-full mt-1.5" />
          </div>
        </div>

        {/* High-Impact Two-Tone Headline */}
        <div className="space-y-0 tracking-tightest">
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black text-ink-900 dark:text-white leading-[0.95]">
            Five Spices
          </h1>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black text-berry-600 dark:text-berry-400 leading-[0.95] mt-1">
            Or Less.
          </h1>
        </div>

        {/* Subhead & Track Record Metric Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-2xl text-ink-700 dark:text-ink-200 font-normal leading-relaxed max-w-2xl font-sans">
              From pioneering a venture-backed industry category to surviving being declared dead and relearning how to speak—I write down my life lessons before I forget them, and advise founders as a fractional operator and steady confidant.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#writing"
                className="group px-7 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-sm flex items-center gap-2.5 transition-all shadow-lg shadow-berry-600/25 active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Read Stories & Lessons</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenInquiry}
                className="group px-7 py-3.5 rounded-full border-2 border-ink-900 dark:border-white text-ink-900 dark:text-white hover:bg-ink-900 hover:text-white dark:hover:bg-white dark:hover:text-ink-950 font-bold text-sm flex items-center gap-2.5 transition-all active:scale-95"
              >
                <Compass className="w-4 h-4 text-cobalt-600 dark:text-cobalt-400" />
                <span>Advisory Partner ("A Ben to Your Jules")</span>
              </button>
            </div>
          </div>

          {/* Genuine 30-Year Track Record Card */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder shadow-lg space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-5xl font-black text-cobalt-600 dark:text-cobalt-400 leading-none">
                30
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-ink-900 dark:text-white leading-tight">
                  Years of Journey
                </span>
                <span className="text-xs font-mono text-berry-600 dark:text-berry-400 font-bold">
                  Biology · ENPC Paris · Founder
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-canvas-border dark:bg-canvas-darkBorder" />

            <div className="space-y-2 text-xs text-ink-600 dark:text-ink-200 font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cobalt-500 shrink-0" />
                <span><strong>$4.5M Raised</strong> & Water Sub-Metering Category Created</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-berry-600 shrink-0" />
                <span><strong>165+ Team Led</strong> Across 4 Regional Offices</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-ink-900 dark:bg-white shrink-0" />
                <span><strong>22 Years Thriving</strong> Post Near-Fatal Skull Surgery</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <span><strong>20-Year Marriage</strong> & 16-Year-Old Daughter</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Disciplines Interactive Matrix */}
        <div className="mt-16 pt-10 border-t border-canvas-border dark:border-canvas-darkBorder">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-300 font-mono font-bold">
              The Subtractive Creed:
            </span>
            <span className="text-xs font-mono text-berry-600 dark:text-berry-400 font-bold">
              Principle: [{activePillar.metaphor}]
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
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 relative overflow-hidden ${
                    isSelected
                      ? 'bg-white dark:bg-canvas-darkCard border-berry-600 shadow-md shadow-berry-600/10 -translate-y-0.5'
                      : 'bg-canvas-subtle dark:bg-canvas-darkCard/50 border-canvas-border dark:border-canvas-darkBorder hover:border-cobalt-400'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-berry-600" />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cobalt-600 dark:text-cobalt-400">
                      0{pillar.id}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-berry-600' : 'bg-transparent'}`} />
                  </div>
                  <div className="font-serif font-bold text-sm text-ink-900 dark:text-white mt-2.5">
                    {pillar.name}
                  </div>
                  <div className="text-[11px] text-ink-500 dark:text-ink-300 truncate mt-0.5 font-light">
                    {pillar.metaphor.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Principle Card */}
          <div className="mt-4 p-6 rounded-2xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-berry-600 dark:text-berry-400 uppercase tracking-wider font-bold block">
                {activePillar.domain}
              </span>
              <p className="font-serif italic text-base sm:text-lg text-ink-900 dark:text-white font-medium">
                "{activePillar.principle}"
              </p>
            </div>
            <div className="shrink-0 text-xs font-mono text-cobalt-700 dark:text-cobalt-300 bg-cobalt-50 dark:bg-canvas-dark px-4 py-2 rounded-xl border border-cobalt-100 dark:border-canvas-darkBorder font-semibold">
              Discipline #{activePillar.id} in Practice
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
