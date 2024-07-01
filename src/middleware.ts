import { NextRequest } from 'next/server';
import { sendReferralClick } from './lib/redux/services/referral';
import { PAGES_INFO } from './constants/pagesInfo';
import { getIPAddress } from './lib/user';

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const pageInfo = PAGES_INFO[pathname];
  const agt_code = req.nextUrl.searchParams.get('agt_code');

  if (agt_code && pageInfo) {
    try {
      localStorage.setItem('agt_code', agt_code);
      const ip = getIPAddress();
      await sendReferralClick({
        type: pageInfo.clickType,
        referral_code: agt_code,
        ip_address: ip,
      });
    } catch (error) {}
  }
}

// Exclude these from the middleware
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|registration|reset-password|$).*)',
  ],
};
