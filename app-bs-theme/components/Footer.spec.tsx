import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('# Footer:Components', () => {
  it('renders links', () => {
    render(<Footer />);

    const link = screen.getByText(/copyright/i);
    expect(link).toBeInTheDocument();
  });
});
