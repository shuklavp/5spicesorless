import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Check, Clock, Copy, Tag, X } from 'lucide-react';
import { ESSAYS_DATA } from '../data/essays';

export default function WritingBoard() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeEssay, setActiveEssay] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Business & Strategy', 'Life & Systems', 'Food & Philosophy'];

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
    <section id="writing" className="py-28 px-6 md:px-12 bg-canvas-subtle dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
              <span className="text-xs font-mono tracking-widest uppercase text-berry-600 dark:text-berry-400 font-bold">
                THE WRITING BOARD & ARCHIVE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 dark:text-white max-w-xl">
              Life lessons, strategic field notes & tactical essays.
            </h2>
          </div>

          {/* Category Filter Pills */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEssays.map((essay) => (
            <article
              key={essay.id}
              onClick={() => setActiveEssay(essay)}
              className="cursor-pointer group rounded-3xl p-7 bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-600 dark:hover:border-berry-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-berry-700 dark:text-berry-300 bg-berry-50 dark:bg-canvas-dark px-3 py-1 rounded-full border border-berry-200 dark:border-canvas-darkBorder font-bold">
                    {essay.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-ink-500 dark:text-ink-300">
                    <Clock className="w-3 h-3 text-cobalt-600" />
                    <span>{essay.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-white group-hover:text-berry-600 dark:group-hover:text-berry-400 transition-colors line-clamp-2 mb-2.5 leading-snug">
                  {essay.title}
                </h3>

                {/* Subtitle / Excerpt */}
                <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-200 font-light leading-relaxed line-clamp-3 mb-6">
                  {essay.subtitle}
                </p>

                {/* Pull Quote Box */}
                <div className="p-3.5 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border-l-4 border-berry-600 text-xs font-serif italic text-ink-800 dark:text-ink-100 mb-4">
                  "{essay.leadQuote}"
                </div>
              </div>

              {/* Action trigger */}
              <div className="pt-4 border-t border-canvas-border dark:border-canvas-darkBorder mt-4 flex items-center justify-between text-xs font-mono text-ink-600 dark:text-ink-300">
                <span>{essay.date}</span>
                <span className="flex items-center gap-1 text-berry-600 dark:text-berry-400 font-bold group-hover:translate-x-0.5 transition-transform">
                  Read Essay <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Immersive Reading Modal */}
        {activeEssay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-950/75 dark:bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder p-6 sm:p-12 shadow-2xl">
              {/* Modal Top Actions */}
              <div className="flex items-center justify-between pb-6 border-b border-canvas-border dark:border-canvas-darkBorder mb-8">
                <div className="flex items-center gap-3 text-xs font-mono text-berry-600 dark:text-berry-400 font-bold">
                  <span>{activeEssay.category}</span>
                  <span>•</span>
                  <span>{activeEssay.readTime}</span>
                  <span>•</span>
                  <span>{activeEssay.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-full bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-600 dark:text-ink-200 hover:text-berry-600"
                    title="Copy Link"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-berry-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setActiveEssay(null)}
                    className="p-2 rounded-full bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-600 dark:text-ink-200 hover:text-berry-600"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white leading-[1.1] mb-4">
                {activeEssay.title}
              </h1>
              <p className="text-base sm:text-lg text-ink-600 dark:text-ink-200 font-light leading-relaxed mb-8 italic">
                {activeEssay.subtitle}
              </p>

              {/* Takeaways Card */}
              {activeEssay.takeaways && (
                <div className="mb-10 p-6 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-berry-200 dark:border-canvas-darkBorder">
                  <span className="text-xs font-mono uppercase tracking-wider text-berry-600 dark:text-berry-400 font-bold block mb-2.5">
                    Core Thesis & Takeaways
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-ink-800 dark:text-ink-100 font-medium">
                    {activeEssay.takeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-berry-600 font-mono font-bold">0{idx + 1}.</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Lead Pullquote */}
              <div className="mb-8 p-6 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border-l-4 border-berry-600 text-lg sm:text-xl font-serif italic text-ink-900 dark:text-white font-medium">
                "{activeEssay.leadQuote}"
              </div>

              {/* Main Body */}
              <div className="editorial-drop-cap prose max-w-none text-ink-800 dark:text-ink-100 text-sm sm:text-base font-normal leading-relaxed whitespace-pre-line space-y-5">
                {activeEssay.markdownBody}
              </div>

              {/* Author Footnote */}
              <div className="mt-12 pt-8 border-t border-canvas-border dark:border-canvas-darkBorder flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-serif text-sm font-bold text-ink-900 dark:text-white">
                    By {activeEssay.author}
                  </div>
                  <div className="text-xs font-mono text-ink-500 dark:text-ink-400 mt-0.5">
                    Published in 5 Spices or Less · Editorial Board
                  </div>
                </div>

                <button
                  onClick={() => setActiveEssay(null)}
                  className="px-6 py-2.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white text-xs font-bold transition-all self-end sm:self-center shadow-md shadow-berry-600/20"
                >
                  Finished Reading
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
