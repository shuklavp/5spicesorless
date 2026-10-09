// src/components/WritingBoard.jsx
import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Clock, Copy, X } from 'lucide-react';
import { ESSAYS_DATA } from '../data/essays';

export default function WritingBoard({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeEssay, setActiveEssay] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Life', 'Food', 'Work', 'Fiction'];

  const filteredEssays =
    selectedCategory === 'All'
      ? ESSAYS_DATA
      : ESSAYS_DATA.filter((e) => e.category === selectedCategory);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="writing" className="py-24 px-6 md:px-12 bg-canvas-subtle dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
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

          {/* Category Filter Pills: Life, Food, Work, Fiction */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
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

        {/* Featured Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredEssays.slice(0, 4).map((essay) => (
            <article
              key={essay.id}
              onClick={() => {
                if (onNavigate) {
                  onNavigate(`/stories/${essay.slug}`);
                } else {
                  setActiveEssay(essay);
                }
              }}
              className="cursor-pointer group rounded-3xl p-6 bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-600 dark:hover:border-berry-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-berry-700 dark:text-berry-300 bg-berry-50 dark:bg-canvas-dark px-3 py-1 rounded-full border border-berry-200 dark:border-canvas-darkBorder font-bold uppercase text-[10px]">
                    {essay.category}
                  </span>
                  <div className="flex items-center gap-1 text-ink-500 dark:text-ink-300">
                    <Clock className="w-3 h-3 text-cobalt-600" />
                    <span>{essay.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-ink-900 dark:text-white group-hover:text-berry-600 dark:group-hover:text-berry-400 transition-colors line-clamp-2 mb-2 leading-snug">
                  {essay.title}
                </h3>

                {/* Subtitle / Excerpt */}
                <p className="text-xs text-ink-600 dark:text-ink-200 font-light leading-relaxed line-clamp-3 mb-5">
                  {essay.subtitle}
                </p>

                {/* Pull Quote Box */}
                <div className="p-3 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border-l-3 border-berry-600 text-[11px] font-serif italic text-ink-800 dark:text-ink-100 mb-4 line-clamp-3">
                  "{essay.leadQuote}"
                </div>
              </div>

              {/* Action trigger */}
              <div className="pt-3.5 border-t border-canvas-border dark:border-canvas-darkBorder mt-3 flex items-center justify-between text-[11px] font-mono text-ink-600 dark:text-ink-300">
                <span>{essay.date}</span>
                <span className="flex items-center gap-1 text-berry-600 dark:text-berry-400 font-bold group-hover:translate-x-0.5 transition-transform">
                  Read <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Archive Banner */}
        <div className="p-6 rounded-2xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-serif font-bold text-base text-ink-900 dark:text-white">
              Looking for earlier essays or specific tags?
            </div>
            <div className="text-xs font-mono text-ink-500 dark:text-ink-400">
              Browse dispatches by Life, Food, Work, or tag archives with keyword search.
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('/stories')}
            className="px-6 py-2.5 rounded-full bg-ink-900 text-white dark:bg-berry-600 text-xs font-bold font-mono tracking-wider uppercase flex items-center gap-2 hover:bg-berry-700 transition-colors shrink-0 group"
          >
            <span>View Full Archive Across All Desks</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>

      {/* Reader Modal (Fallback when opened directly) */}
      {activeEssay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-canvas-darkCard rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-canvas-border dark:border-canvas-darkBorder shadow-2xl relative p-6 sm:p-10">
            <button
              onClick={() => setActiveEssay(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-canvas-subtle dark:bg-canvas-dark hover:bg-berry-50 dark:hover:bg-berry-950 text-ink-600 dark:text-ink-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-berry-600 dark:text-berry-400 font-bold uppercase">
                  {activeEssay.category}
                </span>
                <span className="text-ink-400">•</span>
                <span className="text-ink-500 dark:text-ink-400">{activeEssay.readTime}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
                {activeEssay.title}
              </h2>
            </div>

            <div className="p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border-l-4 border-berry-600 text-sm font-serif italic text-ink-800 dark:text-ink-200 mb-6">
              "{activeEssay.leadQuote}"
            </div>

            <div className="prose prose-ink dark:prose-invert max-w-none text-sm sm:text-base font-light leading-relaxed space-y-4 mb-8">
              {activeEssay.markdownBody.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-canvas-border dark:border-canvas-darkBorder">
              <button
                onClick={() => {
                  const s = activeEssay.slug;
                  setActiveEssay(null);
                  if (onNavigate) onNavigate(`/stories/${s}`);
                }}
                className="text-xs font-mono font-bold text-berry-600 dark:text-berry-400 hover:underline"
              >
                Read as Full Page Canvas →
              </button>
              <button
                onClick={() => setActiveEssay(null)}
                className="px-6 py-2 rounded-full bg-ink-900 text-white dark:bg-berry-600 text-xs font-bold"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
