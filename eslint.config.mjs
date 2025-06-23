import eslintJs from '@eslint/js';
// Import plugins
import tsEslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import astroEslintPlugin from 'eslint-plugin-astro';
import importEslintPlugin from 'eslint-plugin-import';
import jsxA11yEslintPlugin from 'eslint-plugin-jsx-a11y';
import prettierEslintPlugin from 'eslint-plugin-prettier';
import reactEslintPlugin from 'eslint-plugin-react';
import reactHooksEslintPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortEslintPlugin from 'eslint-plugin-simple-import-sort';
import unicornEslintPlugin from 'eslint-plugin-unicorn';

const eslintConfig = defineConfig([
  // Base configuration
  eslintJs.configs.recommended,
  tsEslint.configs.recommended,
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
  },
  {
    ignores: ['.astro', 'build', 'coverage', 'dist', 'node_modules', 'public', 'src/assets', '*.config.*'],
  },
  {
    plugins: {
      import: importEslintPlugin,
      'jsx-a11y': jsxA11yEslintPlugin,
      react: reactEslintPlugin,
      'react-hooks': reactHooksEslintPlugin,
      'simple-import-sort': simpleImportSortEslintPlugin,
      unicorn: unicornEslintPlugin,
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Prettier configuration
  {
    plugins: { prettier: prettierEslintPlugin },
    rules: {
      'prettier/prettier': 'off', // Disable Prettier rules to avoid conflicts with other formatting tools
    },
  },

  // Astro specific configuration
  astroEslintPlugin.configs.recommended,
  astroEslintPlugin.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroEslintPlugin.parser,
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: tsEslint.parser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    rules: {
      // "astro/no-set-html-directive": "error"
    },
  },
]);

export default eslintConfig;
