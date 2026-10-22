// src/data/essays.js
import fm from 'front-matter';

// 1. Read all markdown files eagerly as raw text
const mdModules = import.meta.glob('../content/stories/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

// 2. Read legacy JSON files (for backward compatibility)
const jsonModules = import.meta.glob('../content/stories/*.json', {
  eager: true
});

const mdEssays = Object.entries(mdModules).map(([filepath, raw]) => {
  const parsed = fm(raw);
  const attributes = parsed.attributes || {};
  const slug = attributes.slug || filepath.split('/').pop().replace(/\.md$/, '');

  return {
    id: attributes.id || slug,
    slug: slug,
    title: attributes.title || 'Untitled',
    subtitle: attributes.subtitle || '',
    summary: attributes.summary || attributes.leadQuote || '',
    leadQuote: attributes.leadQuote || '',
    pullQuote: attributes.pullQuote || attributes.leadQuote || '',
    desk: (attributes.desk || 'work').toLowerCase(),
    deskLabel: attributes.deskLabel || attributes.desk || 'Work',
    category: attributes.category || 'General',
    subCategory: attributes.subCategory || attributes.category || 'General',
    categoryBadge: attributes.categoryBadge || attributes.subCategory || 'Operating & Perspective',
    date: attributes.date || 'October 2026',
    readTime: attributes.readTime || '5 min read',
    tags: attributes.tags || [],
    author: attributes.author || 'Vivek Shukla',
    heroImage: attributes.heroImage || null,
    illustration: attributes.illustration || null,
    illustrationDark: attributes.illustrationDark || null,
    markdownBody: parsed.body || '',
  };
});

const jsonEssays = Object.values(jsonModules).map((mod) => mod.default || mod);

// Merge: If a story exists as .md, it takes precedence over .json
const seenSlugs = new Set(mdEssays.map(e => e.slug));
const combined = [...mdEssays];
for (const je of jsonEssays) {
  if (je && je.slug && !seenSlugs.has(je.slug)) {
    combined.push(je);
    seenSlugs.add(je.slug);
  }
}

export const essays = combined;
export const ESSAYS_DATA = essays;

export const getStoryBySlug = (slug) => {
  return essays.find((story) => story.slug === slug);
};

export const getStoriesByDesk = (desk) => {
  return essays.filter((story) => story.desk?.toLowerCase() === desk?.toLowerCase());
};

export default essays;
