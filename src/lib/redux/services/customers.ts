import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
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
  }),
});

export const { useSignInMutation, useSignUpMutation } = customerApi;
