// src/components/DeskPage.jsx
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, Clock, ArrowUpRight } from 'lucide-react';
import { essays } from '../data/essays';

export default function DeskPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEssays = useMemo(() => {
    return (essays || []).filter((story) => {
      return (
        searchQuery.trim() === '' ||
        (story.title && story.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (story.summary && story.summary.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-canvas dark:bg-canvas-dark text-ink-900 dark:text-white transition-colors duration-300 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-6">
          <button
            type="button"
            onClick={() => {
              if (onNavigate) onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400 hover:text-berry-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO FRONT PAGE</span>
          </button>
        </div>

        <div className="relative rounded-3xl bg-[#181524] border border-berry-500/30 shadow-2xl overflow-hidden min-h-[380px] md:min-h-[440px] flex items-center mb-12">
          <span className="absolute right-8 top-4 font-serif text-8xl md:text-9xl font-black select-none pointer-events-none text-berry-300/10 z-10">
            ALL
          </span>

          <div className="relative z-20 max-w-xl p-8 sm:p-12 md:p-14 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-berry-400 font-bold">
              THE FULL LIBRARY
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Stories & Lessons
            </h1>
            <p className="text-xs sm:text-sm font-light leading-relaxed text-gray-300 pt-1">
              Thirty years of observations, recipes, and boardrooms compiled in one place.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, or lesson..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white placeholder:text-ink-400 text-sm focus:outline-none focus:ring-2 focus:ring-berry-500/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEssays.map((story) => (
            <article
              key={story.slug || story.id}
              onClick={() => {
                if (onNavigate) {
                  onNavigate(`/stories/${story.slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group bg-white dark:bg-canvas-darkCard rounded-3xl p-7 border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-400/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border border-berry-400/30 text-berry-600 dark:text-berry-400 bg-berry-50 dark:bg-berry-950/40">
                    {story.desk?.toUpperCase() || 'ESSAY'}
                  </span>
                  {story.readingTime && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-ink-400">
                      <Clock className="w-3 h-3" />
                      {story.readingTime}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-white group-hover:text-berry-500 transition-colors leading-snug">
                  {story.title}
                </h3>

                {story.summary && (
                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed">
                    {story.summary}
                  </p>
                )}

                {story.quote && (
                  <div className="p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark/60 border border-canvas-border dark:border-canvas-darkBorder">
                    <blockquote className="font-serif italic text-xs text-ink-700 dark:text-ink-200 leading-relaxed">
                      "{story.quote}"
                    </blockquote>
                  </div>
                )}
              </div>

              <div className="pt-5 border-t border-canvas-border dark:border-canvas-darkBorder mt-6 flex items-center justify-between text-xs font-mono">
                <span className="text-ink-500 dark:text-ink-400">{story.date || 'October 2026'}</span>
                <span className="inline-flex items-center gap-1 font-bold text-berry-600 dark:text-berry-400 group-hover:translate-x-1 transition-transform">
                  Read Story <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
