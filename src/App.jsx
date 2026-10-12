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
import DispatchStudio from './components/DispatchStudio';

// Standalone Advisory Pillar Pages
import PillarOperatorPage from './components/PillarOperatorPage';
import PillarEIRPage from './components/PillarEIRPage';
import PillarConfidantPage from './components/PillarConfidantPage';

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
    // 0. The Dispatch Studio Authoring Suite: /studio
    if (currentPath === '/studio') {
      return <DispatchStudio onNavigate={handleNavigate} isDark={isDark} />;
    }
    // 1. Standalone About Page: /about
    if (currentPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    // 2. Standalone Advisory Page: /advisory or /consulting
    if (currentPath === '/advisory' || currentPath === '/consulting') {
      return <AdvisoryPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    // 2a. Standalone Advisory Pillar Pages
    if (currentPath === '/advisory/fractional-operator') {
      return <PillarOperatorPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    if (currentPath === '/advisory/eir') {
      return <PillarEIRPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    if (
      currentPath === '/advisory/founder-confidant' ||
      currentPath === '/advisory/ben-to-jules'
    ) {
      return <PillarConfidantPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    // 3. Standalone Story Reader: /stories/:slug
    if (currentPath.startsWith('/stories/')) {
      const slug = currentPath.replace('/stories/', '');
      return <StoryPage slug={slug} onNavigate={handleNavigate} isDark={isDark} />;
    }
    // 4. Standalone Desk Archives: /life, /food, /work, /stories
    if (currentPath === '/life') {
      return <DeskPage desk=life onNavigate={handleNavigate} isDark={isDark} />;
    }
    if (currentPath === '/food') {
      return <DeskPage desk=food onNavigate={handleNavigate} isDark={isDark} />;
    }
    if (currentPath === '/work') {
      return <DeskPage desk=work onNavigate={handleNavigate} isDark={isDark} />;
    }
    if (currentPath === '/stories') {
      return <DeskPage desk=stories onNavigate={handleNavigate} isDark={isDark} />;
    }

    // 5. Default: Front Page
    return (
      <main>
        <Hero onNavigate={handleNavigate} isDark={isDark} />
        <ValueProps onNavigate={handleNavigate} isDark={isDark} />
        <WritingBoard onNavigate={handleNavigate} isDark={isDark} />
        <Letterbox onNavigate={handleNavigate} isDark={isDark} />
        <HomeAdvisoryTeaser onNavigate={handleNavigate} isDark={isDark} />
        <HomeAboutTeaser onNavigate={handleNavigate} isDark={isDark} />
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-canvas-dark text-ink-900 dark:text-gray-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />
      <div className="flex-1">
        {renderCurrentRoute()}
      </div>
      <Footer currentPath={currentPath} onNavigate={handleNavigate} isDark={isDark} />
    </div>
  );
}
