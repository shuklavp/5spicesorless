import { ESSAYS_DATA } from './essays.js';

export function getFoodEssays() {
  return ESSAYS_DATA.filter((e) => {
    const cat = (e.category || e.desk || '').toLowerCase();
    return cat === 'food' || e.slug === 'tea';
  }).filter((e) => e.slug !== 'teak-tables-above-mayfair' && e.slug !== 'the-art-of-the-blank-page' && e.slug !== 'the-best-time-to-start-your-own-company');
}
