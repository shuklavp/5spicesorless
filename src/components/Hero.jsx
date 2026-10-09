// src/components/Hero.jsx
import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';

const SPICE_PILLARS = [
  {
    id: 1,
    name: 'Cumin',
    code: '01 / CUMIN',
    lever: 'The Foundation',
    role: 'THE FOUNDATION',
    metaphor: 'Cumin (The Foundation)',
    summary: 'Patience with the heat. Foundations in life, love, and work.',
    primaryImage: '/cumin.png',
    secondaryImage: '/spices/cumin.png',
    darkImage: '/cumin-dark.png',
    principle: 'A good dish begins with cumin tempered at just the right heat. Cold oil extracts nothing, while smoking oil burns it black. The same patience governs life, love, and work. Get the foundation right, and the rest follows rather nicely.',
  },
  {
    id: 2,
    name: 'Turmeric',
    code: '02 / TURMERIC',
    lever: 'Ground Truth',
    role: 'GROUND TRUTH',
    metaphor: 'Turmeric (The Purifier)',
    summary: 'A pinch heals, excess ruins. The fine line in honest bonds.',
    primaryImage: '/turmeric.png',
    secondaryImage: '/spices/turmeric.png',
    darkImage: '/turmeric-dark.png',
    principle: 'A pinch brings warmth and health, but an extra pinch turns the entire dish bitter. That is an awkward truth to learn. In work and in relationships, knowing when to stop is often the difference between a lasting bond and a quiet disaster.',
  },
  {
    id: 3,
    name: 'Coriander',
    code: '03 / CORIANDER',
    lever: 'Cohesion',
    role: 'COHESION',
    metaphor: 'Coriander (The Binder)',
    summary: 'The forgiving binder. Honest monthly updates keeping partners aligned.',
    primaryImage: '/coriander.png',
    secondaryImage: '/spices/coriander.png',
    darkImage: '/coriander-dark.png',
    principle: 'Coriander is the quiet, forgiving glue of the pan. It softens harsh edges and covers minor slips. In business, honest monthly updates play the exact same role, keeping founders and shareholders bound together when things get choppy.',
  },
  {
    id: 4,
    name: 'Red Chillies',
    code: '04 / CHILLIES',
    lever: 'Calculated Risk',
    role: 'CALCULATED RISK',
    metaphor: 'Red Chillies (The Kinetic Spark)',
    summary: 'Courage with spice. Playing not to lose is quiet failure.',
    primaryImage: '/red-chillies.png',
    secondaryImage: '/spices/red-chillies.png',
    darkImage: '/red-chillies-dark.png',
    principle: 'A measured hand with chilli gets you nowhere interesting. The best dishes demand courage with the spice, and life demands the same with your choices. Playing not to lose is the quietest way to fail. Take the bold gamble, embrace the heat, and let the rewards take care of themselves.',
  },
  {
    id: 5,
    name: 'Aromatics',
    code: '05 / AROMATICS',
    lever: 'Restraint',
    role: 'EXECUTIVE RESTRAINT',
    metaphor: 'Aromatics (The Finish)',
    summary: 'Added off the flame. Knowing when the work is done.',
    primaryImage: '/aromatics.png',
    secondaryImage: '/spices/aromatics.png',
    darkImage: '/aromatics-dark.png',
    principle: 'Aromatics do not add bulk to the pot, they leave the memory. They go in at the very end, off the heat. In life and business, the final chapter defines your character. It is the rare wisdom of knowing when your part is finished, protecting your people, and exiting with your reputation and honour intact.',
  },
];

