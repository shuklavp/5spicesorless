// Upgrades the <img> tags in rendered markdown (e.g. ![](/illustrations/foo.png))
// to use the optimized WebP copies listed in src/data/image-manifest.json:
// adds srcset, sizes, width/height (prevents layout shift) and lazy-loading.
// The first image in an essay loads eagerly; the rest are lazy.
// Images missing from the manifest are left exactly as written.
//
// Dark mode: when /illustrations/<name>.png has a <name>-dark.png twin in the
// manifest, a second <img> is emitted for it. CSS (.story-prose in index.css)
// shows one or the other from the site's `dark` class on <html>, the same switch
// the navbar toggle uses. The dark twin is aria-hidden (the light one carries the
// alt text for assistive tech), always lazy, and has its own width/height so
// nothing shifts. Without a twin the image is unchanged.
import manifest from '../data/image-manifest.json';

// Essay plates sit in a max-w-3xl column (672px), full width on phones.
const SIZES = '(min-width: 768px) 672px, 100vw';

const attrsFor = (entry, loading) => {
  const srcset = entry.variants.map((v) => `${v.src} ${v.w}w`).join(', ');
  return ` srcset="${srcset}" sizes="${SIZES}" width="${entry.width}" height="${entry.height}" decoding="async" loading="${loading}"`;
};

const addAttrs = (tag, extra) => tag.replace(/\s*\/?>$/, `${extra}${tag.endsWith('/>') ? ' />' : '>'}`);

export function optimizeMarkdownImages(html) {
  let first = true;
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    const src = /\ssrc="([^"]+)"/i.exec(tag)?.[1];
    const entry = src && manifest[src];
    if (!entry) return tag;
    const loading = first ? 'eager' : 'lazy';
    first = false;

    const darkSrc = /\.png$/i.test(src) && !/-dark\.png$/i.test(src) ? src.replace(/\.png$/i, '-dark.png') : null;
    const darkEntry = darkSrc && manifest[darkSrc];
    if (!darkEntry) return addAttrs(tag, attrsFor(entry, loading));

    const light = addAttrs(tag, ` class="img-light"${attrsFor(entry, loading)}`);
    const dark = addAttrs(
      tag.replace(/\ssrc="[^"]*"/i, ` src="${darkSrc}"`),
      ` class="img-dark" aria-hidden="true"${attrsFor(darkEntry, 'lazy')}`
    );
    return light + dark;
  });
}
