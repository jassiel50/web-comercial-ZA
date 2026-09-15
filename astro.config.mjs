import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zadesarrollo.com.mx',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
