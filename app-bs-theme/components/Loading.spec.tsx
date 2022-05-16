import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('# Loading:Components', () => {
  it('renders spinner', () => {
    render(<Loading />);

    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
  });
});
