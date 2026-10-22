// src/components/WorkDeskPage.jsx
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, Clock, ArrowUpRight } from 'lucide-react';
import * as EssaysModule from '../data/essays';

const WORK_TAGS = ['All', 'Startups', 'EarlyCareer', 'Consumer Psychology', 'Simplification', 'Listening'];

export default function WorkDeskPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const essays = useMemo(() => {
    try {
      const all = EssaysModule.ESSAYS_DATA || EssaysModule.default || [];
      return all.filter(
        (item) => (item.desk || item.deskId || item.category || '').toLowerCase() === 'work'
      );
    } catch (e) {
      return [];
    }
  }, []);

  const filteredEssays = useMemo(() => {
    return essays.filter((story) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        (story.title && story.title.toLowerCase().includes(q)) ||
        (story.summary && story.summary.toLowerCase().includes(q)) ||
        (story.lead && story.lead.toLowerCase().includes(q)) ||
        (story.excerpt && story.excerpt.toLowerCase().includes(q)) ||
        (story.tags && story.tags.some((t) => t.toLowerCase().includes(q)));

      const matchesTag =
        selectedTag === 'All' ||
        (story.tags && story.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase()));

      return matchesSearch && matchesTag;
    });
  }, [essays, searchQuery, selectedTag]);

  return (
    <div className="min-h-screen bg-canvas dark:bg-canvas-dark text-ink-900 dark:text-white transition-colors duration-300 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Back Link with full click target & spacing */}
        <div className="mb-8 relative z-30">
          <button
            type="button"
            onClick={() => {
              if (onNavigate) onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-ink-600 dark:text-ink-400 hover:text-cyan-400 transition-colors cursor-pointer py-1.5"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" />
            <span>BACK TO THE FRONT PAGE</span>
          </button>
        </div>

        {/* HERO BANNER */}
        <div className="relative rounded-3xl bg-[#09111D] border border-[#223B61]/60 shadow-2xl overflow-hidden min-h-[380px] md:min-h-[440px] flex items-center mb-12">
          <span className="absolute right-8 top-4 font-serif text-8xl md:text-9xl font-black select-none pointer-events-none text-cyan-200/10 z-10">
            03
          </span>

          <div className="absolute right-0 top-0 bottom-0 h-full w-full md:w-3/4 flex justify-end pointer-events-none z-0 overflow-hidden">
            <img
              src="/work-sketch.jpeg"
              alt="The Work Desk"
              className="h-full w-auto object-contain object-right-bottom"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 8%, rgba(0,0,0,0.4) 30%, black 65%)',
                maskImage: 'linear-gradient(to right, transparent 0%, transparent 8%, rgba(0,0,0,0.4) 30%, black 65%)',
              }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          <div className="relative z-20 max-w-xl p-8 sm:p-12 md:p-14 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600 shrink-0" />
              <span className="text-xs font-mono uppercase tracking-widest text-berry-400 font-bold">
                STARTUPS, BOARDROOMS, & OPERATIONAL DISCIPLINE
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              The Work Desk
            </h1>

            <p className="text-xs sm:text-sm font-light leading-relaxed text-slate-300/90 pt-1">
              Thirty years of enterprise building enduring ventures, trusted partnerships, and practical operator judgement. Cutting through operational noise, boardroom theatre, and vanity to focus on what truly works.
            </p>

            <div className="pt-2 text-xs font-mono text-cyan-200/70">
              Publishes: A weekly note on Sunday
            </div>
          </div>
        </div>

        {/* SEARCH & FILTER TAGS BAR */}
        <div className="mb-12 space-y-4">
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, or lesson..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white placeholder:text-ink-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
            <span className="text-ink-500 dark:text-ink-400 mr-1">Filter by tag:</span>
            {WORK_TAGS.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-full border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-ink-900 dark:bg-white text-white dark:text-ink-900 border-ink-900 dark:border-white font-bold'
                      : 'bg-white dark:bg-canvas-darkCard text-ink-700 dark:text-ink-300 border-canvas-border dark:border-canvas-darkBorder hover:border-cyan-400'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEssays.map((story) => {
            const summaryText =
              story.summary ||
              story.excerpt ||
              story.lead ||
              'Why entering unfamiliar rooms without preconceived notions changes how you build, and how listening to ground reality beats corporate dogma.';

            const quoteText =
              story.quote ||
              story.pullQuote ||
              'The moment you enter a discussion convinced of what the other person is going to say, you stop listening to them. You are only listening to your own echo.';

            const readTimeText = story.readingTime || story.readTime || '5 min read';
            const dateText = story.date || 'October 2026';
            const categoryText = story.subCategory || story.category || 'OPERATING & PERSPECTIVE';

            return (
              <article
                key={story.slug || story.id || story.title}
                onClick={() => {
                  if (onNavigate) {
                    onNavigate(`/stories/${story.slug || 'the-art-of-the-blank-page'}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="group bg-white dark:bg-canvas-darkCard rounded-[2rem] p-7 border border-canvas-border dark:border-canvas-darkBorder hover:border-cyan-400 dark:hover:border-cyan-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-cyan-400/40 text-cyan-700 dark:text-cyan-300 bg-cyan-50/80 dark:bg-cyan-950/40">
                        WORK
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-300/40">
                        {categoryText}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-500 dark:text-ink-400">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      {readTimeText}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {story.title || 'The Art of the Blank Page'}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed">
                    {summaryText}
                  </p>

                  <div className="p-4 rounded-2xl bg-canvas-subtle dark:bg-[#131926] border border-canvas-border dark:border-canvas-darkBorder/60">
                    <blockquote className="font-serif italic text-xs text-ink-800 dark:text-ink-200 leading-relaxed">
                      "{quoteText}"
                    </blockquote>
                  </div>
                </div>

                <div className="pt-5 border-t border-canvas-border dark:border-canvas-darkBorder mt-6 flex items-center justify-between text-xs font-mono">
                  <span className="text-ink-500 dark:text-ink-400">{dateText}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-berry-600 dark:text-berry-400 group-hover:translate-x-1 transition-transform">
                    Read Story <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </div>
  );
}
