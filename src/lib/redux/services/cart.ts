import { apiSlice } from '.';
import endpoints from '../../endpoints';

const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateCart: builder.mutation({
      query: (data) => ({
        url: endpoints.checkoutCart,
        method: 'PATCH',
        body: data,
      }),
    }),
    checkoutCart: builder.mutation({
      query: (data) => ({
        url: endpoints.checkoutCart,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCheckoutCartMutation, useUpdateCartMutation } = cartApi;
