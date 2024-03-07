import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ForgotaPsswordTokenResponse,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  IphoneVerifyRequest,
  IphoneVerifyResponse,
  IphoneVerifyTokenRequest,
  IphoneVerifyTokenResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from '@/types/customer';
import { apiSlice } from '.';
import endpoints from '../../endpoints';
import { GetOrdersResponse } from '@/types/orders';

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
    getOrders: builder.query<GetOrdersResponse, string>({
      query: (uid) => {
        return endpoints.getOrders(uid);
      },
    }),
    forgotpassword: builder.mutation<
      ForgotPasswordResponse,
      ForgotPasswordRequest
    >({
      query: (data) => ({
        url: endpoints.forgotPassword,
        method: 'POST',
        body: data,
      }),
    }),
    forgotpasswordToken: builder.query<ForgotaPsswordTokenResponse, string>({
      query: (token) => ({
        url: endpoints.getPasswordToken(token),
        method: 'GET',
      }),
    }),
    resetPassword: builder.mutation<
      ResetPasswordResponse,
      ResetPasswordRequest
    >({
      query: (data) => ({
        url: endpoints.resetPassword,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useForgotpasswordMutation,
  usePhoneVerifyMutation,
  usePhoneVerifyTokenMutation,
  useLazyForgotpasswordTokenQuery,
  useLazyGetOrdersQuery,
  useResetPasswordMutation,
} = customerApi;
