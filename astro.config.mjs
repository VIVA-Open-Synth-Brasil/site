import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://voz-livre-brasil.pages.dev',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
