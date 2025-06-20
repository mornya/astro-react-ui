/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  content: ['./src/**/*.{ts,tsx,js,jsx,astro,mdx}'],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