export default function Hero({ onOpenInquiry }) {
  const [activePillar, setActivePillar] = useState(SPICE_PILLARS[0]);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const displayedPillar = hoveredPillar || activePillar;

  return (
    <section id="hero" className="relative flex flex-col justify-center pt-32 pb-16 px-6 md:px-12 bg-sandpaper-texture transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Top Header Bar: Changed to SIMPLIFICATION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-canvas-border dark:border-canvas-darkBorder">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-berry-600 animate-pulse" />
            <span className="text-xs font-mono tracking-widestEditorial uppercase text-ink-700 dark:text-ink-200 font-bold">
              SIMPLICITY IN LIFE, FOOD, AND WORK
            </span>
          </div>
          
          <div className="flex items-center">
            <span className="text-xs font-medium text-ink-800 dark:text-ink-200 tracking-wide">
              The{' '}
              <span className="relative inline-block font-bold text-berry-600 dark:text-berry-400">
                Simplification
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-berry-600 rounded-full" />
              </span>{' '}
              Advantage
            </span>
          </div>
        </div>

        {/* Headline: Five Spices or Less in ONE Bold Line */}
        <div className="mb-6">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-ink-900 dark:text-white leading-[1.08] tracking-tight">
            Five Spices <span className="text-berry-600 dark:text-berry-400">Or Less.</span>
          </h1>
        </div>

        {/* Subhead & 05 Core Levers Metric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-base sm:text-xl text-ink-700 dark:text-ink-200 font-normal leading-relaxed max-w-2xl font-sans">
              The best things in life, work, and cooking are born from simplification. When you remove what is unnecessary, clarity, speed, and flavour take care of themselves. In the end, less almost always works better than more.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#writing"
                className="group px-7 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs uppercase tracking-wider font-mono flex items-center gap-2.5 transition-all shadow-lg shadow-berry-600/25 active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Explore Stories &amp; Lessons →</span>
              </a>

              <button
                onClick={onOpenInquiry}
                className="group px-7 py-3.5 rounded-full border-2 border-ink-900 dark:border-white text-ink-900 dark:text-white hover:bg-ink-900 hover:text-white dark:hover:bg-white dark:hover:text-ink-950 font-bold text-xs uppercase tracking-wider font-mono flex items-center gap-2.5 transition-all active:scale-95"
              >
                <Compass className="w-4 h-4 text-cobalt-600 dark:text-cobalt-400" />
                <span>Bespoke Founder Advisory →</span>
              </button>
            </div>
          </div>

          {/* Aligned 05 Core Levers Box */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder shadow-lg space-y-4">
            <div className="flex items-center gap-3.5">
              <span className="font-serif text-5xl font-black text-cobalt-600 dark:text-cobalt-400 leading-none shrink-0">
                05
              </span>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-xl sm:text-2xl font-bold text-ink-900 dark:text-white leading-tight">
                  Core Levers
                </span>
                <span className="text-xs font-mono text-berry-600 dark:text-berry-400 font-bold uppercase tracking-wider mt-0.5">
                  Zero Operational Bloat
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-canvas-border dark:bg-canvas-darkBorder" />

            <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-200 font-normal leading-relaxed">
              Five levers are enough to move a mountain, and few enough that none can hide. When you refuse complexity, focus does the heavy lifting.
            </p>
          </div>
        </div>

        {/* The Simplification Mindset: 5 Cards with Spices in background & Rollover Effect Box below */}
        <div className="pt-8 border-t border-canvas-border dark:border-canvas-darkBorder">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-300 font-mono font-bold">
              The Simplification Mindset:
            </span>
            <span className="text-xs font-mono font-bold text-berry-600 dark:text-berry-400">
              Active: [{displayedPillar.metaphor}]
            </span>
          </div>

          {/* 5 Cards (Style per Screenshot 2: Spice names on top in Red and small, core Lever in Big Font, spices as background) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {SPICE_PILLARS.map((pillar) => {
              const isSelected = activePillar.id === pillar.id;
              const isHovered = hoveredPillar?.id === pillar.id;
              const isCurrent = isHovered || (isSelected && !hoveredPillar);

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  onMouseEnter={() => setHoveredPillar(pillar)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  className={`text-left p-5 rounded-3xl border-2 transition-all duration-200 relative overflow-hidden min-h-[165px] flex flex-col justify-between group shadow-sm ${
                    isCurrent
                      ? 'bg-white dark:bg-canvas-darkCard border-berry-600 shadow-xl shadow-berry-600/10 -translate-y-1'
                      : 'bg-white dark:bg-canvas-darkCard/80 border-canvas-border dark:border-canvas-darkBorder hover:border-berry-400 hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top Bar on Active / Hover */}
                  {isCurrent && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-berry-600" />
                  )}

                  {/* Text Content */}
                  <div className="relative z-10 space-y-1">
                    {/* Top: Spice Name in Red and Small (per Screenshot 2) */}
                    <div className="text-[11px] font-mono font-bold text-berry-600 dark:text-berry-400 uppercase tracking-wider">
                      {pillar.code}
                    </div>

                    {/* Core Lever in Big Font (per Screenshot 2) */}
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 dark:text-white leading-tight">
                      {pillar.lever}
                    </h3>

                    {/* Summary Description */}
                    <p className="text-xs text-ink-600 dark:text-ink-300 font-light leading-relaxed pt-1">
                      {pillar.summary}
                    </p>
                  </div>

                  {/* Spice Drawing as Background Artwork (per user request 2) */}
                  <div className="absolute -bottom-1 -right-1 w-20 h-20 pointer-events-none opacity-30 dark:opacity-20 group-hover:opacity-45 transition-opacity">
                    <img
                      src={pillar.primaryImage}
                      alt={pillar.name}
                      className="w-full h-full object-contain mix-blend-multiply dark:hidden"
                      onError={(e) => {
                        if (!e.currentTarget.dataset.triedSecondary) {
                          e.currentTarget.dataset.triedSecondary = 'true';
                          e.currentTarget.src = pillar.secondaryImage;
                        } else {
                          e.currentTarget.style.display = 'none';
                        }
                      }}
                    />
                    <img
                      src={pillar.darkImage}
                      alt={pillar.name}
                      className="w-full h-full object-contain hidden dark:block"
                      onError={(e) => {
                        if (!e.currentTarget.dataset.triedSecondary) {
                          e.currentTarget.dataset.triedSecondary = 'true';
                          e.currentTarget.src = pillar.secondaryImage.replace('.png', '-dark.png');
                        } else {
                          e.currentTarget.style.display = 'none';
                        }
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Display Rollover Box (per Screenshot 1) */}
          <div className="mt-4 p-6 rounded-3xl bg-white dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md transition-all duration-300">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-canvas-subtle dark:bg-canvas-dark rounded-2xl border border-canvas-border dark:border-canvas-darkBorder p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={displayedPillar.primaryImage}
                  alt={displayedPillar.name}
                  className="w-full h-full object-contain mix-blend-multiply dark:hidden"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.triedSecondary) {
                      e.currentTarget.dataset.triedSecondary = 'true';
                      e.currentTarget.src = displayedPillar.secondaryImage;
                    } else {
                      e.currentTarget.style.display = 'none';
                    }
                  }}
                />
                <img
                  src={displayedPillar.darkImage}
                  alt={displayedPillar.name}
                  className="w-full h-full object-contain hidden dark:block"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.triedSecondary) {
                      e.currentTarget.dataset.triedSecondary = 'true';
                      e.currentTarget.src = displayedPillar.secondaryImage.replace('.png', '-dark.png');
                    } else {
                      e.currentTarget.style.display = 'none';
                    }
                  }}
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-berry-600 dark:text-berry-400 uppercase tracking-wider">
                  <span>{displayedPillar.role} · {displayedPillar.name}</span>
                </div>
                <blockquote className="font-serif italic text-sm sm:text-base text-ink-900 dark:text-white leading-relaxed">
                  "{displayedPillar.principle}"
                </blockquote>
              </div>
            </div>

            <div className="shrink-0 self-end md:self-center">
              <span className="font-mono text-xs px-4 py-2 rounded-full border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-dark text-ink-700 dark:text-ink-300 font-semibold shadow-sm">
                Rule #{displayedPillar.id} in Practice
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
