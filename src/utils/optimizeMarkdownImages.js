// Upgrades the <img> tags in rendered markdown (e.g. ![](/illustrations/foo.png))
// to use the optimized WebP copies listed in src/data/image-manifest.json:
// adds srcset, sizes, width/height (prevents layout shift) and lazy-loading.
// The first image in an essay loads eagerly; the rest are lazy.
// Images missing from the manifest are left exactly as written.
import manifest from '../data/image-manifest.json';

// Essay plates sit in a max-w-3xl column (672px), full width on phones.
const SIZES = '(min-width: 768px) 672px, 100vw';

export function optimizeMarkdownImages(html) {
  let first = true;
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    const src = /\ssrc="([^"]+)"/i.exec(tag)?.[1];
    const entry = src && manifest[src];
    if (!entry) return tag;
    const srcset = entry.variants.map((v) => `${v.src} ${v.w}w`).join(', ');
    const loading = first ? 'eager' : 'lazy';
    first = false;
    const attrs = ` srcset="${srcset}" sizes="${SIZES}" width="${entry.width}" height="${entry.height}" decoding="async" loading="${loading}"`;
    return tag.replace(/\s*\/?>$/, `${attrs}${tag.endsWith('/>') ? ' />' : '>'}`);
  });
}
