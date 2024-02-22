import { Customer } from './customer';
import { ILocation } from './location';

interface Product {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  plain_image: string;
  in_stock: boolean;
  sale_price: number;
  nere_price: number | null;
  lowest_online_price: number;
  supplier_price: number;
  hasMinQuantity: boolean;
  min_quantity: number | null;
  sku: string | null;
  price: number;
  quantity: number;
  unit: string;
  isActive: boolean;
  hasVariants: boolean;
  variants: any[] | null;
  isFeaturedProduct: boolean;
  desired_margin: number;
}

interface Group {
  id: number;
  uid: string;
  join_code: string;
  isPaid: boolean;
  type: string;
  created_at: string;
  status: string;
  total_quantity: number;
  product: Product;
}

export interface Orders {
  id: number;
  uuid: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
  reference: string;
  referral_code: string | null;
  voucher_code: string;
  payment_channel: string;
  created_at: string;
  updated_at: string;
  groups: Group[];
}

export type GetOrdersResponse = {
  status: string;
  data: {
    map(
      arg0: (item: Orders) => import('react').JSX.Element
    ): import('react').ReactNode;
    orders: Orders[];
  };
};
