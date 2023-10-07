import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://niha1n.github.io',
  base:'/IEDCwebsite',
  integrations: [tailwind()]
});