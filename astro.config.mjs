// This is an Astro configuration file that sets up the project with React, Tailwind CSS, and MDX support.
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

/**
 * Astro Configuration
 *
 * This configuration file sets up the Astro project with React, Tailwind CSS, and MDX support.
 * It defines the integrations and Vite plugins needed for the project.
 * @see https://astro.build/config
 */
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
