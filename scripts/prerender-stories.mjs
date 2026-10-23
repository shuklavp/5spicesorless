import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

const SITE_URL = 'https://5spicesorless.com';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

function parseFrontmatter(content, filename) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  if (match) {
    const lines = match[1].split(/\r?\n/);
    for (const line of lines) {
      const idx = line.indexOf(':');
      if (idx !== -1) {
        const key = line.slice(0, idx).trim();
        let val = line.slice(idx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        data[key] = val;
      }
    }
  }
  if (!data.slug) {
    data.slug = filename.replace(/\.md$/, '');
  }
  return data;
}

function loadStories() {
  const storiesDir = path.resolve(rootDir, 'src/content/stories');
  if (fs.existsSync(storiesDir)) {
    const files = fs.readdirSync(storiesDir).filter(f => f.endsWith('.md'));
    return files.map(file => {
      const raw = fs.readFileSync(path.join(storiesDir, file), 'utf-8');
      return parseFrontmatter(raw, file);
    });
  }

  // Fallback to JSON if present
  const jsonPath = path.resolve(rootDir, 'src/data/stories.json');
  if (fs.existsSync(jsonPath)) {
    return JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  }

  return [];
}

async function run() {
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  const rawHtml = fs.readFileSync(templatePath, 'utf-8');
  const stories = loadStories();

  console.log(`Found ${stories.length} stories. Generating static social previews...`);

  for (const story of stories) {
    const slug = story.slug || story.id;
    if (!slug) continue;

    const title = `${story.title || 'Story'} | 5 Spices or Less`;
    const description = story.leadQuote || story.excerpt || story.summary || 'Weekly notes on enterprise building, practical leadership, and cutting through operational noise.';
    const canonicalUrl = `${SITE_URL}/stories/${slug}`;
    const rawImage = story.image || story.coverImage || story.imageUrl;
    const imageUrl = rawImage 
      ? (rawImage.startsWith('http') ? rawImage : `${SITE_URL}${rawImage.startsWith('/') ? '' : '/'}${rawImage}`)
      : DEFAULT_IMAGE;

    let html = rawHtml
      .replace(/<title>.*?<\/title>/gi, '')
      .replace(/<link rel="canonical"[^>]*>/gi, '')
      .replace(/<meta property="og:[^"]*"[^>]*>/gi, '')
      .replace(/<meta name="twitter:[^"]*"[^>]*>/gi, '')
      .replace(/<meta name="description"[^>]*>/gi, '');

    const metaBlock = `
    <title>${title}</title>
    <meta name="description" content="${description.replace(/"/g, '&quot;')}" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:site_name" content="5 Spices or Less" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta name="twitter:url" content="${canonicalUrl}" />
  `;

    html = html.replace('</head>', `${metaBlock}\n  </head>`);

    const targetDir = path.resolve(distDir, 'stories', slug);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.resolve(targetDir, 'index.html'), html, 'utf-8');
    console.log(`  ✓ Generated preview: dist/stories/${slug}/index.html`);
  }

  console.log('All story previews generated successfully.');
}

run();
