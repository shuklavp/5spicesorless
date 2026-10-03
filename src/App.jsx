import React from 'react';
import CursorSpotlight from './components/CursorSpotlight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import WritingBoard from './components/WritingBoard';
import ConsultingModule from './components/ConsultingModule';
import Footer from './components/Footer';

export default function App() {
  const handleOpenInquiry = () => {
    const el = document.getElementById('intake-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-parchment-100 selection:bg-spice-amber/25 selection:text-spice-saffron">
      {/* Dynamic Cursor Spotlight micro-interaction */}
      <CursorSpotlight />

      {/* Sticky Morphing Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Page Layout */}
      <main>
        {/* Full-bleed Deep Atmospheric Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 3 Key Value Proposition Modules */}
        <ValueProps onOpenInquiry={handleOpenInquiry} />

        {/* High-End Writing Board & Local Markdown Repository */}
        <WritingBoard />

        {/* Boutique Advisory Practice (Open Bespoke Model & Built-in Intake Form) */}
        <ConsultingModule />
      </main>

      {/* Footer with Manifesto and Newsletter */}
      <Footer />
    </div>
  );
}
