// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery, retry, BaseQueryFn, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { FetchArgs, FetchBaseQueryMeta  } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { RetryOptions } from '@reduxjs/toolkit/dist/query/retry';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { getAuthToken, GetAppState, HydrogenQueryError } from './api-utils';

const BASE_URL = 'http://localhost:1337/api';
// initialize an empty api service that we'll inject endpoints into later as needed

const staggeredBaseQueryWithBailOut: BaseQueryFn<
  string | FetchArgs,
  unknown,
  HydrogenQueryError,
  RetryOptions
> = retry(
  async (args: string | FetchArgs, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl:BASE_URL,
      prepareHeaders: (headers, { getState }) => {
        // By default, if we have a token in the store, let's use that for authenticated requests
        const jwtToken = getAuthToken(getState as GetAppState);
        if (jwtToken) {
          headers.set('Authorization', `Bearer ${jwtToken}`);
        }
        return headers;
      },
    })(
      args,
      api,
      extraOptions
    ) as QueryReturnValue<unknown, HydrogenQueryError, FetchBaseQueryMeta>;

    // bail out of re-tries immediately if unauthorized,
    // because we know successive re-retries would be redundant
    if (result.error?.status === 401) {
      retry.fail(result.error);
    }
    return result;
  },
  {
    maxRetries: 3,
  }
);

export const emptySplitApi = createApi({
  baseQuery: staggeredBaseQueryWithBailOut,
  endpoints: () => ({}),
});
