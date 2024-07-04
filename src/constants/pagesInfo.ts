import { ClickType } from '@/types/referral';

interface IPagesInfo {
  title: string;
  clickType: ClickType;
}

export const PAGES_INFO: Record<string, IPagesInfo> = {
  '/': { title: 'Landing Page', clickType: ClickType.LANDING_PAGE },
  '/home': { title: 'Landing Page', clickType: ClickType.LANDING_PAGE },
  '/sustainability': {
    title: 'Landing Page',
    clickType: ClickType.LANDING_PAGE,
  },
  '/contact-us': { title: 'Landing Page', clickType: ClickType.LANDING_PAGE },
  '/products': { title: 'Product Page', clickType: ClickType.PRODUCTS_PAGE },
  '/buy': { title: 'Buy Button', clickType: ClickType.BUY_BUTTON },
  '/whatsapp': { title: 'Whatsapp', clickType: ClickType.WHATSAPP },
};
