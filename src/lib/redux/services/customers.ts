import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  IphoneVerifyRequest,
  IphoneVerifyResponse,
  IphoneVerifyTokenRequest,
  IphoneVerifyTokenResponse,
} from '@/types/customer';
import { apiSlice } from '.';
import endpoints from '../../endpoints';

const customerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<ILoginResponse, ILoginRequest>({
      query: (data) => ({
        url: endpoints.signIn,
        method: 'POST',
        body: data,
      }),
    }),
    signUp: builder.mutation<IRegisterResponse, IRegisterRequest>({
      query: (data) => ({
        url: endpoints.signup,
        method: 'POST',
        body: data,
      }),
    }),
    phoneVerify: builder.mutation<IphoneVerifyResponse, IphoneVerifyRequest>({
      query: ({ token }) => ({
        url: endpoints.phoneVerify,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    phoneVerifyToken: builder.mutation<
      IphoneVerifyTokenResponse,
      IphoneVerifyTokenRequest
    >({
      query: ({ token, code }) => ({
        url: endpoints.phoneVerifyToken,
        method: 'POST',
        body: { code },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  usePhoneVerifyMutation,
  usePhoneVerifyTokenMutation,
} = customerApi;
