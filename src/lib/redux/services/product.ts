import {
  GetActiveProductsResponse,
  getCategoryProductResponse,
} from '@/types/product';
import { apiSlice } from '.';
import endpoints from '../../endpoints';
import { GetProductResponse } from '@/types/product';

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getActiveProducts: builder.query<GetActiveProductsResponse, void>({
      query: () => {
        return endpoints.getActiveProducts;
      },
    }),
    getProduct: builder.query<GetProductResponse, number>({
      query: (id) => {
        return endpoints.getProduct(id);
      },
    }),
    getCategoryProduct: builder.query<getCategoryProductResponse, string>({
      query: (slug) => {
        return endpoints.getCategoryProduct(slug);
      },
    }),
  }),
});

export const {
  useGetActiveProductsQuery,
  useLazyGetProductQuery,
  useLazyGetCategoryProductQuery,
} = productApi;
