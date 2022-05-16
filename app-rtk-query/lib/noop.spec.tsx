import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { setupApiStore, server } from '~test/helpers';
import {
  hydrogenApi,
  useGetNoopsQuery,
  usePostNoopsMutation,
  useGetNoopsByIdQuery,
  usePutNoopsByIdMutation,
  useDeleteNoopsByIdMutation,
  usePostNoopsByIdLocalizationsMutation,
} from './hydrogen-api';

const updateTimeout = 5000;
const storeRef = setupApiStore(hydrogenApi);

describe('# Noop', () => {
  const wrapper: React.FC<any> = ({ children }) => <ApiProvider api={hydrogenApi}>{children}</ApiProvider>;

  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('## find', async () => {
    await storeRef.store.dispatch<any>(
      hydrogenApi.endpoints.getNoops.initiate({ pagination: { page: 1, pageSize: 5 } })
    ).then((result: any) => {
      const {
        data: res,
        isLoading,
        isError,
        isSuccess,
      } = result;

      expect(res).toBeDefined();
      expect(isLoading).toBe(false);
      expect(isError).toBe(false);
      expect(isSuccess).toBe(true);
    });
  });

  it('## find -- renderHook', async () => {
    const {
      result, waitForNextUpdate
    } = renderHook(() => useGetNoopsQuery({ pagination: { page: 1, pageSize: 5 } }), { wrapper });

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
    expect(isLoading).toBe(false);
    expect(isError).toBe(false);
    expect(isSuccess).toBe(true);
  });
});
