// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPath = "/", activeCategory = "" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    if (typeof window !== 'undefined') {
      const isDarkMode = document.documentElement.classList.contains('dark') ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setIsDark(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { label: "LIFE", href: "/life" },
    { label: "FOOD", href: "/food" },
    { label: "WORK", href: "/work" },
    { label: "STORIES", href: "/stories" },
    { label: "ABOUT", href: "/about" },
    { label: "ADVISORY", href: "/advisory" },
  ];

  const getIsActive = (item) => {
    if (activeCategory) {
      return item.label.toLowerCase() === activeCategory.toLowerCase();
    }
    if (item.href === "/" && currentPath === "/") return true;
    if (item.href !== "/") {
      if (currentPath === item.href) return true;
      if (currentPath.startsWith(item.href + "/") && item.href !== "/stories") return true;
    }
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 border-b ${
      isScrolled
        ? 'bg-white/95 dark:bg-canvas-dark/95 backdrop-blur-md border-canvas-border dark:border-canvas-darkBorder shadow-sm'
        : 'bg-white dark:bg-canvas-dark border-canvas-border dark:border-canvas-darkBorder'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src="/branding/logo.png"
            alt="5 Spices or Less"
            className="h-14 sm:h-16 md:h-18 w-auto object-contain dark:hidden transition-all duration-200"
            onError={(e) => { e.currentTarget.src = '/logo.png'; }}
          />
          <img
            src="/branding/logo_dark.png"
            alt="5 Spices or Less"
            className="h-14 sm:h-16 md:h-18 w-auto object-contain hidden dark:block transition-all duration-200"
            onError={(e) => { e.currentTarget.src = '/logo.png'; }}
          />
        </a>

        {/* Right Controls: Desktop Nav + Theme Toggle + Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 sm:gap-3">
            {navItems.map((item) => {
              const active = getIsActive(item);
              const isAdvisory = item.href === '/advisory' || item.label?.toLowerCase() === 'advisory';

              if (isAdvisory) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-ink-900 hover:bg-ink-800 dark:bg-stone-100 dark:text-ink-950 dark:hover:bg-white text-white text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-sm hover:scale-[1.02] ml-1.5"
                  >
                    <span>{item.label}</span>
                  </a>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-mono uppercase tracking-widest transition-all duration-200 px-3.5 py-1.5 rounded-full ${
                    active
                      ? 'bg-berry-50 text-berry-700 dark:bg-berry-950/60 dark:text-berry-300 font-bold border border-berry-200/80 dark:border-berry-800/80'
                      : 'text-ink-600 dark:text-ink-300 hover:text-berry-600 dark:hover:text-berry-400 font-semibold'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full border border-canvas-border dark:border-canvas-darkBorder text-ink-700 dark:text-ink-300 hover:border-berry-500 transition-colors bg-canvas-subtle dark:bg-canvas-darkCard"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-ink-700" />}
          </button>

          {/* Mobile Hamburger / Close Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-full border border-canvas-border dark:border-canvas-darkBorder text-ink-800 dark:text-stone-200 hover:border-berry-500 bg-canvas-subtle dark:bg-canvas-darkCard transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-berry-600" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-canvas-border dark:border-canvas-darkBorder bg-white/98 dark:bg-canvas-dark/98 backdrop-blur-lg px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const active = getIsActive(item);
              const isAdvisory = item.href === '/advisory' || item.label?.toLowerCase() === 'advisory';

              if (isAdvisory) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-2 flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-ink-900 text-white dark:bg-stone-100 dark:text-ink-950 text-xs font-mono uppercase tracking-widest font-bold shadow-md"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors ${
                    active
                      ? 'bg-berry-50 text-berry-700 dark:bg-berry-950/60 dark:text-berry-300 font-bold border border-berry-200/80 dark:border-berry-800/80'
                      : 'text-ink-700 dark:text-stone-300 hover:bg-canvas-subtle dark:hover:bg-canvas-darkCard font-semibold'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-berry-600" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
