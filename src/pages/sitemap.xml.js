import { ESSAYS_DATA } from '../data/essays.js';

// Public pages that should be indexed. /studio is intentionally left out
// (it is also disallowed in robots.txt), and so is the duplicate
// /advisory/founder-confidant route (same page as /advisory/ben-to-jules).
const STATIC_PATHS = [
  '/',
  '/about',
  '/advisory',
  '/advisory/fractional-operator',
  '/advisory/eir',
  '/advisory/ben-to-jules',
  '/essays',
  '/life',
  '/food',
  '/work',
  '/terms',
];

export function GET({ site }) {
  const origin = (site ?? new URL('https://5spicesorless.com')).origin;
  const essayPaths = ESSAYS_DATA.map((essay) => `/stories/${essay.slug}/`);
  const paths = [...STATIC_PATHS.map((p) => (p === '/' ? p : `${p}/`)), ...essayPaths];

  const urls = paths
    .map((path) => `  <url>\n    <loc>${origin}${path}</loc>\n  </url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
