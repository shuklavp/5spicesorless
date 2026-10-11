// src/components/DispatchStudio.jsx
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock, Copy, 
  Download, Eye, Feather, FileText, Flame, Image as ImageIcon, 
  Layers, Plus, RefreshCw, Send, Sparkles, Tag, Trash2, X,
  BookOpen, Sliders, Share2, ExternalLink
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
  // Author Authentication (Default passkey: 5spices)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('dispatch_studio_auth') === 'granted';
    }
    return false;
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (passcode.trim().toLowerCase() === '5spices') {
      setIsAuthenticated(true);
      localStorage.setItem('dispatch_studio_auth', 'granted');
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

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

  // Section 3: Core Thesis & Ground Truths Customisation (Optional & Position)
  const [showTakeaways, setShowTakeaways] = useState(true);
  const [takeawaysPosition, setTakeawaysPosition] = useState('top'); // 'top' (current) | 'bottom'

  // Section 4: Image Placements (Top Header, Below Quote, Mid-Story, Bottom)
  const [image1Position, setImage1Position] = useState('top'); // 'top' | 'after-quote' | 'middle' | 'bottom'
  const [image2Position, setImage2Position] = useState('bottom'); // 'bottom' | 'middle' | 'after-quote' | 'top'

  // Section 6: Direct X (Twitter) Publishing Provision
  const [showXModal, setShowXModal] = useState(false);
  const [selectedXAccount, setSelectedXAccount] = useState('5spicesorless'); // '5spicesorless' | 'vivekshukla'
  const [xPostText, setXPostText] = useState('');
  const [copiedXText, setCopiedXText] = useState(false);

  // Stories Archive Manager State
  const [allEssays, setAllEssays] = useState(() => {
    return [...ESSAYS_DATA];
  });
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [copiedFullFile, setCopiedFullFile] = useState(false);
  const [copiedGitCmd, setCopiedGitCmd] = useState(false);

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

  // Generate contextual X (Twitter) post text tailored to account voice
  const getInitialXText = (account) => {
    const targetSlug = slug.trim() || 'dispatch';
    const storyUrl = `https://5spicesorless.com/stories/${targetSlug}`;
    const cleanTags = tags.length > 0 ? tags.slice(0, 3).map((t) => `#${t.replace(/\s+/g, '')}`).join(' ') : '#Simplification';

    if (account === '5spicesorless') {
      return `New dispatch from the ${category} Desk: "${title || 'Untitled Dispatch'}"\n\n${leadQuote ? `"${leadQuote}"\n\n` : ''}${showTakeaways && takeaways.length > 0 ? `Core Truths:\n• ${takeaways[0]}\n\n` : ''}Read the complete piece on 5 Spices or Less:\n${storyUrl}\n\n${cleanTags}`;
    } else {
      return `Reflecting on ${category.toLowerCase()} and the quiet power of simplification:\n\n"${title || 'Untitled Dispatch'}"${subtitle ? ` — ${subtitle}` : ''}\n\n${leadQuote ? `"${leadQuote}"\n\n` : ''}Full essay on @5spicesorless:\n${storyUrl}\n\n#5SpicesOrLess ${cleanTags}`;
    }
  };

  const handleOpenXModal = () => {
    setXPostText(getInitialXText(selectedXAccount));
    setShowXModal(true);
  };

  const handleSelectXAccount = (acc) => {
    setSelectedXAccount(acc);
    setXPostText(getInitialXText(acc));
  };

  const handlePostToX = () => {
    const textToPost = xPostText.trim() || getInitialXText(selectedXAccount);
    const intentUrl = `https://x.com/intent/post?text=${encodeURIComponent(textToPost)}`;
    window.open(intentUrl, '_blank', 'noopener,noreferrer');
  };

  // Generate full essays.js code for the entire publication
  const formatEssayObject = (e) => {
    return `  {
    id: ${JSON.stringify(e.id || e.slug)},
    slug: ${JSON.stringify(e.slug)},
    title: ${JSON.stringify(e.title || 'Untitled')},
    subtitle: ${JSON.stringify(e.subtitle || '')},
    category: ${JSON.stringify(e.category || 'Life')},
    subCategory: ${JSON.stringify(e.subCategory || '')},
    tags: ${JSON.stringify(e.tags || [])},
    readTime: ${JSON.stringify(e.readTime || '5 min read')},
    date: ${JSON.stringify(e.date || 'October 2026')},
    author: ${JSON.stringify(e.author || 'Vivek Shukla')},
    leadQuote: ${JSON.stringify(e.leadQuote || '')},${e.illustration ? `\n    illustration: ${JSON.stringify(e.illustration)},` : ''}${e.illustrationDark ? `\n    illustrationDark: ${JSON.stringify(e.illustrationDark)},` : ''}${e.illustrationCaption ? `\n    illustrationCaption: ${JSON.stringify(e.illustrationCaption)},` : ''}${e.secondaryImage ? `\n    secondaryImage: ${JSON.stringify(e.secondaryImage)},` : ''}${e.secondaryImageDark ? `\n    secondaryImageDark: ${JSON.stringify(e.secondaryImageDark)},` : ''}${e.secondaryCaption ? `\n    secondaryCaption: ${JSON.stringify(e.secondaryCaption)},` : ''}${e.image1Position ? `\n    image1Position: ${JSON.stringify(e.image1Position)},` : ''}${e.image2Position ? `\n    image2Position: ${JSON.stringify(e.image2Position)},` : ''}
    showTakeaways: ${e.showTakeaways !== false},
    takeawaysPosition: ${JSON.stringify(e.takeawaysPosition || 'top')},
    takeaways: ${JSON.stringify(e.takeaways || [], null, 6).replace(/\n\s{6}\]/, '\n    ]')},
    markdownBody: \`${(e.markdownBody || '').replace(/`/g, '\\`')}\`
  }`;
  };

  const generateFullEssaysJsFile = (list = allEssays) => {
    return `// src/data/essays.js
// Single source of truth for all published essays and dispatches.
// Strict British English mandate: -ise, -our, pre-authorisation, no em-dashes.

export const ESSAYS_DATA = [
${list.map(formatEssayObject).join(',\n')}
];
`;
  };

  const handleDownloadFullEssaysJs = () => {
    const code = generateFullEssaysJsFile();
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'essays.js';
    a.click();
    URL.revokeObjectURL(url);
    setStatusMessage('Downloaded full essays.js to your Downloads folder!');
  };

  const handleCopyFullEssaysJs = () => {
    const code = generateFullEssaysJsFile();
    navigator.clipboard?.writeText(code);
    setCopiedFullFile(true);
    setStatusMessage('Copied full essays.js file to clipboard!');
    setTimeout(() => setCopiedFullFile(false), 2500);
  };

  const handleOpenGitHubEditor = () => {
    handleCopyFullEssaysJs();
    window.open('https://github.com/shuklavp/5spicesorless/edit/main/src/data/essays.js', '_blank', 'noopener,noreferrer');
  };

  const handleSaveCurrentStoryToArchive = () => {
    const finalSlug = slug.trim() || 'untitled-dispatch';
    const finalSubCat = customSubCategory.trim() || subCategory;
    const currentStoryObj = {
      id: finalSlug,
      slug: finalSlug,
      title: title.trim() || 'Untitled Dispatch',
      subtitle: subtitle.trim(),
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
      image1Position,
      image2Position,
      showTakeaways,
      takeawaysPosition,
      takeaways: showTakeaways ? takeaways : [],
      markdownBody
    };

    setAllEssays((prev) => {
      const idx = prev.findIndex((e) => e.slug === finalSlug || e.id === finalSlug);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = currentStoryObj;
        return copy;
      }
      return [currentStoryObj, ...prev];
    });

    setStatusMessage(`Saved "${currentStoryObj.title}" to Archive memory!`);
  };

  const handleDeleteStoryFromArchive = (targetSlug, e) => {
    e?.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${targetSlug}" from the archive?`)) {
      setAllEssays((prev) => prev.filter((item) => item.slug !== targetSlug && item.id !== targetSlug));
      setStatusMessage(`Deleted "${targetSlug}" from archive list.`);
    }
  };

  const handleCopyGitCommand = () => {
    const cmd = 'git add src/data/essays.js && git commit -m "Update published stories archive" && git push origin main';
    navigator.clipboard?.writeText(cmd);
    setCopiedGitCmd(true);
    setTimeout(() => setCopiedGitCmd(false), 2000);
  };

  const handleCopyXText = () => {
    navigator.clipboard?.writeText(xPostText);
    setCopiedXText(true);
    setTimeout(() => setCopiedXText(false), 2000);
  };

  const textareaRef = React.useRef(null);

  const handleWrapBold = () => {
    const el = textareaRef.current;
    if (!el) {
      setMarkdownBody((prev) => prev + ' **bold text**');
      return;
    }
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const text = el.value;
    if (start !== end) {
      const selected = text.substring(start, end);
      const before = text.substring(0, start);
      const after = text.substring(end);
      setMarkdownBody(`${before}**${selected}**${after}`);
      setTimeout(() => {
        el.focus();
        el.setSelectionRange(start + 2, end + 2);
      }, 50);
    } else {
      insertMarkdownSnippet('**Bold Keyword:** Explanation');
    }
  };

  const handleWrapItalic = () => {
    const el = textareaRef.current;
    if (!el) {
      setMarkdownBody((prev) => prev + ' *italic text*');
      return;
    }
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const text = el.value;
    if (start !== end) {
      const selected = text.substring(start, end);
      const before = text.substring(0, start);
      const after = text.substring(end);
      setMarkdownBody(`${before}*${selected}*${after}`);
      setTimeout(() => {
        el.focus();
        el.setSelectionRange(start + 1, end + 1);
      }, 50);
    } else {
      insertMarkdownSnippet('*Italic note*');
    }
  };

  const handleTextareaKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
      e.preventDefault();
      handleWrapBold();
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'i') {
      e.preventDefault();
      handleWrapItalic();
    }
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
${illustration ? `    image1Position: '${image1Position}',\n` : ''}${secondaryImage ? `    image2Position: '${image2Position}',\n` : ''}    showTakeaways: ${showTakeaways},
    takeawaysPosition: '${takeawaysPosition}',
    takeaways: ${showTakeaways ? JSON.stringify(takeaways, null, 6).replace(/\n\s{6}\]/, '\n    ]') : '[]'},
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
      showTakeaways,
      takeawaysPosition,
      image1Position,
      image2Position,
      takeaways: showTakeaways ? takeaways : [],
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
    setShowTakeaways(found.showTakeaways !== false && (found.takeaways && found.takeaways.length > 0));
    setTakeawaysPosition(found.takeawaysPosition || 'top');
    setImage1Position(found.image1Position || 'top');
    setImage2Position(found.image2Position || 'bottom');
    setTakeaways(found.takeaways || []);
    setMarkdownBody(found.markdownBody || '');
    setIllustration(found.illustration || '');
    setIllustrationDark(found.illustrationDark || '');
    setIllustrationCaption(found.illustrationCaption || '');
    setSecondaryImage(found.secondaryImage || '');
    setSecondaryCaption(found.secondaryCaption || '');
    setStatusMessage(`Loaded "${found.title}" as template`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-36 pb-24 px-6 flex items-center justify-center bg-white dark:bg-canvas-dark text-ink-900 dark:text-white">
        <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder shadow-xl text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-berry-50 dark:bg-canvas-dark border border-berry-200 dark:border-canvas-darkBorder flex items-center justify-center text-berry-600 dark:text-berry-400 mx-auto">
            <Feather className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-berry-600 dark:text-berry-400 font-bold">
              Private Author Workspace
            </span>
            <h1 className="font-serif text-2xl font-bold text-ink-900 dark:text-white">
              The Dispatch Studio
            </h1>
            <p className="text-xs font-mono text-ink-500 dark:text-ink-400">
              Enter author passkey to open writing and layout canvas.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="space-y-1 text-left">
              <input
                type="password"
                value={passcode}
                onChange={(e) => { setPasscode(e.target.value); setAuthError(false); }}
                placeholder="Enter passkey..."
                autoFocus
                className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border ${
                  authError ? 'border-red-500 focus:border-red-600' : 'border-canvas-border dark:border-canvas-darkBorder focus:border-berry-600'
                } text-sm text-ink-900 dark:text-white focus:outline-none font-mono text-center tracking-widest`}
              />
              {authError && (
                <p className="text-[11px] font-mono text-red-500 text-center mt-1">
                  Incorrect passkey. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-ink-900 text-white dark:bg-berry-600 font-mono text-xs font-bold uppercase tracking-wider hover:bg-berry-700 transition-colors shadow-sm"
            >
              Unlock Studio
            </button>
          </form>

          <div className="pt-4 border-t border-canvas-border dark:border-canvas-darkBorder">
            <button
              onClick={() => onNavigate('/')}
              className="text-xs font-mono text-ink-500 hover:text-berry-600 transition-colors"
            >
              ← Return to Home Broadside
            </button>
          </div>
        </div>
      </div>
    );
  }

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
              Draft, organise by sub-category, generate blue pencil sketch prompts, and copy live story code.
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

            {/* Manage Stories Archive Interface Button */}
            <button
              onClick={() => setShowArchiveModal(true)}
              className="px-3.5 py-2 rounded-xl bg-cobalt-600 hover:bg-cobalt-700 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm transition-all"
              title="Open Stories Manager to edit, delete, or commit essays.js"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Stories Archive ({allEssays.length})</span>
            </button>

            {/* Direct X Publishing Button */}
            <button
              onClick={handleOpenXModal}
              className="px-3.5 py-2 rounded-xl bg-ink-900 dark:bg-canvas-darkCard border border-ink-800 dark:border-canvas-darkBorder text-white text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-berry-600 transition-colors shadow-sm"
              title="Share story directly to X accounts"
            >
              <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Share to X</span>
            </button>

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

              {/* Section 3: Core Thesis & Ground Truths Box (Optional + Location Switcher) */}
              <div className="p-6 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-canvas-border dark:border-canvas-darkBorder pb-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${showTakeaways ? 'bg-berry-600' : 'bg-ink-300 dark:bg-ink-700'}`} />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-900 dark:text-white">
                      3. Core Thesis &amp; Ground Truths
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-500 font-normal">
                      Optional
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Include / Exclude Toggle */}
                    <button
                      type="button"
                      onClick={() => setShowTakeaways(!showTakeaways)}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                        showTakeaways
                          ? 'bg-berry-50 dark:bg-berry-950/50 text-berry-600 dark:text-berry-400 border border-berry-200 dark:border-berry-800'
                          : 'bg-canvas-subtle dark:bg-canvas-dark text-ink-400 border border-canvas-border dark:border-canvas-darkBorder hover:text-ink-600'
                      }`}
                    >
                      <span>{showTakeaways ? '✓ Included in Story' : '✕ Excluded (Turned Off)'}</span>
                    </button>

                    {showTakeaways && (
                      <button
                        type="button"
                        onClick={handleAddTakeaway}
                        className="inline-flex items-center gap-1 text-xs font-mono text-berry-600 hover:text-berry-700 font-bold"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Point</span>
                      </button>
                    )}
                  </div>
                </div>

                {showTakeaways ? (
                  <div className="space-y-4">
                    {/* Location Option Selector: Current (Top) vs Bottom */}
                    <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder">
                      <div className="space-y-0.5">
                        <span className="text-xs font-mono font-bold text-ink-900 dark:text-white block">
                          Location of Section 3 in Story:
                        </span>
                        <span className="text-[10px] font-mono text-ink-500 dark:text-ink-400 block">
                          Choose whether ground truths appear up front or as concluding takeaways.
                        </span>
                      </div>

                      <div className="flex items-center gap-1 p-1 rounded-xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono">
                        <button
                          type="button"
                          onClick={() => setTakeawaysPosition('top')}
                          className={`px-3 py-1 rounded-lg transition-all ${
                            takeawaysPosition === 'top'
                              ? 'bg-ink-900 text-white dark:bg-berry-600 font-bold shadow-sm'
                              : 'text-ink-600 dark:text-ink-300 hover:text-ink-900'
                          }`}
                        >
                          Top / Before Story (Current)
                        </button>
                        <button
                          type="button"
                          onClick={() => setTakeawaysPosition('bottom')}
                          className={`px-3 py-1 rounded-lg transition-all ${
                            takeawaysPosition === 'bottom'
                              ? 'bg-ink-900 text-white dark:bg-berry-600 font-bold shadow-sm'
                              : 'text-ink-600 dark:text-ink-300 hover:text-ink-900'
                          }`}
                        >
                          Bottom / After Story
                        </button>
                      </div>
                    </div>

                    {/* Points Input List */}
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
                ) : (
                  <div className="p-5 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-dashed border-canvas-border dark:border-canvas-darkBorder text-center space-y-2">
                    <p className="text-xs font-mono text-ink-500 dark:text-ink-400">
                      Section 3 is currently excluded. Best for narrative essays, fiction dispatches, and memoirs where a bulleted thesis box is not required.
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowTakeaways(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono text-berry-600 dark:text-berry-400 font-bold hover:bg-berry-50 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Enable Core Thesis &amp; Ground Truths</span>
                    </button>
                  </div>
                )}
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
                </div>

                {/* AI Sketch Prompt Composer & Generator (Fully Editable) */}
                <div className="p-5 rounded-2xl bg-cobalt-50/60 dark:bg-cobalt-950/40 border border-cobalt-200 dark:border-cobalt-800 space-y-3 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cobalt-600 dark:text-cobalt-400" />
                      <span className="font-bold text-cobalt-800 dark:text-cobalt-200 uppercase tracking-wider text-[11px]">
                        AI Sketch Prompt Composer (Customisable &amp; Editable)
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={generateSketchPrompt}
                        className="px-2.5 py-1 rounded-lg bg-white dark:bg-canvas-dark border border-cobalt-300 dark:border-cobalt-700 text-cobalt-600 dark:text-cobalt-300 text-[11px] font-mono font-bold flex items-center gap-1.5 hover:bg-cobalt-100 dark:hover:bg-cobalt-900 transition-colors shadow-sm"
                        title="Auto-detect story metaphors and generate draft prompt"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Auto-Suggest Prompt</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyPrompt}
                        disabled={!generatedPrompt}
                        className="px-3 py-1 rounded-lg bg-cobalt-600 text-white text-[11px] font-mono font-bold flex items-center gap-1.5 hover:bg-cobalt-700 transition-colors shadow-sm disabled:opacity-40"
                      >
                        {copiedPrompt ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedPrompt ? 'Copied!' : 'Copy Prompt'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Fully Editable Textarea for Custom Prompts */}
                  <textarea
                    rows={3}
                    value={generatedPrompt}
                    onChange={(e) => setGeneratedPrompt(e.target.value)}
                    placeholder="Type your own custom image prompt here (e.g. A traditional village house with courtyard cot and family enjoying tea in blue pencil style)..."
                    className="w-full p-3 rounded-xl bg-white dark:bg-canvas-dark border border-cobalt-200 dark:border-cobalt-800 text-xs font-mono text-ink-900 dark:text-white leading-relaxed focus:outline-none focus:border-cobalt-600 focus:ring-1 focus:ring-cobalt-600 placeholder:text-ink-400"
                  />

                  {/* Quick Style Injectors */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] font-mono">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-ink-400">Append Style:</span>
                      <button
                        type="button"
                        onClick={() => {
                          const styleFormula = ' Minimalist architectural pencil sketch in rich cobalt blue ink (#2563EB) on crisp white background. Fine line art, delicate cross-hatching, traditional technical drafting aesthetic, clean contours, no text, generous negative space.';
                          setGeneratedPrompt((prev) => (prev ? prev.trim() + styleFormula : styleFormula.trim()));
                        }}
                        className="px-2 py-0.5 rounded bg-white dark:bg-canvas-dark border border-cobalt-200 dark:border-cobalt-800 text-cobalt-600 dark:text-cobalt-400 hover:border-cobalt-500 transition-colors"
                      >
                        + Cobalt Blue Pencil Style
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const darkFormula = ' White pencil line art on rich dark slate charcoal background with subtle line weights.';
                          setGeneratedPrompt((prev) => (prev ? prev.trim() + darkFormula : darkFormula.trim()));
                        }}
                        className="px-2 py-0.5 rounded bg-white dark:bg-canvas-dark border border-cobalt-200 dark:border-cobalt-800 text-cobalt-600 dark:text-cobalt-400 hover:border-cobalt-500 transition-colors"
                      >
                        + Dark Mode Inversion
                      </button>
                    </div>

                    {generatedPrompt && (
                      <button
                        type="button"
                        onClick={() => setGeneratedPrompt('')}
                        className="text-ink-400 hover:text-red-500 text-[10px] transition-colors"
                      >
                        Clear Prompt
                      </button>
                    )}
                  </div>

                  <p className="text-[10px] font-mono text-ink-500 dark:text-ink-400">
                    💡 Tip: Edit or type your custom prompt here, click <b>Copy Prompt</b>, generate the image, and save to <code className="bg-white dark:bg-canvas-dark px-1.5 py-0.5 rounded border border-cobalt-200/60">public/illustrations/{slug || 'story-name'}.png</code> to reference in Image 1 below.
                  </p>
                </div>
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

                  {/* Image 1 Position Selector */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-canvas-border dark:border-canvas-darkBorder">
                    <span className="text-[10px] font-mono uppercase text-ink-500">
                      Image 1 Position in Reading Flow:
                    </span>
                    <div className="flex items-center gap-1 p-1 rounded-lg bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-[11px] font-mono">
                      {[
                        { id: 'top', label: 'Top Header' },
                        { id: 'after-quote', label: 'Below Lead Quote' },
                        { id: 'middle', label: 'Mid-Story' },
                        { id: 'bottom', label: 'Bottom of Story' },
                      ].map((pos) => (
                        <button
                          key={pos.id}
                          type="button"
                          onClick={() => setImage1Position(pos.id)}
                          className={`px-2.5 py-1 rounded transition-all ${
                            image1Position === pos.id
                              ? 'bg-ink-900 text-white dark:bg-berry-600 font-bold'
                              : 'text-ink-600 dark:text-ink-300 hover:text-ink-900'
                          }`}
                        >
                          {pos.label}
                        </button>
                      ))}
                    </div>
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

                  {/* Image 2 Position Selector */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-canvas-border dark:border-canvas-darkBorder">
                    <span className="text-[10px] font-mono uppercase text-ink-500">
                      Image 2 Position in Reading Flow:
                    </span>
                    <div className="flex items-center gap-1 p-1 rounded-lg bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-[11px] font-mono">
                      {[
                        { id: 'bottom', label: 'Bottom of Story' },
                        { id: 'middle', label: 'Mid-Story' },
                        { id: 'after-quote', label: 'Below Lead Quote' },
                        { id: 'top', label: 'Top Header' },
                      ].map((pos) => (
                        <button
                          key={pos.id}
                          type="button"
                          onClick={() => setImage2Position(pos.id)}
                          className={`px-2.5 py-1 rounded transition-all ${
                            image2Position === pos.id
                              ? 'bg-cobalt-600 text-white font-bold'
                              : 'text-ink-600 dark:text-ink-300 hover:text-ink-900'
                          }`}
                        >
                          {pos.label}
                        </button>
                      ))}
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

                {/* Markdown Quick Insertion Toolbar with Bold & Numbered List */}
                <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono">
                  <button
                    type="button"
                    onClick={handleWrapBold}
                    className="px-3 py-1 rounded bg-white dark:bg-canvas-darkCard border border-berry-300 dark:border-berry-700 text-berry-600 dark:text-berry-400 font-bold hover:bg-berry-50 flex items-center gap-1"
                    title="Bold selected text or insert bold template (**text**)"
                  >
                    <span className="text-sm font-black">B</span>
                    <span>Bold (**text**)</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWrapItalic}
                    className="px-2.5 py-1 rounded bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500 text-ink-700 dark:text-ink-200 italic"
                    title="Italicize selected text (*text*)"
                  >
                    <span className="font-serif">I</span> Italic (*text*)
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('### New Section Heading')}
                    className="px-2.5 py-1 rounded bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500 text-ink-700 dark:text-ink-200"
                  >
                    + Heading (###)
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('1. **First step:** Details\n2. **Second step:** Details\n3. **Third step:** Details')}
                    className="px-2.5 py-1 rounded bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500 text-ink-700 dark:text-ink-200 font-bold"
                  >
                    1. 2. 3. Numbered Steps
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdownSnippet('* First bullet item\n* Second bullet item\n* Third bullet item')}
                    className="px-2.5 py-1 rounded bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500 text-ink-700 dark:text-ink-200"
                  >
                    • Bullet List
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
                  ref={textareaRef}
                  rows={14}
                  value={markdownBody}
                  onChange={(e) => setMarkdownBody(e.target.value)}
                  onKeyDown={handleTextareaKeyDown}
                  placeholder="Write your story in natural markdown. Use double line breaks between paragraphs..."
                  className="w-full p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white font-sans text-sm leading-relaxed focus:outline-none focus:border-berry-600 resize-y"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder">
                <span className="text-xs font-mono text-ink-500 dark:text-ink-400">
                  {statusMessage}
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleOpenXModal}
                    className="px-4 py-2 rounded-xl bg-ink-900 dark:bg-canvas-dark border border-ink-800 dark:border-canvas-darkBorder text-white text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-berry-600 transition-colors shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>Share on X</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveCurrentStoryToArchive}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-canvas-dark border border-berry-300 dark:border-berry-800 text-berry-600 dark:text-berry-400 text-xs font-mono font-bold hover:bg-berry-50 transition-colors"
                    title="Save current editor story to archive list"
                  >
                    Save to Archive
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowArchiveModal(true)}
                    className="px-4 py-2 rounded-xl bg-cobalt-50 dark:bg-cobalt-950/60 border border-cobalt-300 dark:border-cobalt-700 text-cobalt-600 dark:text-cobalt-300 text-xs font-mono font-bold hover:bg-cobalt-100 transition-colors"
                  >
                    Manage Archive ({allEssays.length})
                  </button>

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

                  {/* RENDER HELPER: Dynamic Image & Takeaways Layout */}
                  {(() => {
                    const renderImg1 = () => (
                      illustration ? (
                        <div key="img1" className="rounded-2xl overflow-hidden border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-dark p-4 text-center my-6">
                          <div className="relative max-w-sm mx-auto flex items-center justify-center min-h-[140px]">
                            <img
                              src={illustration}
                              alt={illustrationCaption || title}
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                              className={`max-h-56 w-auto object-contain mx-auto mix-blend-multiply dark:mix-blend-normal ${illustrationDark ? "dark:hidden" : ""}`}
                            />
                            {illustrationDark && (
                              <img
                                src={illustrationDark}
                                alt={illustrationCaption || title}
                                className="max-h-56 w-auto object-contain mx-auto hidden dark:block"
                              />
                            )}
                          </div>
                          {illustrationCaption && (
                            <p className="mt-2 text-[11px] font-mono text-ink-500 dark:text-ink-400 italic">
                              {illustrationCaption}
                            </p>
                          )}
                        </div>
                      ) : null
                    );

                    const renderImg2 = () => (
                      secondaryImage ? (
                        <div key="img2" className="rounded-2xl overflow-hidden border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-dark p-4 text-center my-6">
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
                      ) : null
                    );

                    const renderTakeawaysBox = () => (
                      (showTakeaways && takeaways && takeaways.length > 0) ? (
                        <div key="takeaways" className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder space-y-3 shadow-sm my-6">
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
                      ) : null
                    );

                    const renderInline = (txt) => {
                      if (!txt) return '';
                      let norm = txt.replace(/([A-Za-z0-9\s&]+):\*\*/g, '**$1:**');
                      const parts = norm.split(/(\*\*.*?\*\*)/g);
                      return parts.map((part, index) => {
                        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
                          return <strong key={index} className="font-bold text-ink-950 dark:text-white">{part.slice(2, -2)}</strong>;
                        }
                        const subParts = part.split(/(\*[^*]+?\*)/g);
                        return subParts.map((sub, sIdx) => {
                          if (sub.startsWith('*') && sub.endsWith('*') && sub.length >= 2) {
                            return <em key={`${index}-${sIdx}`} className="italic">{sub.slice(1, -1)}</em>;
                          }
                          return sub;
                        });
                      });
                    };

                    const renderParagraphs = (paras, keyPrefix = 'p') => (
                      paras.map((para, i) => {
                        if (para.startsWith('![')) {
                          const match = para.match(/!\[(.*?)\]\((.*?)\)/);
                          if (match) {
                            const [, alt, url] = match;
                            return (
                              <figure key={`${keyPrefix}-${i}`} className="my-6 text-center">
                                <div className="rounded-2xl overflow-hidden border border-canvas-border dark:border-canvas-darkBorder bg-canvas-subtle dark:bg-canvas-dark p-3 inline-block max-w-full">
                                  <img src={url} alt={alt} className="max-h-72 w-auto rounded-xl object-contain mx-auto" />
                                </div>
                                {alt && <figcaption className="mt-2 text-xs font-mono text-ink-500 dark:text-ink-400 italic">{alt}</figcaption>}
                              </figure>
                            );
                          }
                        }
                        if (para.startsWith('### ')) {
                          return (
                            <h3 key={`${keyPrefix}-${i}`} className="font-serif text-xl font-bold text-ink-900 dark:text-white pt-4 pb-1 border-b border-canvas-border dark:border-canvas-darkBorder">
                              {renderInline(para.replace('### ', ''))}
                            </h3>
                          );
                        }
                        const isNum = /^\d+\.\s+/.test(para);
                        if (isNum) {
                          const lines = para.split('\n');
                          return (
                            <div key={`${keyPrefix}-${i}`} className="space-y-2.5 my-3">
                              {lines.map((l, j) => {
                                const numMatch = l.match(/^(\d+)\.\s+(.*)/);
                                if (numMatch) {
                                  const [, num, content] = numMatch;
                                  return (
                                    <div key={j} className="flex items-start gap-3 my-2">
                                      <span className="w-5 h-5 rounded-full bg-berry-50 dark:bg-berry-950/60 text-berry-600 dark:text-berry-400 border border-berry-200 dark:border-berry-800 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                                        {num}
                                      </span>
                                      <div className="flex-1 text-xs sm:text-sm leading-relaxed text-ink-800 dark:text-ink-100">
                                        {renderInline(content)}
                                      </div>
                                    </div>
                                  );
                                }
                                return (
                                  <p key={j} className="text-xs sm:text-sm leading-relaxed text-ink-800 dark:text-ink-100 pl-8">
                                    {renderInline(l)}
                                  </p>
                                );
                              })}
                            </div>
                          );
                        }
                        if (para.startsWith('* ') || para.startsWith('- ')) {
                          const lines = para.split('\n');
                          return (
                            <ul key={`${keyPrefix}-${i}`} className="space-y-1.5 pl-2 my-2">
                              {lines.map((l, j) => (
                                <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-ink-800 dark:text-ink-100">
                                  <span className="text-berry-600 dark:text-berry-400 font-bold">•</span>
                                  <span className="flex-1">{renderInline(l.replace(/^[\*\-\s]+/, ''))}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <p key={`${keyPrefix}-${i}`} className="leading-relaxed text-xs sm:text-sm text-ink-800 dark:text-ink-100">
                            {renderInline(para)}
                          </p>
                        );
                      })
                    );

                    const allParas = markdownBody.split('\n\n').filter(Boolean);
                    const midIndex = Math.max(1, Math.floor(allParas.length / 2));
                    const firstHalfParas = allParas.slice(0, midIndex);
                    const secondHalfParas = allParas.slice(midIndex);

                    return (
                      <>
                        {/* 1. Images positioned at Top Header */}
                        {image1Position === 'top' && renderImg1()}
                        {image2Position === 'top' && renderImg2()}

                        {/* 2. Lead Pull Quote Box */}
                        {leadQuote && (
                          <div className="p-5 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border-l-4 border-berry-600 shadow-sm my-6">
                            <blockquote className="font-serif italic text-sm sm:text-base text-ink-900 dark:text-white font-medium leading-relaxed">
                              "{leadQuote}"
                            </blockquote>
                          </div>
                        )}

                        {/* 3. Images positioned Below Lead Quote */}
                        {image1Position === 'after-quote' && renderImg1()}
                        {image2Position === 'after-quote' && renderImg2()}

                        {/* 4. Core Thesis Box (if positioned at Top / Before Story) */}
                        {takeawaysPosition === 'top' && renderTakeawaysBox()}

                        {/* 5. Full Essay Body Typography (with mid-story image support) */}
                        <div className="prose prose-ink dark:prose-invert max-w-none text-sm sm:text-base font-light leading-relaxed space-y-5 text-ink-800 dark:text-ink-100 my-6">
                          {renderParagraphs(firstHalfParas, 'fh')}

                          {/* Mid-story image placements */}
                          {image1Position === 'middle' && renderImg1()}
                          {image2Position === 'middle' && renderImg2()}

                          {renderParagraphs(secondHalfParas, 'sh')}
                        </div>

                        {/* 6. Core Thesis Box (if positioned at Bottom / After Story) */}
                        {takeawaysPosition === 'bottom' && renderTakeawaysBox()}

                        {/* 7. Images positioned at Bottom of Story */}
                        {image1Position === 'bottom' && renderImg1()}
                        {image2Position === 'bottom' && renderImg2()}
                      </>
                    );
                  })()}

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

      {/* ================= MODAL: STORIES ARCHIVE & ESSAYS.JS MANAGER ================= */}
      {showArchiveModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="max-w-4xl w-full my-8 bg-white dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 text-ink-900 dark:text-white relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-canvas-border dark:border-canvas-darkBorder pb-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-berry-600 text-white flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold">
                    Stories Archive &amp; essays.js Manager
                  </h3>
                  <p className="text-xs font-mono text-ink-500 dark:text-ink-400">
                    Direct interface to edit, delete, or commit published dispatches without touching terminal.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowArchiveModal(false)}
                className="p-2 rounded-xl text-ink-400 hover:text-ink-900 dark:hover:text-white hover:bg-canvas-subtle dark:hover:bg-canvas-dark transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Export & Zero-Terminal Commit Bar */}
            <div className="p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder space-y-3 shrink-0">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-900 dark:text-white block">
                    Zero-Terminal GitHub Sync
                  </span>
                  <span className="text-[11px] font-mono text-ink-500 dark:text-ink-400 block">
                    Click to copy the full updated file and open GitHub's web editor to commit in 1 click.
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyFullEssaysJs}
                    className="px-3 py-1.5 rounded-xl border border-canvas-border dark:border-canvas-darkBorder bg-white dark:bg-canvas-darkCard text-xs font-mono font-medium hover:border-berry-600 transition-colors flex items-center gap-1.5"
                  >
                    {copiedFullFile ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-ink-500" />}
                    <span>{copiedFullFile ? 'Copied essays.js!' : 'Copy Full File'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadFullEssaysJs}
                    className="px-3 py-1.5 rounded-xl border border-canvas-border dark:border-canvas-darkBorder bg-white dark:bg-canvas-darkCard text-xs font-mono font-medium hover:border-berry-600 transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-cobalt-600" />
                    <span>Download essays.js</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenGitHubEditor}
                    className="px-4 py-1.5 rounded-xl bg-berry-600 hover:bg-berry-700 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Commit on GitHub (1-Click)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Terminal Command Snippet for Mac Users */}
              <div className="pt-2 border-t border-canvas-border dark:border-canvas-darkBorder flex items-center justify-between text-xs font-mono text-ink-500">
                <span className="truncate pr-2">
                  Terminal command: <code className="bg-white dark:bg-canvas-darkCard px-1.5 py-0.5 rounded border border-canvas-border dark:border-canvas-darkBorder select-all">git add src/data/essays.js && git commit -m "Update stories archive" && git push origin main</code>
                </span>
                <button
                  type="button"
                  onClick={handleCopyGitCommand}
                  className="text-berry-600 hover:underline shrink-0 flex items-center gap-1 text-[11px]"
                >
                  {copiedGitCmd ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedGitCmd ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* List of Published Stories */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              <div className="flex items-center justify-between text-xs font-mono text-ink-500 pb-1">
                <span>Active Published Stories ({allEssays.length})</span>
                <span>Click "Edit" to load into canvas or "Delete" to remove</span>
              </div>

              {allEssays.map((essayItem, index) => (
                <div
                  key={essayItem.slug || essayItem.id || index}
                  className="p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder hover:border-ink-400 dark:hover:border-ink-600 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-berry-50 dark:bg-berry-950/60 text-berry-600 dark:text-berry-400 border border-berry-200 dark:border-berry-800 font-bold uppercase">
                        {essayItem.category}
                      </span>
                      {essayItem.subCategory && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cobalt-50 dark:bg-cobalt-950/60 text-cobalt-600 dark:text-cobalt-400 border border-cobalt-200 dark:border-cobalt-800 font-medium">
                          {essayItem.subCategory}
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-ink-400">
                        {essayItem.date || 'October 2026'} · {essayItem.readTime || '5 min read'}
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-ink-900 dark:text-white truncate">
                      {essayItem.title}
                    </h4>

                    {essayItem.subtitle && (
                      <p className="text-xs text-ink-500 dark:text-ink-400 truncate font-light">
                        {essayItem.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        handleLoadTemplate(essayItem.id || essayItem.slug);
                        setShowArchiveModal(false);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono font-medium hover:border-berry-600 text-ink-900 dark:text-white transition-colors"
                      title="Load into editor to modify"
                    >
                      ✏️ Edit
                    </button>

                    <a
                      href={`https://5spicesorless.com/stories/${essayItem.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl text-ink-400 hover:text-ink-900 dark:hover:text-white hover:bg-white dark:hover:bg-canvas-darkCard transition-colors"
                      title="View live story on site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={(e) => handleDeleteStoryFromArchive(essayItem.slug || essayItem.id, e)}
                      className="p-2 rounded-xl text-ink-400 hover:text-red-600 hover:bg-white dark:hover:bg-canvas-darkCard transition-colors"
                      title="Delete story from archive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-canvas-border dark:border-canvas-darkBorder flex items-center justify-between shrink-0">
              <span className="text-xs font-mono text-ink-500">
                Tip: After deleting or editing stories, click <b>Commit on GitHub</b> or download <b>essays.js</b>.
              </span>
              <button
                type="button"
                onClick={() => setShowArchiveModal(false)}
                className="px-5 py-2 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-xs font-mono font-bold uppercase tracking-wider hover:bg-berry-600 transition-colors"
              >
                Close Manager
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ================= MODAL: DIRECT X (TWITTER) PUBLISHER ================= */}
      {showXModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="max-w-2xl w-full my-8 bg-white dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 text-ink-900 dark:text-white relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-canvas-border dark:border-canvas-darkBorder pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-ink-900 text-white dark:bg-white dark:text-ink-900 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    Share Dispatch to X (Twitter)
                  </h3>
                  <p className="text-xs font-mono text-ink-500 dark:text-ink-400">
                    Direct publishing to both accounts with editable message text.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowXModal(false)}
                className="p-2 rounded-xl text-ink-400 hover:text-ink-900 dark:hover:text-white hover:bg-canvas-subtle dark:hover:bg-canvas-dark transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Account Switcher: @5spicesorless vs @vivekshukla */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-ink-500 font-bold block">
                Select X Account to Post From:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Account 1: @5spicesorless */}
                <button
                  type="button"
                  onClick={() => handleSelectXAccount('5spicesorless')}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3.5 ${
                    selectedXAccount === '5spicesorless'
                      ? 'bg-berry-50 dark:bg-berry-950/40 border-berry-600 ring-2 ring-berry-600/30 shadow-sm'
                      : 'bg-canvas-subtle dark:bg-canvas-dark border-canvas-border dark:border-canvas-darkBorder opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-berry-600 text-white flex items-center justify-center font-serif font-black text-sm shrink-0">
                    5S
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-ink-900 dark:text-white truncate">
                        5 Spices or Less Desk
                      </span>
                      {selectedXAccount === '5spicesorless' && (
                        <Check className="w-3.5 h-3.5 text-berry-600 shrink-0" />
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-berry-600 dark:text-berry-400 block">
                      @5spicesorless
                    </span>
                    <span className="text-[10px] text-ink-500 truncate block">
                      Official publication voice
                    </span>
                  </div>
                </button>

                {/* Account 2: @vivekshukla */}
                <button
                  type="button"
                  onClick={() => handleSelectXAccount('vivekshukla')}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3.5 ${
                    selectedXAccount === 'vivekshukla'
                      ? 'bg-cobalt-50 dark:bg-cobalt-950/40 border-cobalt-600 ring-2 ring-cobalt-600/30 shadow-sm'
                      : 'bg-canvas-subtle dark:bg-canvas-dark border-canvas-border dark:border-canvas-darkBorder opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-white dark:bg-canvas-darkCard border border-canvas-border shrink-0">
                    <img
                      src="/profile-sketch.png"
                      alt="Vivek Shukla"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-ink-900 dark:text-white truncate">
                        Vivek Shukla
                      </span>
                      {selectedXAccount === 'vivekshukla' && (
                        <Check className="w-3.5 h-3.5 text-cobalt-600 shrink-0" />
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-cobalt-600 dark:text-cobalt-400 block">
                      @vivekshukla
                    </span>
                    <span className="text-[10px] text-ink-500 truncate block">
                      Personal founder perspective
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Editable Message Composer */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-mono uppercase tracking-wider text-ink-500 font-bold">
                  Edit Message Text Before Posting:
                </label>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className={`px-2 py-0.5 rounded-full ${
                    xPostText.length <= 280
                      ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300'
                      : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                  }`}>
                    {xPostText.length} chars {xPostText.length <= 280 ? '(Standard)' : '(Long Post)'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setXPostText(getInitialXText(selectedXAccount))}
                    className="text-berry-600 hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              <textarea
                rows={6}
                value={xPostText}
                onChange={(e) => setXPostText(e.target.value)}
                placeholder="Compose your post for X..."
                className="w-full p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 leading-relaxed font-sans"
              />

              {/* Quick Snippet Injectors */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] font-mono text-ink-600 dark:text-ink-400">
                <span className="text-ink-400 mr-1">Insert:</span>
                <button
                  type="button"
                  onClick={() => setXPostText((prev) => prev + `\n\nhttps://5spicesorless.com/stories/${slug || 'story'}`)}
                  className="px-2 py-0.5 rounded bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500"
                >
                  + Story Link
                </button>
                {leadQuote && (
                  <button
                    type="button"
                    onClick={() => setXPostText((prev) => prev + `\n\n"${leadQuote}"`)}
                    className="px-2 py-0.5 rounded bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500"
                  >
                    + Lead Quote
                  </button>
                )}
                {takeaways.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setXPostText((prev) => prev + `\n\n• ${takeaways[0]}`)}
                    className="px-2 py-0.5 rounded bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500"
                  >
                    + Ground Truth
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setXPostText((prev) => prev + ` #5SpicesOrLess #Lucknow`)}
                  className="px-2 py-0.5 rounded bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-500"
                >
                  + Hashtags
                </button>
              </div>
            </div>

            {/* Live X Mock Card Preview */}
            <div className="p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-400 font-bold block">
                Preview of Post on X:
              </span>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-ink-900 text-white flex items-center justify-center font-bold text-xs shrink-0 overflow-hidden">
                  {selectedXAccount === '5spicesorless' ? '5S' : (
                    <img src="/profile-sketch.png" alt="Vivek" className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-ink-900 dark:text-white">
                      {selectedXAccount === '5spicesorless' ? '5 Spices or Less' : 'Vivek Shukla'}
                    </span>
                    <span className="text-[11px] font-mono text-ink-400">
                      @{selectedXAccount}
                    </span>
                  </div>
                  <p className="text-xs text-ink-800 dark:text-ink-100 whitespace-pre-wrap leading-relaxed font-sans">
                    {xPostText}
                  </p>
                  <div className="p-2.5 rounded-xl border border-canvas-border dark:border-canvas-darkBorder bg-white dark:bg-canvas-darkCard flex items-center justify-between text-xs font-mono">
                    <div className="truncate">
                      <span className="text-ink-400 block text-[10px]">5spicesorless.com</span>
                      <span className="font-bold text-ink-900 dark:text-white truncate block">{title || 'Story Title'}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-400 shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-canvas-border dark:border-canvas-darkBorder">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyXText}
                  className="px-4 py-2.5 rounded-xl border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono font-medium hover:bg-canvas-subtle dark:hover:bg-canvas-dark transition-colors flex items-center gap-1.5"
                >
                  {copiedXText ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-ink-500" />}
                  <span>{copiedXText ? 'Copied Text!' : 'Copy Text'}</span>
                </button>

                <a
                  href={`https://x.com/${selectedXAccount}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2.5 rounded-xl text-xs font-mono text-ink-500 hover:text-ink-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Open @{selectedXAccount}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowXModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono text-ink-500 hover:text-ink-900 dark:hover:text-white"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={handlePostToX}
                  className="px-6 py-2.5 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-berry-600 dark:hover:bg-berry-600 dark:hover:text-white shadow-md transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Post on X as @{selectedXAccount}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
      </div>
    </div>
  );
}
