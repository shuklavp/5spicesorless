import rss from '@astrojs/rss';
import { ESSAYS_DATA } from '../data/essays.js';

export function GET(context) {
  const items = ESSAYS_DATA.map((essay) => ({
    title: essay.title,
    description: essay.subtitle || essay.summary,
    // Full ISO `datePublished` from the front matter; falls back to the first of the
    // month from the display date ("Month YYYY") if a story has no exact date.
    pubDate: essay.datePublished
      ? new Date(`${essay.datePublished}T00:00:00Z`)
      : new Date(`1 ${essay.date} UTC`),
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
