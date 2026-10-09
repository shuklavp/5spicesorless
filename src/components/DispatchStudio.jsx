// src/components/DispatchStudio.jsx
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock, Copy, 
  Download, Eye, Feather, FileText, Flame, Image as ImageIcon, 
  Layers, Plus, RefreshCw, Send, Sparkles, Tag, Trash2, X,
  BookOpen, Sliders
} from 'lucide-react';
import { ESSAYS_DATA } from '../data/essays';

const TAXONOMY = {
  Life: {
    subCategories: [
      'Education & Mentorship',
      'Love & Heartbreak',
      'Failures & Second Chances',
      'Money & Perspective',
      'Marriage & Companionship',
      'Kids & Parenting',
      'Friends & Road Companions',
      'Emotions & Resilience',
      'Health & Recovery',
    ],
    suggestedTags: [
      'Lucknow', 'Tehzeeb', 'Patience', 'Fatherhood', 'Mentorship',
      'Character', 'Perspective', 'Communication', 'Honesty', 'Friendship'
    ],
    defaultAnchor: 'A weathered brass fountain pen resting across an open textured paper journal notebook beside a steaming glass of cutting chai'
  },
  Food: {
    subCategories: [
      'Recipes (Five Spices or Fewer)',
      'Ingredients & Spice Physics',
      'Eateries & Street Food',
      'Honest Reviews',
      'Appliances & Kitchenware',
      'Technique & Heat Control',
    ],
    suggestedTags: [
      'Five Spices', 'Awadhi Cooking', 'Aroma Physics', 'Slow Heat',
      'Cast Iron Kadai', 'Cumin & Peppercorn', 'Comfort Food', 'Street Food'
    ],
    defaultAnchor: 'A heavy cast-iron kadai with dual loop handles accompanied by a hand-carved wooden spoon and whole spices'
  },
  Work: {
    subCategories: [
      'Leadership & Character',
      'Startups & Category Creation',
      'Fundraising & Investors',
      'Shareholders & Board Governance',
      'Hiring & People',
      'Marketing & Demand Generation',
      'Management & Operations',
      'Sourcing & Supply Chain',
    ],
    suggestedTags: [
      'Startups', 'Hiring', 'Unit Economics', 'Category Creation',
      'Boardrooms', 'Investor Trust', 'Operational Clarity', 'Clean Exits'
    ],
    defaultAnchor: 'Vintage brass drafting compass divider, stainless metric ruler, and precision vernier calipers resting over architectural blueprints'
  },
  Fiction: {
    subCategories: [
      'Short Stories',
      'Road Chronicles',
      'Vignettes & Encounters',
    ],
    suggestedTags: [
      'Fiction', 'Grand Trunk Road', 'Strangers', 'Nocturne', 'Travel'
    ],
    defaultAnchor: 'A classic vintage manual mechanical typewriter with textured paper rising from the platen roller'
  },
};

