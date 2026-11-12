// src/data/essays.js
import fm from 'front-matter';

// 1. Read all markdown files eagerly as raw text
const mdModules = import.meta.glob('../content/stories/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
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
    description: attributes.description || '',
    summary: attributes.summary || attributes.leadQuote || '',
    leadQuote: attributes.leadQuote || '',
    pullQuote: attributes.pullQuote || attributes.leadQuote || '',
    desk: (attributes.desk || 'work').toLowerCase(),
    deskLabel: attributes.deskLabel || attributes.desk || 'Work',
    category: attributes.category || 'General',
    subCategory: attributes.subCategory || attributes.category || 'General',
    categoryBadge: attributes.categoryBadge || attributes.subCategory || 'Operating & Perspective',
    date: attributes.date || 'October 2026',
    // Full ISO date (YYYY-MM-DD) used for structured data, RSS and the sitemap.
    // `date` above stays the human-readable "Month YYYY" shown on the site.
    datePublished: attributes.datePublished ? String(attributes.datePublished).slice(0, 10) : '',
    readTime: attributes.readTime || '5 min read',
    tags: attributes.tags || [],
    author: attributes.author || 'Vivek Shukla',
    heroImage: attributes.heroImage || null,
    illustration: attributes.illustration || null,
    illustrationDark: attributes.illustrationDark || null,
    markdownBody: parsed.body || '',
  };
});

export const essays = mdEssays;
export const ESSAYS_DATA = mdEssays;

export const getStoryBySlug = (slug) => {
  return essays.find((story) => story.slug === slug);
};

export const getStoriesByDesk = (desk) => {
  return essays.filter((story) => story.desk?.toLowerCase() === desk?.toLowerCase());
};

export default essays;
