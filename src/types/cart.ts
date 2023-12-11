import { GroupType } from './group';
import { Product } from './product';

export interface CartItem extends Product, CartCheckoutItem {}

// POST /cart/checkout
export type CartCheckoutBody = {
  customerID: number;
  totalAmount: number;
  cartObject: CartCheckoutItem[];
};

export interface CartCheckoutItem {
  cartQuantity: number;
  productID: number;
  isGroupJoiner: boolean;
  groupID?: number;
  locationID?: number;
  type: GroupType;
}

// PATCH /cart/update
export type CartUpdateBody = {
  customer_id: number;
  cart_object: CartCheckoutItem[];
};

export const transformToCartCheckoutItem = (
  item: CartItem,
  locationID?: number
): CartCheckoutItem => {
  const isGroupProduct = item.isGroupJoiner;
  return {
    cartQuantity: item.cartQuantity,
    productID: isGroupProduct ? item.productID : item.id,
    isGroupJoiner: item.isGroupJoiner,
    groupID: item.groupID,
    locationID,
    type: item.type,
  };
};
