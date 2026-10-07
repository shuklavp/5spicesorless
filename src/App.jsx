import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import WritingBoard from './components/WritingBoard';
import Letterbox from './components/Letterbox';
import ConsultingModule from './components/ConsultingModule';
import Profile from './components/Profile';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  const handleToggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  const handleOpenInquiry = () => {
    const el = document.getElementById('intake-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-canvas-dark text-white' : 'bg-white text-ink-900'
    } bg-sandpaper-texture selection:bg-berry-500/20 selection:text-berry-700`}>
      {/* Sticky Morphing Masthead Navbar with Theme Toggle */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Page Content */}
      <main>
        {/* High-Impact Two-Tone Editorial Hero */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* The Three Desks: Reader's Contract for Life, Food, and Work */}
        <ValueProps />

        {/* Editorial Writing Board & Article Reader (Life, Food, Work, Stories) */}
        <WritingBoard />

        {/* The Letterbox: Q&A on Love, Food, and Career */}
        <Letterbox />

        {/* Bespoke Advisory Practice & Strategic Intake ("Ben to Jules") */}
        <ConsultingModule />

        {/* Profile & Personal Story (Vivek Shukla) - The Human Anchor & Memoir */}
        <Profile onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Editorial Manifesto Footer */}
      <Footer />
    </div>
  );
}
