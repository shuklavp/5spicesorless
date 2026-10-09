// src/components/StoryPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Clock, Copy, Feather, Flame, Share2 } from 'lucide-react';
import { ESSAYS_DATA } from '../data/essays';

export default function StoryPage({ slug, onNavigate }) {
  const [copied, setCopied] = useState(false);

  const essay = ESSAYS_DATA.find((e) => e.slug === slug || e.id === slug) || ESSAYS_DATA[0];
  const currentIndex = ESSAYS_DATA.findIndex((e) => e.slug === essay.slug);
  const nextEssay = currentIndex < ESSAYS_DATA.length - 1 ? ESSAYS_DATA[currentIndex + 1] : ESSAYS_DATA[0];
  const prevEssay = currentIndex > 0 ? ESSAYS_DATA[currentIndex - 1] : ESSAYS_DATA[ESSAYS_DATA.length - 1];

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-canvas-dark text-ink-900 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-canvas-border dark:border-canvas-darkBorder">
          <button
            onClick={() => onNavigate('/stories')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-ink-600 dark:text-ink-300 hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Stories</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink-500 dark:text-ink-400 hover:text-berry-600 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-berry-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link Copied' : 'Share Article'}</span>
          </button>
        </div>

        {/* Article Meta Header */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-berry-700 dark:text-berry-300 bg-berry-50 dark:bg-canvas-darkCard px-3 py-1 rounded-full border border-berry-200 dark:border-canvas-darkBorder font-bold uppercase text-[11px]">
              {essay.category}
            </span>
            <div className="flex items-center gap-1 text-ink-500 dark:text-ink-400">
              <Clock className="w-3.5 h-3.5 text-cobalt-600" />
              <span>{essay.readTime}</span>
            </div>
            <span className="text-ink-400 dark:text-ink-600">•</span>
            <span className="text-ink-500 dark:text-ink-400">{essay.date}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-black text-ink-900 dark:text-white leading-[1.12]">
            {essay.title}
          </h1>

          <p className="text-base sm:text-xl text-ink-600 dark:text-ink-200 font-light leading-relaxed">
            {essay.subtitle}
          </p>
        </div>

        {/* Lead Pull Quote Box */}
        <div className="p-6 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border-l-4 border-berry-600 my-8 shadow-sm">
          <blockquote className="font-serif italic text-base sm:text-lg text-ink-900 dark:text-white font-medium leading-relaxed">
            "{essay.leadQuote}"
          </blockquote>
        </div>

        {/* Core Thesis & Takeaways Box */}
        {essay.takeaways && essay.takeaways.length > 0 && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder mb-12 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
              <span className="text-xs font-mono uppercase tracking-widest text-ink-900 dark:text-white font-bold">
                Core Thesis &amp; Ground Truths
              </span>
            </div>
            <ul className="space-y-2.5">
              {essay.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink-800 dark:text-ink-100 font-medium">
                  <span className="text-berry-600 dark:text-berry-400 font-bold mt-0.5">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Full Essay Body Typography */}
        <div className="prose prose-ink dark:prose-invert max-w-none text-base sm:text-lg font-light leading-relaxed space-y-6 text-ink-800 dark:text-ink-100 mb-16">
          {essay.markdownBody.split('\n\n').map((para, i) => {
            if (para.startsWith('### ')) {
              return (
                <h3 key={i} className="font-serif text-2xl font-bold text-ink-900 dark:text-white pt-6 pb-2 border-b border-canvas-border dark:border-canvas-darkBorder">
                  {para.replace('### ', '')}
                </h3>
              );
            }
            if (para.startsWith('* ') || para.startsWith('1. ')) {
              const lines = para.split('\n');
              return (
                <ul key={i} className="space-y-2 pl-4">
                  {lines.map((l, j) => (
                    <li key={j} className="text-sm sm:text-base leading-relaxed">
                      {l.replace(/^[\*\d\.\s]+/, '')}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>

        {/* Tag Pills */}
        {essay.tags && (
          <div className="flex flex-wrap items-center gap-2 pt-6 pb-10 border-t border-canvas-border dark:border-canvas-darkBorder">
            <span className="text-xs font-mono text-ink-400 dark:text-ink-500 mr-2">Filed under:</span>
            {essay.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-ink-700 dark:text-ink-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="p-8 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder mb-16 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder shrink-0 relative">
            <img
              src="/profile-sketch.png"
              alt="Vivek Shukla"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div className="font-serif text-xl font-bold text-ink-900 dark:text-white">
              Written by Vivek Shukla
            </div>
            <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed">
              Advisor, operator, and storyteller with Lucknow roots. Surviving near-fatal odds and building category-creating enterprises taught him the discipline of simplification clarity.
            </p>
            <div className="pt-2 flex items-center justify-center sm:justify-start gap-4">
              <button
                onClick={() => onNavigate('/about')}
                className="text-xs font-mono font-bold text-berry-600 dark:text-berry-400 hover:underline"
              >
                Read Full Memoir →
              </button>
              <button
                onClick={() => onNavigate('/advisory')}
                className="text-xs font-mono font-bold text-ink-600 dark:text-ink-300 hover:underline"
              >
                Spar in Advisory →
              </button>
            </div>
          </div>
        </div>

        {/* Next / Previous Essay Footer Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-canvas-border dark:border-canvas-darkBorder">
          <div
            onClick={() => onNavigate(`/stories/${prevEssay.slug}`)}
            className="p-6 rounded-2xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder cursor-pointer hover:border-berry-600 transition-all"
          >
            <span className="text-[11px] font-mono text-ink-400 uppercase tracking-wider block mb-1">
              ← Previous Essay
            </span>
            <div className="font-serif text-base font-bold text-ink-900 dark:text-white line-clamp-1">
              {prevEssay.title}
            </div>
          </div>

          <div
            onClick={() => onNavigate(`/stories/${nextEssay.slug}`)}
            className="p-6 rounded-2xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder cursor-pointer hover:border-berry-600 transition-all text-left sm:text-right"
          >
            <span className="text-[11px] font-mono text-ink-400 uppercase tracking-wider block mb-1">
              Next Essay →
            </span>
            <div className="font-serif text-base font-bold text-ink-900 dark:text-white line-clamp-1">
              {nextEssay.title}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
