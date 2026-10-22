// src/data/workEssays.js
import { parseMarkdown } from '../utils/markdownParser';

export function getWorkEssays() {
  try {
    const modules = import.meta.glob('../content/stories/*.md', { eager: true, as: 'raw' });
    return Object.entries(modules)
      .map(([filepath, raw]) => parseMarkdown(raw, filepath))
      .filter((essay) => essay && essay.desk?.toLowerCase() === 'work')
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  } catch (err) {
    console.error('Work Desk Loader Error:', err);
    return [];
  }
}