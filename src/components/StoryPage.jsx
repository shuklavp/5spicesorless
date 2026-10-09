import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Clock, Copy, Mail } from 'lucide-react';
import { ESSAYS_DATA } from '../data/essays';

export default function StoryPage({ slug, onNavigate, onOpenInquiry }) {
  const [copiedLink, setCopiedLink] = useState(false);

  // Find essay by slug or id
  const essay = ESSAYS_DATA.find((e) => e.slug === slug || e.id === slug) || ESSAYS_DATA[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${essay.title} · 5 Spices or Less`;
    return () => {
      document.title = '5 Spices or Less: Simplicity in Life, Food and Work';
    };
  }, [essay]);

  const handleCopyLink = () => {
    const url = `${window.location.origin}/stories/${essay.slug || essay.id}`;
    navigator.clipboard?.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const shareOnX = () => {
    const text = encodeURIComponent(`"${essay.title}" by Vivek Shukla on 5 Spices or Less`);
    const url = encodeURIComponent(`${window.location.origin}/stories/${essay.slug || essay.id}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}&via=5spicesorless`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(`${window.location.origin}/stories/${essay.slug || essay.id}`);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  // Find adjacent stories
  const currentIndex = ESSAYS_DATA.findIndex((e) => e.id === essay.id);
  const prevStory = currentIndex > 0 ? ESSAYS_DATA[currentIndex - 1] : null;
  const nextStory = currentIndex < ESSAYS_DATA.length - 1 ? ESSAYS_DATA[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white dark:bg-canvas-dark text-ink-900 dark:text-white pt-28 pb-20 px-6 md:px-12 bg-sandpaper-texture transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-canvas-border dark:border-canvas-darkBorder">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-ink-600 dark:text-ink-300 hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home Broadside</span>
          </button>

          <button
            onClick={() => onNavigate(`/${essay.category.toLowerCase()}`)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-berry-600 dark:text-berry-400 hover:underline uppercase"
          >
            <span>More in {essay.category}</span>
            <span>→</span>
          </button>
        </div>

        {/* Metadata Header */}
        <header className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span
              onClick={() => onNavigate(`/${essay.category.toLowerCase()}`)}
              className="px-3.5 py-1 rounded-full uppercase tracking-wider font-bold bg-berry-50 text-berry-600 dark:bg-berry-950/60 dark:text-berry-400 border border-berry-200 dark:border-berry-900 cursor-pointer hover:border-berry-400 transition-colors"
            >
              {essay.category}
            </span>
            <span className="text-ink-400">·</span>
            <span className="text-ink-500 dark:text-ink-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{essay.readTime}</span>
            </span>
            <span className="text-ink-400">·</span>
            <span className="text-ink-500 dark:text-ink-400 font-medium">{essay.date}</span>
            <span className="text-ink-400">·</span>
            <span className="text-ink-700 dark:text-ink-200 font-bold">By {essay.author}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-ink-900 dark:text-white leading-[1.08] tracking-tight">
            {essay.title}
          </h1>

          <p className="text-lg sm:text-xl text-ink-600 dark:text-ink-300 font-light leading-relaxed">
            {essay.subtitle}
          </p>

          {/* Social Share Bar */}
          <div className="pt-4 flex items-center gap-2.5">
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-1.5 rounded-full border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono font-medium text-ink-700 dark:text-ink-200 hover:border-berry-600 transition-colors flex items-center gap-1.5"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-berry-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied' : 'Copy Permalink'}</span>
            </button>
            <button
              onClick={shareOnX}
              className="p-2 rounded-full border border-canvas-border dark:border-canvas-darkBorder text-ink-700 dark:text-ink-200 hover:text-berry-600 transition-colors"
              title="Share on X"
              aria-label="Share on X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button
              onClick={shareOnLinkedIn}
              className="p-2 rounded-full border border-canvas-border dark:border-canvas-darkBorder text-ink-700 dark:text-ink-200 hover:text-cobalt-600 transition-colors"
              title="Share on LinkedIn"
              aria-label="Share on LinkedIn"
            >
              <span className="font-bold text-xs">in</span>
            </button>
          </div>
        </header>

        {/* Lead Quote Callout */}
        {essay.leadQuote && (
          <div className="mb-10 p-6 rounded-2xl bg-canvas-subtle dark:bg-canvas-darkCard border-l-4 border-berry-600 border border-canvas-border dark:border-canvas-darkBorder">
            <p className="font-serif italic text-base sm:text-lg text-ink-900 dark:text-white leading-relaxed">
              "{essay.leadQuote}"
            </p>
          </div>
        )}

        {/* Subtractive Takeaways Box */}
        {essay.takeaways && essay.takeaways.length > 0 && (
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-berry-600 dark:text-berry-400">
                Key Subtractive Takeaways
              </span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-800 dark:text-ink-200">
              {essay.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-berry-600 font-bold shrink-0 mt-0.5">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Body Prose */}
        <article className="prose dark:prose-invert max-w-none text-ink-800 dark:text-ink-100 text-base sm:text-lg leading-relaxed space-y-6 font-light">
          {essay.markdownBody.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={i} className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white pt-6 pb-2">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={i} className="font-serif text-3xl sm:text-4xl font-black text-ink-900 dark:text-white pt-8 pb-3">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('> ')) {
              return (
                <blockquote key={i} className="font-serif italic pl-4 border-l-2 border-berry-600 text-ink-700 dark:text-ink-300 py-1">
                  {paragraph.replace('> ', '')}
                </blockquote>
              );
            }
            if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={i} className="space-y-2 my-4 list-disc pl-5">
                  {items.map((it, j) => (
                    <li key={j} className="leading-relaxed">
                      {it.replace(/^[-*]\s+/, '')}
                    </li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\.\s/.test(paragraph)) {
              const items = paragraph.split('\n');
              return (
                <ol key={i} className="space-y-2 my-4 list-decimal pl-5">
                  {items.map((it, j) => (
                    <li key={j} className="leading-relaxed">
                      {it.replace(/^\d+\.\s+/, '')}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Tags */}
        {essay.tags && essay.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-canvas-border dark:border-canvas-darkBorder flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-400 font-bold mr-2">
              Filed Under:
            </span>
            {essay.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onNavigate(`/${essay.category.toLowerCase()}?tag=${encodeURIComponent(tag)}`)}
                className="px-3 py-1 rounded-full bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono text-ink-600 dark:text-ink-300 hover:border-berry-600 hover:text-berry-600 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-14 p-8 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-canvas-border dark:border-canvas-darkBorder">
            <img src="/profile-sketch.png" alt="Vivek Shukla" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="font-serif font-bold text-xl text-ink-900 dark:text-white">
              Written by Vivek Shukla
            </div>
            <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed">
              Lucknow roots. 30 years of living, making mistakes, building category-defining ventures, and surviving rather unusual odds. Advising high-agency founders as a Ben to your Jules.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono font-bold">
              <button
                onClick={() => {
                  onNavigate('/#consulting');
                  onOpenInquiry();
                }}
                className="text-berry-600 dark:text-berry-400 hover:underline flex items-center gap-1"
              >
                <span>Bespoke Founder Advisory</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-ink-400">·</span>
              <button
                onClick={() => onNavigate('/#letterbox')}
                className="text-cobalt-600 dark:text-cobalt-400 hover:underline flex items-center gap-1"
              >
                <span>Write to the Letterbox</span>
                <Mail className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Adjacent Stories Footer Nav */}
        <div className="mt-12 pt-8 border-t border-canvas-border dark:border-canvas-darkBorder grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevStory ? (
            <button
              onClick={() => onNavigate(`/stories/${prevStory.slug || prevStory.id}`)}
              className="text-left p-5 rounded-2xl border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-600 transition-colors group flex flex-col justify-between"
            >
              <span className="text-[11px] font-mono text-ink-400 uppercase tracking-wider mb-2">
                ← Previous Dispatch
              </span>
              <span className="font-serif font-bold text-sm text-ink-900 dark:text-white group-hover:text-berry-600 transition-colors line-clamp-2">
                {prevStory.title}
              </span>
            </button>
          ) : (
            <div />
          )}

          {nextStory ? (
            <button
              onClick={() => onNavigate(`/stories/${nextStory.slug || nextStory.id}`)}
              className="text-right p-5 rounded-2xl border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-600 transition-colors group flex flex-col justify-between"
            >
              <span className="text-[11px] font-mono text-ink-400 uppercase tracking-wider mb-2">
                Next Dispatch →
              </span>
              <span className="font-serif font-bold text-sm text-ink-900 dark:text-white group-hover:text-berry-600 transition-colors line-clamp-2">
                {nextStory.title}
              </span>
            </button>
          ) : (
            <div />
          )}
        </div>

      </div>
    </div>
  );
}
