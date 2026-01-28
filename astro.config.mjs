import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ki-beratung-v2-authority.netlify.app',
  trailingSlash: 'never',

  build: {
    format: 'file'
  },

  integrations: [sitemap()]
});