// src/components/Letterbox.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Check, Heart, Mail, Send, ShieldCheck, Utensils, Briefcase } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'life',
    label: 'LIFE',
    icon: Heart,
    description: 'Personal growth, human relationships, fatherhood, and finding quiet perspective.',
  },
  {
    id: 'food',
    label: 'FOOD',
    icon: Utensils,
    description: 'Five-spice recipes, aroma and heat control, rescuing dishes, and the joy of honest cooking.',
  },
  {
    id: 'work',
    label: 'WORK',
    icon: Briefcase,
    description: 'Career crossroads, navigating politics, early startups, fundraising, and boardroom reality.',
  },
];

export default function Letterbox() {
  const [loadTime, setLoadTime] = useState(Date.now());
  const [selectedCategory, setSelectedCategory] = useState('life');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [spamRejected, setSpamRejected] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    website_url: '', // Honeypot trap
  });

  useEffect(() => {
    setLoadTime(Date.now());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Anti-Spam Check 1: Honeypot field must be empty
    if (formData.website_url) {
      console.warn('Bot submission blocked via honeypot.');
      setSpamRejected(true);
      return;
    }

    // Anti-Spam Check 2: Dwell time must be at least 2.5 seconds
    const elapsed = Date.now() - loadTime;
    if (elapsed < 2500) {
      console.warn('Bot submission blocked via dwell time.');
      setSpamRejected(true);
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSpamRejected(false);
    setFormData({ name: '', email: '', question: '', website_url: '' });
  };

  return (
    <section id="letterbox" className="py-24 px-6 md:px-12 bg-white dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300 overflow-hidden">
      
      {/* Panoramic Streetscape Architectural Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Light Mode: Cobalt Blue Ink on Transparent Background */}
        <img
          src="/streetscape-sketch.png"
          alt="Vintage Streetscape with Letterbox"
          className="w-full h-full object-cover object-top opacity-75 mix-blend-multiply dark:hidden transition-opacity"
        />
        {/* Dark Mode: Crisp Silver-Blue Line Art on Transparent Background */}
        <img
          src="/streetscape-sketch-dark.png"
          alt="Vintage Streetscape with Letterbox"
          className="w-full h-full object-cover object-top opacity-35 hidden dark:block transition-opacity"
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
            Letters to the Table.
          </h2>

          <p className="text-sm sm:text-base text-ink-800 dark:text-ink-200 font-medium leading-relaxed bg-white/75 dark:bg-canvas-dark/75 backdrop-blur-sm rounded-2xl py-3 px-5 inline-block shadow-sm">
            Whether you are grappling with personal perspective, trying to rescue a dish with five spices, or untangling a messy founder bottleneck: write in. One letter answered with care every Sunday.
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
                  className="px-6 py-2.5 rounded-full border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono font-bold text-ink-700 dark:text-ink-200 hover:border-berry-600 transition-colors"
                >
                  Write Another Note
                </button>
              </div>
            </div>
          ) : spamRejected ? (
            <div className="text-center py-12 px-4 space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center text-red-600 dark:text-red-400 mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-white">Spam Verification</h3>
              <p className="text-xs text-ink-600 dark:text-ink-300 leading-relaxed">
                Automated submission pattern detected. Please wait a few seconds and try submitting again.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2 rounded-full bg-berry-600 text-white text-xs font-bold font-mono"
              >
                Reset Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Anti-Spam Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="letterbox_website_url">Leave empty</label>
                <input
                  type="text"
                  id="letterbox_website_url"
                  name="website_url"
                  value={formData.website_url}
                  onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Step 1: Category Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-700 dark:text-ink-200 font-bold mb-3">
                  01 / Select Desk Topic
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-berry-50 dark:bg-berry-950/40 border-berry-600 dark:border-berry-500 shadow-sm ring-1 ring-berry-600'
                            : 'bg-white dark:bg-canvas-dark border-canvas-border dark:border-canvas-darkBorder hover:border-berry-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-berry-600 dark:text-berry-400' : 'text-ink-400'}`} />
                          <span className={`text-[10px] font-mono font-bold tracking-wider uppercase ${
                            isSelected ? 'text-berry-600 dark:text-berry-400' : 'text-ink-400'
                          }`}>
                            {cat.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-ink-600 dark:text-ink-300 font-light leading-snug">
                          {cat.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: The Question */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-700 dark:text-ink-200 font-bold mb-2">
                  02 / Your Letter or Bottleneck *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="Ask about personal perspective, a culinary rescue with five spices, or a founder dilemma..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 resize-none leading-relaxed shadow-inner"
                />
              </div>

              {/* Step 3: Attribution & Email */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-ink-700 dark:text-ink-200 font-bold">
                    03 / Sign Off
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded border-canvas-border text-berry-600 focus:ring-berry-500 w-4 h-4"
                    />
                    <span className="text-xs font-mono text-ink-600 dark:text-ink-300">
                      Post anonymously
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required={!isAnonymous}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isAnonymous ? "Anonymous Pen Name (e.g. 'Founder in Delhi')" : "Your Name"}
                      className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Optional: Email (to receive alert if answered)"
                      className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-canvas-border dark:border-canvas-darkBorder">
                <div className="flex items-center gap-2 text-xs font-mono text-ink-500 dark:text-ink-400">
                  <ShieldCheck className="w-4 h-4 text-berry-600 dark:text-berry-400" />
                  <span>No spam · Answered with quiet care</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs font-mono tracking-wider uppercase transition-all shadow-md shadow-berry-600/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Drop Into Letterbox</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
