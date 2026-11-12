// Shared helpers for page metadata and structured data.
// All URLs are absolute and built from Astro.site (see astro.config.mjs).

export const SITE_NAME = '5 Spices or Less';
export const AUTHOR_NAME = 'Vivek Shukla';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

// Social-share images live in /public/og (made by `npm run generate-og`).
// Keys are the file names without ".webp"; alt text describes each sketch.
export const OG_IMAGES = {
  default: 'Pen sketch of a quiet street corner with a lamp post and a post box.',
  home: 'Pen sketch of a quiet street corner with a lamp post and a post box.',
  about: 'Pen portrait of Vivek Shukla.',
  advisory: 'Pen sketch of a chess knight and king, an open book, a compass and a cup of tea.',
  food: 'Pen sketch of a calm kitchen with an island and a pan on the hob.',
  life: 'Pen sketch of a lounger by a tall window overlooking a city.',
  work: 'Pen sketch of a desk with a laptop beside a slatted wall.',
  fiction: 'Pen sketch of a couple riding a scooter across a bridge.',
  tea: 'Blue ink sketch of a family sitting around a fire and a charpai outside a village house.',
  'teak-tables-above-mayfair': 'Blue ink sketch of readers at long tables in a library lined with bookshelves.',
  'the-art-of-the-blank-page': 'Blue ink sketch of people around a meeting-room table, one man listening with a notebook beside him.',
  'the-best-time-to-start-your-own-company': 'Blue ink sketch of two hands holding a purchase order.',
};

export function absoluteUrl(pathOrUrl, site) {
  const origin = site ? new URL(site).origin : 'https://5spicesorless.com';
  return new URL(pathOrUrl, origin).href;
}

export function ogImage(key, site) {
  const name = OG_IMAGES[key] ? key : 'default';
  return {
    url: absoluteUrl(`/og/${name}.webp`, site),
    width: OG_WIDTH,
    height: OG_HEIGHT,
    type: 'image/webp',
    alt: OG_IMAGES[name],
  };
}

// Story dates are written as "Month YYYY" in the markdown front matter.
// Only the month is known, so the machine-readable date is "YYYY-MM"
// (a valid ISO 8601 / schema.org Date). Anything unparseable returns undefined.
const MONTHS = ['january','february','march','april','may','june','july','august','september','october','november','december'];
export function monthToIso(text) {
  if (!text) return undefined;
  const iso = String(text).trim().match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
  if (iso) return iso[0];
  const m = String(text).trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (!m) return undefined;
  const idx = MONTHS.indexOf(m[1].toLowerCase());
  if (idx === -1) return undefined;
  return `${m[2]}-${String(idx + 1).padStart(2, '0')}`;
}

// Stable @id values so the schema blocks on every page refer to the same entities.
export function schemaIds(site) {
  const base = absoluteUrl('/', site).replace(/\/$/, '');
  return {
    organization: `${base}/#organization`,
    website: `${base}/#website`,
    person: `${base}/#vivek-shukla`,
  };
}

export const SAME_AS = [
  'https://www.linkedin.com/in/vivekshukla/',
  'https://x.com/vivekshukla',
];

export function personNode(site) {
  const ids = schemaIds(site);
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: AUTHOR_NAME,
    url: absoluteUrl('/about/', site),
    jobTitle: 'Advisor, Operator and Storyteller',
    sameAs: SAME_AS,
  };
}

export function organizationNode(site) {
  const ids = schemaIds(site);
  return {
    '@type': 'Organization',
    '@id': ids.organization,
    name: SITE_NAME,
    url: absoluteUrl('/', site),
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/branding/logo.png', site),
      width: 1400,
      height: 672,
    },
    founder: { '@id': ids.person },
    sameAs: SAME_AS,
  };
}

export function breadcrumbNode(items, site) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path, site),
    })),
  };
}
