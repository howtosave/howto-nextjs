import { emptySplitApi as api } from './empty-api';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postAuthLocalRegister: build.mutation<
      PostAuthLocalRegisterApiResponse,
      PostAuthLocalRegisterApiArg
    >({
      query: (queryArg) => ({
        url: '/auth/local/register',
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getAuthEmailConfirmation: build.query<
      GetAuthEmailConfirmationApiResponse,
      GetAuthEmailConfirmationApiArg
    >({
      query: () => ({ url: '/auth/email-confirmation' }),
    }),
    postAuthSendEmailConfirmation: build.mutation<
      PostAuthSendEmailConfirmationApiResponse,
      PostAuthSendEmailConfirmationApiArg
    >({
      query: (queryArg) => ({
        url: '/auth/send-email-confirmation',
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getUsersPermissionsSearchById: build.query<
      GetUsersPermissionsSearchByIdApiResponse,
      GetUsersPermissionsSearchByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/users-permissions/search/${queryArg.id}`,
      }),
    }),
    getConnect: build.query<GetConnectApiResponse, GetConnectApiArg>({
      query: (queryArg) => ({ url: '/connect/*' }),
    }),
    postAuthLocal: build.mutation<
      PostAuthLocalApiResponse,
      PostAuthLocalApiArg
    >({
      query: (queryArg) => ({
        url: '/auth/local',
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getAuthByProviderCallback: build.query<
      GetAuthByProviderCallbackApiResponse,
      GetAuthByProviderCallbackApiArg
    >({
      query: (queryArg) => ({ url: `/auth/${queryArg.provider}/callback` }),
    }),
    postAuthForgotPassword: build.mutation<
      PostAuthForgotPasswordApiResponse,
      PostAuthForgotPasswordApiArg
    >({
      query: (queryArg) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postAuthResetPassword: build.mutation<
      PostAuthResetPasswordApiResponse,
      PostAuthResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as hydrogenAuthApi };
export type PostAuthLocalRegisterApiResponse =
  /** status 200 Successfully register a user */ UsersPermissionsRegisterResponse;
export type PostAuthLocalRegisterApiArg = {
  body: {
    username: string;
    email: string;
    password: string;
  };
};
export type GetAuthEmailConfirmationApiResponse = unknown;
export type GetAuthEmailConfirmationApiArg = void;
export type PostAuthSendEmailConfirmationApiResponse =
  /** status 200 Successfully sent email */ Blob;
export type PostAuthSendEmailConfirmationApiArg = {
  body: {
    email: string;
  };
};
export type GetUsersPermissionsSearchByIdApiResponse = unknown;
export type GetUsersPermissionsSearchByIdApiArg = {
  /** A string matching a user's email or username */
  id: string;
};
export type GetConnectApiResponse = unknown;
export type GetConnectApiArg = {
  /** The name of the provider you want to use */
  provider: string;
};
export type PostAuthLocalApiResponse =
  /** status 200 Response */ UsersPermissionsRegisterResponse;
export type PostAuthLocalApiArg = {
  /** The identifier param can either be an email or a username */
  body: {
    identifier: string;
    password: string;
  };
};
export type GetAuthByProviderCallbackApiResponse =
  /** status 200 Successfull redirection after approving a provider */ UsersPermissionsRegisterResponse;
export type GetAuthByProviderCallbackApiArg = {
  /** The provider used to authenticate your user */
  provider: string;
};
export type PostAuthForgotPasswordApiResponse = unknown;
export type PostAuthForgotPasswordApiArg = {
  body: {
    email?: string;
    url?: string;
  };
};
export type PostAuthResetPasswordApiResponse =
  /** status 200 response */ UsersPermissionsRegisterResponse;
export type PostAuthResetPasswordApiArg = {
  body: {
    code: string;
    password: string;
    passwordConfirmation: string;
  };
};
export type UsersPermissionsRegisterResponse = {
  jwt?: string;
  user?: {
    username?: string;
    email?: string;
    provider?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: {
      name?: string;
      description?: string;
      type?: string;
    };
  };
};
export const {
  usePostAuthLocalRegisterMutation,
  useGetAuthEmailConfirmationQuery,
  usePostAuthSendEmailConfirmationMutation,
  useGetUsersPermissionsSearchByIdQuery,
  useGetConnectQuery,
  usePostAuthLocalMutation,
  useGetAuthByProviderCallbackQuery,
  usePostAuthForgotPasswordMutation,
  usePostAuthResetPasswordMutation,
} = injectedRtkApi;
