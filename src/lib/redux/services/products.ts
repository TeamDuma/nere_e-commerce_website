import { ProductsResponse } from '@/types/products';
import { apiSlice } from '.';
import endpoints from '../../endpoints';

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getActiveProducts: builder.query<ProductsResponse, void>({
      query: () => {
        return endpoints.getActiveProducts;
      },
    }),
    getProduct: builder.query<any, number>({
      query: (id) => {
        return endpoints.getProduct(id);
      },
    }),
  }),
});

export const { useGetActiveProductsQuery, useLazyGetProductQuery } = productApi;
