import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Index from '@/pages/index.astro';

test('Index', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Index, {
    props: {},
    slots: {},
  });
  expect(result).toContain('This is a card');
});
