import {
  GetGroupResponse,
  GetGroupsResponse,
  GetPublicOngoingGroupsResponse,
} from '@/types/group';
import { apiSlice } from '.';
import endpoints from '../../endpoints';

const groupApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGroup: builder.query<GetGroupResponse, string>({
      query: (id) => {
        return endpoints.getGroup(id);
      },
    }),
    getGroups: builder.query<GetGroupsResponse, void>({
      query: () => {
        return endpoints.getGroups;
      },
    }),
    getPublicOngoingGroups: builder.query<GetPublicOngoingGroupsResponse, void>(
      {
        query: () => {
          return endpoints.getPublicOngoingGroups;
        },
        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg;
        },
      }
    ),
  }),
});

export const {
  useLazyGetGroupQuery,
  useGetGroupsQuery,
  useGetPublicOngoingGroupsQuery,
  useLazyGetPublicOngoingGroupsQuery,
} = groupApi;
