import React, { useState } from 'react';
import { Feather, Briefcase, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';

const MODULES = [
  {
    id: 'life-philosophy',
    number: '01',
    category: 'LIFE & MINDFULNESS',
    title: 'The Art of the 5-Spice Kitchen applied to Life',
    description:
      'We live in an age of feature creep—not just in software, but in our calendars, friendships, and daily habits. Master the discipline of doing few things with profound depth.',
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
      'Direct, jargon-free prose that cuts straight to the core thesis',
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
    cta: 'View Consulting Engagements',
    ctaLink: '#consulting',
  },
];

export default function ValueProps({ onOpenInquiry }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="philosophy" className="py-28 px-6 md:px-12 bg-obsidian-950 relative border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-spice-amber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-spice-amber">
              Architectural Pillars
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-medium text-parchment-50 max-w-xl">
              Three vectors of intentional focus.
            </h2>
          </div>
          <p className="text-parchment-400 font-light max-w-md text-sm sm:text-base leading-relaxed">
            Whether cultivating personal clarity, crafting rigorous business ideas, or advising founders through make-or-break scaling pivots.
          </p>
        </div>

        {/* 3 Column Value Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MODULES.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-2xl p-8 bg-obsidian-900/60 border transition-all duration-500 flex flex-col justify-between ${
                  isHovered
                    ? 'border-spice-amber/50 bg-obsidian-850 shadow-2xl shadow-spice-amber/10 -translate-y-1.5'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Glow halo on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-spice-amber/10 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-100' : ''
                  }`}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-spice-amber bg-spice-amber/10 px-3 py-1 rounded-full border border-spice-amber/20">
                      {item.category}
                    </span>
                    <span className="font-mono text-xs text-parchment-400 font-medium">
                      {item.number}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-center text-spice-amber mb-6 group-hover:scale-110 group-hover:border-spice-amber/40 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-parchment-100 mb-4 leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-parchment-400 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 mb-8 pt-6 border-t border-white/5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-parchment-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-spice-amber shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <div className="text-[11px] font-mono text-parchment-400/80 mb-4 italic">
                    "{item.metric}"
                  </div>
                  {item.id === 'boutique-advisory' ? (
                    <button
                      onClick={onOpenInquiry}
                      className="w-full inline-flex items-center justify-between text-xs font-semibold tracking-wide text-parchment-100 group-hover:text-spice-amber transition-colors"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <a
                      href={item.ctaLink}
                      className="w-full inline-flex items-center justify-between text-xs font-semibold tracking-wide text-parchment-100 group-hover:text-spice-amber transition-colors"
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
