export enum ClickType {
  LANDING_PAGE = 'Landing Page',
  PRODUCTS_PAGE = 'Products Page',
  BUY_BUTTON = 'Buy Button',
  WHATSAPP = 'Whatsapp',
}

export type TReferralClickRequest = {
  type: ClickType;
  referral_code: string;
  ip_address?: string;
  phone?: string;
  email?: string;
};
