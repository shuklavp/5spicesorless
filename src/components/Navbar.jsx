// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Flame, Menu, Moon, Sun, X } from 'lucide-react';

export default function Navbar({ onNavigate, currentPath = '/', isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const isTerracotta = currentPath === '/advisory' || currentPath === '/consulting';

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

  // Logo selection:
  // On terracotta pages (e.g. /advisory) or dark mode, always use white logo (/logo_dark.png).
  // On light mode pages, use /logo.png.
  const logoSrc = isDark || isTerracotta ? '/logo_dark.png' : '/logo.png';

  // Navigation text colour scheme based on background
  const navTextClass = isTerracotta
    ? 'text-white/90 hover:text-white'
    : 'text-ink-700 dark:text-ink-200 hover:text-berry-600 dark:hover:text-berry-400';

  const activeLinkClass = isTerracotta
    ? 'text-white font-bold bg-white/20 shadow-sm'
    : 'text-berry-600 dark:text-berry-400 font-bold bg-berry-50 dark:bg-berry-950/60 shadow-sm';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 md:px-8">
      <nav
        className={`mx-auto transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? isTerracotta
              ? 'max-w-5xl bg-[#8A373C]/95 dark:bg-[#1C0D0F]/95 text-white backdrop-blur-xl border border-white/25 shadow-xl rounded-full py-2 px-6'
              : 'max-w-5xl bg-white/95 dark:bg-canvas-darkCard/95 backdrop-blur-xl border border-canvas-border dark:border-canvas-darkBorder shadow-lg shadow-ink-950/5 rounded-full py-2 px-6'
            : isTerracotta
              ? 'max-w-7xl bg-[#BC5259]/95 dark:bg-[#2A1417]/95 backdrop-blur-xl border-b border-white/20 py-3 px-4 md:px-6'
              : 'max-w-7xl bg-white/90 dark:bg-canvas-dark/90 backdrop-blur-xl border-b border-canvas-border/80 dark:border-canvas-darkBorder/60 py-3 px-4 md:px-6'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center group py-1 focus:outline-none"
        >
          {!logoFailed ? (
            <img
              src={logoSrc}
              alt="5 Spices or Less"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-lg bg-ink-900 dark:bg-berry-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <Flame className="w-5 h-5 text-berry-400 dark:text-white" />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-lg tracking-tight font-bold ${
                  isTerracotta ? 'text-white' : 'text-ink-900 dark:text-white'
                }`}>
                  5 Spices or Less
                </span>
                <span className={`text-[10px] tracking-widest uppercase -mt-0.5 font-mono font-medium ${
                  isTerracotta ? 'text-white/70' : 'text-ink-400 dark:text-ink-300'
                }`}>
                  Life, Food, Work
                </span>
              </div>
            </div>
          )}
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium">
          <a
            href="/life"
            onClick={(e) => handleLinkClick(e, '/life')}
            className={`px-3 py-1 rounded-full transition-all focus:outline-none ${
              currentPath === '/life' ? activeLinkClass : navTextClass
            }`}
          >
            Life
          </a>
          <a
            href="/food"
            onClick={(e) => handleLinkClick(e, '/food')}
            className={`px-3 py-1 rounded-full transition-all focus:outline-none ${
              currentPath === '/food' ? activeLinkClass : navTextClass
            }`}
          >
            Food
          </a>
          <a
            href="/work"
            onClick={(e) => handleLinkClick(e, '/work')}
            className={`px-3 py-1 rounded-full transition-all focus:outline-none ${
              currentPath === '/work' ? activeLinkClass : navTextClass
            }`}
          >
            Work
          </a>
          <a
            href="/stories"
            onClick={(e) => handleLinkClick(e, '/stories')}
            className={`px-3 py-1 rounded-full transition-all focus:outline-none ${
              currentPath === '/stories' ? activeLinkClass : navTextClass
            }`}
          >
            Stories
          </a>
          <a
            href="/about"
            onClick={(e) => handleLinkClick(e, '/about')}
            className={`px-3 py-1 rounded-full transition-all focus:outline-none ${
              currentPath === '/about' ? activeLinkClass : navTextClass
            }`}
          >
            About
          </a>
          <a
            href="/advisory"
            onClick={(e) => handleLinkClick(e, '/advisory')}
            className={`px-3 py-1 rounded-full transition-all focus:outline-none ${
              currentPath === '/advisory' ? activeLinkClass : navTextClass
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
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm focus:outline-none ${
              isTerracotta
                ? 'bg-white/15 text-white hover:bg-white/25 border border-white/25'
                : 'bg-white/80 dark:bg-canvas-darkCard/80 text-ink-700 dark:text-ink-200 hover:text-berry-600 dark:hover:text-berry-400 border border-canvas-border dark:border-canvas-darkBorder'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4 text-berry-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={(e) => handleLinkClick(e, '/advisory')}
            className={`hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md focus:outline-none ${
              isTerracotta
                ? 'bg-white text-[#BC5259] hover:bg-white/95 shadow-black/10'
                : 'bg-berry-600 hover:bg-berry-700 text-white shadow-berry-600/20'
            }`}
          >
            <span>Spar With Vivek</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl focus:outline-none ${
              isTerracotta ? 'text-white' : 'text-ink-700 dark:text-ink-200 hover:text-berry-600'
            }`}
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
            About
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
