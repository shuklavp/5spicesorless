import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Flame, Menu, Moon, Sun, X } from 'lucide-react';

export default function Navbar({ onOpenInquiry, isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 md:px-8">
      <nav
        className={`mx-auto transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? 'max-w-5xl bg-white/95 dark:bg-canvas-darkCard/95 backdrop-blur-xl border border-canvas-border dark:border-canvas-darkBorder shadow-lg shadow-ink-950/5 rounded-full py-2 px-6'
            : 'max-w-7xl bg-transparent border-b border-canvas-border/80 dark:border-canvas-darkBorder/60 py-3 px-2'
        }`}
      >
        {/* Brand Logo (Scaled ~2x) */}
        <a href="#hero" className="flex items-center group py-1">
          <img
            src={isDark ? "/logo_dark.png" : "/logo.png"}
            alt="5 Spices or Less"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('navbar-text-fallback');
              if (fallback) fallback.style.display = 'flex';
            }}
          />

          {/* Fallback if image is missing */}
          <div id="navbar-text-fallback" className="hidden items-center gap-2.5">
            <div className="relative w-10 h-10 rounded-lg bg-ink-900 dark:bg-berry-600 flex items-center justify-center text-white shadow-sm shrink-0">
              <Flame className="w-5 h-5 text-berry-400 dark:text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-tight font-bold text-ink-900 dark:text-white">
                5 Spices or Less
              </span>
              <span className="text-[11px] tracking-widest uppercase text-ink-400 dark:text-ink-300 -mt-1 font-mono font-medium">
                Life, Food, Work
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links: Life, Food, Work, Stories, Letterbox, Advisory, About */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-ink-700 dark:text-ink-200">
          <a
            href="#life"
            className="hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            Life
          </a>
          <a
            href="#food"
            className="hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            Food
          </a>
          <a
            href="#work"
            className="hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            Work
          </a>
          <a
            href="#writing"
            className="hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            Stories
          </a>
          <a
            href="#letterbox"
            className="hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            Letterbox
          </a>
          <a
            href="#consulting"
            className="hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            Advisory
          </a>
          <a
            href="#profile"
            className="hover:text-berry-600 dark:hover:text-berry-400 transition-colors"
          >
            About
          </a>
        </div>

        {/* Actions, X (Twitter) Link & Theme Toggle */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://x.com/5spicesorless"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-canvas-subtle dark:bg-canvas-darkBorder border border-canvas-border dark:border-canvas-darkBorder text-ink-700 dark:text-ink-200 hover:text-berry-600 dark:hover:text-white transition-all shadow-sm flex items-center justify-center"
            title="Follow @5spicesorless on X"
            aria-label="X Account @5spicesorless"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-full bg-canvas-subtle dark:bg-canvas-darkBorder border border-canvas-border dark:border-canvas-darkBorder text-ink-600 dark:text-ink-200 hover:text-berry-600 transition-all shadow-sm"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-berry-400" /> : <Moon className="w-4 h-4 text-ink-800" />}
          </button>

          <button
            onClick={onOpenInquiry}
            className="group rounded-full bg-berry-600 hover:bg-berry-700 text-white px-5 py-2.5 text-xs font-semibold tracking-wide transition-all shadow-md shadow-berry-600/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
          >
            <span>Consulting Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://x.com/5spicesorless"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-canvas-border dark:border-canvas-darkBorder text-ink-700 dark:text-ink-200"
            aria-label="Follow on X"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-canvas-border dark:border-canvas-darkBorder text-ink-600 dark:text-ink-200"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-berry-400" /> : <Moon className="w-4 h-4 text-ink-800" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-ink-900 dark:text-white p-1.5 hover:text-berry-600 transition-colors"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-lg bg-white/98 dark:bg-canvas-darkCard/98 backdrop-blur-2xl border border-canvas-border dark:border-canvas-darkBorder rounded-2xl p-6 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-ink-800 dark:text-white">
            <a
              href="#life"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-berry-600 transition-colors"
            >
              Life
            </a>
            <a
              href="#food"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-berry-600 transition-colors"
            >
              Food
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-berry-600 transition-colors"
            >
              Work
            </a>
            <a
              href="#writing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-berry-600 transition-colors"
            >
              Stories
            </a>
            <a
              href="#letterbox"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-berry-600 transition-colors"
            >
              Letterbox
            </a>
            <a
              href="#consulting"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-berry-600 transition-colors"
            >
              Advisory
            </a>
            <a
              href="#profile"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-berry-600 transition-colors"
            >
              About
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full text-center rounded-xl bg-berry-600 hover:bg-berry-700 text-white py-3 text-sm font-semibold tracking-wide shadow-md"
          >
            Start an Advisory Inquiry
          </button>
        </div>
      )}
    </header>
  );
}
