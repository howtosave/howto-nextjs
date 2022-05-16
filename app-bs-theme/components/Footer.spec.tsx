import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('# Footer:Components', () => {
  it('renders links', () => {
    render(<Footer />);

    const link = screen.getByRole('link', {
      name: /powered by/i,
    });
    expect(link).toBeInTheDocument();
  });
});
