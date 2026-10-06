import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Flame, Menu, Moon, Sun, X } from 'lucide-react';

export default function Navbar({ onOpenInquiry, isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:px-8">
      <nav
        className={`mx-auto transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? 'max-w-5xl bg-paper-50/90 dark:bg-forest-950/90 backdrop-blur-xl border border-paper-200 dark:border-forest-800/60 shadow-xl rounded-full py-2.5 px-6'
            : 'max-w-7xl bg-transparent border-b border-paper-200 dark:border-forest-800/40 py-4 px-2'
        }`}
      >
        {/* Brand / Masthead Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg bg-forest-900 dark:bg-terracotta-600 flex items-center justify-center text-paper-50 shadow-sm transition-transform group-hover:scale-105 shrink-0 overflow-hidden">
            <img
              src="/logo.png"
              alt="Logo"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className="absolute inset-0 w-full h-full object-contain p-1"
            />
            <Flame className="w-4 h-4 text-terracotta-300 dark:text-paper-50" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-tight font-bold text-forest-900 dark:text-paper-50 group-hover:text-terracotta-600 transition-colors">
              5 Spices or Less
            </span>
            <span className="text-[10px] tracking-widest uppercase text-ink-600 dark:text-forest-500 -mt-1 font-mono font-medium">
              Life · Food · Strategy
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-700 dark:text-paper-300">
          <a
            href="#philosophy"
            className="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#profile"
            className="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
          >
            About & Story
          </a>
          <a
            href="#writing"
            className="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
          >
            Essays
          </a>
          <a
            href="#consulting"
            className="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
          >
            Boutique Advisory
          </a>
          <a
            href="#manifesto"
            className="hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
          >
            Manifesto
          </a>
        </div>

        {/* Actions & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-paper-100 dark:bg-forest-900 border border-paper-200 dark:border-forest-800 text-ink-700 dark:text-paper-300 hover:text-terracotta-600 transition-all shadow-sm"
            title={isDark ? 'Switch to Editorial Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-terracotta-400" /> : <Moon className="w-4 h-4 text-forest-900" />}
          </button>

          <button
            onClick={onOpenInquiry}
            className="group rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white px-5 py-2 text-xs font-semibold tracking-wide transition-all shadow-md shadow-terracotta-600/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
          >
            <span>Consulting Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-paper-200 dark:border-forest-800 text-ink-700 dark:text-paper-300"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-terracotta-400" /> : <Moon className="w-4 h-4 text-forest-900" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-ink-900 dark:text-paper-100 p-1.5 hover:text-terracotta-600 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-lg bg-paper-50/98 dark:bg-forest-950/98 backdrop-blur-2xl border border-paper-200 dark:border-forest-800 rounded-2xl p-6 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-ink-800 dark:text-paper-100">
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-terracotta-600 transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#profile"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-terracotta-600 transition-colors"
            >
              About & Story
            </a>
            <a
              href="#writing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-terracotta-600 transition-colors"
            >
              Essays
            </a>
            <a
              href="#consulting"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-terracotta-600 transition-colors"
            >
              Boutique Advisory
            </a>
            <a
              href="#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-terracotta-600 transition-colors"
            >
              Manifesto
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full text-center rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white py-3 text-sm font-semibold tracking-wide shadow-md"
          >
            Start an Advisory Inquiry
          </button>
        </div>
      )}
    </header>
  );
}
