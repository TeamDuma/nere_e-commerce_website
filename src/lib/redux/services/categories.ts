import { apiSlice } from '.';
import endpoints from '../../endpoints';

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({
      query: () => {
        return endpoints.getCategories;
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
