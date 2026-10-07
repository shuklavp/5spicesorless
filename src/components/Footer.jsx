import React, { useState } from 'react';
import { ArrowUpRight, Check, Flame, Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer id="manifesto" className="bg-canvas-subtle dark:bg-canvas-dark text-ink-800 dark:text-ink-100 border-t border-canvas-border dark:border-canvas-darkBorder pt-20 pb-16 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* The Manifesto Banner (Midnight Ink Block) */}
        <div className="p-8 sm:p-14 rounded-3xl bg-ink-900 text-white border border-ink-800 mb-20 relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-berry-600/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-berry-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-berry-400 font-bold">
                The Five Spices Manifesto
              </span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-4xl text-white font-bold leading-snug">
              "We believe that true mastery is subtractive. The amateur adds ingredients to compensate for poor technique; the master uses only what is essential and executes with uncompromising presence."
            </blockquote>
            
            <p className="mt-6 text-sm text-ink-300 font-light max-w-xl leading-relaxed">
              Whether you are seasoning a humble pot of yellow lentils, refining a multi-million-dollar product architecture, or structuring the hours of your life: fewer levers, deeper focus, enduring impact.
            </p>
          </div>
        </div>

        {/* Newsletter & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-canvas-border dark:border-canvas-darkBorder">
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* Scaled Logo in Footer */}
              <img
                src="/logo.png"
                alt="5 Spices or Less"
                className="h-12 md:h-14 w-auto object-contain dark:hidden"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('footer-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <img
                src="/logo_dark.png"
                alt="5 Spices or Less"
                className="h-12 md:h-14 w-auto object-contain hidden dark:block"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('footer-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="footer-fallback" className="hidden items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-ink-900 dark:bg-berry-600 flex items-center justify-center text-white">
                  <Flame className="w-5 h-5 text-berry-400 dark:text-white" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-ink-900 dark:text-white">
                  5 Spices or Less
                </h4>
              </div>
            </div>
            
            <p className="text-sm text-ink-600 dark:text-ink-200 font-light leading-relaxed max-w-md mb-6">
              A brief, high-signal weekly memo sent every Sunday morning. One tactical business framework, one life lesson on subtraction, and one minimalist recipe or culinary observation.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 text-xs font-mono text-berry-700 dark:text-berry-300 bg-berry-50 dark:bg-canvas-darkCard px-4 py-2.5 rounded-full border border-berry-200 dark:border-canvas-darkBorder font-semibold">
                <Check className="w-4 h-4 text-berry-600" />
                <span>You're subscribed to The Sunday Reduction. Welcome.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white text-xs font-bold transition-colors shadow-md"
                >
                  Join Memo
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 md:pl-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-900 dark:text-white font-bold block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-600 dark:text-ink-200 font-medium">
                <li>
                  <a href="#hero" className="hover:text-berry-600 transition-colors">
                    Back to Top
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="hover:text-berry-600 transition-colors">
                    Core Philosophy
                  </a>
                </li>
                <li>
                  <a href="#profile" className="hover:text-berry-600 transition-colors">
                    About Vivek
                  </a>
                </li>
                <li>
                  <a href="#writing" className="hover:text-berry-600 transition-colors">
                    Essay Board
                  </a>
                </li>
                <li>
                  <a href="#consulting" className="hover:text-berry-600 transition-colors">
                    Consulting Engagements
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-900 dark:text-white font-bold block mb-4">
                Dispatches
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-600 dark:text-ink-200 font-medium">
                <li>
                  <a href="https://5spicesorless.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-berry-600 transition-colors">
                    <span>5spicesorless.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-400" />
                  </a>
                </li>
                <li>
                  <a href="#writing" className="flex items-center gap-1 hover:text-berry-600 transition-colors">
                    <span>The Writing Board</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-400" />
                  </a>
                </li>
                <li>
                  <a href="#consulting" className="flex items-center gap-1 hover:text-berry-600 transition-colors">
                    <span>Founder Office Hours</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Colophon & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ink-500 dark:text-ink-400 gap-4 font-medium">
          <p>© {new Date().getFullYear()} 5 Spices or Less. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Crafted with Vite, React & Tailwind</span>
            <span>·</span>
            <span>Zero Server Overhead</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
