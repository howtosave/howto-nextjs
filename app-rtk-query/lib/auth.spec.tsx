import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { server, _mockUser } from '~test/helpers';
import {
  hydrogenAuthApi,
  usePostAuthLocalRegisterMutation,
  usePostAuthLocalMutation,
} from './hydrogen-auth-api';

const updateTimeout = 5000;

describe('# Auth', () => {
  const wrapper: React.FC<any> = ({ children }) => <ApiProvider api={hydrogenAuthApi}>{children}</ApiProvider>;

  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('## local/register', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePostAuthLocalRegisterMutation(), { wrapper });
    const [localRegister] = result.current;
    act(() => {
      localRegister({
        body: { 
          username: _mockUser.username,
          email: _mockUser.email,
          password: _mockUser.password,
      }});
    });

    const initialResponse = result.current[1];
    expect(initialResponse.isLoading).toBe(true);

    await waitForNextUpdate({ timeout: updateTimeout });

    const {
      data,
      isLoading,
      isError,
      isSuccess,
    } = result.current[1];
    expect(data).toBeDefined();
    expect(data?.jwt).toBeDefined();
    expect(data?.user).toBeDefined();
    expect(isLoading).toBe(false);
    expect(isError).toBe(false);
    expect(isSuccess).toBe(true);
  });
});
