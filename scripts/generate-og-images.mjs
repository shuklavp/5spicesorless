// Builds 1200x630 social-share images (WebP) into public/og/.
//
// The site's sketches are transparent PNGs, which social networks show on a
// black or random background. Each one is placed on a soft off-white canvas
// here, so every share preview looks like the site.
//
// Run after adding a new share image:   npm run generate-og
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const outDir = path.join(publicDir, 'og');

const W = 1200;
const H = 630;
const PAD = 44;
const BG = '#FAF9F6';
const BG_OVERRIDE = { about: '#FFFFFF' }; // the portrait is an opaque white photo-style sketch

// output name -> source file in /public
const IMAGES = {
  'default': '/streetscape-sketch.png',
  'home': '/streetscape-sketch.png',
  'about': '/profile-sketch.png',
  'advisory': '/illustrations/advisory-study.png',
  'food': '/food-sketch-blue.png',
  'life': '/life-sketch-blue.png',
  'work': '/work-sketch-blue.png',
  'fiction': '/illustrations/fiction-scooter-bridge.png',
  'tea': '/illustrations/village-courtyard.png',
  'teak-tables-above-mayfair': '/illustrations/british-library-lucknow.png',
  'the-art-of-the-blank-page': '/illustrations/art-of-the-blank-page.png',
  'the-best-time-to-start-your-own-company': '/illustrations/empty-slate-purchase-order.png',
};

fs.mkdirSync(outDir, { recursive: true });
const done = new Map();
for (const [name, src] of Object.entries(IMAGES)) {
  const dest = path.join(outDir, `${name}.webp`);
  const art = await sharp(path.join(publicDir, src))
    .resize({ width: W - PAD * 2, height: H - PAD * 2, fit: 'inside', withoutEnlargement: false })
    .toBuffer();
  await sharp({ create: { width: W, height: H, channels: 3, background: BG_OVERRIDE[name] || BG } })
    .composite([{ input: art, gravity: 'centre' }])
    .webp({ quality: 86, effort: 5 })
    .toFile(dest);
  console.log(`${name}.webp  ${(fs.statSync(dest).size / 1024).toFixed(0)} KB`);
}
