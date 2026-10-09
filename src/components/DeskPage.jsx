import React, { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Clock, Search, X } from 'lucide-react';
import { ESSAYS_DATA } from '../data/essays';

const DESK_CONFIG = {
  life: {
    kicker: 'DESK 01 · LIFE',
    title: 'Life, Relationships, & Perspective',
    description:
      'Reflections drawn from thirty years of living, making mistakes, marriage, raising a daughter, and surviving near-fatal odds. Becoming a kinder human being rather than playing a love guru.',
    tagColor: 'text-berry-600 dark:text-berry-400 bg-berry-50 dark:bg-berry-950/60 border-berry-200 dark:border-berry-900',
  },
  food: {
    kicker: 'DESK 02 · FOOD',
    title: 'One Simple Recipe a Week',
    description:
      'Lucknow culinary roots where aroma precedes taste. Five spices or fewer, deliberate heat control, and simple steps to clear a cluttered executive mind.',
    tagColor: 'text-cobalt-600 dark:text-cobalt-400 bg-cobalt-50 dark:bg-cobalt-950/60 border-cobalt-200 dark:border-cobalt-900',
  },
  work: {
    kicker: 'DESK 03 · WORK',
    title: 'Career, Startups & Boardrooms',
    description:
      'Thirty years of enterprise leaving behind hard-won scars and practical lessons. Building categories from scratch, scaling teams of 160+, boardroom politics, hiring discipline, and exiting with honour.',
    tagColor: 'text-ink-800 dark:text-ink-200 bg-ink-100 dark:bg-ink-800 border-ink-200 dark:border-ink-700',
  },
  stories: {
    kicker: 'ALL DISPATCHES & ARCHIVE',
    title: 'The Complete Literary & Operator Archive',
    description:
      'Every reflective personal essay, culinary observation, founder playbook, and work of fiction published under 5 Spices or Less.',
    tagColor: 'text-berry-600 dark:text-berry-400 bg-berry-50 dark:bg-berry-950/60 border-berry-200 dark:border-berry-900',
  },
};

export default function DeskPage({ desk, initialTag, onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState(initialTag || 'All');

  const config = DESK_CONFIG[desk] || DESK_CONFIG.stories;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${config.title} · 5 Spices or Less`;
    return () => {
      document.title = '5 Spices or Less: Simplicity in Life, Food and Work';
    };
  }, [config]);

  // Filter essays by desk category
  const deskEssays = useMemo(() => {
    if (desk === 'stories') return ESSAYS_DATA;
    const catName = desk.charAt(0).toUpperCase() + desk.slice(1);
    return ESSAYS_DATA.filter((e) => e.category.toLowerCase() === desk.toLowerCase());
  }, [desk]);

  // Extract all unique tags in this desk
  const availableTags = useMemo(() => {
    const set = new Set();
    deskEssays.forEach((e) => {
      if (e.tags) e.tags.forEach((t) => set.add(t));
    });
    return ['All', ...Array.from(set)];
  }, [deskEssays]);

  // Filter by tag and search query
  const filteredEssays = useMemo(() => {
    return deskEssays.filter((essay) => {
      const matchesTag = selectedTag === 'All' || (essay.tags && essay.tags.includes(selectedTag));
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        essay.title.toLowerCase().includes(q) ||
        essay.subtitle.toLowerCase().includes(q) ||
        (essay.tags && essay.tags.some((t) => t.toLowerCase().includes(q))) ||
        essay.markdownBody.toLowerCase().includes(q);
      return matchesTag && matchesSearch;
    });
  }, [deskEssays, selectedTag, searchQuery]);

  return (
    <div className="min-h-screen bg-white dark:bg-canvas-dark text-ink-900 dark:text-white pt-28 pb-20 px-6 md:px-12 bg-sandpaper-texture transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-canvas-border dark:border-canvas-darkBorder">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-ink-600 dark:text-ink-300 hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home Broadside</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-ink-500 dark:text-ink-400">
            <span>{filteredEssays.length} {filteredEssays.length === 1 ? 'Dispatch' : 'Dispatches'}</span>
          </div>
        </div>

        {/* Section Header */}
        <header className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-berry-600" />
            <span>{config.kicker}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-ink-900 dark:text-white leading-[1.08] tracking-tight">
            {config.title}
          </h1>

          <p className="text-base sm:text-lg text-ink-700 dark:text-ink-200 font-light leading-relaxed">
            {config.description}
          </p>
        </header>

        {/* Search & Tag Filter Bar */}
        <div className="mb-12 p-6 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-5">
          {/* Keyword Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-ink-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${config.title.toLowerCase()} by topic, keyword, or tag (e.g. Hiring, Mentorship)...`}
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-ink-400 hover:text-ink-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Tag Filter Pills */}
          {availableTags.length > 2 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-400 font-bold mr-1">
                Filter by Tag:
              </span>
              {availableTags.map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all ${
                      isSelected
                        ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-950 shadow-sm'
                        : 'bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-600 dark:text-ink-300 hover:border-berry-600'
                    }`}
                  >
                    {tag === 'All' ? 'All Topics' : `#${tag}`}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Essays Grid */}
        {filteredEssays.length === 0 ? (
          <div className="text-center py-16 px-4 space-y-4">
            <div className="font-serif text-2xl font-bold text-ink-900 dark:text-white">
              No dispatches found matching your search.
            </div>
            <p className="text-sm text-ink-600 dark:text-ink-300 max-w-md mx-auto">
              Try a different keyword or reset your tag filters to browse all essays in this desk.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('All');
              }}
              className="px-6 py-2.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs uppercase tracking-wider shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEssays.map((essay) => (
              <article
                key={essay.id}
                onClick={() => onNavigate(`/stories/${essay.slug || essay.id}`)}
                className="rounded-3xl p-7 bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-mono px-3 py-1 rounded-full uppercase tracking-wider font-bold bg-berry-50 text-berry-600 dark:bg-berry-950/60 dark:text-berry-400 border border-berry-200 dark:border-berry-900">
                      {essay.category}
                    </span>
                    <span className="text-ink-400 font-mono text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{essay.readTime}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 dark:text-white leading-snug mb-3 group-hover:text-berry-600 transition-colors">
                    {essay.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed line-clamp-3 mb-6">
                    {essay.subtitle}
                  </p>

                  {/* Tags Preview */}
                  {essay.tags && essay.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {essay.tags.slice(0, 3).map((t) => (
                        <span key={t} className="text-[11px] font-mono text-ink-400 bg-canvas-subtle dark:bg-canvas-dark px-2 py-0.5 rounded-md border border-canvas-border dark:border-canvas-darkBorder">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-5 border-t border-canvas-border dark:border-canvas-darkBorder flex items-center justify-between text-xs font-mono font-bold text-ink-500 dark:text-ink-400">
                  <span>{essay.date}</span>
                  <span className="text-berry-600 dark:text-berry-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Story →
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
