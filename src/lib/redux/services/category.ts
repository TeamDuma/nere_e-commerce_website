import { GetCategoriesResponse } from '@/types/category';
import { apiSlice } from '.';
import endpoints from '../../endpoints';

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<GetCategoriesResponse, void>({
      query: () => {
        return endpoints.getCategories;
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
