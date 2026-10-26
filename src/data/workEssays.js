import { ESSAYS_DATA } from './essays.js';

export function getWorkEssays() {
  return ESSAYS_DATA.filter((e) => {
    const cat = (e.category || e.desk || '').toLowerCase();
    return cat === 'work' || cat.includes('venture') || e.slug === 'the-art-of-the-blank-page' || e.slug === 'the-best-time-to-start-your-own-company';
  }).filter((e) => e.slug !== 'tea' && e.slug !== 'teak-tables-above-mayfair');
}
