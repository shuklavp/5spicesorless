// src/components/ValueProps.jsx
import React, { useState } from 'react';
import { ArrowRight, BookOpen, UtensilsCrossed, Briefcase } from 'lucide-react';

const DESKS = [
  {
    id: 'life',
    path: '/life',
    badge: 'FOLIO / 01',
    number: '01',
    kicker: 'LIFE',
    title: 'Life, Relationships, & Perspective',
    summary:
      'Life has a quiet way of teaching us through observation, patience, and warmth. I do not write to give romantic advice or pretend to be wise. I write about what growing up in a not-so-big city of Lucknow, learning the nuances of communication and tehzeeb, raising a daughter, and building things from scratch have taught me about becoming a kinder human being. Simple reflections on patience, fatherhood, and keeping your dignity intact.',
    expectations: [
      'Why everyone should fall in love at least once in their lifetime',
      'The quiet wisdom of long devotion and arranged partnerships',
      'Perspective over panic: un-complicating everyday human life',
    ],
    cadence: 'EVERY TWO WEEKS',
    cta: 'The Life Desk',
    cardBg: 'bg-gradient-to-b from-[#0F3822] via-[#0B2A1A] to-[#071D12]',
    border: 'border-[#1E5E3A]/60 hover:border-emerald-400',
    watermarkColor: 'text-emerald-400/15',
    badgeStyle: 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30',
    kickerColor: 'text-emerald-400',
    titleColor: 'text-white',
    bodyColor: 'text-emerald-100/80',
    bulletColor: 'text-emerald-400',
    arrowBg: 'bg-emerald-500 hover:bg-emerald-400 text-emerald-950',
    icon: BookOpen,
  },
  {
    id: 'food',
    path: '/food',
    badge: 'PANTRY / 02',
    number: '02',
    kicker: 'FOOD',
    title: 'Comfort Food, 5 Spices or Less',
    summary:
      'In Lucknow, where I come from, the nose makes the final judgement before the tongue ever gets a turn. Good food does not need thirty jars of spices. It needs good aroma, deliberate heat, and simple steps. I cook purely for the joy of it, using five spices or fewer. Every fortnight, I share one simple, comforting recipe that anyone can master.',
    expectations: [
      'One foolproof, tested recipe every fortnight',
      'Mastering the 5-spice alchemy from Cumin to Aromatics',
      'How deliberate cooking clears and calms a cluttered executive mind',
    ],
    cadence: 'FORTNIGHTLY RECIPE',
    cta: 'The Food Desk',
    cardBg: 'bg-gradient-to-b from-[#C86218] via-[#B44E0E] to-[#8C3606]',
    border: 'border-amber-300/40 hover:border-amber-200',
    watermarkColor: 'text-amber-200/20',
    badgeStyle: 'bg-black/25 text-amber-100 border border-white/30 backdrop-blur-sm',
    kickerColor: 'text-amber-200',
    titleColor: 'text-white',
    bodyColor: 'text-amber-50/90',
    bulletColor: 'text-amber-200',
    arrowBg: 'bg-white hover:bg-amber-100 text-amber-950',
    icon: UtensilsCrossed,
  },
  {
    id: 'work',
    path: '/work',
    badge: 'CABINET / 03',
    number: '03',
    kicker: 'WORK',
    title: 'Career, Startups & Boardrooms',
    summary:
      'Thirty years of enterprise building ventures, nurturing teams, and learning what truly endures. From assembling computers in my Lucknow bedroom to navigating boardroom conversations, scaling hardware startups, and managing clean exits, I have seen what works and what is pure theatre. I share a weekly note on career navigation, practical leadership, and cutting through operational noise.',
    expectations: [
      'How to navigate organisational politics and accelerate career growth',
      'Building from zero: customer acquisition, hiring, and unit economics',
      'Investor relations, board dynamics, and the discipline of clean exits',
    ],
    cadence: 'WEEKLY NOTE ON SUNDAY',
    cta: 'The Work Desk',
    cardBg: 'bg-gradient-to-b from-[#132238] via-[#0D1829] to-[#070D17]',
    border: 'border-[#223B61]/60 hover:border-cyan-400',
    watermarkColor: 'text-cyan-400/15',
    badgeStyle: 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30',
    kickerColor: 'text-cyan-400',
    titleColor: 'text-white',
    bodyColor: 'text-slate-300',
    bulletColor: 'text-cyan-400',
    arrowBg: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950',
    icon: Briefcase,
  },
];

