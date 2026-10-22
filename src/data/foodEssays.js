// src/data/foodEssays.js
import { parseMarkdown } from '../utils/markdownParser';

export function getFoodEssays() {
  try {
    const modules = import.meta.glob('../content/stories/*.md', { eager: true, as: 'raw' });
    return Object.entries(modules)
      .map(([filepath, raw]) => parseMarkdown(raw, filepath))
      .filter((essay) => essay && essay.desk?.toLowerCase() === 'food')
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  } catch (err) {
    console.error('Food Desk Loader Error:', err);
    return [];
  }
}