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

// Independent Standalone Desk Pages
import LifeDeskPage from './components/LifeDeskPage';
import FoodDeskPage from './components/FoodDeskPage';
import WorkDeskPage from './components/WorkDeskPage';

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
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Dynamic Route Resolver
  const renderCurrentRoute = () => {
    const normalizedPath =
      currentPath.length > 1 && currentPath.endsWith('/')
        ? currentPath.slice(0, -1)
        : currentPath;

    // 0. Dispatch Studio: /studio
    if (normalizedPath === '/studio') {
      return <DispatchStudio onNavigate={handleNavigate} isDark={isDark} />;
    }
    // 1. Standalone About Page: /about
    if (normalizedPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    // 2. Standalone Advisory Page: /advisory or /consulting
    if (normalizedPath === '/advisory' || normalizedPath === '/consulting') {
      return <AdvisoryPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    // 2a. Standalone Advisory Pillar Pages
    if (normalizedPath === '/advisory/fractional-operator') {
      return <PillarOperatorPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    if (normalizedPath === '/advisory/eir') {
      return <PillarEIRPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    if (
      normalizedPath === '/advisory/founder-confidant' ||
      normalizedPath === '/advisory/ben-to-jules'
    ) {
      return <PillarConfidantPage onNavigate={handleNavigate} isDark={isDark} />;
    }

    // 3. Independent Desk Archives (Fully Isolated)
    if (normalizedPath === '/life') {
      return <LifeDeskPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    if (normalizedPath === '/food') {
      return <FoodDeskPage onNavigate={handleNavigate} isDark={isDark} />;
    }
    if (normalizedPath === '/work') {
      return <WorkDeskPage onNavigate={handleNavigate} isDark={isDark} />;
    }

    // 3a. Combined Dispatches Library: /stories
    if (normalizedPath === '/stories') {
      return <DeskPage desk="stories" deskId="stories" onNavigate={handleNavigate} isDark={isDark} />;
    }

    // 4. Standalone Story Reader: /stories/:slug
    if (normalizedPath.startsWith('/stories/')) {
      const slug = normalizedPath.replace('/stories/', '').replace(/\/$/, '');
      if (slug) {
        return <StoryPage slug={slug} onNavigate={handleNavigate} isDark={isDark} />;
      }
      return <DeskPage desk="stories" deskId="stories" onNavigate={handleNavigate} isDark={isDark} />;
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
    <div className="min-h-screen bg-white dark:bg-canvas-dark text-ink-900 dark:text-gray-100 flex flex-col font-serif transition-colors duration-300">
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
