import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { server, _mockUser, resAuthLocalRegister } from '~test/helpers';
import { Login } from './Login';
import {
  hydrogenAuthApi,
} from '~lib/hydrogen-auth-api';

describe('# Login:Containers', () => {
  const wrapper: React.FC<any> = ({ children }) => <ApiProvider api={hydrogenAuthApi}>{children}</ApiProvider>

  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('render login form', async () => {
    render(<Login />, { wrapper });

    // should render email and password input
    const emailInput = screen.getByRole<HTMLInputElement>('textbox', { name: /email address/i });
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText<HTMLInputElement>(/password/i);
    expect(passwordInput).toBeInTheDocument();

    // set values
    fireEvent.change(emailInput, { target: { value: _mockUser.email }});
    fireEvent.change(passwordInput, { target: { value: _mockUser.password }});
    expect(emailInput.value).toBe(_mockUser.email);
    expect(passwordInput.value).toBe(_mockUser.password);
  });

  it('render logged in', async () => {
    render(<Login />, { wrapper });
    const emailInput = screen.getByRole<HTMLInputElement>('textbox', { name: /email address/i });
    const passwordInput = screen.getByLabelText<HTMLInputElement>(/password/i);
    fireEvent.change(emailInput, { target: { value: _mockUser.email }});
    fireEvent.change(passwordInput, { target: { value: _mockUser.password }});

    // click login
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // should render 'Loading'
    expect(screen.queryByText(/loading/i)).toBeInTheDocument();

    // wait for login
    await waitFor(() => screen.findByRole('button',  { name: /logout/i }), { timeout: 3000 });

    // should render username
    expect(screen.queryByText(resAuthLocalRegister.user.username)).toBeInTheDocument();
  });
});
