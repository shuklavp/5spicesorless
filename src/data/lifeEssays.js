import { ESSAYS_DATA } from './essays.js';

export function getLifeEssays() {
  return ESSAYS_DATA.filter((e) => {
    const cat = (e.category || e.desk || '').toLowerCase();
    return cat === 'life' || e.slug === 'teak-tables-above-mayfair';
  }).filter((e) => e.slug !== 'tea' && e.slug !== 'the-art-of-the-blank-page' && e.slug !== 'the-best-time-to-start-your-own-company');
}
