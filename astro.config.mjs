// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // THIS LINE IS LIKELY MISSING

export default defineConfig({
  site: 'https://alxmasha.github.io',
  base: '/webportfolio',
  integrations: [tailwind()], // Now 'tailwind' will be defined
});