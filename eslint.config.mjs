import tsParser from '@typescript-eslint/parser';
// Import plugins
import tsPlugin from '@typescript-eslint/eslint-plugin';
import astroPlugin from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unicornPlugin from 'eslint-plugin-unicorn';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  // Base configuration
  {
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
    },
  },
  {
    ignores: ['.astro', 'build', 'coverage', 'dist', 'node_modules', 'public', 'src/assets', '*.config.*', '*.d.ts'],
  },

  // TypeScript files configuration
  {
    files: ['**/*.{ts,tsx,mts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
    },
  },

  // JavaScript files configuration
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
  },

  // Unicorn configuration
  unicornPlugin.configs.recommended,

  // Astro configuration
  ...astroPlugin.configs.recommended,
  ...astroPlugin.configs['jsx-a11y-recommended'],

  // Custom rules
  {
    rules: {
      // general rules
      'comma-dangle': 'off', // 퍼포먼스 향상을 위해 off
      indent: 'off', // 퍼포먼스 향상을 위해 off
      'no-multi-spaces': 'off', // 퍼포먼스 향상을 위해 off
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      quotes: 'off', // 퍼포먼스 향상을 위해 off
      semi: 'off', // 퍼포먼스 향상을 위해 off
      'spaced-comment': 'off', // 퍼포먼스 향상을 위해 off

      // import
      'import/extensions': 'off',
      'import/named': 'off', // WindowsOS 에서 에러발생하여 off
      'import/newline-after-import': 'off',
      'import/no-cycle': 'off',
      'import/no-duplicates': 'off', // 퍼포먼스 향상을 위해 off [warn]
      'import/no-extraneous-dependencies': 'off',
      'import/order': 'warn',
      'import/prefer-default-export': 'off',

      // Prettier
      'prettier/prettier': 'off', // Disable Prettier rules to avoid conflicts with other formatting tools

      // React
      'react/prop-types': 'off', // prop-types 라이브러리 사용안함, TypeScript 사용

      // React-hooks
      'react-hooks/exhaustive-deps': 'off', // Hook 의존성 배열: 오류소지가 있어 off [warn]

      // Unused-imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          vars: 'all',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-use-before-define': ['warn', { functions: false, classes: false }],
      // 아래는 모두 퍼포먼스 향상을 위해 off
      '@typescript-eslint/block-spacing': 'off',
      '@typescript-eslint/brace-style': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/comma-spacing': 'off',
      '@typescript-eslint/func-call-spacing': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/key-spacing': 'off',
      '@typescript-eslint/keyword-spacing': 'off',
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-extra-parens': 'off',
      '@typescript-eslint/no-extra-semi': 'off',
      '@typescript-eslint/object-curly-spacing': 'off',
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/space-before-blocks': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/space-infix-ops': 'off',
      '@typescript-eslint/type-annotation-spacing': 'off',

      // Unicorn
      'unicorn/consistent-function-scoping': 'off', // Node.js 메모리 누수 가능성이 있으므로 off
      'unicorn/escape-case': 'error',
      'unicorn/filename-case': 'off',
      'unicorn/no-array-for-each': 'off', // 사용시 리팩토링 필요
      'unicorn/no-array-reduce': 'off', // 사용시 리팩토링 필요
      'unicorn/no-lonely-if': 'off',
      'unicorn/no-null': 'off', // 사용시 리팩토링 필요
      'unicorn/number-literal-case': 'off', // Prettier와 충돌하므로 off
      'unicorn/numeric-separators-style': 'warn',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-at': 'off', // 사용시 리팩토링 필요
      'unicorn/prefer-dom-node-dataset': 'warn', // (사용여부 체크 필요)
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-spread': 'off', // 사용시 리팩토링 필요
      'unicorn/switch-case-braces': 'off', // 특수 경우 외 불필요하므로 off

      // Astro
      'astro/no-set-html-directive': 'error',
      'astro/prefer-split-class-list': ['error', { splitLiteral: false }],
    },
  },
];

export default eslintConfig;
