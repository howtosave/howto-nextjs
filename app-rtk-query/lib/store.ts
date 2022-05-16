import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { 
  hydrogenApi, 
} from './hydrogen-api';
import { 
  hydrogenAuthApi 
} from './hydrogen-auth-api';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [hydrogenApi.reducerPath]: hydrogenApi.reducer,
    [hydrogenAuthApi.reducerPath]: hydrogenAuthApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // TODO: fix multiple apis issue
  //middleware: (getDefaultMiddleware) =>
  //  getDefaultMiddleware().concat(hydrogenApi.middleware),//.concat(hydrogenAuthApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type GetAppState = typeof store.getState;
export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
