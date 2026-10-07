import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';

const SPICE_PILLARS = [
  {
    id: 1,
    name: 'Cumin',
    role: 'The Foundation',
    concept: 'First Principles & Intent',
    metaphor: 'Cumin (The Foundation)',
    domain: 'First Principles & Intent',
    primaryImage: '/cumin.png',
    secondaryImage: '/spices/cumin.png',
    principle: 'The tadka comes before everything else. Before you build features or hire large teams, master the single root problem that actually matters.',
  },
  {
    id: 2,
    name: 'Turmeric',
    role: 'Ground Truth',
    concept: 'Honest Reality',
    metaphor: 'Turmeric (The Purifier)',
    domain: 'Health & Transparency',
    primaryImage: '/turmeric.png',
    secondaryImage: '/spices/turmeric.png',
    principle: 'A pinch brings health, but too much turns the dish bitter. Single-page memos and honest unit economics beat sixty-slide executive presentations every time.',
  },
  {
    id: 3,
    name: 'Coriander',
    role: 'Cohesion',
    concept: 'Team Alignment',
    metaphor: 'Coriander (The Binder)',
    domain: 'Structure & Alignment',
    primaryImage: '/coriander.png',
    secondaryImage: '/spices/coriander.png',
    principle: 'The quiet glue of the dish. Clear, precise reporting and communication that keep a hundred and sixty people aligned across four offices without chaos.',
  },
  {
    id: 4,
    name: 'Red Chillies',
    role: 'Calculated Risk',
    concept: 'Kinetic Courage',
    metaphor: 'Red Chillies (The Kinetic Spark)',
    domain: 'Courage & Momentum',
    primaryImage: '/red-chillies.png',
    secondaryImage: '/spices/red-chillies.png',
    principle: 'Without heat, the food is timid. Back your team to take ambitious bets. Absorb the blame when experiments fail, and give them the stage when they win.',
  },
  {
    id: 5,
    name: 'Aromatics',
    role: 'Executive Restraint',
    concept: 'Quiet Mastery',
    metaphor: 'Aromatics (The Finish)',
    domain: 'Judgment & Timing',
    primaryImage: '/aromatics.png',
    secondaryImage: '/spices/aromatics.png',
    principle: 'Sprinkled only after turning off the flame. The rare wisdom to know when the work is finished, stepping back, and letting quality speak for itself.',
  },
];

