import React, { useState, useMemo } from 'react';
import { ArrowRight, Clock, Search, X } from 'lucide-react';
import { ESSAYS_DATA } from '../data/essays';

export default function WritingBoard({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const categories = ['All', 'Life', 'Food', 'Work', 'Fiction'];

  // Extract unique tags
  const availableTags = useMemo(() => {
    const set = new Set();
    ESSAYS_DATA.forEach((e) => {
      if (selectedCategory === 'All' || e.category === selectedCategory) {
        if (e.tags) e.tags.forEach((t) => set.add(t));
      }
    });
    return ['All', ...Array.from(set)];
  }, [selectedCategory]);

  const filteredEssays = useMemo(() => {
    return ESSAYS_DATA.filter((e) => {
      const matchesCategory = selectedCategory === 'All' || e.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || (e.tags && e.tags.includes(selectedTag));
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.subtitle.toLowerCase().includes(q) ||
        (e.tags && e.tags.some((t) => t.toLowerCase().includes(q)));
      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  return (
    <section id="writing" className="py-28 px-6 md:px-12 bg-canvas-subtle dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
              <span className="text-xs font-mono tracking-widest uppercase text-berry-600 dark:text-berry-400 font-bold">
                THE DISPATCHES &amp; STORIES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 dark:text-white max-w-xl">
              Life lessons, culinary observations, founder craft &amp; fiction.
            </h2>
          </div>

          {/* Category Filter Pills: All, Life, Food, Work, Fiction */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedTag('All');
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                  selectedCategory === cat
                    ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-950 shadow-sm'
                    : 'bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-ink-600 dark:text-ink-300 hover:border-berry-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Sub-Tag Bar */}
        <div className="mb-12 p-6 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-ink-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays by keyword, topic, or tag (e.g. Hiring, Max Kelly, Surgery, Lucknow)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 shadow-inner"
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

          {/* Sub-tag filters */}
          {availableTags.length > 2 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-ink-400 font-bold mr-1">
                Filter by topic:
              </span>
              {availableTags.slice(0, 8).map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                      isSelected
                        ? 'bg-berry-600 text-white shadow-sm'
                        : 'bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-600 dark:text-ink-300 hover:border-berry-600'
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
          <div className="text-center py-16 px-4 space-y-4 bg-white dark:bg-canvas-darkCard rounded-3xl border border-canvas-border dark:border-canvas-darkBorder">
            <div className="font-serif text-2xl font-bold text-ink-900 dark:text-white">
              No dispatches match your search.
            </div>
            <p className="text-sm text-ink-600 dark:text-ink-300 max-w-md mx-auto">
              Try a different keyword or reset your filters to view all available dispatches.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
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

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 dark:text-white leading-snug mb-3 group-hover:text-berry-600 transition-colors">
                    {essay.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed line-clamp-3 mb-5">
                    {essay.subtitle}
                  </p>

                  {/* Tags */}
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

        {/* View All Archive Link */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate('/stories')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-ink-900 dark:border-white text-ink-900 dark:text-white hover:bg-ink-900 hover:text-white dark:hover:bg-white dark:hover:text-ink-950 font-bold text-xs uppercase tracking-wider transition-all"
          >
            <span>Explore Complete Archive ({ESSAYS_DATA.length} Dispatches)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
