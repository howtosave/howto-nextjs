// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import type { GetAppState } from './store';
import { UsersPermissionsRegisterResponse } from './hydrogen-auth-api';

export declare type HydrogenQueryError = {
  status: number;
  data: {
    error: {
      status: number;
      name: string;
      message: string;
      details?: any;
    },
  },
};

export {
  GetAppState
};

export const getAuthToken = (getState: GetAppState) => 
  (getState().api.mutations.postAuthLocal?.data as UsersPermissionsRegisterResponse)?.jwt;
