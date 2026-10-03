import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Check, Clock, Copy, Sparkles, Tag, X } from 'lucide-react';
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
    <section id="writing" className="py-28 px-6 md:px-12 bg-obsidian-900/40 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-spice-amber mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>THE WRITING BOARD & ARCHIVE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-parchment-50 max-w-xl">
              Life lessons, strategic field notes & tactical essays.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-parchment-100 text-obsidian-950 font-semibold shadow-md'
                    : 'bg-obsidian-900 border border-white/10 text-parchment-400 hover:text-parchment-100 hover:border-white/20'
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
              className="cursor-pointer group rounded-2xl p-7 bg-obsidian-950/80 border border-white/10 hover:border-spice-amber/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs font-mono text-parchment-400 mb-4">
                  <span className="text-spice-amber bg-spice-amber/10 px-2.5 py-0.5 rounded-full border border-spice-amber/20">
                    {essay.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-parchment-400" />
                    <span>{essay.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-parchment-100 group-hover:text-spice-amber transition-colors line-clamp-2 mb-2.5">
                  {essay.title}
                </h3>

                {/* Subtitle / Excerpt */}
                <p className="text-xs sm:text-sm text-parchment-400 font-light leading-relaxed line-clamp-3 mb-6">
                  {essay.subtitle}
                </p>

                {/* Pull Quote Box */}
                <div className="p-3.5 rounded-xl bg-obsidian-900/60 border-l-2 border-spice-amber text-xs font-serif italic text-parchment-300 mb-4">
                  "{essay.leadQuote}"
                </div>
              </div>

              {/* Action trigger */}
              <div className="pt-5 border-t border-white/5 mt-4 flex items-center justify-between text-xs font-mono text-parchment-300 group-hover:text-parchment-100">
                <span className="text-parchment-400">{essay.date}</span>
                <span className="flex items-center gap-1 text-spice-amber">
                  Read Essay <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Immersive Reading Modal */}
        {activeEssay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/85 backdrop-blur-2xl">
            <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-obsidian-900 border border-white/15 p-6 sm:p-12 shadow-2xl">
              {/* Modal Top Actions */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <div className="flex items-center gap-3 text-xs font-mono text-spice-amber">
                  <span>{activeEssay.category}</span>
                  <span>•</span>
                  <span>{activeEssay.readTime}</span>
                  <span>•</span>
                  <span>{activeEssay.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-full bg-obsidian-950/80 border border-white/10 text-parchment-400 hover:text-white transition-colors"
                    title="Copy Link"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-spice-amber" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setActiveEssay(null)}
                    className="p-2 rounded-full bg-obsidian-950/80 border border-white/10 text-parchment-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-parchment-50 leading-[1.15] mb-4">
                {activeEssay.title}
              </h1>
              <p className="text-base sm:text-lg text-parchment-400 font-light leading-relaxed mb-8 italic">
                {activeEssay.subtitle}
              </p>

              {/* Takeaways Card */}
              {activeEssay.takeaways && (
                <div className="mb-10 p-5 rounded-2xl bg-obsidian-950/80 border border-spice-amber/20">
                  <span className="text-xs font-mono uppercase tracking-wider text-spice-amber block mb-2.5">
                    Core Thesis & Takeaways
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-parchment-200">
                    {activeEssay.takeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-spice-amber font-mono">0{idx + 1}.</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Lead Pullquote */}
              <div className="mb-8 p-6 rounded-2xl bg-obsidian-850/60 border-l-4 border-spice-amber text-lg sm:text-xl font-serif italic text-parchment-100">
                "{activeEssay.leadQuote}"
              </div>

              {/* Main Body with Editorial Styling */}
              <div className="editorial-drop-cap prose prose-invert max-w-none text-parchment-200 text-sm sm:text-base font-light leading-relaxed whitespace-pre-line space-y-5">
                {activeEssay.markdownBody}
              </div>

              {/* Author Footnote */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-serif text-sm font-medium text-parchment-100">
                    By {activeEssay.author}
                  </div>
                  <div className="text-xs font-mono text-parchment-400 mt-0.5">
                    Published in 5 Spices or Less · Editorial Board
                  </div>
                </div>

                <button
                  onClick={() => setActiveEssay(null)}
                  className="px-6 py-2.5 rounded-full bg-parchment-100 text-obsidian-950 text-xs font-semibold hover:bg-white transition-all self-end sm:self-center"
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
