import React from 'react';

const levers = [
  {
    num: "01",
    tag: "LEVER 01",
    title: "The Foundations",
    grounding: "Patience with the base.",
    enterprise: "Endurance is built in unglamorous unit economics and cash discipline, long before vanity metrics enter the room.",
    kicker: "DISCIPLINE"
  },
  {
    num: "02",
    tag: "LEVER 02",
    title: "Ground Truth",
    grounding: "Tasting without illusions.",
    enterprise: "Unvarnished reality over comforting spreadsheets. In boardrooms and co-founder partnerships, plain truth builds unbreakable trust.",
    kicker: "CANDOR"
  },
  {
    num: "03",
    tag: "LEVER 03",
    title: "Cohesion",
    grounding: "The silent binder.",
    enterprise: "Keeping mission, incentives, and execution cadence tightly aligned so teams move with speed and zero political friction.",
    kicker: "ALIGNMENT"
  },
  {
    num: "04",
    tag: "LEVER 04",
    title: "Calculated Risk",
    grounding: "High flame with purpose.",
    enterprise: "Playing not to lose guarantees slow attrition. Category leadership demands decisive, asymmetric bets when conviction matures.",
    kicker: "CONVICTION"
  },
  {
    num: "05",
    tag: "LEVER 05",
    title: "Restraint",
    grounding: "Discipline of the stop.",
    enterprise: "Knowing when the work is resolved, resisting feature bloat, and having the courage to leave the core value uncrowded.",
    kicker: "FOCUS"
  }
];

export default function CoreLevers() {
  return (
    <section className="relative overflow-hidden bg-[#070D1B] text-white py-16 md:py-20 lg:py-24 border-y border-[#18233C]">
      
      {/* Top-Right Technical Engineering Fulcrum Watermark */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-10 -right-10 w-96 h-96 sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] select-none opacity-25"
      >
        <svg 
          viewBox="0 0 600 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full text-slate-300 font-mono text-[9px]"
        >
          {/* Engineering Grid / Crosshairs */}
          <line x1="100" y1="200" x2="560" y2="200" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.4" />
          <line x1="420" y1="40" x2="420" y2="520" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.4" />
          
          {/* Calibrated Vernier Arc */}
          <path d="M 220 200 A 200 200 0 0 1 520 340" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.35" />
          <path d="M 280 200 A 140 140 0 0 1 480 300" stroke="currentColor" strokeWidth="0.75" opacity="0.25" />

          {/* Caliper / Ruler Tick Marks */}
          {[...Array(13)].map((_, i) => {
            const x = 200 + i * 25;
            return (
              <line key={i} x1={x} y1="194" x2={x} y2={i % 3 === 0 ? "206" : "202"} stroke="currentColor" strokeWidth="1" opacity="0.5" />
            );
          })}
          <text x="320" y="188" fill="currentColor" opacity="0.6">MOMENT ARM [L/5]</text>
          <text x="430" y="80" fill="currentColor" opacity="0.6">AXIS 01-F</text>

          {/* Five Input Load Lines Converging on Fulcrum Pivot */}
          <line x1="80" y1="90" x2="420" y2="200" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
          <circle cx="80" cy="90" r="3" fill="#DE2573" />
          <text x="45" y="94" fill="#DE2573">F1</text>

          <line x1="60" y1="240" x2="420" y2="200" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <circle cx="60" cy="240" r="3" fill="currentColor" />
          <text x="32" y="244" fill="currentColor">F2</text>

          <line x1="120" y1="360" x2="420" y2="200" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
          <circle cx="120" cy="360" r="3" fill="currentColor" />
          <text x="92" y="364" fill="currentColor">F3</text>

          <line x1="220" y1="460" x2="420" y2="200" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <circle cx="220" cy="460" r="3" fill="currentColor" />
          <text x="190" y="464" fill="currentColor">F4</text>

          <line x1="360" y1="510" x2="420" y2="200" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
          <circle cx="360" cy="510" r="3" fill="#DE2573" />
          <text x="345" y="528" fill="#DE2573">F5</text>

          {/* Hardened Fulcrum Pivot Assembly */}
          <polygon points="420,185 435,215 405,215" stroke="#DE2573" strokeWidth="1.5" fill="#070D1B" />
          <circle cx="420" cy="200" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="420" cy="200" r="4" fill="#DE2573" />

          {/* Resultant Output Arrow */}
          <line x1="420" y1="200" x2="550" y2="90" stroke="#DE2573" strokeWidth="2.5" strokeLinecap="round" />
          <polyline points="530,86 554,88 552,112" stroke="#DE2573" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="500" y="70" fill="#DE2573" fontWeight="bold">RESULTANT (CLARITY)</text>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#DE2573]/30 bg-[#DE2573]/10 text-[#DE2573] font-mono text-[11px] uppercase tracking-wider font-semibold">
            Operational Clarity
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            The Five Essentials
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 font-serif leading-relaxed">
            Five simple rules are enough to run any venture, and few enough that nothing gets lost. When you clear away the noise, what truly matters becomes obvious.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {levers.map((lever, index) => (
            <div 
              key={index}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#0F172A]/90 border border-[#1E293B] hover:border-slate-500/50 hover:bg-[#131D35] transition-all duration-200 group"
            >
              <div>
                {/* Header Tag & Numeral */}
                <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 tracking-wider">
                  <span>{lever.tag}</span>
                  <span className="text-slate-500 font-semibold">{lever.num}</span>
                </div>

                {/* Lever Title */}
                <h3 className="mt-5 font-serif text-xl font-bold text-white group-hover:text-[#DE2573] transition-colors duration-200">
                  {lever.title}
                </h3>

                {/* Grounding Metaphor with Minimum Height for Uniform Text Alignment */}
                <div className="min-h-[44px] flex items-center mt-2">
                  <p className="text-xs font-mono text-[#DE2573] font-medium tracking-tight">
                    &ldquo;{lever.grounding}&rdquo;
                  </p>
                </div>

                {/* Middle Horizontal Divider separating Metaphor from Operational Truth */}
                <div className="border-t border-slate-800/80 my-3.5" />

                {/* Direct Executive Translation */}
                <p className="text-xs sm:text-[13.5px] text-slate-200 leading-relaxed font-serif">
                  {lever.enterprise}
                </p>
              </div>

              {/* Bottom Footer Bar with Unique Domain Kicker */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                <span className="font-semibold text-slate-300">{lever.kicker}</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
