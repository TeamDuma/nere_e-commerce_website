import { GetUserVouchersResponse } from '@/types/vouchers';
import { apiSlice } from '.';
import endpoints from '@/lib/endpoints';

const voucherApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsersVouchers: builder.query<GetUserVouchersResponse, string>({
      query: (id) => {
        return endpoints.getUsersVouchers(id);
      },
    }),
  }),
});

export const { useGetUsersVouchersQuery } = voucherApi;
