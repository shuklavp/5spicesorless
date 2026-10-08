import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const DESKS = [
  {
    id: 'life',
    number: '01',
    kicker: 'LIFE',
    title: 'Life, Relationships, & Perspective',
    summary:
      'Life has a quiet way of teaching us through joy, mistakes, and bruised ribs. I do not write to give romantic advice or pretend to be wise. I write about what thirty years of living, being a husband, raising a daughter, and surviving near-fatal odds have taught me about becoming a better, kinder human being. Simple reflections on patience, fatherhood, and keeping your dignity intact.',
    expectations: [
      'Why everyone should fall in love at least once in their lifetime',
      'The quiet wisdom of long devotion and arranged partnerships',
      'Perspective over panic: un-complicating everyday human life',
    ],
    cadence: 'Fortnightly Essays',
    cta: 'Explore Life Essays',
    href: '#writing',
    accentColor: 'border-t-berry-600',
    tagColor: 'text-berry-600 dark:text-berry-400 bg-berry-50 dark:bg-berry-950/60 border-berry-200 dark:border-berry-900',
  },
  {
    id: 'food',
    number: '02',
    kicker: 'FOOD',
    title: 'One Simple Recipe a Week',
    summary:
      'In Lucknow, where I come from, the nose makes the final judgment before the tongue ever gets a turn. Great food does not need thirty jars of spices. It needs good aroma, deliberate heat, and simple steps. I cook purely for the joy of it, using five spices or fewer. Every fortnight, I share one simple, comforting recipe that anyone can master.',
    expectations: [
      'One foolproof, tested recipe published every week',
      'Mastering the 5-spice alchemy from Cumin to Aromatics',
      'How deliberate cooking clears and calms a cluttered executive mind',
    ],
    cadence: 'Fortnightly Recipe & Technique',
    cta: 'Explore Food Recipes',
    href: '#writing',
    accentColor: 'border-t-cobalt-600',
    tagColor: 'text-cobalt-600 dark:text-cobalt-400 bg-cobalt-50 dark:bg-cobalt-950/60 border-cobalt-200 dark:border-cobalt-900',
  },
  {
    id: 'work',
    number: '03',
    kicker: 'WORK',
    title: 'Career, Startups & Boardrooms',
    summary:
      'Thirty years of enterprise leaves behind an awful lot of hard-won scars and practical lessons. From assembling computers in my bedroom to navigating boardroom politics, scaling hardware startups, and managing exits, I have seen what works and what is pure theatre. I share a weekly note on career navigation, practical leadership, and cutting through operational noise.',
    expectations: [
      'How to navigate organisational politics and accelerate career growth',
      'Building from zero: customer acquisition, hiring, and unit economics',
      'Investor relations, board dynamics, and the discipline of clean exits',
    ],
    cadence: 'Weekly Field Note on Sunday',
    cta: 'Explore Work Dispatches',
    href: '#writing',
    accentColor: 'border-t-ink-900 dark:border-t-white',
    tagColor: 'text-ink-700 dark:text-ink-300 bg-canvas-subtle dark:bg-canvas-dark border-canvas-border dark:border-canvas-darkBorder',
  },
];

export default function ValueProps() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 bg-[#E6E9EF] dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header: The Reader's Contract */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
              <span className="text-xs font-mono tracking-widest uppercase text-berry-600 dark:text-berry-400 font-bold">
                THE THREE DESKS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-ink-900 dark:text-white max-w-xl leading-tight">
              What You Will Find Here.
            </h2>
          </div>
          <p className="text-ink-700 dark:text-ink-200 font-normal max-w-lg text-sm sm:text-base leading-relaxed">
            I write about Life, Food, and Work drawn directly from thirty years of living, making mistakes, and surviving rather unusual odds. Writing helps me make sense of it all, and sharing it might help you navigate your own journey with a little more calm and a lot less clutter.
          </p>
        </div>

        {/* 3 Column Broadside Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {DESKS.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={item.id}
                id={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-3xl p-8 bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder border-t-4 scroll-mt-28 ${item.accentColor} transition-all duration-300 flex flex-col justify-between shadow-sm ${
                  isHovered
                    ? 'shadow-xl -translate-y-1 border-canvas-border dark:border-canvas-darkBorder'
                    : ''
                }`}
              >
                <div>
                  {/* Top Bar: Desk Tag & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-[11px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${item.tagColor}`}>
                      {item.kicker}
                    </span>
                    <span className="font-mono text-xs font-bold text-ink-400 dark:text-ink-500">
                      DESK {item.number}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-white mb-4 leading-snug">
                    {item.title}
                  </h3>

                  {/* Purpose Narrative */}
                  <p className="text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {/* What you can expect checklist */}
                  <div className="pt-5 border-t border-canvas-border dark:border-canvas-darkBorder space-y-3 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-ink-400 dark:text-ink-500 font-bold mb-2">
                      What to expect:
                    </div>
                    {item.expectations.map((exp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-ink-800 dark:text-ink-100 font-medium">
                        <span className="text-berry-600 dark:text-berry-400 font-bold shrink-0 mt-0.5">•</span>
                        <span className="leading-relaxed">{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Cadence & Direct Link */}
                <div className="pt-6 border-t border-canvas-border dark:border-canvas-darkBorder mt-auto">
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-mono text-[11px] text-ink-500 dark:text-ink-400 font-medium">
                      {item.cadence}
                    </span>
                  </div>

                  <a
                    href={item.href}
                    className="w-full inline-flex items-center justify-between text-xs font-bold tracking-wide text-ink-900 dark:text-white hover:text-berry-600 dark:hover:text-berry-400 transition-colors pt-2 group"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-berry-600 dark:text-berry-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