export default function Hero({ onOpenInquiry }) {
  const [activePillar, setActivePillar] = useState(SPICE_PILLARS[0]);

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
              The most enduring things in life, work and cooking are achieved through subtraction. We strip away the non-essential to unlock clarity, speed, and flavor.
              <br />
              <span className="italic font-serif text-ink-900 dark:text-white pt-2 inline-block">
                After all, less is more.
              </span>
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

          {/* 05 Core Levers Badge */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder shadow-lg space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-5xl font-black text-cobalt-600 dark:text-cobalt-400 leading-none">
                05
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-ink-900 dark:text-white leading-tight">
                  Core Levers
                </span>
                <span className="text-xs font-mono text-berry-600 dark:text-berry-400 font-bold">
                  Zero Operational Bloat
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-canvas-border dark:bg-canvas-darkBorder" />

            <div className="space-y-2 text-xs text-ink-600 dark:text-ink-200 font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cobalt-500 shrink-0" />
                <span>Weekly Long-Form Strategy Memos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-berry-600 shrink-0" />
                <span>Direct 1:1 Founder Sparring Partner</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-ink-900 dark:bg-white shrink-0" />
                <span>Strictly Capped Client Capacity</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Subtractive Mindset Section */}
        <div className="mt-16 pt-10 border-t border-canvas-border dark:border-canvas-darkBorder">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-300 font-mono font-bold">
              The Subtractive Mindset:
            </span>
            <span className="text-xs font-mono text-berry-600 dark:text-berry-400 font-bold">
              Selected: [{activePillar.metaphor}]
            </span>
          </div>

          {/* 5 Spice Selector Boxes:
              - Right top corner: 01, 02... labels and indicator dot
              - Left bottom corner: Spice illustration with mix-blend-multiply (instant background transparency)
              - Center aligned: Bold Spice name + High-contrast authoritative management badge
          */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
            {SPICE_PILLARS.map((pillar) => {
              const isSelected = activePillar.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  className={`text-center p-4 rounded-3xl border transition-all duration-200 relative overflow-hidden min-h-[175px] flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-white dark:bg-canvas-darkCard border-berry-600 shadow-xl shadow-berry-600/15 -translate-y-1'
                      : 'bg-canvas-subtle dark:bg-canvas-darkCard/60 border-canvas-border dark:border-canvas-darkBorder hover:border-berry-400 hover:bg-white'
                  }`}
                >
                  {/* Top Active Bar */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-berry-600" />
                  )}
                  
                  {/* Top Right Corner: Number Label & Indicator */}
                  <div className="flex items-center justify-end gap-1.5 w-full">
                    <span className="font-mono text-xs font-bold text-cobalt-600 dark:text-cobalt-400">
                      0{pillar.id}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isSelected ? 'bg-berry-600' : 'bg-canvas-border dark:bg-canvas-darkBorder'
                      }`}
                    />
                  </div>

                  {/* Center Aligned Text: Bold Spice Name + Authoritative Management Badge */}
                  <div className="my-auto text-center px-1 z-10">
                    <div className="font-serif font-black text-lg sm:text-xl text-ink-950 dark:text-white leading-tight mb-2 group-hover:text-berry-600 transition-colors">
                      {pillar.name}
                    </div>

                    {/* Strengthened Management Parallel (Pill Badge with strong weight) */}
                    <div className="inline-block">
                      <span className={`px-2.5 py-1 text-[11px] font-mono font-bold tracking-wide uppercase rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-berry-50 text-berry-700 border-berry-200 dark:bg-berry-950/60 dark:text-berry-300 dark:border-berry-800'
                          : 'bg-white text-ink-800 border-canvas-border dark:bg-canvas-dark dark:text-ink-200 dark:border-canvas-darkBorder group-hover:border-berry-300'
                      }`}>
                        {pillar.role}
                      </span>
                    </div>

                    {/* Subtle Concept Line */}
                    <div className="text-[10px] font-sans font-medium text-ink-500 dark:text-ink-300 mt-1.5 tracking-tight">
                      {pillar.concept}
                    </div>
                  </div>

                  {/* Left Bottom Corner: Spice Drawing with Automatic Transparency (mix-blend-multiply) */}
                  <div className="absolute -bottom-1 -left-1 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={pillar.primaryImage}
                      alt={pillar.name}
                      className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen opacity-90 group-hover:opacity-100"
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

          {/* Active Principle Card */}
          <div className="mt-4 p-6 rounded-2xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-canvas-subtle dark:bg-canvas-dark rounded-2xl border border-canvas-border dark:border-canvas-darkBorder p-1.5 flex items-center justify-center overflow-hidden">
                <img
                  src={activePillar.primaryImage}
                  alt={activePillar.name}
                  className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.triedSecondary) {
                      e.currentTarget.dataset.triedSecondary = 'true';
                      e.currentTarget.src = activePillar.secondaryImage;
                    } else {
                      e.currentTarget.style.display = 'none';
                    }
                  }}
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-berry-600 dark:text-berry-400 uppercase tracking-wider font-bold block">
                    {activePillar.domain}
                  </span>
                  <span className="text-xs text-ink-400 font-mono">·</span>
                  <span className="text-xs font-mono text-cobalt-600 dark:text-cobalt-400 font-bold uppercase tracking-wider">
                    {activePillar.role}
                  </span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-ink-900 dark:text-white font-medium">
                  "{activePillar.principle}"
                </p>
              </div>
            </div>
            <div className="shrink-0 text-xs font-mono text-cobalt-700 dark:text-cobalt-300 bg-cobalt-50 dark:bg-canvas-dark px-4 py-2 rounded-xl border border-cobalt-100 dark:border-canvas-darkBorder font-semibold self-start md:self-auto">
              Rule #{activePillar.id} in Practice
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
