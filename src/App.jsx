import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Profile from './components/Profile';
import WritingBoard from './components/WritingBoard';
import ConsultingModule from './components/ConsultingModule';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(false); // Default to the warm editorial poster light mode

  // Initialize theme from localStorage or default to editorial light
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
      isDark ? 'bg-forest-950 text-paper-50' : 'bg-paper-50 text-ink-900'
    } selection:bg-terracotta-500/25 selection:text-terracotta-700`}>
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

        {/* 3 Core Value Proposition Modules */}
        <ValueProps onOpenInquiry={handleOpenInquiry} />

        {/* Profile & Personal Story (Vivek Shukla) with Sketch Frame */}
        <Profile onOpenInquiry={handleOpenInquiry} />

        {/* Editorial Writing Board & Article Reader */}
        <WritingBoard />

        {/* Bespoke Advisory Practice & Strategic Intake */}
        <ConsultingModule />
      </main>

      {/* Editorial Manifesto Footer */}
      <Footer />
    </div>
  );
}
