// src/components/Footer.jsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas-subtle dark:bg-canvas-dark border-t border-canvas-border dark:border-canvas-darkBorder py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <a href="/" className="inline-block">
            <img src="/logo.png" alt="5 Spices or Less" className="h-12 w-auto object-contain dark:hidden" />
            <img src="/logo_dark.png" alt="5 Spices or Less" className="h-12 w-auto object-contain hidden dark:block" onError={(e) => { e.currentTarget.src = '/logo.png'; }} />
          </a>
          <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 font-light max-w-sm leading-relaxed">
            Observations on enterprise building, Awadhi kitchens, and living with patience. Published by Vivek Shukla from Kuala Lumpur.
          </p>
          <p className="text-[11px] font-mono text-ink-400 dark:text-ink-500 pt-2">
            © {new Date().getFullYear()} 5 Spices or Less. All rights reserved.
          </p>
        </div>

        {/* NAVIGATION Column */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest font-bold text-ink-900 dark:text-white">
            NAVIGATION
          </div>
          <ul className="space-y-2 text-xs font-mono uppercase tracking-wider font-semibold text-ink-600 dark:text-ink-300">
            <li>
              <a href="#top" onClick={scrollToTop} className="hover:text-berry-600 dark:hover:text-berry-400">
                Back to Top
              </a>
            </li>
            <li><a href="/life" className="hover:text-berry-600 dark:hover:text-berry-400">Life</a></li>
            <li><a href="/food" className="hover:text-berry-600 dark:hover:text-berry-400">Food</a></li>
            <li><a href="/work" className="hover:text-berry-600 dark:hover:text-berry-400">Work</a></li>
            <li><a href="/essays" className="hover:text-berry-600 dark:hover:text-berry-400">Stories &amp; Notes</a></li>
            <li><a href="/#letterbox" className="hover:text-berry-600 dark:hover:text-berry-400">The Letterbox</a></li>
            <li><a href="/advisory" className="hover:text-berry-600 dark:hover:text-berry-400">Advisory ("Ben to Jules")</a></li>
            <li><a href="/about" className="hover:text-berry-600 dark:hover:text-berry-400">About</a></li>
          </ul>
        </div>

        {/* CONNECT Column */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest font-bold text-ink-900 dark:text-white">
            CONNECT
          </div>
          <ul className="space-y-2 text-xs font-mono uppercase tracking-wider font-semibold text-ink-600 dark:text-ink-300">
            <li>
              <a href="https://linkedin.com/in/vivekshukla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-berry-600 dark:hover:text-berry-400">
                <span>LinkedIn / Vivek Shukla</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://x.com/5spicesorless" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-berry-600 dark:hover:text-berry-400">
                <span>@5spicesorless on X</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://x.com/vivekshukla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-berry-600 dark:hover:text-berry-400">
                <span>@vivekshukla on X</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://5spicesorless.com" className="inline-flex items-center gap-1 hover:text-berry-600 dark:hover:text-berry-400">
                <span>5spicesorless.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
