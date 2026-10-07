import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';

// Future essay notes retained in memory:
// - Essay Note 1: "A plan with twenty priorities has none. Limiting yourself to five forces you to back only what genuinely moves the needle."
// - Essay Note 2: "Five levers keep execution sharp and minds calm. When your priorities fit on one hand, teams stop debating and start building."
// - Essay Note 3: "Just like a great pot of dal, five elements are all it takes to build real depth. Anything more is usually just noise."

const SPICE_PILLARS = [
  {
    id: 1,
    name: 'Cumin',
    role: 'THE FOUNDATION',
    metaphor: 'Cumin (The Foundation)',
    primaryImage: '/cumin.png',
    secondaryImage: '/spices/cumin.png',
    principle: 'A good dish begins with cumin tempered at just the right heat. Cold oil extracts nothing, while smoking oil burns it black. The same patience governs life, love, and work. Get the foundation right, and the rest follows rather nicely.',
  },
  {
    id: 2,
    name: 'Turmeric',
    role: 'GROUND TRUTH',
    metaphor: 'Turmeric (The Purifier)',
    primaryImage: '/turmeric.png',
    secondaryImage: '/spices/turmeric.png',
    principle: 'A pinch brings warmth and health, but an extra pinch turns the entire dish bitter. That is an awkward truth to learn. In work and in relationships, knowing when to stop is often the difference between a lasting bond and a quiet disaster.',
  },
  {
    id: 3,
    name: 'Coriander',
    role: 'COHESION',
    metaphor: 'Coriander (The Binder)',
    primaryImage: '/coriander.png',
    secondaryImage: '/spices/coriander.png',
    principle: 'Coriander is the quiet, forgiving glue of the pan. It softens harsh edges and covers minor slips. In business, honest monthly updates play the exact same role, keeping founders and shareholders bound together when things get choppy.',
  },
  {
    id: 4,
    name: 'Red Chillies',
    role: 'CALCULATED RISK',
    metaphor: 'Red Chillies (The Kinetic Spark)',
    primaryImage: '/red-chillies.png',
    secondaryImage: '/spices/red-chillies.png',
    principle: 'A measured hand with chilli gets you nowhere interesting. The best dishes demand courage with the spice, and life demands the same with your choices. Playing not to lose is the quietest way to fail. Take the bold gamble, embrace the heat, and let the rewards take care of themselves.',
  },
  {
    id: 5,
    name: 'Aromatics',
    role: 'EXECUTIVE RESTRAINT',
    metaphor: 'Aromatics (The Finish)',
    primaryImage: '/aromatics.png',
    secondaryImage: '/spices/aromatics.png',
    principle: 'Aromatics do not add bulk to the pot, they leave the memory. They go in at the very end, off the heat. In life and business, the final chapter defines your character. It is the rare wisdom of knowing when your part is finished, protecting your people, and exiting with your reputation and honour intact.',
  },
];

