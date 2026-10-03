import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Flame, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-4 py-4 md:px-8">
      <nav
        className={`mx-auto transition-all duration-500 ease-out flex items-center justify-between ${
          isScrolled
            ? 'max-w-4xl bg-obsidian-900/85 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full py-2.5 px-6'
            : 'max-w-7xl bg-transparent border-b border-white/5 py-4 px-2'
        }`}
      >
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-spice-amber/10 border border-spice-amber/30 flex items-center justify-center text-spice-amber group-hover:scale-105 group-hover:bg-spice-amber/20 transition-all">
            <Flame className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-tight font-medium text-parchment-100 group-hover:text-spice-amber transition-colors">
              5 Spices or Less
            </span>
            <span className="text-[10px] tracking-widest uppercase text-parchment-400/80 -mt-1 font-mono">
              Life · Food · Work
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-parchment-400">
          <a
            href="#philosophy"
            className="hover:text-parchment-100 transition-colors duration-200"
          >
            Philosophy
          </a>
          <a
            href="#writing"
            className="hover:text-parchment-100 transition-colors duration-200"
          >
            Essays & Lessons
          </a>
          <a
            href="#consulting"
            className="hover:text-parchment-100 transition-colors duration-200"
          >
            Boutique Advisory
          </a>
          <a
            href="#manifesto"
            className="hover:text-parchment-100 transition-colors duration-200"
          >
            Manifesto
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="relative group overflow-hidden rounded-full bg-parchment-100 text-obsidian-950 px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-spice-amber/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
          >
            <span>Consulting Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-parchment-200 p-1.5 hover:text-spice-amber transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-lg bg-obsidian-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-parchment-200">
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-spice-amber transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#writing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-spice-amber transition-colors"
            >
              Essays & Lessons
            </a>
            <a
              href="#consulting"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-spice-amber transition-colors"
            >
              Boutique Advisory
            </a>
            <a
              href="#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-spice-amber transition-colors"
            >
              Manifesto
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full text-center rounded-xl bg-spice-amber text-obsidian-950 py-3 text-sm font-semibold tracking-wide"
          >
            Start an Advisory Inquiry
          </button>
        </div>
      )}
    </header>
  );
}
