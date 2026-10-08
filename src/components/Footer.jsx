import React, { useState } from 'react';
import { ArrowUpRight, Check, Flame, Linkedin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const handleLinkClick = (e, path) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer id="manifesto" className="bg-canvas-subtle dark:bg-canvas-dark text-ink-800 dark:text-ink-100 border-t border-canvas-border dark:border-canvas-darkBorder pt-20 pb-16 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* The Manifesto Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-ink-900 text-white border border-ink-800 mb-20 relative shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-berry-600/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-berry-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-berry-400 font-bold">
                The Five Spices Manifesto
              </span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-4xl text-white font-bold leading-snug">
              "True mastery is subtractive. The amateur adds ingredients to mask poor technique. The master uses only what is essential, and executes with quiet confidence."
            </blockquote>
            
            <p className="mt-6 text-sm text-ink-300 font-light max-w-xl leading-relaxed">
              Whether seasoning a humble pot of lentils, refining a company strategy, or structuring your days: fewer levers, deeper focus, enduring outcomes.
            </p>
          </div>

          {/* Stone Mortar and Pestle on Kitchen Counter */}
          <div className="w-56 sm:w-72 md:w-80 shrink-0 relative z-10 select-none pointer-events-none">
            <img
              src="/mortar-pestle-dark.png"
              alt="Stone Mortar and Pestle on Wooden Kitchen Counter with Spices"
              className="w-full h-auto object-contain rounded-2xl"
              onError={(e) => {
                e.currentTarget.parentElement.style.display = 'none';
              }}
            />
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
              A brief, rich weekly email sent every Sunday morning. One tactical business framework, one life lesson, one minimalist recipe, or simply a timely common-sense reminder.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 text-xs font-mono text-berry-700 dark:text-berry-300 bg-berry-50 dark:bg-canvas-darkCard px-4 py-2.5 rounded-full border border-berry-200 dark:border-canvas-darkBorder font-semibold">
                <Check className="w-4 h-4 text-berry-600" />
                <span>You are subscribed to The Sunday Reduction. Welcome.</span>
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
                  <a
                    href="/#hero"
                    onClick={(e) => handleLinkClick(e, '/#hero')}
                    className="hover:text-berry-600 transition-colors"
                  >
                    Back to Top
                  </a>
                </li>
                <li>
                  <a
                    href="/life"
                    onClick={(e) => handleLinkClick(e, '/life')}
                    className="hover:text-berry-600 transition-colors"
                  >
                    Life
                  </a>
                </li>
                <li>
                  <a
                    href="/food"
                    onClick={(e) => handleLinkClick(e, '/food')}
                    className="hover:text-berry-600 transition-colors"
                  >
                    Food
                  </a>
                </li>
                <li>
                  <a
                    href="/work"
                    onClick={(e) => handleLinkClick(e, '/work')}
                    className="hover:text-berry-600 transition-colors"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="/stories"
                    onClick={(e) => handleLinkClick(e, '/stories')}
                    className="hover:text-berry-600 transition-colors"
                  >
                    Stories &amp; Essays
                  </a>
                </li>
                <li>
                  <a
                    href="/#letterbox"
                    onClick={(e) => handleLinkClick(e, '/#letterbox')}
                    className="hover:text-berry-600 transition-colors"
                  >
                    The Letterbox
                  </a>
                </li>
                <li>
                  <a
                    href="/#consulting"
                    onClick={(e) => handleLinkClick(e, '/#consulting')}
                    className="hover:text-berry-600 transition-colors"
                  >
                    Advisory ("Ben to Jules")
                  </a>
                </li>
                <li>
                  <a
                    href="/#profile"
                    onClick={(e) => handleLinkClick(e, '/#profile')}
                    className="hover:text-berry-600 transition-colors"
                  >
                    About Vivek
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-900 dark:text-white font-bold block mb-4">
                Connect
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-600 dark:text-ink-200 font-medium">
                <li>
                  <a
                    href="https://www.linkedin.com/in/vivekshukla/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-cobalt-600 transition-colors font-semibold text-ink-900 dark:text-white"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-cobalt-600" />
                    <span>LinkedIn / Vivek Shukla</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/5spicesorless"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-berry-600 transition-colors font-semibold text-ink-900 dark:text-white"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-berry-600" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>@5spicesorless on X</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/vivekshukla"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-ink-900 dark:hover:text-white transition-colors font-semibold text-ink-900 dark:text-white"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>@vivekshukla on X</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-400" />
                  </a>
                </li>
                <li>
                  <a href="https://5spicesorless.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-berry-600 transition-colors">
                    <span>5spicesorless.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Colophon & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ink-500 dark:text-ink-400 gap-4 font-medium">
          <p>© {new Date().getFullYear()} 5 Spices or Less, Vivek Shukla. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Lucknow roots · Crafted with Vite, React, and Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