export default function ValueProps({ onNavigate }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCircleClick = (e, path) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 bg-[#F4F6F9] dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
              <span className="text-xs font-mono tracking-widest uppercase text-berry-600 dark:text-berry-400 font-bold">
                THE THREE DESKS
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight text-[#111111]">
              What You <span className="italic font-normal font-serif text-[#E11D74]">Will</span>
              <br />
              Find Here.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-serif text-xl sm:text-2xl text-[#2B2927] leading-[1.65] max-w-2xl">
              Everything here comes from personal experience:{" "}
              <span className="text-[#B85028] underline decoration-[#B85028]/60 decoration-[1.5px] underline-offset-4 font-medium">
                thirty years
              </span>{" "}
              of loving, cooking, building companies, and surviving. I write to separate what truly matters from everyday noise, in the hope that these notes make your{" "}
              <span className="text-[#B85028] underline decoration-[#B85028]/60 decoration-[1.5px] underline-offset-4 font-medium">
                life
              </span>
              , your{" "}
              <span className="text-[#B85028] underline decoration-[#B85028]/60 decoration-[1.5px] underline-offset-4 font-medium">
                table
              </span>
              , and your{" "}
              <span className="text-[#B85028] underline decoration-[#B85028]/60 decoration-[1.5px] underline-offset-4 font-medium">
                work
              </span>{" "}
              a little simpler.
            </p>
          </div>
        </div>
          </div>
        </div>

        {/* 3 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {DESKS.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                id={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-[2rem] p-8 ${item.cardBg} ${item.border} border shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default ${
                  isHovered ? '-translate-y-2 shadow-2xl scale-[1.01]' : ''
                }`}
              >
                {/* Large Background Watermark Number */}
                <span
                  className={`absolute right-4 top-24 font-serif text-9xl font-black select-none pointer-events-none transition-transform duration-500 ${item.watermarkColor} ${
                    isHovered ? 'scale-110 -translate-x-2' : ''
                  }`}
                >
                  {item.number}
                </span>

                <div className="relative z-10">
                  {/* Top Bar: Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider ${item.badgeStyle}`}>
                      {item.badge}
                    </span>
                    <Icon className="w-5 h-5 opacity-60 text-white" />
                  </div>

                  {/* Desk Title */}
                  <h3 className={`font-serif text-2xl sm:text-[26px] font-bold ${item.titleColor} mb-4 leading-snug`}>
                    {item.title}
                  </h3>

                  {/* Summary Narrative */}
                  <p className={`text-xs sm:text-sm font-light leading-relaxed mb-6 ${item.bodyColor}`}>
                    {item.summary}
                  </p>

                  {/* What to Expect Checklist */}
                  <div className="pt-5 border-t border-white/10 space-y-2.5 mb-8">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold mb-2">
                      WHAT TO EXPECT:
                    </div>
                    {item.expectations.map((exp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/90 font-normal">
                        <span className={`${item.bulletColor} font-bold shrink-0 mt-0.5`}>•</span>
                        <span className="leading-relaxed">{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 pt-5 border-t border-white/10 mt-auto flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`text-[11px] font-mono font-bold tracking-wider uppercase ${item.kickerColor}`}>
                        {item.kicker}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 block">
                      {item.cadence}
                    </span>
                  </div>

                  {/* Only this round placeholder with arrow is clickable */}
                  <button
                    type="button"
                    onClick={(e) => handleCircleClick(e, item.path)}
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer ${item.arrowBg} hover:scale-110 active:scale-95`}
                    aria-label={`Go to ${item.title}`}
                  >
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
