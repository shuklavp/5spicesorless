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

  const handleShareToX = () => {
    const quotePart = essay.leadQuote ? `\n\n"${essay.leadQuote}"` : '';
    const textToPost = `"${essay.title}" by Vivek Shukla (@vivekshukla) on @5spicesorless${quotePart}\n\n${window.location.href}\n\n#5SpicesOrLess`;
    window.open(`https://x.com/intent/post?text=${encodeURIComponent(textToPost)}`, '_blank', 'noopener,noreferrer');
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

          <div className="flex items-center gap-3">
            <button
              onClick={handleShareToX}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink-900 dark:bg-canvas-darkCard border border-ink-800 dark:border-canvas-darkBorder text-white text-xs font-mono font-medium hover:bg-berry-600 transition-colors shadow-sm"
              title="Share on X (Twitter)"
            >
              <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Share to X</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink-500 dark:text-ink-400 hover:text-berry-600 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-berry-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Article Meta Header */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-berry-700 dark:text-berry-300 bg-berry-50 dark:bg-canvas-darkCard px-3 py-1 rounded-full border border-berry-200 dark:border-canvas-darkBorder font-bold uppercase text-[11px]">
              {essay.category}
            </span>
            {essay.subCategory && (
              <span className="text-cobalt-700 dark:text-cobalt-300 bg-cobalt-50 dark:bg-cobalt-950/50 px-3 py-1 rounded-full border border-cobalt-200 dark:border-cobalt-800 font-bold uppercase text-[11px]">
                {essay.subCategory}
              </span>
            )}
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

        {/* DYNAMIC ARTICLE FLOW: Flexible Images & Optional Takeaways */}
        {(() => {
          const img1Pos = essay.image1Position || 'top';
          const img2Pos = essay.image2Position || 'bottom';
          const takeawaysPos = essay.takeawaysPosition || 'top';
          const showThesis = essay.showTakeaways !== false && essay.takeaways && essay.takeaways.length > 0;

                    const renderPrimaryPlate = () => (
            (essay.illustration || essay.image) ? (
              <div key="story-img1" className="my-10 rounded-3xl overflow-hidden border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-darkCard p-4 sm:p-8 text-center shadow-sm">
                <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center min-h-[200px]">
                  <img
                    src={essay.illustration || essay.image}
                    alt={essay.illustrationCaption || essay.imageCaption || essay.title}
                    onError={(e) => {
                      if (!e.currentTarget.dataset.retried) {
                        e.currentTarget.dataset.retried = 'true';
                        e.currentTarget.src = e.currentTarget.src.replace('/illustrations/', '/').replace('.jpg', '.png');
                      }
                    }}
                    className={`w-full max-h-[460px] object-contain mx-auto transition-transform duration-300 hover:scale-[1.01] ${essay.illustrationDark ? "dark:hidden" : ""}`}
                  />
                  {essay.illustrationDark && (
                    <img
                      src={essay.illustrationDark}
                      alt={essay.illustrationCaption || essay.imageCaption || essay.title}
                      className="w-full max-h-[460px] object-contain mx-auto hidden dark:block transition-transform duration-300 hover:scale-[1.01]"
                    />
                  )}
                </div>
                {(essay.illustrationCaption || essay.imageCaption) && (
                  <p className="mt-3 text-xs font-mono text-ink-500 dark:text-ink-400 italic">
                    {essay.illustrationCaption || essay.imageCaption}
                  </p>
                )}
              </div>
            ) : null
          );

          const renderSecondaryPlate = () => (
            (essay.secondaryImage) ? (
              <div key="story-img2" className="my-10 rounded-3xl overflow-hidden border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-darkCard p-4 sm:p-8 text-center shadow-sm">
                <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center min-h-[200px]">
                  <img
                    src={essay.secondaryImage}
                    alt={essay.secondaryCaption || essay.title}
                    onError={(e) => {
                      if (!e.currentTarget.dataset.retried) {
                        e.currentTarget.dataset.retried = 'true';
                        e.currentTarget.src = e.currentTarget.src.replace('/illustrations/', '/').replace('.jpg', '.png');
                      }
                    }}
                    className={`w-full max-h-[460px] object-contain mx-auto shadow-sm ${essay.secondaryImageDark ? "dark:hidden" : ""}`}
                  />
                  {essay.secondaryImageDark && (
                    <img
                      src={essay.secondaryImageDark}
                      alt={essay.secondaryCaption || essay.title}
                      className="w-full max-h-[460px] object-contain mx-auto hidden dark:block"
                    />
                  )}
                </div>
                {essay.secondaryCaption && (
                  <p className="mt-3 text-xs font-mono text-ink-500 dark:text-ink-400 italic">
                    {essay.secondaryCaption}
                  </p>
                )}
              </div>
            ) : null
          );

          const renderTakeaways = () => (
            showThesis ? (
              <div key="story-takeaways" className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder my-8 space-y-4 shadow-sm">
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
            ) : null
          );

// Robust inline markdown parser for **bold**, *italic*, and cleanup of stray stars
const renderInlineMarkdown = (text) => {
  if (!text) return '';

  // Clean any accidental "Word:**" into "**Word:**"
  let cleanText = text.replace(/([A-Za-z0-9\s&()/-]+):\*\*/g, '**$1:**');

  // Split on bold (**text**)
  const parts = cleanText.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={index} className="font-bold text-ink-950 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Split remaining by italic (*text*)
    const subParts = part.split(/(\*[^*]+?\*)/g);
    return subParts.map((sub, sIdx) => {
      if (sub.startsWith('*') && sub.endsWith('*') && sub.length >= 2) {
        return <em key={`${index}-${sIdx}`} className="italic">{sub.slice(1, -1)}</em>;
      }
      return sub;
    });
  });
};

// Render recipe / numbered step with bold label automatically
const renderStepItem = (content) => {
  // Matches "The Water:**", "**The Water:**", or "The Water:"
  const match = content.match(/^(\*{0,2})([^:*]+)(:)(\*{0,2})\s*(.*)/);
  if (match) {
    const [, , label, colon, , rest] = match;
    return (
      <>
        <strong className="font-bold text-ink-950 dark:text-white mr-1.5">
          {label.trim()}{colon}
        </strong>
        {renderInlineMarkdown(rest)}
      </>
    );
  }
  return renderInlineMarkdown(content);
};

          const renderParagraphs = (paras, pfx = 'body') => (
            paras.map((para, i) => {
              if (para.startsWith('![')) {
                const match = para.match(/!\[(.*?)\]\((.*?)\)/);
                if (match) {
                  const [, alt, url] = match;
                  return (
                    <figure key={`${pfx}-${i}`} className="my-8 text-center">
                      <div className="rounded-3xl overflow-hidden border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-darkCard p-3 sm:p-5 inline-block max-w-full shadow-sm">
                        <img src={url} alt={alt} className="max-h-96 w-auto rounded-2xl object-contain mx-auto" />
                      </div>
                      {alt && (
                        <figcaption className="mt-2.5 text-xs font-mono text-ink-500 dark:text-ink-400 italic">
                          {alt}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
              }

              if (para.startsWith('### ')) {
                return (
                  <h3 key={`${pfx}-${i}`} className="font-serif text-2xl font-bold text-ink-900 dark:text-white pt-6 pb-2 border-b border-canvas-border dark:border-canvas-darkBorder">
                    {renderInlineMarkdown(para.replace('### ', ''))}
                  </h3>
                );
              }

              if (para.startsWith('## ')) {
                return (
                  <h2 key={`${pfx}-${i}`} className="font-serif text-3xl font-bold text-ink-900 dark:text-white pt-8 pb-3 border-b border-canvas-border dark:border-canvas-darkBorder">
                    {renderInlineMarkdown(para.replace('## ', ''))}
                  </h2>
                );
              }

              // Numbered Step (e.g. "1. " or "2. ")
              const isNumbered = /^\d+\.\s+/.test(para);
              if (isNumbered) {
                const lines = para.split('\n');
                return (
                  <div key={`${pfx}-${i}`} className="space-y-3 my-4">
                    {lines.map((l, j) => {
                      const numMatch = l.match(/^(\d+)\.\s+(.*)/);
                      if (numMatch) {
                        const [, num, content] = numMatch;
                        return (
                          <div key={j} className="flex items-start gap-3.5 my-2.5">
                            <span className="w-6 h-6 rounded-full bg-berry-50 dark:bg-berry-950/60 text-berry-600 dark:text-berry-400 border border-berry-200 dark:border-berry-800 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {num}
                            </span>
                            <div className="flex-1 text-base sm:text-lg leading-relaxed text-ink-800 dark:text-ink-100 font-light">
                              {renderStepItem(content)}
                            </div>
                          </div>
                        );
                      }
                      return (
                        <p key={j} className="text-base sm:text-lg leading-relaxed text-ink-800 dark:text-ink-100 font-light pl-9">
                          {renderStepItem(l)}
                        </p>
                      );
                    })}
                  </div>
                );
              }

              // Bullet List items
              if (para.startsWith('* ') || para.startsWith('- ')) {
                const lines = para.split('\n');
                return (
                  <ul key={`${pfx}-${i}`} className="space-y-2.5 my-4 pl-2">
                    {lines.map((l, j) => (
                      <li key={j} className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-ink-800 dark:text-ink-100 font-light">
                        <span className="text-berry-600 dark:text-berry-400 font-bold mt-1 text-xs">•</span>
                        <span className="flex-1">{renderInlineMarkdown(l.replace(/^[\*\-\s]+/, ''))}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (para.startsWith('> ')) {
                return (
                  <blockquote key={`${pfx}-${i}`} className="p-5 rounded-2xl bg-canvas-subtle dark:bg-canvas-darkCard border-l-4 border-berry-600 my-6 italic text-ink-900 dark:text-white">
                    {renderInlineMarkdown(para.replace(/^>\s*/, ''))}
                  </blockquote>
                );
              }

              return (
                <p key={`${pfx}-${i}`} className="leading-relaxed text-base sm:text-lg text-ink-800 dark:text-ink-100 font-light">
                  {renderInlineMarkdown(para)}
                </p>
              );
            })
          );

          const allParas = (essay.markdownBody || '').split('\n\n').filter(Boolean);
          const midIdx = Math.max(1, Math.floor(allParas.length / 2));
          const firstParas = allParas.slice(0, midIdx);
          const secondParas = allParas.slice(midIdx);

          return (
            <>
              {/* Top Placed Images */}
              {img1Pos === 'top' && renderPrimaryPlate()}
              {img2Pos === 'top' && renderSecondaryPlate()}

              {/* Lead Pull Quote Box */}
              {essay.leadQuote && (
                <div className="p-6 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border-l-4 border-berry-600 my-8 shadow-sm">
                  <blockquote className="font-serif italic text-base sm:text-lg text-ink-900 dark:text-white font-medium leading-relaxed">
                    "{essay.leadQuote}"
                  </blockquote>
                </div>
              )}

              {/* Below-Quote Placed Images */}
              {img1Pos === 'after-quote' && renderPrimaryPlate()}
              {img2Pos === 'after-quote' && renderSecondaryPlate()}

              {/* Top-Positioned Takeaways */}
              {takeawaysPos === 'top' && renderTakeaways()}

              {/* Essay Body Typography (with mid-story image support) */}
              <div className="prose prose-ink dark:prose-invert max-w-none text-base sm:text-lg font-light leading-relaxed space-y-6 text-ink-800 dark:text-ink-100 my-8">
                {renderParagraphs(firstParas, 'fp')}

                {img1Pos === 'middle' && renderPrimaryPlate()}
                {img2Pos === 'middle' && renderSecondaryPlate()}

                {renderParagraphs(secondParas, 'sp')}
              </div>

              {/* Bottom-Positioned Takeaways */}
              {takeawaysPos === 'bottom' && renderTakeaways()}

              {/* Bottom Placed Images */}
              {img1Pos === 'bottom' && renderPrimaryPlate()}
              {img2Pos === 'bottom' && renderSecondaryPlate()}
            </>
          );
        })()}

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
              Advisor, operator, and storyteller with Lucknow roots. Decades of building category-creating enterprises and navigating life with patience taught him the quiet power of simplification.
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
                Talk to Vivek →
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
