// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Flame, Menu, Moon, Sun, X } from 'lucide-react';

export default function Navbar({ onNavigate, currentPath = '/', isDark, onToggleTheme }) {
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

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    }
  };

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
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center group py-1"
        >
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-ink-700 dark:text-ink-200">
          <a
            href="/life"
            onClick={(e) => handleLinkClick(e, '/life')}
            className={`hover:text-berry-600 dark:hover:text-berry-400 transition-colors ${
              currentPath === '/life' ? 'text-berry-600 dark:text-berry-400 font-bold' : ''
            }`}
          >
            Life
          </a>
          <a
            href="/food"
            onClick={(e) => handleLinkClick(e, '/food')}
            className={`hover:text-berry-600 dark:hover:text-berry-400 transition-colors ${
              currentPath === '/food' ? 'text-berry-600 dark:text-berry-400 font-bold' : ''
            }`}
          >
            Food
          </a>
          <a
            href="/work"
            onClick={(e) => handleLinkClick(e, '/work')}
            className={`hover:text-berry-600 dark:hover:text-berry-400 transition-colors ${
              currentPath === '/work' ? 'text-berry-600 dark:text-berry-400 font-bold' : ''
            }`}
          >
            Work
          </a>
          <a
            href="/stories"
            onClick={(e) => handleLinkClick(e, '/stories')}
            className={`hover:text-berry-600 dark:hover:text-berry-400 transition-colors ${
              currentPath === '/stories' ? 'text-berry-600 dark:text-berry-400 font-bold' : ''
            }`}
          >
            Stories
          </a>
          <a
            href="/about"
            onClick={(e) => handleLinkClick(e, '/about')}
            className={`hover:text-berry-600 dark:hover:text-berry-400 transition-colors ${
              currentPath === '/about' ? 'text-berry-600 dark:text-berry-400 font-bold' : ''
            }`}
          >
            About Vivek
          </a>
          <a
            href="/advisory"
            onClick={(e) => handleLinkClick(e, '/advisory')}
            className={`hover:text-berry-600 dark:hover:text-berry-400 transition-colors ${
              currentPath === '/advisory' ? 'text-berry-600 dark:text-berry-400 font-bold' : ''
            }`}
          >
            Advisory
          </a>
        </div>

        {/* Right CTA & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Dark Mode"
            className="w-10 h-10 rounded-full border border-canvas-border dark:border-canvas-darkBorder flex items-center justify-center text-ink-700 dark:text-ink-200 hover:text-berry-600 dark:hover:text-berry-400 bg-white/80 dark:bg-canvas-darkCard/80 transition-colors shadow-sm"
          >
            {isDark ? <Sun className="w-4 h-4 text-berry-400" /> : <Moon className="w-4 h-4 text-ink-800" />}
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={(e) => handleLinkClick(e, '/advisory')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-berry-600/20"
          >
            <span>Spar With Vivek</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-ink-700 dark:text-ink-200 hover:text-berry-600"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-6 rounded-3xl bg-white/95 dark:bg-canvas-darkCard/95 backdrop-blur-2xl border border-canvas-border dark:border-canvas-darkBorder shadow-2xl flex flex-col gap-4 animate-fadeIn">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="text-base font-medium text-ink-900 dark:text-white hover:text-berry-600"
          >
            Home Broadside
          </a>
          <a
            href="/life"
            onClick={(e) => handleLinkClick(e, '/life')}
            className="text-base font-medium text-ink-900 dark:text-white hover:text-berry-600"
          >
            Life Desk
          </a>
          <a
            href="/food"
            onClick={(e) => handleLinkClick(e, '/food')}
            className="text-base font-medium text-ink-900 dark:text-white hover:text-berry-600"
          >
            Food Desk
          </a>
          <a
            href="/work"
            onClick={(e) => handleLinkClick(e, '/work')}
            className="text-base font-medium text-ink-900 dark:text-white hover:text-berry-600"
          >
            Work Desk
          </a>
          <a
            href="/stories"
            onClick={(e) => handleLinkClick(e, '/stories')}
            className="text-base font-medium text-ink-900 dark:text-white hover:text-berry-600"
          >
            Stories &amp; Archive
          </a>
          <a
            href="/about"
            onClick={(e) => handleLinkClick(e, '/about')}
            className="text-base font-medium text-ink-900 dark:text-white hover:text-berry-600"
          >
            About Vivek Shukla
          </a>
          <a
            href="/advisory"
            onClick={(e) => handleLinkClick(e, '/advisory')}
            className="text-base font-medium text-ink-900 dark:text-white hover:text-berry-600"
          >
            Advisory ("Ben to Jules")
          </a>

          <div className="pt-4 border-t border-canvas-border dark:border-canvas-darkBorder flex items-center justify-between">
            <button
              onClick={(e) => handleLinkClick(e, '/advisory')}
              className="w-full text-center py-3 rounded-full bg-berry-600 text-white font-bold text-xs uppercase tracking-wider"
            >
              Spar With Vivek
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
