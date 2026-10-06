import React, { useState } from 'react';
import { Feather, Briefcase, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const MODULES = [
  {
    id: 'life-philosophy',
    number: '01',
    category: 'LIFE & MINDFULNESS',
    title: 'The Art of the 5-Spice Kitchen Applied to Life',
    description:
      'We live in an age of feature creep—not just in software, but in our calendars, diets, and daily commitments. Master the discipline of doing few things with profound depth.',
    icon: Feather,
    highlights: [
      'De-escalate cognitive overload through systemic elimination',
      'The "Simmer & Reduce" method for career inflection points',
      'Culinary parallels: how physical cooking recalibrates mental focus',
    ],
    metric: '90% of complexity is fear disguised as thoroughness.',
    cta: 'Explore Life Essays',
    ctaLink: '#writing',
  },
  {
    id: 'business-writing',
    number: '02',
    category: 'WRITING & ESSAY BOARD',
    title: 'The Modern Business Writer’s Board',
    description:
      'Clear writing is the ultimate competitive moat. We publish weekly analytical essays examining executive decision-making, startup teardowns, and the unspoken psychology of leadership.',
    icon: Sparkles,
    highlights: [
      'Weekly long-form essays read by founders and operators',
      'Deconstructive frameworks for high-stakes decisions',
      'Direct, jargon-free prose cutting straight to the core thesis',
    ],
    metric: 'Over 50+ published deep-dives & framework memos.',
    cta: 'Browse Publication Archive',
    ctaLink: '#writing',
  },
  {
    id: 'boutique-advisory',
    number: '03',
    category: 'STARTUP CONSULTING',
    title: 'Boutique Advisory & Fractional Strategy',
    description:
      'Helping early-stage and growth startups audit their operational fat, crystallize product-market focus, and architect sustainable distribution engines without agency bloat.',
    icon: Briefcase,
    highlights: [
      'Strategic Scope Audits: Pruning low-yield initiatives',
      'Founder Clarity Sprints (2-week intensive diagnostic)',
      'Fractional Executive Advisory for Seed & Series A founders',
    ],
    metric: 'Direct 1:1 founder partnerships with strict capacity limits.',
    cta: 'View Advisory Engagements',
    ctaLink: '#consulting',
  },
];

export default function ValueProps({ onOpenInquiry }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="philosophy" className="py-28 px-6 md:px-12 bg-paper-100/70 dark:bg-forest-950/80 relative border-t border-paper-200 dark:border-forest-850 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-forest-800 dark:bg-terracotta-400" />
              <span className="text-xs font-mono tracking-widest uppercase text-terracotta-600 dark:text-terracotta-400 font-bold">
                Three Vectors of Focus
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 dark:text-paper-50 max-w-xl">
              Radical clarity in thinking, craft, and counsel.
            </h2>
          </div>
          <p className="text-ink-700 dark:text-paper-300 font-normal max-w-md text-sm sm:text-base leading-relaxed">
            Whether cultivating personal stillness, crafting rigorous business memos, or advising founders through make-or-break scaling pivots.
          </p>
        </div>

        {/* 3 Column Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MODULES.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-3xl p-8 bg-paper-50 dark:bg-forest-900/60 border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-terracotta-600 dark:border-terracotta-500 shadow-xl shadow-terracotta-600/10 -translate-y-1'
                    : 'border-paper-200 dark:border-forest-800 hover:border-paper-300'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] font-bold text-forest-800 dark:text-terracotta-400 bg-forest-100 dark:bg-forest-800/80 px-3 py-1 rounded-full border border-forest-200 dark:border-forest-700 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="font-serif text-2xl font-black text-paper-400 dark:text-forest-700">
                      {item.number}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-paper-100 dark:bg-forest-950 border border-paper-200 dark:border-forest-800 flex items-center justify-center text-terracotta-600 dark:text-terracotta-400 mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-forest-950 dark:text-paper-50 mb-3.5 leading-snug group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ink-700 dark:text-paper-300 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullets */}
                  <div className="space-y-3 mb-8 pt-5 border-t border-paper-200 dark:border-forest-800">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-ink-800 dark:text-paper-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 dark:text-terracotta-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-6 border-t border-paper-200 dark:border-forest-800 mt-auto">
                  <div className="text-[11px] font-mono text-ink-600 dark:text-paper-400 mb-4 italic">
                    "{item.metric}"
                  </div>
                  {item.id === 'boutique-advisory' ? (
                    <button
                      onClick={onOpenInquiry}
                      className="w-full inline-flex items-center justify-between text-xs font-bold tracking-wide text-forest-900 dark:text-paper-100 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <a
                      href={item.ctaLink}
                      className="w-full inline-flex items-center justify-between text-xs font-bold tracking-wide text-forest-900 dark:text-paper-100 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
