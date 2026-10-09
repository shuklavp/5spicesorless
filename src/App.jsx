// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeAboutTeaser from './components/HomeAboutTeaser';
import ValueProps from './components/ValueProps';
import WritingBoard from './components/WritingBoard';
import HomeAdvisoryTeaser from './components/HomeAdvisoryTeaser';
import Letterbox from './components/Letterbox';
import Footer from './components/Footer';

// Dedicated Standalone Pages
import AboutPage from './components/AboutPage';
import AdvisoryPage from './components/AdvisoryPage';
import StoryPage from './components/StoryPage';
import DeskPage from './components/DeskPage';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  // Synchronise browser history navigation (back / forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Theme Initialisation
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

  // Client-Side Route Transition with URL bar sync and scroll to top
  const handleNavigate = (path) => {
    if (path.startsWith('/#') || path.startsWith('#')) {
      const hash = path.includes('#') ? path.split('#')[1] : '';
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic Route Resolver
  const renderCurrentRoute = () => {
    // 1. Standalone About Page: /about
    if (currentPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    // 2. Standalone Advisory Page: /advisory or /consulting
    if (currentPath === '/advisory' || currentPath === '/consulting') {
      return <AdvisoryPage onNavigate={handleNavigate} />;
    }

    // 3. Standalone Story Reader: /stories/:slug
    if (currentPath.startsWith('/stories/')) {
      const slug = currentPath.replace('/stories/', '');
      return <StoryPage slug={slug} onNavigate={handleNavigate} />;
    }

    // 4. Standalone Desk Archives: /life, /food, /work, /stories
    if (currentPath === '/life') {
      return <DeskPage deskId="life" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/food') {
      return <DeskPage deskId="food" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/work') {
      return <DeskPage deskId="work" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/stories') {
      return <DeskPage deskId="stories" onNavigate={handleNavigate} />;
    }

    // 5. Default: Lean Home Broadside (Concept 1)
    // Vertical height reduced by ~60%, eliminating scroll fatigue:
    // Hero -> HomeAboutTeaser -> Three Desks -> Curated Dispatches -> Advisory Teaser -> Letterbox -> Footer
    return (
      <main>
        {/* Section 1: Hero with 5 Spice Drawers */}
        <Hero onOpenInquiry={() => handleNavigate('/advisory')} />

        {/* Section 2: The Human Anchor Teaser (Vivek Shukla Memoir Intro) */}
        <HomeAboutTeaser onNavigate={handleNavigate} />

        {/* Section 3: The Three Desks (Life, Food, Work) */}
        <ValueProps onNavigate={handleNavigate} />

        {/* Section 4: Curated Dispatches & Stories */}
        <WritingBoard onNavigate={handleNavigate} />

        {/* Section 5: Advisory Invitation Card (Terracotta Sparring Card) */}
        <HomeAdvisoryTeaser onNavigate={handleNavigate} />

        {/* Section 6: The Letterbox (Community Q&A with anti-spam) */}
        <Letterbox />
      </main>
    );
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-canvas-dark text-white' : 'bg-white text-ink-900'
    } bg-sandpaper-texture selection:bg-berry-500/20 selection:text-berry-700`}>
      {/* Sticky Masthead Navigation */}
      <Navbar
        onNavigate={handleNavigate}
        currentPath={currentPath}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Dynamic Content View */}
      {renderCurrentRoute()}

      {/* Manifesto Footer */}
      <Footer onNavigate={handleNavigate} currentPath={currentPath} />
    </div>
  );
}
