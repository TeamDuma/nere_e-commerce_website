import { GetlocationsResponse } from '@/types/location';
import { apiSlice } from '.';
import endpoints from '../../endpoints';

const locationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getlocations: builder.query<GetlocationsResponse, void>({
      query: () => {
        return endpoints.activeLocations;
      },
    }),
  }),
});

export const { useGetlocationsQuery } = locationsApi;
