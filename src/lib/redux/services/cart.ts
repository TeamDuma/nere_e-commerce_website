import {
  CartCheckoutBody,
  CartUpdateBody,
  GetDiscountAmountResponse,
  OrderConfirmationResponse,
  GetDiscountAmountBody,
} from '@/types/cart';
import { apiSlice } from '.';
import endpoints from '../../endpoints';

// TODO: Type responses
const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateCart: builder.mutation<any, CartUpdateBody>({
      query: (data) => ({
        url: endpoints.updateCart,
        method: 'PATCH',
        body: data,
      }),
    }),
    checkoutCart: builder.mutation<any, CartCheckoutBody>({
      query: (data) => ({
        url: endpoints.checkoutCart,
        method: 'POST',
        body: data,
      }),
    }),
    getOrderConfirmation: builder.query<OrderConfirmationResponse, string>({
      query: (reference) => ({
        url: endpoints.getOrderConfirmation(reference),
        method: 'GET',
      }),
    }),
    getDiscountAmount: builder.query<
      GetDiscountAmountResponse,
      GetDiscountAmountBody
    >({
      query: (data) => ({
        url: endpoints.getDiscountAmount,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useCheckoutCartMutation,
  useUpdateCartMutation,
  useLazyGetOrderConfirmationQuery,
  useGetOrderConfirmationQuery,
  useLazyGetDiscountAmountQuery,
} = cartApi;
