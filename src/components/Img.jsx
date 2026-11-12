import manifest from '../data/image-manifest.json';

/**
 * Drop-in <img> that serves the optimized WebP versions made by
 * `npm run optimize-images` (see scripts/optimize-images.mjs).
 *
 * - `src` stays the original file, so anything without a WebP copy still works.
 * - srcSet / width / height come from the manifest (no layout shift).
 * - Lazy-loaded by default. Pass `priority` for above-the-fold images
 *   (eager + fetchpriority="high").
 */
export default function Img({ src, sizes = '100vw', priority = false, eager = false, onError, ...rest }) {
  const entry = manifest[src];
  const loading = priority || eager ? 'eager' : 'lazy';
  const common = {
    loading,
    decoding: 'async',
    ...(priority ? { fetchpriority: 'high' } : {}),
  };

  if (!entry) {
    return <img src={src} onError={onError} {...common} {...rest} />;
  }

  const srcSet = entry.variants.map((v) => `${v.src} ${v.w}w`).join(', ');

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={entry.width}
      height={entry.height}
      {...common}
      {...rest}
      onError={(e) => {
        const el = e.currentTarget;
        // If a WebP failed, retry with the original file before the caller's fallback.
        if (el.getAttribute('srcset')) {
          el.removeAttribute('srcset');
          el.src = src;
          return;
        }
        if (onError) onError(e);
      }}
    />
  );
}
