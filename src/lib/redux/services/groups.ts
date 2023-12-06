import { ProductsResponse } from '@/types/products';
import { apiSlice } from '.';
import endpoints from '../../endpoints';

const groupApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGroup: builder.query<any, string>({
      query: (id) => {
        return endpoints.getGroup(id);
      },
    }),
    getGroups: builder.query<any, void>({
      query: () => {
        return endpoints.getGroups;
      },
    }),
    getPublicOngoingGroups: builder.query<any, void>({
      query: () => {
        return endpoints.getPublicOngoingGroups;
      },
    }),
  }),
});

export const {
  useLazyGetGroupQuery,
  useGetGroupsQuery,
  useGetPublicOngoingGroupsQuery,
} = groupApi;
