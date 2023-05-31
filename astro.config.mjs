import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://frebet-julien.gowkulab.ovh',
  integrations: [react(), sitemap(), robotsTxt()],
});
