import React, { useState } from 'react';
import { ArrowUpRight, Check, Heart, Mail, Send, Utensils, Briefcase } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'heart',
    label: 'Heart & Life',
    icon: Heart,
    description: 'Love, heartbreak, relationships, and finding perspective when things hurt.',
  },
  {
    id: 'food',
    label: 'Food & The Pan',
    icon: Utensils,
    description: 'Rescuing a dish, five-spice ratios, heat control, or hosting dilemmas.',
  },
  {
    id: 'work',
    label: 'Work & Career',
    icon: Briefcase,
    description: 'Founder solitude, corporate politics, fundraising, hiring, or knowing when to exit.',
  },
];

export default function Letterbox() {
  const [selectedCategory, setSelectedCategory] = useState('heart');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <section id="letterbox" className="py-24 px-6 md:px-12 bg-white dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300 overflow-hidden">
      
      {/* Panoramic Streetscape Architectural Background (Vivid & Visible) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/streetscape-sketch.png"
          alt="Vintage Streetscape with Letterbox"
          className="w-full h-full object-cover object-top opacity-75 dark:opacity-35 mix-blend-multiply dark:mix-blend-screen transition-opacity"
        />
        {/* Soft bottom edge transition into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-canvas-dark to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-canvas-darkCard/95 border border-berry-200 dark:border-berry-900 text-berry-600 dark:text-berry-400 text-xs font-mono font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
            <Mail className="w-3.5 h-3.5" />
            <span>The Letterbox</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-ink-900 dark:text-white leading-tight drop-shadow-sm">
            Letters to the Cook.
          </h2>

          <p className="text-sm sm:text-base text-ink-800 dark:text-ink-200 font-medium leading-relaxed bg-white/75 dark:bg-canvas-dark/75 backdrop-blur-sm rounded-2xl py-2 px-4 inline-block shadow-sm">
            Ask an honest question on love, culinary dilemmas, or career crossroads. Vivek answers selected letters every Sunday morning, with Lakhnawi warmth and zero corporate nonsense.
          </p>
        </div>

        {/* Form Container with High-Contrast Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-white/95 dark:bg-canvas-darkCard/95 backdrop-blur-lg border-2 border-canvas-border dark:border-canvas-darkBorder shadow-2xl">
          
          {submitted ? (
            <div className="text-center py-12 px-4 space-y-5">
              <div className="w-20 h-20 rounded-full bg-berry-50 dark:bg-canvas-dark border border-berry-200 dark:border-berry-800 flex items-center justify-center text-berry-600 dark:text-berry-400 mx-auto shadow-sm">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
                Your letter has reached Vivek's desk.
              </h3>
              <p className="text-sm text-ink-600 dark:text-ink-300 max-w-md mx-auto leading-relaxed">
                Thank you for your honesty and trust. Selected questions are answered with care in our Sunday dispatch.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  Write Another Letter
                </button>
                <a
                  href="https://x.com/5spicesorless"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white hover:border-berry-600 text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <span>Follow on X (@5spicesorless)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Category Selection Tabs */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-700 dark:text-ink-300 font-bold mb-3">
                  Choose the Desk:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = selectedCategory === cat.id;
                    const cardClass = isSelected
                      ? 'bg-white dark:bg-canvas-dark border-berry-600 dark:border-berry-500 shadow-md ring-2 ring-berry-600/20'
                      : 'bg-canvas-subtle/80 dark:bg-canvas-dark/80 border-canvas-border dark:border-canvas-darkBorder hover:border-cobalt-400';
                    const iconColor = isSelected ? 'text-berry-600 dark:text-berry-400' : 'text-ink-500';

                    return (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={'text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ' + cardClass}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={'w-4 h-4 ' + iconColor} />
                          <span className="font-serif font-bold text-sm text-ink-900 dark:text-white">
                            {cat.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-ink-500 dark:text-ink-400 leading-relaxed font-light">
                          {cat.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Anonymous Checkbox */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-700 dark:text-ink-300 font-bold">
                    {isAnonymous ? 'Pen Name or Pseudonym' : 'Your Name *'}
                  </label>
                  <label className="flex items-center gap-2 text-xs font-mono text-ink-600 dark:text-ink-300 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded border-canvas-border text-berry-600 focus:ring-berry-600 w-4 h-4"
                    />
                    <span>Post anonymously</span>
                  </label>
                </div>

                <input
                  type="text"
                  required={!isAnonymous}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={
                    isAnonymous
                      ? 'e.g. "A Restless Founder in Bengaluru" or "A Pensive Cook in London"'
                      : 'e.g. Rahul Verma or Sarah Jenkins'
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 transition-colors shadow-inner"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-700 dark:text-ink-300 font-bold mb-2">
                  Email Address <span className="text-ink-400 font-normal">(Optional: only if you want an alert when answered)</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com (kept strictly private)"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 transition-colors shadow-inner"
                />
              </div>

              {/* The Letter / Question Textarea */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-700 dark:text-ink-300 font-bold mb-2">
                  Your Letter or Question *
                </label>
                <textarea
                  rows="5"
                  required
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="Ask me anything: how to navigate a delicate career crossroad, why romantic love breaks us and rebuilds us, or how to fix a bitter dal with simple kitchen physics. Be as unvarnished as you like..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 transition-colors resize-none leading-relaxed shadow-inner"
                />
              </div>

              {/* Direct X Note */}
              <div className="p-4 rounded-2xl bg-canvas-subtle/80 dark:bg-canvas-dark/80 border border-canvas-border dark:border-canvas-darkBorder flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-ink-700 dark:text-ink-200">
                  <span className="font-bold text-berry-600">Prefer X?</span>
                  <span>You can also send questions or tag Vivek directly on X:</span>
                </div>
                <div className="flex items-center gap-3 font-mono font-bold">
                  <a
                    href="https://x.com/5spicesorless"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cobalt-600 dark:text-cobalt-400 hover:underline flex items-center gap-1"
                  >
                    <span>@5spicesorless</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <span className="text-ink-400">·</span>
                  <a
                    href="https://x.com/vivekshukla"
                    target="_blank"
                    rel="noreferrer"
                    className="text-berry-600 dark:text-berry-400 hover:underline flex items-center gap-1"
                  >
                    <span>@vivekshukla</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-berry-600/25 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Post Letter to Vivek</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
