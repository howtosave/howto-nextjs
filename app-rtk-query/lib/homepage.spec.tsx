import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { server } from '~test/helpers';
import {
  hydrogenApi,
  useGetHomepageQuery,
} from './hydrogen-api';

const updateTimeout = 5000;

describe('# Auth', () => {
  const wrapper: React.FC<any> = ({ children }) => <ApiProvider api={hydrogenApi}>{children}</ApiProvider>;

  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('## GET /homepage', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetHomepageQuery({}), { wrapper });
    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);

    await waitForNextUpdate({ timeout: updateTimeout });

    const {
      data,
      isLoading,
      isError,
      isSuccess,
    } = result.current;
    expect(data).toBeDefined();
    expect(data?.data).toBeDefined();
    expect(data?.meta).toBeDefined();
    expect(isLoading).toBe(false);
    expect(isError).toBe(false);
    expect(isSuccess).toBe(true);
  });
});
