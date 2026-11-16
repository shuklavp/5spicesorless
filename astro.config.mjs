import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Production origin. Astro.site / Astro.url (canonical, og:url, share links,
  // sitemap, RSS) are built from this instead of the dev server origin.
  site: 'https://5spicesorless.com',
  integrations: [react()],
  // Inline the (small) stylesheet so the first paint is not waiting on a CSS request.
  build: { inlineStylesheets: 'always' }
});
