import { Group, GroupType } from './group';
import { Product } from './product';

export interface CartItem extends Product, CartCheckoutItem {
  totalQuantity?: number;
}

export type CartCheckoutBody = {
  customerID: number;
  totalAmount: number;
  cartObject: CartCheckoutItem[];
  voucherCode: string;
};

export type getDiscountAmountBody = {
  customer_uid: number;
  total_amount: number;
  voucher_code: string;
};

export interface CartCheckoutItem {
  cartQuantity: number;
  productID: number;
  isGroupJoiner: boolean;
  groupID?: number;
  locationID?: number;
  type?: GroupType;
}

export type CartUpdateBody = {
  customer_id: number;
  cart_object: CartCheckoutItem[];
};

export type OrderConfirmationResponse = {
  status: 'success' | 'pending';
  message?: string;
  data?: {
    groups: Group[];
    amount: number;
    total_items: number;
  };
};

export type GetDiscountAmountResponse = {
  status: string;
  data: {
    discountAmount: number;
    discountType: number;
    discount_value: number;
    voucherCode: string;
  };
};

export const transformToCartCheckoutItem = (
  item: CartItem,
  locationID?: number
): CartCheckoutItem => ({
  cartQuantity: item.cartQuantity,
  productID: item.id,
  isGroupJoiner: item.isGroupJoiner,
  groupID: item.groupID,
  locationID,
  type: item.type,
});
