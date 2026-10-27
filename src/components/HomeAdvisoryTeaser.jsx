// src/components/HomeAdvisoryTeaser.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const PILLARS = [
  {
    pillarNum: "PILLAR 01",
    badgeText: "HANDS-ON PARTNERSHIP • PILLAR 01",
    badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-950/40",
    badgeDot: "bg-emerald-400",
    titlePrefix: "A Working",
    titleHighlight: "Partner.",
    highlightColor: "text-emerald-400",
    description: "Cutting away unnecessary meetings and slide decks to help your team focus on the actual work. Practical, day-to-day guidance that turns plans into steady progress without extra executive overhead.",
    cardBg: "bg-[#09111D]",
    cardBorder: "border-[#1E293B]",
    gradientFrom: "#09111D",
    buttonBg: "bg-[#146B53] hover:bg-[#0E523F] text-white shadow-emerald-900/30",
    activeTabClass: "bg-emerald-950/90 border-emerald-400 text-emerald-200",
    image: "/work-sketch.jpeg",
    imageAlt: "Working Partner Study Desk"
  },
  {
    pillarNum: "PILLAR 02",
    badgeText: "BUILDING NEW IDEAS • PILLAR 02",
    badgeColor: "border-sky-500/30 text-sky-300 bg-sky-950/40",
    badgeDot: "bg-sky-400",
    titlePrefix: "Testing New",
    titleHighlight: "Ground.",
    highlightColor: "text-sky-400",
    description: "Testing early business ideas and talking directly to customers before you commit major funds. We make sure the foundation is solid before your team spends months building the wrong thing.",
    cardBg: "bg-[#0B132B]",
    cardBorder: "border-[#1C2C4E]",
    gradientFrom: "#0B132B",
    buttonBg: "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-900/30",
    activeTabClass: "bg-sky-950/90 border-sky-400 text-sky-200",
    image: "/illustrations/eir-blueprint-dark.png",
    imageAlt: "Blueprint Linework"
  },
  {
    pillarNum: "PILLAR 03",
    badgeText: "CONFIDENTIAL FOUNDER COUNSEL • PILLAR 03",
    badgeColor: "border-rose-500/30 text-rose-300 bg-rose-950/40",
    badgeDot: "bg-rose-400",
    titlePrefix: "A Ben to Your",
    titleHighlight: "Jules.",
    highlightColor: "text-rose-400",
    description: "Like Robert De Niro in The Intern, a calm, experienced friend in your corner. Honest, private conversations when you need a clear head to talk through difficult decisions with zero politics.",
    cardBg: "bg-[#140B10]",
    cardBorder: "border-[#3D202B]",
    gradientFrom: "#140B10",
    buttonBg: "bg-berry-600 hover:bg-berry-700 text-white shadow-berry-900/30",
    activeTabClass: "bg-rose-950/90 border-rose-400 text-rose-200",
    image: "/illustrations/confidant-study-dark.png",
    imageAlt: "Armchair Linework"
  }
];

export default function HomeAdvisoryTeaser() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to Ben to Jules

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PILLARS.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  const active = PILLARS[activeIndex];

  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-canvas-dark border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div 
          className={`relative rounded-3xl ${active.cardBg} border-2 ${active.cardBorder} shadow-2xl overflow-hidden p-8 sm:p-14 text-white min-h-[460px] flex flex-col justify-between transition-colors duration-700`}
        >
          
          {/* Background Illustration with soft atmospheric blend */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img
              key={active.pillarNum}
              src={active.image}
              alt={active.imageAlt}
              className="absolute right-0 top-0 h-full w-auto max-w-none object-cover object-right-top opacity-30 filter grayscale contrast-125 brightness-110 transition-opacity duration-700"
              onError={(e) => { e.currentTarget.src = '/illustrations/confidant-study-dark.png'; }}
            />
            <div 
              className="absolute inset-0 transition-all duration-700"
              style={{
                background: `linear-gradient(to right, ${active.gradientFrom} 0%, ${active.gradientFrom}F0 42%, ${active.gradientFrom}66 75%, transparent 100%)`
              }}
            />
            <div 
              className="absolute inset-0 transition-all duration-700"
              style={{
                background: `linear-gradient(to top, ${active.gradientFrom} 0%, transparent 50%, ${active.gradientFrom}66 100%)`
              }}
            />
          </div>

          {/* Top & Middle Content */}
          <div className="relative z-10 max-w-xl space-y-5">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-mono uppercase tracking-widest font-bold ${active.badgeColor} transition-colors duration-500`}>
              <span className={`w-2 h-2 rounded-full ${active.badgeDot} animate-pulse`} />
              <span>{active.badgeText}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white leading-[1.12]">
              {active.titlePrefix}
              <br />
              <span className={`${active.highlightColor} italic`}>
                {active.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-serif leading-relaxed">
              {active.description}
            </p>
          </div>

          {/* Bottom Control Bar */}
          <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            {/* Left: Navigation Tabs */}
            <div className="flex items-center gap-2">
              {PILLARS.map((p, idx) => (
                <button
                  key={p.pillarNum}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-2 rounded-full border text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    activeIndex === idx
                      ? `${p.activeTabClass} shadow-md`
                      : 'bg-black/30 border-white/10 text-stone-400 hover:border-white/30 hover:text-stone-200'
                  }`}
                >
                  {p.pillarNum}
                </button>
              ))}
            </div>

            {/* Right: Softened CTA & Controls */}
            <div className="flex items-center gap-3">
              <a
                href="/advisory"
                className={`inline-flex items-center gap-2 px-7 py-2.5 rounded-full ${active.buttonBg} text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-md hover:scale-[1.02]`}
              >
                <span>How We Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-1.5 ml-1">
                <button
                  onClick={() => setActiveIndex((prev) => (prev === 0 ? PILLARS.length - 1 : prev - 1))}
                  className="p-2 rounded-full bg-black/40 border border-white/15 hover:border-white/40 text-stone-300 transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % PILLARS.length)}
                  className="p-2 rounded-full bg-black/40 border border-white/15 hover:border-white/40 text-stone-300 transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