export default function Hero({ onOpenInquiry }) {
  const [activePillar, setActivePillar] = useState(SPICE_PILLARS[0]);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  // Dynamic pillar displayed: shows hovered pillar on mouseover, or active pillar
  const displayedPillar = hoveredPillar || activePillar;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-36 pb-20 px-6 md:px-12 bg-sandpaper-texture transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Top Header Bar */}
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
                Subtractive
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-berry-600 rounded-full" />
              </span>{' '}
              Advantage
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-0 tracking-tightest">
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black text-ink-900 dark:text-white leading-[0.95]">
            Five Spices
          </h1>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black text-berry-600 dark:text-berry-400 leading-[0.95] mt-1">
            Or Less.
          </h1>
        </div>

        {/* Subhead & 05 Core Levers Metric Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-2xl text-ink-700 dark:text-ink-200 font-normal leading-relaxed max-w-2xl font-sans">
              The best things in life, work, and cooking are born from subtraction. When you remove what is unnecessary, clarity, speed, and flavour take care of themselves. In the end, less almost always works better than more.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#writing"
                className="group px-7 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-sm flex items-center gap-2.5 transition-all shadow-lg shadow-berry-600/25 active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Explore Stories & Lessons</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenInquiry}
                className="group px-7 py-3.5 rounded-full border-2 border-ink-900 dark:border-white text-ink-900 dark:text-white hover:bg-ink-900 hover:text-white dark:hover:bg-white dark:hover:text-ink-950 font-bold text-sm flex items-center gap-2.5 transition-all active:scale-95"
              >
                <Compass className="w-4 h-4 text-cobalt-600 dark:text-cobalt-400" />
                <span>Bespoke Founder Advisory</span>
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

        {/* The Subtractive Mindset Section with Mouseover Interaction */}
        <div className="mt-16 pt-10 border-t border-canvas-border dark:border-canvas-darkBorder">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-300 font-mono font-bold">
              The Subtractive Mindset:
            </span>
            <span className="text-xs font-mono font-bold text-berry-600 dark:text-berry-400">
              Active: [{displayedPillar.metaphor}]
            </span>
          </div>

          {/* 5 Spice Selector Boxes with Mouseover & Click triggers */}
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
                  className={`text-left p-5 rounded-3xl border-2 transition-all duration-200 relative overflow-hidden min-h-[155px] sm:min-h-[170px] flex flex-col justify-between group shadow-sm ${
                    isCurrent
                      ? 'bg-white dark:bg-canvas-darkCard border-berry-600 shadow-xl shadow-berry-600/10 -translate-y-1'
                      : 'bg-canvas-subtle dark:bg-canvas-darkCard/60 border-canvas-border dark:border-canvas-darkBorder hover:border-cobalt-400 hover:bg-white hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top Bar on Active / Hover */}
                  {isCurrent && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-berry-600" />
                  )}
                  
                  {/* Top Row: Unboxed Role Text on Left, Number & Dot on Right */}
                  <div className="flex items-start justify-between w-full relative z-10">
                    {/* Management Parallel (Plain Text without the rounded box) */}
                    <div className={`text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase leading-tight ${
                      isCurrent ? 'text-berry-600 dark:text-berry-400' : 'text-ink-600 dark:text-ink-300 group-hover:text-ink-900'
                    }`}>
                      {pillar.role}
                    </div>

                    {/* Number & Dot (Top Right) */}
                    <div className="flex items-center gap-1.5 shrink-0 ml-2 pt-0.5">
                      <span className="font-mono text-xs font-bold text-cobalt-600 dark:text-cobalt-400">
                        0{pillar.id}
                      </span>
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          isCurrent ? 'bg-berry-600' : 'bg-canvas-border dark:bg-canvas-darkBorder'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Middle / Name Area: Reduced by 20-25% (text-base sm:text-lg) for elegant proportions */}
                  <div className="pt-2.5 pb-1 text-left relative z-10 max-w-[60%]">
                    <div className="font-serif font-bold text-base sm:text-lg text-ink-950 dark:text-white leading-tight tracking-tight group-hover:text-berry-600 transition-colors">
                      {pillar.name}
                    </div>
                  </div>

                  {/* Bottom Right Corner: Spice Drawing nestled in the corner */}
                  <div className="absolute -bottom-1 -right-1 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={pillar.primaryImage}
                      alt={pillar.name}
                      className="w-full h-full object-contain mix-blend-multiply dark:invert dark:mix-blend-screen opacity-95 group-hover:opacity-100"
                      onError={(e) => {
                        if (!e.currentTarget.dataset.triedSecondary) {
                          e.currentTarget.dataset.triedSecondary = 'true';
                          e.currentTarget.src = pillar.secondaryImage;
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

          {/* Dynamic Display Card: Updates instantly on Mouseover & Selection */}
          <div className="mt-4 p-6 rounded-2xl bg-white dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm transition-all duration-300">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-canvas-subtle dark:bg-canvas-dark rounded-2xl border border-canvas-border dark:border-canvas-darkBorder p-1.5 flex items-center justify-center overflow-hidden">
                <img
                  src={displayedPillar.primaryImage}
                  alt={displayedPillar.name}
                  className="w-full h-full object-contain mix-blend-multiply dark:invert dark:mix-blend-screen"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.triedSecondary) {
                      e.currentTarget.dataset.triedSecondary = 'true';
                      e.currentTarget.src = displayedPillar.secondaryImage;
                    } else {
                      e.currentTarget.style.display = 'none';
                    }
                  }}
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-berry-600 dark:text-berry-400">
                    {displayedPillar.role}
                  </span>
                  <span className="text-xs text-ink-400 font-mono">·</span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-900 dark:text-white">
                    {displayedPillar.name}
                  </span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-ink-900 dark:text-white font-medium leading-relaxed">
                  "{displayedPillar.principle}"
                </p>
              </div>
            </div>
            <div className="shrink-0 text-xs font-mono text-ink-700 dark:text-ink-200 bg-canvas-subtle dark:bg-canvas-dark px-4 py-2 rounded-xl border border-canvas-border dark:border-canvas-darkBorder font-semibold self-start md:self-auto">
              Rule #{displayedPillar.id} in Practice
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
