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
    <footer id="manifesto" className="bg-obsidian-950 text-parchment-200 border-t border-white/10 pt-20 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-spice-amber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Manifesto Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-obsidian-900 to-obsidian-850 border border-white/10 mb-20 relative">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-spice-amber block mb-3">
              The Five Spices Manifesto
            </span>
            <blockquote className="font-serif text-2xl sm:text-4xl text-parchment-50 font-normal leading-snug">
              "We believe that true mastery is subtractive. The amateur adds ingredients to compensate for poor technique; the master uses only what is essential and executes with uncompromising presence."
            </blockquote>
            <p className="mt-6 text-sm text-parchment-400 font-light max-w-xl leading-relaxed">
              Whether you are seasoning a humble pot of yellow lentils, refining a multi-million-dollar product architecture, or structuring the hours of your life: fewer levers, deeper focus, enduring impact.
            </p>
          </div>
        </div>

        {/* Newsletter & Direct Connect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-spice-amber" />
              <h4 className="font-serif text-2xl font-medium text-parchment-100">
                The Sunday Reduction
              </h4>
            </div>
            <p className="text-sm text-parchment-400 font-light leading-relaxed max-w-md mb-6">
              A brief, high-signal weekly memo sent every Sunday morning. One tactical business framework, one life lesson on subtraction, and one minimalist recipe or culinary observation.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 text-xs font-mono text-spice-amber bg-spice-amber/10 px-4 py-2.5 rounded-full border border-spice-amber/30">
                <Check className="w-4 h-4" />
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
                  className="flex-1 px-4 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-sm text-parchment-100 focus:outline-none focus:border-spice-amber"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-parchment-100 text-obsidian-950 text-xs font-semibold hover:bg-white transition-colors"
                >
                  Join Memo
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 md:pl-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-parchment-400 block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-parchment-300">
                <li>
                  <a href="#hero" className="hover:text-spice-amber transition-colors">
                    Back to Top
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="hover:text-spice-amber transition-colors">
                    Core Philosophy
                  </a>
                </li>
                <li>
                  <a href="#writing" className="hover:text-spice-amber transition-colors">
                    Essay Board
                  </a>
                </li>
                <li>
                  <a href="#consulting" className="hover:text-spice-amber transition-colors">
                    Consulting Engagements
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-parchment-400 block mb-4">
                Dispatches
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-parchment-300">
                <li>
                  <a href="https://5spicesorless.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-spice-amber transition-colors">
                    <span>5spicesorless.com</span>
                    <ArrowUpRight className="w-3 h-3 text-parchment-400" />
                  </a>
                </li>
                <li>
                  <a href="#writing" className="flex items-center gap-1 hover:text-spice-amber transition-colors">
                    <span>The Writing Board</span>
                    <ArrowUpRight className="w-3 h-3 text-parchment-400" />
                  </a>
                </li>
                <li>
                  <a href="#consulting" className="flex items-center gap-1 hover:text-spice-amber transition-colors">
                    <span>Founder Office Hours</span>
                    <ArrowUpRight className="w-3 h-3 text-parchment-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Colophon & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-parchment-400 gap-4">
          <p>© {new Date().getFullYear()} 5 Spices or Less. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Crafted with Vite, React & Tailwind</span>
            <span>·</span>
            <span>Zero Server Overhead</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
