import rss from '@astrojs/rss';
import { ESSAYS_DATA } from '../data/essays.js';

export function GET(context) {
  const items = ESSAYS_DATA.map((essay) => ({
    title: essay.title,
    description: essay.subtitle || essay.summary,
    // Essay dates are written as "Month YYYY" in the markdown front matter.
    pubDate: new Date(`1 ${essay.date} UTC`),
    link: `/stories/${essay.slug}/`,
    categories: essay.category ? [String(essay.category)] : undefined,
  })).sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: '5 Spices or Less',
    description: 'Essays on enterprise building, Awadhi kitchens, and living with patience, by Vivek Shukla.',
    site: context.site,
    items,
    customData: '<language>en-gb</language>',
  });
}
