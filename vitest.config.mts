/// <reference types="vitest" />
import viteReactPlugin from '@vitejs/plugin-react-swc';
import { getViteConfig } from 'astro/config';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const currentDir = new URL('.', import.meta.url).pathname;

// 기존 Vite 설정을 가져와서 추가 설정.
export default getViteConfig({
  plugins: [viteTsconfigPaths(), viteReactPlugin()],

  test: {
    globals: false, // 전역 변수 사용하지 않도록 함
    environment: 'jsdom', // JSDOM 환경에서 테스트 실행
    setupFiles: './test/@setup.ts',
    include: ['./test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    alias: {
      '~/': currentDir,
      '@/': `${currentDir}src/`,
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['test/**/*', '**/*.d.ts'],
    },
    passWithNoTests: true,
  },
});
