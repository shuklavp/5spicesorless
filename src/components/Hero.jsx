// src/components/Hero.jsx
import React, { useState } from 'react';

const PILLARS = [
  {
    id: 1,
    spice: 'CUMIN',
    name: 'The Foundation',
    subtext: 'Patience with the heat. Foundations in life, love, and work.',
    quote:
      'A good dish begins with cumin tempered at just the right heat. Cold oil extracts nothing, while smoking oil burns it black. The same patience governs life, love, and work. Get the foundation right, and the rest follows rather nicely.',
    image: '/cumin.png',
  },
  {
    id: 2,
    spice: 'TURMERIC',
    name: 'Ground Truth',
    subtext: 'A pinch heals, excess ruins. The fine line in honest bonds.',
    quote:
      'Turmeric never lies. Too little and the dish lacks soul; too much and bitterness takes over. In conversations and partnerships, speak plain truth with warmth—measured, honest, and unadorned.',
    image: '/turmeric.png',
  },
  {
    id: 3,
    spice: 'CORIANDER',
    name: 'Cohesion',
    subtext: 'The forgiving binder. Honest monthly updates keeping partners aligned.',
    quote:
      'Coriander does not demand the spotlight. It binds disparate flavors into a quiet, coherent whole. Every enduring enterprise needs the quiet unifier who bridges conflicting ambitions.',
    image: '/coriander.png',
  },
  {
    id: 4,
    spice: 'CHILLIES',
    name: 'Calculated Risk',
    subtext: 'Courage with spice. Playing not to lose is quiet failure.',
    quote:
      'Heat brings food to life, but only when introduced with calm precision. In business and high-stakes choices, timid neutrality accomplishes nothing. You must know when to introduce real fire.',
    image: '/red-chillies.png',
  },
  {
    id: 5,
    spice: 'AROMATICS',
    name: 'Restraint',
    subtext: 'Added off the flame. Knowing when the work is done.',
    quote:
      'The best aromatics are stirred in after the fire has been turned off. Knowing when to stop fiddling, step back, and let the work speak for itself is the highest form of executive discipline.',
    image: '/aromatics.png',
  },
];

export default function Hero({ onNavigate }) {
  const [activePillar, setActivePillar] = useState(PILLARS[0]);

  return (
    <section id="hero" className="relative flex flex-col justify-center pt-28 pb-16 px-6 md:px-12 bg-white dark:bg-canvas-dark text-ink-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-berry-600" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-berry-600 dark:text-berry-400 font-bold">
              SIMPLICITY IN LIFE, FOOD, AND WORK
            </span>
          </div>
          <div className="hidden sm:block text-[11px] font-mono tracking-wider text-ink-500 dark:text-ink-300 font-medium">
            The <span className="text-berry-600 dark:text-berry-400 underline underline-offset-4">Simplification</span> Advantage
          </div>
        </div>

        {/* Hero Title & 05 Core Levers Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Heading, Subhead, CTA Buttons */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-ink-900 dark:text-white">
              Five Spices <span className="text-berry-600 dark:text-berry-400">Or Less.</span>
            </h1>

            <p className="text-base sm:text-lg text-ink-700 dark:text-gray-300 max-w-xl leading-relaxed font-light">
              The best things in life, work, and cooking are born from simplification. When you remove what is unnecessary, clarity, speed, and flavour take care of themselves. In the end, less almost always works better than more.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => { const el = document.getElementById('essays') || document.getElementById('writing-board') || document.querySelector('[data-section="essays"]') || document.getElementById('stories'); if (el) { el.scrollIntoView({ behavior: 'smooth' }); } else if (onNavigate) { window.scrollTo(0, 0); onNavigate('/essays'); } }}
                className="px-6 py-3 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2.5 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                  <path d="M6 2v20"/>
                </svg>
                <span>EXPLORE STORIES & LESSONS</span>
                <span>→</span>
              </button>
              
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('/advisory')}
                className="px-6 py-3 rounded-full bg-white dark:bg-canvas-darkCard border border-ink-900 dark:border-white/20 text-ink-900 dark:text-white hover:bg-canvas-subtle dark:hover:bg-canvas-dark font-mono text-[11px] font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2 text-cobalt-600 dark:text-cobalt-400" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
                <span>DEDICATED FOUNDER ADVISORY</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: 05 Core Levers Box */}
          <div className="lg:col-span-4 p-8 rounded-[2rem] bg-[#111620] dark:bg-[#0A0E17] border border-[#232D3F] shadow-2xl space-y-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-berry-600/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 relative z-10">
              <span className="font-serif text-5xl sm:text-6xl font-black text-[#F4B41A] leading-none shrink-0 tracking-tight">
                05
              </span>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-2xl font-bold text-white leading-tight">
                  Core Levers
                </span>
                <span className="text-[10px] font-mono text-[#00D084] font-bold uppercase tracking-widest mt-1">
                  ZERO CLUTTER
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 relative z-10" />

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed relative z-10">
              Five levers are enough to move a mountain, and few enough that none can hide. When you refuse complexity, focus does the heavy lifting.
            </p>
          </div>

        </div>

        {/* The Simplification Mindset Section */}
        <div className="pt-8 border-t border-canvas-border dark:border-canvas-darkBorder">
          
          {/* Section Header: Line 2 removed cleanly */}
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-300 font-mono font-bold">
              THE SIMPLIFICATION MINDSET:
            </span>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {PILLARS.map((p) => {
              const isSelected = activePillar.id === p.id;

              return (
                <div
                  key={p.id}
                  onClick={() => setActivePillar(p)}
                  onMouseEnter={() => setActivePillar(p)}
                  className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[175px] bg-white dark:bg-canvas-darkCard ${
                    isSelected
                      ? 'border-berry-600 dark:border-berry-400 border-t-4 border-t-berry-600 dark:border-t-berry-400 shadow-xl -translate-y-1'
                      : 'border-canvas-border dark:border-canvas-darkBorder border-t-2 hover:border-t-berry-400 hover:border-berry-300 dark:hover:border-berry-700 shadow-sm'
                  }`}
                >
                  <div className="relative z-10 space-y-1">
                    <div className="text-[11px] font-mono font-bold text-berry-600 dark:text-berry-400 uppercase tracking-wider">
                      0{p.id} / {p.spice}
                    </div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-ink-900 dark:text-white leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-xs text-ink-600 dark:text-ink-300 font-light leading-relaxed pt-1">
                      {p.subtext}
                    </p>
                  </div>

                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute right-2 bottom-2 w-12 h-12 object-contain opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Principle Bottom Quote Callout Box: #3 Enlarged, High-Visibility Image */}
          <div className="mt-5 p-6 rounded-2xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 rounded-2xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder shadow-sm flex items-center justify-center p-2 shrink-0">
                <img
                  src={activePillar.image}
                  alt={activePillar.name}
                  className="w-full h-full object-contain filter drop-shadow"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-berry-600 dark:text-berry-400 font-bold mb-1.5">
                  {activePillar.name.toUpperCase()} · {activePillar.spice}
                </div>
                <blockquote className="font-serif italic text-sm sm:text-base text-ink-800 dark:text-gray-100 leading-relaxed max-w-3xl">
                  "{activePillar.quote}"
                </blockquote>
              </div>
            </div>

            <div className="shrink-0 self-end md:self-center">
              <span className="font-mono text-xs px-4 py-2 rounded-full border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-dark text-ink-700 dark:text-ink-300 font-medium whitespace-nowrap">
                Rule #{activePillar.id} in Practice
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
