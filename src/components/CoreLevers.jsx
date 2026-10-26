// src/components/CoreLevers.jsx
import React from 'react';
import { Layers, Target, Users, ShieldAlert, Sparkles } from 'lucide-react';

export default function CoreLevers() {
  const levers = [
    {
      num: '01',
      title: 'The Foundations',
      tag: 'LEVER 01',
      desc: 'Patience with the heat. In life and business, endurance is won in early groundwork before vanity metrics ever enter the room.',
    },
    {
      num: '02',
      title: 'Ground Truth',
      tag: 'LEVER 02',
      desc: 'Unvarnished reality over comforting spreadsheets. In partnerships and operations, speaking plain truth creates unstoppable trust.',
    },
    {
      num: '03',
      title: 'Cohesion',
      tag: 'LEVER 03',
      desc: 'The silent binder. Keeping teams, culture, and purpose tightly aligned so collective execution moves without friction.',
    },
    {
      num: '04',
      title: 'Calculated Risk',
      tag: 'LEVER 04',
      desc: 'Decisive courage when conviction matures. Playing not to lose is slow failure; calculated boldness defines category leaders.',
    },
    {
      num: '05',
      title: 'Restraint',
      tag: 'LEVER 05',
      desc: 'The discipline of stopping. Knowing when the work is finished and resisting the urge to decorate what is already effective.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#09111E] text-white relative border-y border-[#1E293B] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-berry-500/40 text-berry-300 text-xs font-mono uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-berry-500 animate-pulse" />
            OPERATIONAL CLARITY
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight">
            5 Levers
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Five levers are enough to move a mountain, and few enough that none can hide. When you refuse complexity, focus does the heavy lifting.
          </p>
        </div>

        {/* 5 Lever Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {levers.map((lever) => (
            <div
              key={lever.num}
              className="p-7 rounded-3xl bg-[#0F1A2E] border border-[#223552] hover:border-berry-500/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-6">
                  <span className="text-[11px] font-bold text-berry-400 uppercase tracking-widest">
                    {lever.tag}
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-white transition-colors">
                    {lever.num}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-berry-300 transition-colors">
                  {lever.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300/85 font-light leading-relaxed">
                  {lever.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1C2C45] flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-berry-400 transition-colors font-bold">
                  CORE PRINCIPLE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-berry-500/60 group-hover:bg-berry-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
