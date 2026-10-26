// src/components/HomeAdvisoryTeaser.jsx
import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';

export default function HomeAdvisoryTeaser() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-canvas-dark border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl bg-[#140B10] border-2 border-[#3D202B] shadow-2xl overflow-hidden p-8 sm:p-14 text-white">
          
          {/* Armchair Linework Illustration — 80% Opacity */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 pointer-events-none opacity-80 md:opacity-90">
            <img
              src="/illustrations/confidant-study-dark.jpg"
              alt="Study Armchair Linework"
              className="w-full h-full object-cover object-right"
              onError={(e) => { e.currentTarget.src = '/work-sketch.jpeg'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#140B10] via-[#140B10]/70 to-transparent w-full" />
          </div>

          {/* Left Content */}
          <div className="relative z-10 max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-rose-500/40 text-rose-300 text-xs font-mono uppercase tracking-widest font-bold">
              <Compass className="w-3.5 h-3.5 text-rose-400" />
              <span>CONFIDENTIAL FOUNDER ADVISORY • PILLAR 03</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight">
              A Ben to Your <span className="text-berry-400 italic">Jules.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Like Robert De Niro in <span className="italic">The Intern</span>, an ego-free, calm veteran in your corner. I partner with founders and leadership teams through fractional operations, EIR validation, and confidential 1:1 counsel, removing clutter so the founder can see the work.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono uppercase tracking-wider font-semibold text-slate-300">
              <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700">01 / Fractional Operator</span>
              <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700">02 / Entrepreneur in Residence</span>
              <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700">03 / 1:1 Founder Mentoring</span>
            </div>

            {/* Left Button with Shortened Text */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="/advisory/ben-to-jules"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-lg shadow-berry-600/30 hover:scale-[1.02]"
              >
                <span>EXPLORE ADVISORY</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs font-mono text-slate-400 tracking-wider">
                Strictly capped at 2 to 3 concurrent founder relationships.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
