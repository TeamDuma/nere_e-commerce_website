import { ILocation } from '@/types/location';
import { apiSlice } from '.';
import endpoints from '../../endpoints';

const locationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getlocations: builder.query<ILocation[], void>({
      query: () => {
        return endpoints.activeLocations;
      },
    }),
  }),
});

export const { useGetlocationsQuery } = locationsApi;
