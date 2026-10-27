// src/components/WritingBoard.jsx
import React, { useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { ESSAYS_DATA } from '../data/essays';

export default function WritingBoard() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Life', 'Food', 'Work', 'Fiction'];

  const filteredEssays =
    selectedCategory === 'All'
      ? ESSAYS_DATA
      : ESSAYS_DATA.filter((e) => e && (e.category?.toLowerCase() === selectedCategory.toLowerCase() || e.desk?.toLowerCase() === selectedCategory.toLowerCase()));

  return (
    <section id="writing" className="py-24 px-6 md:px-12 bg-canvas-subtle dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
              <span className="text-xs font-mono tracking-widest uppercase text-berry-600 dark:text-berry-400 font-bold">
                THE STORIES &amp; LETTERS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 dark:text-white max-w-xl">
              Life lessons, culinary observations, founder craft &amp; fiction.
            </h2>
          </div>

          {/* Category Filter Pills in Mono Font */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-ink-900 text-white dark:bg-berry-600 dark:text-white shadow-sm'
                    : 'bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-ink-600 dark:text-ink-200 hover:border-berry-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Editorial Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEssays.slice(0, 6).map((essay) => {
            const storyUrl = `/stories/${essay.slug}/`;
            return (
              <a
                key={essay.id || essay.slug}
                href={storyUrl}
                className="group rounded-3xl p-7 bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-600 dark:hover:border-berry-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Metadata: Date & Read Time */}
                  <div className="flex items-center justify-between text-xs font-mono tracking-wider mb-4">
                    <span className="text-ink-500 dark:text-ink-400 font-medium">{essay.date}</span>
                    <div className="flex items-center gap-1.5 text-berry-600 dark:text-berry-400 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{essay.readTime || '6 min read'}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-white group-hover:text-berry-600 dark:group-hover:text-berry-400 transition-colors mb-3 leading-snug">
                    {essay.title}
                  </h3>

                  {/* Summary / Excerpt */}
                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed line-clamp-3 mb-6">
                    {essay.subtitle || essay.summary}
                  </p>
                </div>

                {/* Footer Link in Unified Mono */}
                <div className="pt-4 border-t border-canvas-border dark:border-canvas-darkBorder flex items-center justify-between text-xs font-mono tracking-wider font-bold text-berry-600 dark:text-berry-400">
                  <span className="uppercase">READ NOTE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Read All Stories Button */}
        
        {/* Full Archive Banner from Live Site */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 dark:text-white">
              Looking for earlier essays or specific tags?
            </h3>
            <p className="text-sm sm:text-base font-serif text-ink-600 dark:text-ink-300 font-light">
              Explore the complete collection across Life, Food, and Work, or browse by topic and year.
            </p>
          </div>
          <a
            href="/essays"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1324] hover:bg-[#15233D] text-white text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-md shrink-0"
          >
            <span>EXPLORE ALL ESSAYS & STORIES</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
