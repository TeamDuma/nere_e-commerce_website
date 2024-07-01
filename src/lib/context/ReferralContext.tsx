'use client';
import { PAGES_INFO } from '@/constants/pagesInfo';
import React, { createContext, useEffect, ReactNode } from 'react';
import { fetchIPAddress } from '../user';
import { sendReferralClick } from '../redux/services/referral';
import { usePathname, useSearchParams } from 'next/navigation';

type ReferralContextType = {};

const ReferralContext = createContext<ReferralContextType | null>(null);

export const ReferralProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const agt_code = searchParams.get('agt_code');

  useEffect(() => {
    const pageInfo = PAGES_INFO[pathname];
    if (!agt_code || !pageInfo) return;

    const handleReferralClick = async () => {
      try {
        localStorage.setItem('agt_code', agt_code);
        const ip_address = await fetchIPAddress();
        await sendReferralClick({
          type: pageInfo.clickType,
          referral_code: agt_code,
          ip_address,
        });
      } catch (error) {}
    };
    handleReferralClick();
  }, [pathname]);

  return (
    <ReferralContext.Provider value={{}}>{children}</ReferralContext.Provider>
  );
};
