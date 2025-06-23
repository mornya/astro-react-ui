import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Welcome from '@/components/Welcome.tsx';

describe('Welcome', () => {
  it('Renders react component', () => {
    const { getByText } = render(<Welcome />);
    const linkElement = getByText(/Read our docs/i);
    expect(linkElement).toBeInTheDocument();
  });
});