export default function DispatchStudio({ onNavigate }) {
  // Core Dispatch State
  const [category, setCategory] = useState('Life');
  const [subCategory, setSubCategory] = useState(TAXONOMY.Life.subCategories[0]);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [slug, setSlug] = useState('');
  const [customSubCategory, setCustomSubCategory] = useState('');
  const [date, setDate] = useState('October 2026');
  const [author, setAuthor] = useState('Vivek Shukla');
  const [leadQuote, setLeadQuote] = useState('');
  const [tags, setTags] = useState(['Lucknow', 'Perspective']);
  const [newTagInput, setNewTagInput] = useState('');
  const [takeaways, setTakeaways] = useState([
    'First core truth: Focus on character over cosmetic pedigree.',
    'Second core truth: Simplicity in communication avoids unforced errors.',
    'Third core truth: Building things that endure requires patience and quiet dignity.'
  ]);
  const [markdownBody, setMarkdownBody] = useState(`Every lesson worth remembering begins with a quiet realization rather than noisy declarations.\n\nGrowing up in Lucknow taught me that how you say something matters just as much as what you say. In a world full of posturing, restraint is the rarest form of strength.\n\n### The First Lesson in Craft\n\nWhen we simplify our priorities, whether in our homes, our kitchens, or our boardrooms, the noise clears away.`);

  // Image Provisions (Primary & Secondary)
  const [illustration, setIllustration] = useState('');
  const [illustrationDark, setIllustrationDark] = useState('');
  const [illustrationCaption, setIllustrationCaption] = useState('');
  const [secondaryImage, setSecondaryImage] = useState('');
  const [secondaryCaption, setSecondaryCaption] = useState('');

  // UI Modes
  const [viewMode, setViewMode] = useState('split'); // 'editor', 'split', 'preview'
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [statusMessage, setStatusMessage] = useState('Draft loaded in browser memory');

  // Auto-generate slug from title if not manually customized
  const handleTitleChange = (val) => {
    setTitle(val);
    const autoSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(autoSlug);
  };

  // Sync subcategories when primary desk changes
  const handleCategoryChange = (newCat) => {
    setCategory(newCat);
    const defaults = TAXONOMY[newCat] ? TAXONOMY[newCat].subCategories[0] : '';
    setSubCategory(defaults);
    setCustomSubCategory('');
  };

  // Auto-calculate reading time
  const wordCount = markdownBody.trim().split(/\s+/).filter(Boolean).length;
  const calculatedReadTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  // Takeaway helpers
  const handleAddTakeaway = () => {
    setTakeaways([...takeaways, 'New ground truth or takeaway point.']);
  };

  const handleUpdateTakeaway = (index, val) => {
    const updated = [...takeaways];
    updated[index] = val;
    setTakeaways(updated);
  };

  const handleRemoveTakeaway = (index) => {
    setTakeaways(takeaways.filter((_, i) => i !== index));
  };

  // Tag helpers
  const handleAddTag = (tagToAdd) => {
    const clean = tagToAdd.trim().replace(/^#/, '');
    if (clean && !tags.includes(clean)) {
      setTags([...tags, clean]);
    }
    setNewTagInput('');
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  // Quick Markdown Insert Helper
  const insertMarkdownSnippet = (snippet) => {
    setMarkdownBody((prev) => prev + '\n\n' + snippet);
  };

  // AI Cobalt Blue Sketch Prompt Generator
  const generateSketchPrompt = () => {
    const textCorpus = (title + ' ' + subtitle + ' ' + markdownBody).toLowerCase();
    
    // Heuristic metaphor detector for physical objects
    let chosenObject = TAXONOMY[category]?.defaultAnchor || 'A vintage brass fountain pen and open journal';

    if (textCorpus.includes('kadai') || textCorpus.includes('cook') || textCorpus.includes('recipe')) {
      chosenObject = 'A traditional Indian cast-iron kadai with dual loop handles, wooden spoon, and whole spices';
    } else if (textCorpus.includes('skoda') || textCorpus.includes('car') || textCorpus.includes('highway') || textCorpus.includes('road')) {
      chosenObject = 'A vintage roadside milestone and highway tarmac marker under open sky';
    } else if (textCorpus.includes('hiring') || textCorpus.includes('team') || textCorpus.includes('luggage')) {
      chosenObject = 'Two sturdy canvas rucksacks resting beside a roadside milestone';
    } else if (textCorpus.includes('water') || textCorpus.includes('meter') || textCorpus.includes('iot')) {
      chosenObject = 'An industrial flow telemetry meter with brass valves and pipe fittings';
    } else if (textCorpus.includes('board') || textCorpus.includes('investor') || textCorpus.includes('governance')) {
      chosenObject = 'An antique brass mechanical balance scale resting on polished timber';
    } else if (textCorpus.includes('chai') || textCorpus.includes('tea')) {
      chosenObject = 'A steaming glass of Lakhnawi cutting chai in a traditional wire basket holder';
    } else if (textCorpus.includes('father') || textCorpus.includes('daughter') || textCorpus.includes('child')) {
      chosenObject = 'A hand-carved wooden spinning top resting on porch stone';
    }

    const targetSlug = slug || 'dispatch-sketch';
    const promptText = `Minimalist architectural pencil sketch in rich cobalt blue ink (#2563EB) on a crisp white background. Fine line art, delicate cross-hatching, traditional technical drafting aesthetic. Depicting ${chosenObject}. High contrast, clean contours, no text, no borders, generous negative space.`;

    setGeneratedPrompt(promptText);
    if (!illustration) {
      setIllustration(`/illustrations/${targetSlug}.png`);
      setIllustrationDark(`/illustrations/${targetSlug}-dark.png`);
      setIllustrationCaption(`Architectural sketch: ${chosenObject}`);
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard?.writeText(generatedPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  // Generate JavaScript Object for essays.js
  const generateExportCode = () => {
    const finalSubCat = customSubCategory.trim() || subCategory;
    const finalSlug = slug.trim() || 'untitled-dispatch';

    return `  {
    id: '${finalSlug}',
    slug: '${finalSlug}',
    title: ${JSON.stringify(title || 'Untitled Dispatch')},
    subtitle: ${JSON.stringify(subtitle || '')},
    category: '${category}',
    subCategory: ${JSON.stringify(finalSubCat)},
    tags: ${JSON.stringify(tags)},
    readTime: '${calculatedReadTime}',
    date: '${date}',
    author: '${author}',
    leadQuote: ${JSON.stringify(leadQuote || '')},${illustration ? `\n    illustration: '${illustration}',` : ''}${illustrationDark ? `\n    illustrationDark: '${illustrationDark}',` : ''}${illustrationCaption ? `\n    illustrationCaption: ${JSON.stringify(illustrationCaption)},` : ''}${secondaryImage ? `\n    secondaryImage: '${secondaryImage}',` : ''}${secondaryCaption ? `\n    secondaryCaption: ${JSON.stringify(secondaryCaption)},` : ''}
    takeaways: ${JSON.stringify(takeaways, null, 6).replace(/\n\s{6}\]/, '\n    ]')},
    markdownBody: \`${markdownBody.replace(/`/g, '\\`')}\`
  },`;
  };

  const handleCopyCode = () => {
    const code = generateExportCode();
    navigator.clipboard?.writeText(code);
    setCopiedCode(true);
    setStatusMessage('Dispatch code copied to clipboard! Paste into src/data/essays.js');
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleDownloadJSON = () => {
    const finalSlug = slug.trim() || 'untitled-dispatch';
    const finalSubCat = customSubCategory.trim() || subCategory;
    const obj = {
      id: finalSlug,
      slug: finalSlug,
      title,
      subtitle,
      category,
      subCategory: finalSubCat,
      tags,
      readTime: calculatedReadTime,
      date,
      author,
      leadQuote,
      illustration,
      illustrationDark,
      illustrationCaption,
      secondaryImage,
      secondaryCaption,
      takeaways,
      markdownBody
    };
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${finalSlug}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Load existing essay as template
  const handleLoadTemplate = (essayId) => {
    const found = ESSAYS_DATA.find((e) => e.id === essayId);
    if (!found) return;
    setTitle(found.title);
    setSubtitle(found.subtitle);
    setSlug(found.slug);
    setCategory(found.category || 'Life');
    setSubCategory(found.subCategory || TAXONOMY[found.category]?.subCategories[0] || '');
    setTags(found.tags || []);
    setLeadQuote(found.leadQuote || '');
    setTakeaways(found.takeaways || []);
    setMarkdownBody(found.markdownBody || '');
    setIllustration(found.illustration || '');
    setIllustrationDark(found.illustrationDark || '');
    setIllustrationCaption(found.illustrationCaption || '');
    setSecondaryImage(found.secondaryImage || '');
    setSecondaryCaption(found.secondaryCaption || '');
    setStatusMessage(`Loaded "${found.title}" as template`);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 bg-white dark:bg-canvas-dark text-ink-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Masthead Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-canvas-border dark:border-canvas-darkBorder gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-berry-600 dark:text-berry-400">
                AUTHORING INTERFACE
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-black tracking-tight text-ink-900 dark:text-white">
              The Dispatch Studio
            </h1>
            <p className="text-xs sm:text-sm font-mono text-ink-500 dark:text-ink-400">
              Draft, organize by sub-category, generate blue pencil sketch prompts, and copy live story code.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* View Mode Switcher */}
            <div className="flex items-center rounded-xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder p-1 text-xs font-mono">
              <button
                onClick={() => setViewMode('editor')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'editor'
                    ? 'bg-ink-900 text-white dark:bg-berry-600 font-bold shadow-sm'
                    : 'text-ink-600 dark:text-ink-300 hover:text-ink-900'
                }`}
              >
                Editor
              </button>
              <button
                onClick={() => setViewMode('split')}
                className={`px-3 py-1.5 rounded-lg transition-all hidden md:block ${
                  viewMode === 'split'
                    ? 'bg-ink-900 text-white dark:bg-berry-600 font-bold shadow-sm'
                    : 'text-ink-600 dark:text-ink-300 hover:text-ink-900'
                }`}
              >
                Split View
              </button>
              <button
                onClick={() => setViewMode('preview')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'preview'
                    ? 'bg-ink-900 text-white dark:bg-berry-600 font-bold shadow-sm'
                    : 'text-ink-600 dark:text-ink-300 hover:text-ink-900'
                }`}
              >
                Full Preview
              </button>
            </div>

            {/* Quick Export Button */}
            <button
              onClick={handleCopyCode}
              className="px-4 py-2 rounded-xl bg-berry-600 hover:bg-berry-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied Code!' : 'Copy Dispatch Code'}</span>
            </button>
          </div>
        </div>

        {/* Load Existing Story Drawer */}
        <div className="p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-ink-600 dark:text-ink-300">
            <BookOpen className="w-4 h-4 text-cobalt-600 dark:text-cobalt-400" />
            <span>Load existing story as drafting template:</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              onChange={(e) => handleLoadTemplate(e.target.value)}
              defaultValue=""
              className="px-3 py-2 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white text-xs focus:outline-none focus:border-berry-600 w-full sm:w-64"
            >
              <option value="" disabled>Select an existing dispatch...</option>
              {ESSAYS_DATA.map((e) => (
                <option key={e.id} value={e.id}>
                  [{e.category}] {e.title}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                setTitle('');
                setSubtitle('');
                setSlug('');
                setLeadQuote('');
                setMarkdownBody('');
                setIllustration('');
                setSecondaryImage('');
                setStatusMessage('Cleared all fields for a fresh story');
              }}
              className="px-3 py-2 rounded-xl border border-canvas-border dark:border-canvas-darkBorder hover:bg-white dark:hover:bg-canvas-dark text-ink-600 dark:text-ink-300 hover:text-red-600 transition-colors"
              title="Reset fields to blank"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Main Work Area: Left Editor / Right Live Preview */}
        <div className={`grid gap-8 ${
          viewMode === 'split' ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'
        }`}>

          {/* ================= LEFT COLUMN: AUTHORING CONTROLS ================= */}
          {(viewMode === 'editor' || viewMode === 'split') && (
            <div className={`space-y-6 ${viewMode === 'split' ? 'lg:col-span-6' : 'max-w-4xl mx-auto'}`}>
              
              {/* Category, Sub-Category & Tags Box */}
              <div className="p-6 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-5 shadow-sm">
                <div className="flex items-center gap-2 border-b border-canvas-border dark:border-canvas-darkBorder pb-3">
                  <Sliders className="w-4 h-4 text-berry-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-900 dark:text-white">
                    1. Primary Desk &amp; Sub-Category
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Primary Desk */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase font-bold text-ink-600 dark:text-ink-300">
                      Primary Desk:
                    </label>
                    <select
                      value={category}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white font-medium text-sm focus:outline-none focus:border-berry-600"
                    >
                      <option value="Life">Life Desk</option>
                      <option value="Food">Food Desk</option>
                      <option value="Work">Work Desk</option>
                      <option value="Fiction">Fiction &amp; Stories</option>
                    </select>
                  </div>

                  {/* Sub-Category Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase font-bold text-ink-600 dark:text-ink-300">
                      Sub-Category:
                    </label>
                    <select
                      value={subCategory}
                      onChange={(e) => setSubCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white font-medium text-sm focus:outline-none focus:border-berry-600"
                    >
                      {TAXONOMY[category]?.subCategories.map((sub) => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Custom Sub-category */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-ink-500 dark:text-ink-400">
                    Or custom sub-category (overrides dropdown if set):
                  </label>
                  <input
                    type="text"
                    value={customSubCategory}
                    onChange={(e) => setCustomSubCategory(e.target.value)}
                    placeholder="e.g. Vintage Automobiles, Lucknow Streets, Board Dilemmas..."
                    className="w-full px-3.5 py-2 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white text-xs focus:outline-none focus:border-berry-600"
                  />
                </div>

                {/* Tag Pills Manager */}
                <div className="space-y-2 pt-2 border-t border-canvas-border dark:border-canvas-darkBorder">
                  <label className="text-[11px] font-mono uppercase font-bold text-ink-600 dark:text-ink-300 flex items-center justify-between">
                    <span>Tags ({tags.length})</span>
                    <span className="text-[10px] text-ink-400 normal-case">Click recommended pills to toggle</span>
                  </label>
                  
                  {/* Current Active Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono bg-berry-50 dark:bg-canvas-dark border border-berry-200 dark:border-canvas-darkBorder text-berry-700 dark:text-berry-300 font-medium"
                      >
                        #{tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="hover:text-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>

                  {/* Recommended Suggested Tags */}
                  <div className="flex flex-wrap items-center gap-1 pt-1">
                    {TAXONOMY[category]?.suggestedTags.map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => tags.includes(st) ? handleRemoveTag(st) : handleAddTag(st)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md border transition-colors ${
                          tags.includes(st)
                            ? 'bg-ink-900 text-white dark:bg-berry-600 border-transparent'
                            : 'bg-canvas-subtle dark:bg-canvas-dark border-canvas-border dark:border-canvas-darkBorder text-ink-600 dark:text-ink-300 hover:border-berry-400'
                        }`}
                      >
                        {tags.includes(st) ? '✓ ' : '+ '}{st}
                      </button>
                    ))}
                  </div>

                  {/* Add New Custom Tag */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      value={newTagInput}
                      onChange={(e) => setNewTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTag(newTagInput);
                        }
                      }}
                      placeholder="Add tag and press enter..."
                      className="w-full px-3 py-1.5 rounded-lg bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-xs text-ink-900 dark:text-white focus:outline-none focus:border-berry-600"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddTag(newTagInput)}
                      className="px-3 py-1.5 rounded-lg bg-ink-900 dark:bg-canvas-darkCard border border-transparent text-white text-xs font-mono shrink-0 hover:bg-berry-600 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Title, Subtitle & Metadata Box */}
              <div className="p-6 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-4 shadow-sm">
                <div className="flex items-center gap-2 border-b border-canvas-border dark:border-canvas-darkBorder pb-3">
                  <Feather className="w-4 h-4 text-cobalt-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-900 dark:text-white">
                    2. Headline &amp; Narrative Thesis
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase font-bold text-ink-600 dark:text-ink-300">
                    Story Title:
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. The Nuances of Tehzeeb and the Courtyard Lessons"
                    className="w-full px-4 py-3 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white font-serif text-lg font-bold focus:outline-none focus:border-berry-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase font-bold text-ink-600 dark:text-ink-300">
                    Subtitle / Excerpt:
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="One clear, grounded sentence framing what the reader will discover."
                    className="w-full px-4 py-2.5 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white text-sm font-light focus:outline-none focus:border-berry-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-ink-500">Slug (URL):</label>
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono text-ink-700 dark:text-ink-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-ink-500">Date:</label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono text-ink-700 dark:text-ink-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-ink-500">Read Time:</label>
                    <div className="px-3 py-1.5 rounded-lg bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono text-cobalt-600 dark:text-cobalt-400 font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{calculatedReadTime}</span>
                    </div>
                  </div>
                </div>

                {/* Lead Pull Quote */}
                <div className="space-y-1.5 pt-2 border-t border-canvas-border dark:border-canvas-darkBorder">
                  <label className="text-[11px] font-mono uppercase font-bold text-ink-600 dark:text-ink-300">
                    Lead Pull Quote (The Anchor Thought):
                  </label>
                  <textarea
                    rows={2}
                    value={leadQuote}
                    onChange={(e) => setLeadQuote(e.target.value)}
                    placeholder="A memorable sentence that anchors the entire dispatch..."
                    className="w-full p-3 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white font-serif italic text-sm focus:outline-none focus:border-berry-600"
                  />
                </div>
              </div>

              {/* Core Thesis & Takeaways Box */}
              <div className="p-6 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-canvas-border dark:border-canvas-darkBorder pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-900 dark:text-white">
                      3. Core Thesis &amp; Ground Truths (3-4 Points)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddTakeaway}
                    className="inline-flex items-center gap-1 text-xs font-mono text-berry-600 hover:text-berry-700 font-bold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Point</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {takeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-berry-600 font-bold mt-2 text-xs font-mono">0{idx + 1}.</span>
                      <input
                        type="text"
                        value={point}
                        onChange={(e) => handleUpdateTakeaway(idx, e.target.value)}
                        className="flex-1 px-3.5 py-2 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-xs text-ink-900 dark:text-white focus:outline-none focus:border-berry-600"
                      />
                      {takeaways.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveTakeaway(idx)}
                          className="p-2 text-ink-400 hover:text-red-600 transition-colors"
                          title="Remove point"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Artwork & Image Provision (1 or 2 Images + AI Sketch Generator) */}
              <div className="p-6 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-5 shadow-sm">
                <div className="flex items-center justify-between border-b border-canvas-border dark:border-canvas-darkBorder pb-3">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-cobalt-600" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-900 dark:text-white">
                      4. Illustrations &amp; Visual Plates (Provision for 1 or 2 Images)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={generateSketchPrompt}
                    className="px-3 py-1 rounded-full bg-cobalt-50 dark:bg-cobalt-950/60 border border-cobalt-200 dark:border-cobalt-800 text-cobalt-600 dark:text-cobalt-300 text-[11px] font-mono font-bold flex items-center gap-1.5 hover:bg-cobalt-100 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-cobalt-600" />
                    <span>Generate AI Sketch Prompt</span>
                  </button>
                </div>

                {/* AI Prompt Box if generated */}
                {generatedPrompt && (
                  <div className="p-4 rounded-2xl bg-cobalt-50/60 dark:bg-cobalt-950/40 border border-cobalt-200 dark:border-cobalt-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-cobalt-800 dark:text-cobalt-200">
                        Cobalt Blue Architectural Sketch Prompt:
                      </span>
                      <button
                        onClick={handleCopyPrompt}
                        className="text-cobalt-600 hover:text-cobalt-700 font-bold flex items-center gap-1"
                      >
                        {copiedPrompt ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedPrompt ? 'Copied!' : 'Copy Prompt'}</span>
                      </button>
                    </div>
                    <p className="text-xs font-mono text-ink-700 dark:text-ink-200 bg-white/80 dark:bg-canvas-dark/80 p-2.5 rounded-lg border border-cobalt-200/50 leading-relaxed select-all">
                      {generatedPrompt}
                    </p>
                    <p className="text-[10px] font-mono text-ink-500 dark:text-ink-400">
                      💡 Tip: Save generated sketch into <code className="bg-canvas-subtle px-1 py-0.5 rounded">public/illustrations/{slug || 'story-name'}.png</code> and reference below.
                    </p>
                  </div>
                )}

                {/* Primary Image Fields */}
                <div className="space-y-3 p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-ink-900 dark:text-white">
                      Primary Artwork / Pencil Sketch
                    </span>
                    <span className="text-[10px] font-mono text-berry-600 font-medium">Image 1</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-ink-500">Image Path / URL (Light Mode):</label>
                      <input
                        type="text"
                        value={illustration}
                        onChange={(e) => setIllustration(e.target.value)}
                        placeholder="/illustrations/my-story.png or URL"
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs text-ink-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-ink-500">Dark Mode Variant (Optional):</label>
                      <input
                        type="text"
                        value={illustrationDark}
                        onChange={(e) => setIllustrationDark(e.target.value)}
                        placeholder="/illustrations/my-story-dark.png"
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs text-ink-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-ink-500">Image Caption:</label>
                    <input
                      type="text"
                      value={illustrationCaption}
                      onChange={(e) => setIllustrationCaption(e.target.value)}
                      placeholder="e.g. Architectural sketch: Handcrafted vintage brass compass and blue line art"
                      className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs text-ink-900 dark:text-white"
                    />
                  </div>
                </div>

                {/* Secondary Image Fields */}
                <div className="space-y-3 p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-ink-900 dark:text-white">
                      Secondary Artwork / Accompanying Plate (Optional)
                    </span>
                    <span className="text-[10px] font-mono text-cobalt-600 font-medium">Image 2</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-ink-500">Secondary Image Path / URL:</label>
                      <input
                        type="text"
                        value={secondaryImage}
                        onChange={(e) => setSecondaryImage(e.target.value)}
                        placeholder="/illustrations/second-plate.png or photo URL"
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs text-ink-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-ink-500">Secondary Caption:</label>
                      <input
                        type="text"
                        value={secondaryCaption}
                        onChange={(e) => setSecondaryCaption(e.target.value)}
                        placeholder="e.g. The brass spice container in use"
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs text-ink-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Markdown Body Textarea with Toolbar */}
              <div className="p-6 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-canvas-border dark:border-canvas-darkBorder pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-berry-600" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-900 dark:text-white">
                      5. Essay Body (Markdown)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-ink-400">
                    {wordCount} words · {calculatedReadTime}
                  </span>
                </div>

                {/* Markdown Quick Insertion Toolbar */}
                <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('### New Section Heading')}
                    className="px-2.5 py-1 rounded bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500 text-ink-700 dark:text-ink-200"
                  >
                    + Heading (###)
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('* First bullet item\n* Second bullet item\n* Third bullet item')}
                    className="px-2.5 py-1 rounded bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500 text-ink-700 dark:text-ink-200"
                  >
                    + Bullet List
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('> "A meaningful pull quote to highlight within the text."')}
                    className="px-2.5 py-1 rounded bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500 text-ink-700 dark:text-ink-200"
                  >
                    + Blockquote
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('![Descriptive Image Caption](/illustrations/plate.png)')}
                    className="px-2.5 py-1 rounded bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-cobalt-500 text-cobalt-600 dark:text-cobalt-300 font-bold"
                  >
                    + Inline Image
                  </button>
                </div>

                {/* Editor Textarea */}
                <textarea
                  rows={14}
                  value={markdownBody}
                  onChange={(e) => setMarkdownBody(e.target.value)}
                  placeholder="Write your story in natural markdown. Use double line breaks between paragraphs..."
                  className="w-full p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white font-sans text-sm leading-relaxed focus:outline-none focus:border-berry-600 resize-y"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder">
                <span className="text-xs font-mono text-ink-500 dark:text-ink-400">
                  {statusMessage}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleDownloadJSON}
                    className="px-4 py-2 rounded-xl border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono font-medium hover:bg-white dark:hover:bg-canvas-dark transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-cobalt-600" />
                    <span>Download JSON</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="px-5 py-2 rounded-xl bg-berry-600 hover:bg-berry-700 text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm transition-all"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Code for essays.js'}</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* ================= RIGHT COLUMN: LIVE READING PREVIEW ================= */}
          {(viewMode === 'preview' || viewMode === 'split') && (
            <div className={`${viewMode === 'split' ? 'lg:col-span-6' : 'max-w-3xl mx-auto'}`}>
              <div className="sticky top-28 space-y-4">
                
                {/* Preview Header Label */}
                <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-berry-600" />
                    <span className="font-bold uppercase tracking-wider text-ink-900 dark:text-white">
                      Live Reader Preview
                    </span>
                  </div>
                  <span className="text-ink-400 text-[11px]">
                    Exact 5 Spices or Less typography
                  </span>
                </div>

                {/* Rendered Story Container */}
                <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder shadow-xl max-h-[82vh] overflow-y-auto space-y-8">
                  
                  {/* Article Meta Header */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                      <span className="text-berry-700 dark:text-berry-300 bg-berry-50 dark:bg-canvas-dark px-3 py-1 rounded-full border border-berry-200 dark:border-canvas-darkBorder font-bold uppercase text-[10px]">
                        {category}
                      </span>
                      {(customSubCategory || subCategory) && (
                        <span className="text-cobalt-700 dark:text-cobalt-300 bg-cobalt-50 dark:bg-cobalt-950/60 px-3 py-1 rounded-full border border-cobalt-200 dark:border-cobalt-800 font-bold uppercase text-[10px]">
                          {customSubCategory || subCategory}
                        </span>
                      )}
                      <div className="flex items-center gap-1 text-ink-500 dark:text-ink-400">
                        <Clock className="w-3 h-3 text-cobalt-600" />
                        <span>{calculatedReadTime}</span>
                      </div>
                      <span className="text-ink-400">•</span>
                      <span className="text-ink-500 dark:text-ink-400">{date}</span>
                    </div>

                    <h1 className="font-serif text-2xl sm:text-4xl font-black text-ink-900 dark:text-white leading-tight">
                      {title || 'Your Story Title Will Appear Here'}
                    </h1>

                    <p className="text-sm sm:text-base text-ink-600 dark:text-ink-200 font-light leading-relaxed">
                      {subtitle || 'Your subtitle and reading premise will be presented in this section.'}
                    </p>
                  </div>

                  {/* Primary Artwork Plate (Image 1) */}
                  {illustration && (
                    <div className="rounded-2xl overflow-hidden border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-dark p-4 text-center">
                      <div className="relative max-w-sm mx-auto flex items-center justify-center min-h-[140px]">
                        <img
                          src={illustration}
                          alt={illustrationCaption || title}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                          className="max-h-56 w-auto object-contain mx-auto mix-blend-multiply dark:mix-blend-normal"
                        />
                      </div>
                      {illustrationCaption && (
                        <p className="mt-2 text-[11px] font-mono text-ink-500 dark:text-ink-400 italic">
                          {illustrationCaption}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Lead Pull Quote Box */}
                  {leadQuote && (
                    <div className="p-5 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border-l-4 border-berry-600 shadow-sm">
                      <blockquote className="font-serif italic text-sm sm:text-base text-ink-900 dark:text-white font-medium leading-relaxed">
                        "{leadQuote}"
                      </blockquote>
                    </div>
                  )}

                  {/* Core Thesis & Takeaways Box */}
                  {takeaways && takeaways.length > 0 && (
                    <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder space-y-3 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-berry-600" />
                        <span className="text-[11px] font-mono uppercase tracking-widest text-ink-900 dark:text-white font-bold">
                          Core Thesis &amp; Ground Truths
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {takeaways.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-800 dark:text-ink-100 font-medium">
                            <span className="text-berry-600 dark:text-berry-400 font-bold">•</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Full Essay Body Typography */}
                  <div className="prose prose-ink dark:prose-invert max-w-none text-sm sm:text-base font-light leading-relaxed space-y-5 text-ink-800 dark:text-ink-100">
                    {markdownBody.split('\n\n').map((para, i) => {
                      if (para.startsWith('![')) {
                        const match = para.match(/!\[(.*?)\]\((.*?)\)/);
                        if (match) {
                          const [, alt, url] = match;
                          return (
                            <figure key={i} className="my-6 text-center">
                              <div className="rounded-2xl overflow-hidden border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-dark p-3 inline-block max-w-full">
                                <img src={url} alt={alt} className="max-h-72 w-auto rounded-xl object-contain mx-auto" />
                              </div>
                              {alt && (
                                <figcaption className="mt-2 text-xs font-mono text-ink-500 dark:text-ink-400 italic">
                                  {alt}
                                </figcaption>
                              )}
                            </figure>
                          );
                        }
                      }
                      if (para.startsWith('### ')) {
                        return (
                          <h3 key={i} className="font-serif text-xl font-bold text-ink-900 dark:text-white pt-4 pb-1 border-b border-canvas-border dark:border-canvas-darkBorder">
                            {para.replace('### ', '')}
                          </h3>
                        );
                      }
                      if (para.startsWith('* ') || para.startsWith('1. ')) {
                        const lines = para.split('\n');
                        return (
                          <ul key={i} className="space-y-1.5 pl-4">
                            {lines.map((l, j) => (
                              <li key={j} className="text-xs sm:text-sm leading-relaxed">
                                {l.replace(/^[\*\d\.\s]+/, '')}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={i} className="leading-relaxed">
                          {para}
                        </p>
                      );
                    })}
                  </div>

                  {/* Secondary Artwork Plate (Image 2) */}
                  {secondaryImage && (
                    <div className="rounded-2xl overflow-hidden border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-dark p-4 text-center">
                      <div className="relative max-w-md mx-auto flex items-center justify-center">
                        <img
                          src={secondaryImage}
                          alt={secondaryCaption || title}
                          className="max-h-64 w-auto rounded-xl object-contain mx-auto shadow-sm"
                        />
                      </div>
                      {secondaryCaption && (
                        <p className="mt-2 text-[11px] font-mono text-ink-500 dark:text-ink-400 italic">
                          {secondaryCaption}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Tag Pills */}
                  {tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-4 pb-4 border-t border-canvas-border dark:border-canvas-darkBorder">
                      <span className="text-[11px] font-mono text-ink-400 mr-1">Filed under:</span>
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-700 dark:text-ink-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Author Bio Box */}
                  <div className="p-5 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white dark:bg-canvas-darkCard border border-canvas-border shrink-0">
                      <img
                        src="/profile-sketch.png"
                        alt="Vivek Shukla"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="font-serif text-sm font-bold text-ink-900 dark:text-white">
                        Written by Vivek Shukla
                      </div>
                      <p className="text-[11px] text-ink-600 dark:text-ink-300 font-light leading-relaxed">
                        Advisor, operator, and storyteller with Lucknow roots. Decades of building category-creating enterprises and navigating life with patience taught him the quiet power of simplification.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
