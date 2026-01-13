// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // This is what was crashing

export default defineConfig({
  site: 'https://alxmasha.github.io',
  base: 'webportfolio', 
  integrations: [tailwind()],
});