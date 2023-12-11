import { IRegisterRequest, IRegisterResponse } from '@/types/customer';
import { apiSlice } from '.';
import endpoints from '../../endpoints';

interface ILoginRequest {
  email: string;
  password: string;
}
interface ILoginResponse {}
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
