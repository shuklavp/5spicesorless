// src/components/NewsletterSignup.jsx
// Email-only sign-up for the Sunday note and the fortnightly recipe.
// Sends to its own endpoint (see FORM_ENDPOINTS.newsletter in src/config/forms.js).
import React, { useRef, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { FORM_ENDPOINTS } from '../config/forms';

export default function NewsletterSignup({ id = 'newsletter', className = '' }) {
  const loadedAt = useRef(Date.now());
  const [email, setEmail] = useState('');
  const [trap, setTrap] = useState(''); // honeypot
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;

    // Quietly drop bots: filled honeypot or a submission faster than a person could type.
    if (trap || Date.now() - loadedAt.current < 2500) {
      setStatus('done');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINTS.newsletter, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          form_type: 'newsletter',
          _subject: '[5 Spices Newsletter] New subscriber',
          from_name: '5 Spices or Less: Newsletter',
          email,
        }),
      });
      setStatus(response.ok ? 'done' : 'error');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-28 ${className}`}
    >
      <div className="max-w-4xl mx-auto rounded-3xl border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-darkCard px-6 py-8 sm:px-10 sm:py-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest font-semibold text-ink-600 dark:text-ink-300 block">
            The Newsletter
          </span>
          <h2 id={`${id}-heading`} className="font-serif text-2xl sm:text-3xl font-bold text-ink-950 dark:text-white leading-snug">
            Get the Sunday note.
          </h2>
          <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
            A short note on Sundays and a tested recipe every fortnight. No spam, and you can leave whenever you like.
          </p>
        </div>

        {status === 'done' ? (
          <div role="status" className="flex items-start gap-3 text-sm text-ink-800 dark:text-ink-100">
            <Check className="w-5 h-5 mt-0.5 shrink-0 text-[#146B53] dark:text-[#6FD3B3]" aria-hidden="true" />
            <p>Thank you. You are on the list, and the next note will arrive on a Sunday.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3" noValidate={false}>
            <label htmlFor={`${id}-email`} className="block text-xs font-mono uppercase tracking-widest font-semibold text-ink-700 dark:text-ink-200">
              Email address
            </label>
            {/* Honeypot: hidden from people and screen readers */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor={`${id}-website`}>Website</label>
              <input id={`${id}-website`} type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id={`${id}-email`}
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 rounded-full border border-ink-300 dark:border-canvas-darkBorder bg-white dark:bg-canvas-dark px-5 py-3 text-sm text-ink-900 dark:text-white placeholder:text-ink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 dark:focus-visible:ring-white"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 hover:bg-ink-800 dark:bg-stone-100 dark:text-ink-950 dark:hover:bg-white disabled:opacity-60 text-white px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-900 dark:focus-visible:ring-white"
              >
                {status === 'sending' ? (<><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /><span>Sending</span></>) : 'Subscribe'}
              </button>
            </div>
            {status === 'error' && (
              <p role="alert" className="text-sm text-[#A3124C] dark:text-berry-300">
                Something went wrong. Please try again, or write to vivek@5spicesorless.com.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
