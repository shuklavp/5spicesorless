import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import WritingBoard from './components/WritingBoard';
import Letterbox from './components/Letterbox';
import ConsultingModule from './components/ConsultingModule';
import Profile from './components/Profile';
import Footer from './components/Footer';
import StoryPage from './components/StoryPage';
import DeskPage from './components/DeskPage';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

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

    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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

  const handleNavigate = (path) => {
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      if (currentPath !== '/') {
        window.history.pushState(null, '', path);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = () => {
    if (currentPath !== '/') {
      handleNavigate('/#intake-form');
    } else {
      const el = document.getElementById('intake-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Route matching
  const renderCurrentView = () => {
    // Dedicated Story View (/stories/:slug)
    if (currentPath.startsWith('/stories/')) {
      const slug = currentPath.replace('/stories/', '').replace(/\/$/, '');
      return (
        <StoryPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    // Dedicated Desk Archive Views (/life, /food, /work, /stories)
    if (currentPath === '/life' || currentPath === '/food' || currentPath === '/work' || currentPath === '/stories') {
      const desk = currentPath.replace('/', '');
      const urlParams = new URLSearchParams(window.location.search);
      const initialTag = urlParams.get('tag');
      return (
        <DeskPage
          desk={desk}
          initialTag={initialTag}
          onNavigate={handleNavigate}
        />
      );
    }

    // Default: The Main Home Broadside
    return (
      <main>
        {/* Two-Tone Editorial Hero */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* The Three Desks: Reader's Contract */}
        <ValueProps onNavigate={handleNavigate} />

        {/* Editorial Writing Board & Dispatches */}
        <WritingBoard onNavigate={handleNavigate} />

        {/* The Letterbox: Community Q&A */}
        <Letterbox />

        {/* Advisory Practice & Strategic Intake ("Ben to Jules") */}
        <ConsultingModule />

        {/* Profile & Personal Story (Vivek Shukla) */}
        <Profile onOpenInquiry={handleOpenInquiry} />
      </main>
    );
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-canvas-dark text-white' : 'bg-white text-ink-900'
      } bg-sandpaper-texture selection:bg-berry-500/20 selection:text-berry-700`}
    >
      {/* Sticky Masthead Navbar */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onNavigate={handleNavigate}
        currentPath={currentPath}
      />

      {/* Dynamic Route View */}
      {renderCurrentView()}

      {/* Editorial Manifesto Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
