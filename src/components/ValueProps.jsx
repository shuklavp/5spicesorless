import React, { useState } from 'react';
import { Feather, Briefcase, Utensils, ArrowRight, CheckCircle2 } from 'lucide-react';

const MODULES = [
  {
    id: 'life',
    number: '01',
    category: 'LIFE',
    title: 'Survival, Perspective, and The Long Road',
    description:
      'Waking up from a ten-hour skull surgery declared dead to relearn speech, memory, and writing. Marrying someone without ever meeting, building twenty years of quiet devotion, and discovering that almost everything modern humans fret about is completely trivial.',
    icon: Feather,
    highlights: [
      'Overcoming grim prognoses of paralysis and dementia through daily, stubborn discipline',
      'The quiet wisdom of arranged marriage: twenty years of devotion, raising a sixteen-year-old daughter',
      'Writing down life lessons from Kuala Lumpur before memory slips away',
    ],
    metric: 'Twenty-two years surviving, and surviving rather well.',
    cta: 'Explore Life Stories',
    ctaLink: '#writing',
  },
  {
    id: 'food',
    number: '02',
    category: 'FOOD',
    title: 'The Art of the 5-Spice Kitchen',
    description:
      'Exceptional food is never made by cluttering the pot with forty powders. Restraint is confidence. Five spices, deliberate heat control, and honest technique produce flavours that linger in memory for decades.',
    icon: Utensils,
    highlights: [
      'The chemistry of Cumin, Turmeric, Coriander, Red Chillies, and Aromatics',
      'How slow simmering and physical cooking clears a cluttered executive mind',
      'Dishes loved by family and friends, made with humble ingredients and patience',
    ],
    metric: 'Simple spices, exceptional outcomes.',
    cta: 'Explore Food Essays',
    ctaLink: '#writing',
  },
  {
    id: 'work',
    number: '03',
    category: 'WORK',
    title: 'Category Creation to "A Ben to Your Jules"',
    description:
      'Pioneering water sub-metering in India, raising four and a half million dollars, managing over a hundred and sixty people across four offices, and exiting for the shareholders. Now advising founders as a fractional operator and calm confidant.',
    icon: Briefcase,
    highlights: [
      'The Fractional Operator: cutting organizational bloat and replacing slides with clear memos',
      'Entrepreneur in Residence: testing customer demand and establishing lean foundations',
      'The "Ben to Jules" confidant: calm, battle-tested counsel for founders under pressure',
    ],
    metric: '$4.5M raised, 165+ team led, category created.',
    cta: 'View Advisory Engagements',
    ctaLink: '#consulting',
  },
];

export default function ValueProps({ onOpenInquiry }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="philosophy" className="py-28 px-6 md:px-12 bg-canvas-subtle dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
              <span className="text-xs font-mono tracking-widest uppercase text-berry-600 dark:text-berry-400 font-bold">
                The Three Pillars
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 dark:text-white max-w-xl">
              Life, Food, and Work.
            </h2>
          </div>
          <p className="text-ink-600 dark:text-ink-200 font-normal max-w-md text-sm sm:text-base leading-relaxed">
            Distilled from thirty years of building ventures, surviving near-fatal odds, cooking with care, and backing founders.
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
                id={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-3xl p-8 bg-white dark:bg-canvas-darkCard border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-berry-600 dark:border-berry-500 shadow-xl shadow-berry-600/10 -translate-y-1'
                    : 'border-canvas-border dark:border-canvas-darkBorder hover:border-cobalt-400'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] font-bold text-cobalt-700 dark:text-cobalt-300 bg-cobalt-50 dark:bg-cobalt-950/60 px-3 py-1 rounded-full border border-cobalt-100 dark:border-cobalt-900 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="font-serif text-2xl font-black text-berry-600 dark:text-berry-400">
                      {item.number}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder flex items-center justify-center text-berry-600 dark:text-berry-400 mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-white mb-3.5 leading-snug group-hover:text-berry-600 dark:group-hover:text-berry-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ink-600 dark:text-ink-200 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullets */}
                  <div className="space-y-3 mb-8 pt-5 border-t border-canvas-border dark:border-canvas-darkBorder">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-ink-700 dark:text-ink-100 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cobalt-600 dark:text-cobalt-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-6 border-t border-canvas-border dark:border-canvas-darkBorder mt-auto">
                  <div className="text-[11px] font-mono text-ink-500 dark:text-ink-300 mb-4 italic">
                    "{item.metric}"
                  </div>
                  {item.id === 'work' ? (
                    <button
                      onClick={onOpenInquiry}
                      className="w-full inline-flex items-center justify-between text-xs font-bold tracking-wide text-ink-900 dark:text-white group-hover:text-berry-600 dark:group-hover:text-berry-400 transition-colors"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <a
                      href={item.ctaLink}
                      className="w-full inline-flex items-center justify-between text-xs font-bold tracking-wide text-ink-900 dark:text-white group-hover:text-berry-600 dark:group-hover:text-berry-400 transition-colors"
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
