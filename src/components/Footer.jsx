import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070D1B] text-slate-300 border-t border-[#18233C] py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <a href="/" className="inline-block">
            <img 
              src="/logo_dark.png" 
              alt="5 Spices or Less" 
              className="h-12 w-auto object-contain brightness-105" 
              onError={(e) => { 
                e.currentTarget.onerror = null; 
                e.currentTarget.src = '/logo.png'; 
                e.currentTarget.classList.add('invert'); 
              }} 
            />
          </a>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-sm leading-relaxed">
            Observations on enterprise building, Awadhi kitchens, and living with patience. Published by Vivek Shukla from Kuala Lumpur.
          </p>
          <div className="text-[11px] font-mono text-slate-500 pt-2 flex items-center gap-3">
            <span>© {new Date().getFullYear()} 5 Spices or Less. All rights reserved.</span>
            <span>•</span>
            <a href="/terms" className="hover:text-slate-300 transition-colors underline underline-offset-4">
              Terms & Colophon
            </a>
          </div>
        </div>

        {/* NAVIGATION Column */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest font-bold text-white">
            NAVIGATION
          </div>
          <ul className="space-y-2 text-xs font-mono uppercase tracking-wider font-semibold text-slate-400">
            <li>
              <a href="#top" onClick={scrollToTop} className="hover:text-[#DE2573] transition-colors">
                Back to Top
              </a>
            </li>
            <li><a href="/life" className="hover:text-[#DE2573] transition-colors">Life</a></li>
            <li><a href="/food" className="hover:text-[#DE2573] transition-colors">Food</a></li>
            <li><a href="/work" className="hover:text-[#DE2573] transition-colors">Work</a></li>
            <li><a href="/stories" className="hover:text-[#DE2573] transition-colors">Stories &amp; Notes</a></li>
            <li><a href="/#letterbox" className="hover:text-[#DE2573] transition-colors">The Letterbox</a></li>
            <li><a href="/advisory" className="hover:text-[#DE2573] transition-colors">Advisory</a></li>
            <li><a href="/about" className="hover:text-[#DE2573] transition-colors">About</a></li>
            <li><a href="/terms" className="hover:text-[#DE2573] transition-colors">Colophon & Terms</a></li>
          </ul>
        </div>

        {/* CONNECT Column */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest font-bold text-white">
            CONNECT
          </div>
          <ul className="space-y-2 text-xs font-mono uppercase tracking-wider font-semibold text-slate-400">
            <li>
              <a 
                href="https://linkedin.com/in/vivekshukla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 hover:text-[#DE2573] transition-colors"
              >
                <span>LinkedIn / Vivek Shukla</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a 
                href="https://x.com/5spicesorless" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 hover:text-[#DE2573] transition-colors"
              >
                <span>@5spicesorless on X</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a 
                href="https://x.com/vivekshukla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 hover:text-[#DE2573] transition-colors"
              >
                <span>@vivekshukla on X</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a 
                href="https://5spicesorless.com" 
                className="inline-flex items-center gap-1 hover:text-[#DE2573] transition-colors"
              >
                <span>5spicesorless.com</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
