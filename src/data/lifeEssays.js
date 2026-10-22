// src/data/lifeEssays.js
import { parseMarkdown } from '../utils/markdownParser'; // or your existing parser

export function getLifeEssays() {
  try {
    const modules = import.meta.glob('../content/stories/*.md', { eager: true, as: 'raw' });
    return Object.entries(modules)
      .map(([filepath, raw]) => parseMarkdown(raw, filepath))
      .filter((essay) => essay && essay.desk?.toLowerCase() === 'life')
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  } catch (err) {
    console.error('Life Desk Loader Error:', err);
    return [];
  }
}