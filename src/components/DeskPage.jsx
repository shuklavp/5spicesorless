// src/components/DeskPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Clock, Feather, Search } from 'lucide-react';
import { ESSAYS_DATA } from '../data/essays';

const DESK_CONFIGS = {
  life: {
    title: 'The Life Desk',
    kicker: 'LIFE, PERSPECTIVE, & HUMAN BONDS',
    subtitle: 'Everyday lessons from growing up in a not-so-big city of Lucknow, learning the nuances of communication and tehzeeb, and making honest mistakes. Becoming a hopeless dreamer and builder, and learning to be a kinder human being rather than playing an unearned guru.',
    cadence: 'Published Fortnightly',
  },
  food: {
    title: 'The Food Desk',
    kicker: 'FIVE SPICES OR FEWER',
    subtitle: 'Lucknow roots where aroma precedes taste. Five spices, deliberate heat, and simple steps cooking for pure joy and mental decompression.',
    cadence: 'Fortnightly Recipe & Technique',
  },
  work: {
    title: 'The Work Desk',
    kicker: 'STARTUPS, BOARDROOMS, & OPERATIONAL DISCIPLINE',
    subtitle: 'Thirty years of enterprise building enduring ventures, trusted partnerships, and practical operator judgment. Cutting through operational noise, boardroom theatre, and vanity to focus on what truly works.',
    cadence: 'Weekly Field Note on Sunday',
  },
  stories: {
    title: 'All Dispatches & Stories',
    kicker: 'THE EDITORIAL ARCHIVE',
    subtitle: 'Reflective personal essays, culinary observations, operator playbooks, and short fiction by Vivek Shukla.',
    cadence: 'Complete Archive',
  },
};

export default function DeskPage({ deskId, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const config = DESK_CONFIGS[deskId] || DESK_CONFIGS.stories;

  // Filter essays by desk (if not all stories)
  const deskEssays =
    deskId === 'stories'
      ? ESSAYS_DATA
      : ESSAYS_DATA.filter((e) => e.category.toLowerCase() === deskId.toLowerCase());

  // Collect all unique tags
  const allTags = ['All', ...new Set(deskEssays.flatMap((e) => e.tags || []))];

  // Apply search and tag filters
  const filteredEssays = deskEssays.filter((essay) => {
    const matchesSearch =
      essay.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      essay.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (essay.subCategory && essay.subCategory.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (essay.tags && essay.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())));

    const matchesTag = selectedTag === 'All' || (essay.tags && essay.tags.includes(selectedTag));

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-canvas-dark text-ink-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-10">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-ink-600 dark:text-ink-300 hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Broadside</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
            <span className="text-xs font-mono tracking-widest uppercase text-berry-600 dark:text-berry-400 font-bold">
              {config.kicker}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-black leading-tight">
            {config.title}
          </h1>

          <p className="text-sm sm:text-base text-ink-600 dark:text-ink-300 font-light leading-relaxed">
            {config.subtitle}
          </p>

          <div className="pt-1">
            <span className="text-xs font-mono text-ink-400 dark:text-ink-500 font-medium">
              Cadence: {config.cadence}
            </span>
          </div>
        </div>

        {/* Search Bar & Tag Filter Pills */}
        <div className="mb-12 space-y-5">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-ink-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by topic, keyword, or lesson..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600"
            />
          </div>

          {/* Tags */}
          {allTags.length > 1 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-ink-400 mr-2">Filter by tag:</span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-ink-900 text-white dark:bg-berry-600 dark:text-white shadow-sm'
                      : 'bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-ink-600 dark:text-ink-300 hover:border-berry-500'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Essays Grid */}
        {filteredEssays.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-canvas-border dark:border-canvas-darkBorder rounded-3xl">
            <p className="text-sm font-mono text-ink-400">No dispatches match your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEssays.map((essay) => (
              <article
                key={essay.id}
                onClick={() => onNavigate(`/stories/${essay.slug}`)}
                className="cursor-pointer group rounded-3xl p-7 bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-600 dark:hover:border-berry-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-berry-700 dark:text-berry-300 bg-white dark:bg-canvas-dark px-3 py-1 rounded-full border border-berry-200 dark:border-canvas-darkBorder font-bold uppercase text-[10px]">
                        {essay.category}
                      </span>
                      {essay.subCategory && (
                        <span className="text-cobalt-700 dark:text-cobalt-300 bg-cobalt-50 dark:bg-cobalt-950/60 px-2.5 py-0.5 rounded-full border border-cobalt-200 dark:border-cobalt-800 font-bold uppercase text-[10px]">
                          {essay.subCategory}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-ink-500 dark:text-ink-300 shrink-0">
                      <Clock className="w-3 h-3 text-cobalt-600" />
                      <span>{essay.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-white group-hover:text-berry-600 dark:group-hover:text-berry-400 transition-colors line-clamp-2 mb-2 leading-snug">
                    {essay.title}
                  </h3>

                  <p className="text-xs text-ink-600 dark:text-ink-200 font-light leading-relaxed line-clamp-3 mb-5">
                    {essay.subtitle}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-white dark:bg-canvas-dark border-l-3 border-berry-600 text-[11px] font-serif italic text-ink-800 dark:text-ink-100 mb-4 line-clamp-3">
                    "{essay.leadQuote}"
                  </div>
                </div>

                <div className="pt-4 border-t border-canvas-border dark:border-canvas-darkBorder mt-4 flex items-center justify-between text-xs font-mono text-ink-600 dark:text-ink-300">
                  <span>{essay.date}</span>
                  <span className="flex items-center gap-1 text-berry-600 dark:text-berry-400 font-bold group-hover:translate-x-1 transition-transform">
                    Read Story <ArrowUpRight className="w-3.5 h-3.5" />
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
