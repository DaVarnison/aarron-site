import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://aarronwarnagiris.com', output: 'static', build:{inlineStylesheets:'always'}, integrations: [sitemap()] });
