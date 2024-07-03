import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  devOptions: {
    tailwindConfig: './tailwind.config.js',
    },
  // site: 'https://niha1n.github.io',
  // base:'/',
  integrations: [tailwind({
    // Example: Provide a custom path to a Tailwind config file
    configFile: './tailwind.config.cjs',
  }),]
});

