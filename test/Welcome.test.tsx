import { render } from '@testing-library/react';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Welcome from '@/components/Welcome.tsx';

//describe('Index', () => {
//  it('Index component', async () => {
//    const container = await AstroContainer.create();
//    const result = await container.renderToString(Index, {
//      props: {},
//      slots: {},
//    });
//    expect(result).toContain('This is a card');
//  });
//});

describe('Welcome', () => {
  it('renders react component', () => {
    const { getByText } = render(<Welcome />);
    const linkElement = getByText(/Read our docs/i);
    expect(linkElement).toBeInTheDocument();
  });
});
