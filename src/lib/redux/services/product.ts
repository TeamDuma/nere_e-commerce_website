import {
  GetActiveProductsResponse,
  GetCategoryProductResponse,
  GetSearchProductsResponse,
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
    getCategoryProduct: builder.query<GetCategoryProductResponse, string>({
      query: (slug) => {
        return endpoints.getCategoryProduct(slug);
      },
    }),
    getSearchProducts: builder.query<GetSearchProductsResponse, string>({
      query: (searchQuery) => {
        return endpoints.getSearchProducts(searchQuery);
      },
    }),
  }),
});

export const {
  useGetActiveProductsQuery,
  useLazyGetProductQuery,
  useLazyGetCategoryProductQuery,
  useLazyGetSearchProductsQuery,
} = productApi;
