// Generates optimized WebP copies of the raster images in /public and writes
// src/data/image-manifest.json, which the <Img> component and the markdown
// image plugin use to emit srcset / width / height.
//
// Originals are never modified or removed. Output goes to public/optimized/
// with a content hash in each filename, so the files can be cached forever and
// unchanged images are skipped on re-runs.
//
// Run after adding or replacing an image:   npm run optimize-images
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const outDir = path.join(publicDir, 'optimized');
const manifestPath = path.join(root, 'src/data/image-manifest.json');

// Quality tuned for line art / sketches: 84 keeps pencil lines crisp.
const WEBP = { quality: 84, effort: 4, smartSubsample: true, alphaQuality: 100 };
const MAX_WIDTH = 1400;          // never ship wider than this
const STEPS = [480, 800];        // extra responsive widths (only if smaller than the image)
const SKIP = /^(favicon|favicons\/|android-chrome|apple-touch-icon|optimized\/)/;

// Only images the site actually refers to (paths written in src/) are processed,
// so legacy duplicates in /public don't bloat the repo.
function referencedPaths() {
  const found = new Set();
  const scan = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { if (e.name !== 'plugins') scan(p); continue; }
      if (!/\.(jsx?|astro|mdx?|json|mjs)$/.test(e.name) || e.name === 'image-manifest.json') continue;
      for (const m of fs.readFileSync(p, 'utf8').matchAll(/\/[A-Za-z0-9_./-]+\.(?:png|jpe?g)\b/gi)) found.add(m[0]);
    }
  };
  scan(path.join(root, 'src'));
  return found;
}
const referenced = referencedPaths();

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(png|jpe?g)$/i.test(e.name)) acc.push(p);
  }
  return acc;
}

fs.mkdirSync(outDir, { recursive: true });
const manifest = {};
const keep = new Set();
const byHash = new Map(); // dedupe identical files that live at several URLs
let made = 0, bytesIn = 0, bytesOut = 0;

for (const file of walk(publicDir).sort()) {
  const rel = path.relative(publicDir, file).split(path.sep).join('/');
  if (SKIP.test(rel) || !referenced.has('/' + rel)) continue;
  // .jpg files that only exist as onError fallbacks for a sibling .png
  if (/\.jpe?g$/i.test(rel) && referenced.has('/' + rel.replace(/\.jpe?g$/i, '.png'))) continue;
  const buf = fs.readFileSync(file);
  const hash = crypto.createHash('sha1').update(buf).digest('hex').slice(0, 8);
  let entry = byHash.get(hash);
  if (!entry) {
    const meta = await sharp(buf).metadata();
    const full = Math.min(meta.width, MAX_WIDTH);
    const widths = [...STEPS.filter((w) => w < full * 0.85), full];
    const base = path.basename(rel).replace(/\.[^.]+$/, '');
    const variants = [];
    for (const w of widths) {
      const name = `${base}.${hash}.${w}w.webp`;
      const dest = path.join(outDir, name);
      keep.add(name);
      if (!fs.existsSync(dest)) {
        await sharp(buf).resize({ width: w, withoutEnlargement: true }).webp(WEBP).toFile(dest);
        made++;
      }
      variants.push({ w, src: `/optimized/${name}` });
    }
    const height = Math.round((meta.height * full) / meta.width);
    entry = { width: full, height, variants };
    byHash.set(hash, entry);
    bytesIn += buf.length;
    bytesOut += fs.statSync(path.join(outDir, `${base}.${hash}.${full}w.webp`)).size;
  }
  manifest['/' + rel] = entry;
}

// remove stale outputs from images that changed or were deleted
for (const f of fs.readdirSync(outDir)) if (!keep.has(f)) fs.unlinkSync(path.join(outDir, f));

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`${Object.keys(manifest).length} images mapped, ${made} files written. ` +
  `Full-size originals ${(bytesIn / 1048576).toFixed(1)} MB -> full-size WebP ${(bytesOut / 1048576).toFixed(1)} MB`);
