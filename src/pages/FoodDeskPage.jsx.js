// src/pages/FoodDeskPage.jsx
import React, { useMemo } from 'react';
import { ArrowLeft, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { getFoodEssays } from '../data/foodEssays';

export default function FoodDeskPage({ onNavigate }) {
  const essays = useMemo(() => getFoodEssays(), []);

  return (
    <div className="min-h-screen bg-canvas dark:bg-canvas-dark text-ink-900 dark:text-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <button
          onClick={() => onNavigate('/')}
          className="mb-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink-500 hover:text-amber-500"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Front Page
        </button>

        {/* Paprika Amber Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#8C3A0A] via-[#B85414] to-[#6A2906] border border-amber-400/40 shadow-2xl overflow-hidden min-h-[380px] flex items-center mb-16">
          <span className="absolute right-8 top-4 font-serif text-9xl font-black text-amber-100/15 select-none pointer-events-none">
            02
          </span>
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 h-full pointer-events-none">
            <img src="/food-sketch.jpeg" alt="The Food Desk" className="w-full h-full object-cover object-right" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#8C3A0A] via-[#8C3A0A]/80 to-transparent md:w-3/4" />
          </div>

          <div className="relative z-10 max-w-xl p-8 sm:p-14 space-y-4">
            <span className="inline-block font-mono text-[11px] font-bold px-3.5 py-1.5 rounded-full border uppercase tracking-wider bg-black/30 text-amber-200 border-amber-300/40">
              PANTRY / 02
            </span>
            <h1 className="font-serif text-5xl font-black text-white leading-tight">The Food Desk</h1>
            <p className="text-lg font-medium text-amber-100">
              The nose makes the final judgement before the tongue gets a turn.
            </p>
            <p className="text-sm font-light text-amber-50/85 leading-relaxed">
              Five spices, deliberate heat, and simple steps cooking for pure joy and mental decompression.
            </p>
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essays.map((story) => (
            <article
              key={story.slug}
              onClick={() => onNavigate(`/stories/${story.slug}`)}
              className="bg-white dark:bg-canvas-darkCard rounded-3xl p-7 border border-canvas-border hover:border-amber-500 shadow-sm transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-ink-400">{story.date}</span>
                <h3 className="font-serif text-xl font-bold mt-2 mb-3">{story.title}</h3>
                <p className="text-sm text-ink-600 line-clamp-3">{story.summary}</p>
              </div>
              <div className="pt-5 border-t border-canvas-border mt-6 flex items-center justify-between text-xs font-mono font-bold text-amber-600">
                <span>Read Recipe & Dispatch</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}