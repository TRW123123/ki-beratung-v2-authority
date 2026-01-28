import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://deine-domain.tld',
  trailingSlash: 'never',

  build: {
      format: 'file'
  },

  integrations: [sitemap()]
});