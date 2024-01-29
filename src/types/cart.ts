import { GroupType } from './group';
import { Product } from './product';

export interface CartItem extends Product, CartCheckoutItem {
  totalQuantity: number;
}

export type CartCheckoutBody = {
  customerID: number;
  totalAmount: number;
  cartObject: CartCheckoutItem[];
  voucherCode: string;
};

export interface CartCheckoutItem {
  cartQuantity: number;
  productID: number;
  isGroupJoiner: boolean;
  groupID?: number;
  locationID?: number;
  type: GroupType;
}

export type CartUpdateBody = {
  customer_id: number;
  cart_object: CartCheckoutItem[];
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
