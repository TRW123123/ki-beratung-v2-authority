import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://st-automatisierung.de',
  trailingSlash: 'never',

  build: {
    format: 'file'
  },

  integrations: [sitemap()]
});