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
    <footer id="manifesto" className="bg-paper-100 dark:bg-forest-950 text-ink-800 dark:text-paper-200 border-t border-paper-200 dark:border-forest-850 pt-20 pb-16 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* The Manifesto Banner (Deep Forest Green Accent Block) */}
        <div className="p-8 sm:p-14 rounded-3xl bg-forest-900 text-paper-50 border border-forest-800 mb-20 relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta-600/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-terracotta-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-terracotta-400 font-bold">
                The Five Spices Manifesto
              </span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-4xl text-paper-50 font-bold leading-snug">
              "We believe that true mastery is subtractive. The amateur adds ingredients to compensate for poor technique; the master uses only what is essential and executes with uncompromising presence."
            </blockquote>
            
            <p className="mt-6 text-sm text-paper-300 font-light max-w-xl leading-relaxed">
              Whether you are seasoning a humble pot of yellow lentils, refining a multi-million-dollar product architecture, or structuring the hours of your life: fewer levers, deeper focus, enduring impact.
            </p>
          </div>
        </div>

        {/* Newsletter & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-paper-200 dark:border-forest-850">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-forest-900 dark:bg-terracotta-600 flex items-center justify-center text-paper-50">
                <Flame className="w-4 h-4 text-terracotta-300 dark:text-paper-50" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-forest-950 dark:text-paper-50">
                The Sunday Reduction
              </h4>
            </div>
            <p className="text-sm text-ink-700 dark:text-paper-300 font-light leading-relaxed max-w-md mb-6">
              A brief, high-signal weekly memo sent every Sunday morning. One tactical business framework, one life lesson on subtraction, and one minimalist recipe or culinary observation.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 text-xs font-mono text-forest-900 dark:text-terracotta-400 bg-forest-100 dark:bg-forest-900 px-4 py-2.5 rounded-full border border-forest-300 dark:border-forest-800 font-semibold">
                <Check className="w-4 h-4 text-terracotta-600" />
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
                  className="flex-1 px-4 py-2.5 rounded-full bg-paper-50 dark:bg-forest-900 border border-paper-300 dark:border-forest-800 text-sm text-ink-900 dark:text-paper-100 focus:outline-none focus:border-terracotta-600"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-bold transition-colors shadow-md"
                >
                  Join Memo
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 md:pl-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-forest-900 dark:text-paper-400 font-bold block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-700 dark:text-paper-300 font-medium">
                <li>
                  <a href="#hero" className="hover:text-terracotta-600 transition-colors">
                    Back to Top
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="hover:text-terracotta-600 transition-colors">
                    Core Philosophy
                  </a>
                </li>
                <li>
                  <a href="#profile" className="hover:text-terracotta-600 transition-colors">
                    About Vivek
                  </a>
                </li>
                <li>
                  <a href="#writing" className="hover:text-terracotta-600 transition-colors">
                    Essay Board
                  </a>
                </li>
                <li>
                  <a href="#consulting" className="hover:text-terracotta-600 transition-colors">
                    Consulting Engagements
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-forest-900 dark:text-paper-400 font-bold block mb-4">
                Dispatches
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-700 dark:text-paper-300 font-medium">
                <li>
                  <a href="https://5spicesorless.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-terracotta-600 transition-colors">
                    <span>5spicesorless.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-500" />
                  </a>
                </li>
                <li>
                  <a href="#writing" className="flex items-center gap-1 hover:text-terracotta-600 transition-colors">
                    <span>The Writing Board</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-500" />
                  </a>
                </li>
                <li>
                  <a href="#consulting" className="flex items-center gap-1 hover:text-terracotta-600 transition-colors">
                    <span>Founder Office Hours</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-500" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Colophon & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ink-600 dark:text-paper-400 gap-4 font-medium">
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
