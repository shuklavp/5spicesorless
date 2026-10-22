// src/pages/LifeDeskPage.jsx
import React, { useMemo } from 'react';
import { ArrowLeft, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { getLifeEssays } from '../data/lifeEssays';

export default function LifeDeskPage({ onNavigate }) {
  const essays = useMemo(() => getLifeEssays(), []);

  return (
    <div className="min-h-screen bg-canvas dark:bg-canvas-dark text-ink-900 dark:text-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <button
          onClick={() => onNavigate('/')}
          className="mb-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink-500 hover:text-berry-600"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Front Page
        </button>

        {/* Forest Emerald Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0A2317] via-[#0E3322] to-[#071910] border border-[#1E5E3A]/50 shadow-2xl overflow-hidden min-h-[380px] flex items-center mb-16">
          <span className="absolute right-8 top-4 font-serif text-9xl font-black text-emerald-300/10 select-none pointer-events-none">
            01
          </span>
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 h-full pointer-events-none">
            <img src="/life-sketch.jpeg" alt="The Life Desk" className="w-full h-full object-cover object-right" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2317] via-[#0A2317]/80 to-transparent md:w-3/4" />
          </div>

          <div className="relative z-10 max-w-xl p-8 sm:p-14 space-y-4">
            <span className="inline-block font-mono text-[11px] font-bold px-3.5 py-1.5 rounded-full border uppercase tracking-wider bg-emerald-950/80 text-emerald-300 border-emerald-500/40">
              FOLIO / 01
            </span>
            <h1 className="font-serif text-5xl font-black text-white leading-tight">The Life Desk</h1>
            <p className="text-lg font-medium text-emerald-200">Dignity, quiet observation, and patience.</p>
            <p className="text-sm font-light text-emerald-100/75 leading-relaxed">
              Everyday lessons on communication, mistakes, and learning to be a kinder human being rather than playing an unearned guru.
            </p>
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essays.map((story) => (
            <article
              key={story.slug}
              onClick={() => onNavigate(`/stories/${story.slug}`)}
              className="bg-white dark:bg-canvas-darkCard rounded-3xl p-7 border border-canvas-border hover:border-emerald-500 shadow-sm transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-ink-400">{story.date}</span>
                <h3 className="font-serif text-xl font-bold mt-2 mb-3">{story.title}</h3>
                <p className="text-sm text-ink-600 line-clamp-3">{story.summary}</p>
              </div>
              <div className="pt-5 border-t border-canvas-border mt-6 flex items-center justify-between text-xs font-mono font-bold text-emerald-600">
                <span>Read Dispatch</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}