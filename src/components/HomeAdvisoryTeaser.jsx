// src/components/HomeAdvisoryTeaser.jsx
import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';

export default function HomeAdvisoryTeaser({ onNavigate }) {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#BC5259] dark:bg-[#2A1417] relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Container on warm cream card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#FAF8F5] dark:bg-canvas-darkCard border border-white/25 dark:border-canvas-darkBorder shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BC5259]/10 dark:bg-berry-950/60 border border-[#BC5259]/20 text-[#BC5259] dark:text-berry-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL FOUNDER SPARRING</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white leading-tight">
                A Ben to Your Jules.
              </h2>

              <p className="text-sm sm:text-base text-ink-700 dark:text-ink-200 font-light leading-relaxed">
                Like Robert De Niro in <em>The Intern</em>, an ego-free, calm veteran in your corner. I partner with founders and leadership teams through fractional operations, EIR validation, and confidential 1:1 sparring, stripping away clutter so you can focus on winning moves.
              </p>

              {/* Three Pill Indicators */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-800 dark:text-ink-100">
                  01 / Fractional Operator
                </span>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-800 dark:text-ink-100">
                  02 / Entrepreneur in Residence
                </span>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-800 dark:text-ink-100">
                  03 / 1:1 Founder Mentoring
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigate('/advisory')}
                className="px-8 py-4 rounded-full bg-[#BC5259] hover:bg-[#a6454c] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#BC5259]/30 flex items-center justify-center gap-2 group"
              >
                <span>Explore Advisory Practice &amp; Sparring</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="text-center lg:text-right text-xs font-mono text-ink-500 dark:text-ink-400 py-1">
                Strictly capped at 2 to 3 concurrent founder relationships.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
