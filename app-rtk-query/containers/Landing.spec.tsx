import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { server, _mockUser, resGetHomepage } from '~test/helpers';
import { Landing } from './Landing';
import {
  hydrogenApi,
} from '~lib/hydrogen-api';

describe('# Landing:Containers', () => {
  const wrapper: React.FC<any> = ({ children }) => <ApiProvider api={hydrogenApi}>{children}</ApiProvider>

  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders links', async () => {
    render(<Landing />, { wrapper });

    // should render 'Loading'
    expect(screen.queryByText(/loading/i)).toBeInTheDocument();

    // wait for rendering 'Landing'
    await waitFor(() => screen.findByRole('button'));

    // should render title
    expect(screen.queryByText(resGetHomepage.data.attributes.title)).toBeInTheDocument();

    // click 'Refetch'
    fireEvent.click(screen.getByRole('button', { name: /refetch/i }));

    // should render 'Loading'
    expect(screen.queryByText(/loading/i)).toBeInTheDocument();

    // wait for rendering 'Landing'
    await waitFor(() => screen.findByRole('button'));

    // should render title
    expect(screen.queryByText(resGetHomepage.data.attributes.title)).toBeInTheDocument();
  });
});
