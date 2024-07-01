import endpoints from '@/lib/endpoints';
import { TReferralClickRequest } from '@/types/referral';
import { axiosInstance } from '@/utils/api.utils';

export const sendReferralClick = async (body: TReferralClickRequest) => {
  return axiosInstance.post(endpoints.clickReferral, body);
};
