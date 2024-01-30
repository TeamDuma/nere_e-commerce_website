import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import type { ReduxState } from '@/lib/redux';
import { CartItem } from '@/types/cart';
import { Location } from '@/types/product';

export interface IShoppingState {
  cartItems: CartItem[];
  userInfo: any;
  orderData: any[];
  selectedLocationId?: number;
  locations: Location[];
}

const initialState: IShoppingState = {
  cartItems: [],
  userInfo: null,
  orderData: [],
  selectedLocationId: undefined,
  locations: [],
};

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addToCart: (
      state,
      { payload }: PayloadAction<{ item: CartItem; quantity?: number }>
    ) => {
      const { item, quantity = 1 } = payload;
      const cartItem = state.cartItems.find((existingItem) => {
        if (item.isGroupJoiner) {
          return (
            existingItem.id === item.id && existingItem.groupID === item.groupID
          );
        }
        return existingItem.id === item.id;
      });

      if (cartItem) {
        if (cartItem.hasMinQuantity) {
          const minQuantity = cartItem.min_quantity ?? 0;
          cartItem.cartQuantity = Math.min(
            cartItem.cartQuantity + quantity,
            minQuantity
          );
        } else {
          cartItem.cartQuantity += quantity;
        }
      } else {
        state.cartItems.push({ ...item, cartQuantity: quantity });
      }
    },

    increaseQuantity: (
      state,
      { payload }: PayloadAction<{ productId: number; groupId?: number }>
    ) => {
      const { productId, groupId } = payload;
      const existingProduct = state.cartItems.find((item) => {
        return groupId
          ? item.id === productId && item.groupID === groupId
          : item.id === productId;
      });
      if (existingProduct) {
        if (existingProduct.hasMinQuantity) {
          existingProduct.cartQuantity = Math.min(
            existingProduct.cartQuantity!! + 1,
            existingProduct.min_quantity!!
          );
        } else {
          existingProduct.cartQuantity = Math.max(
            existingProduct.cartQuantity!! + 1
          );
        }
      }
    },
    decreaseQuantity: (
      state,
      { payload }: PayloadAction<{ productId: number; groupId?: number }>
    ) => {
      const { productId, groupId } = payload;
      const existingProduct = state.cartItems.find((item) => {
        return groupId
          ? item.id === productId && item.groupID === groupId
          : item.id === productId;
      });
      if (existingProduct) {
        existingProduct.cartQuantity = Math.max(
          existingProduct.cartQuantity!! - 1,
          1
        );
      }
    },
    deleteProduct: (
      state,
      { payload }: PayloadAction<{ productId: number; groupId?: number }>
    ) => {
      const { productId, groupId } = payload;
      state.cartItems = state.cartItems.filter((item) => {
        return groupId
          ? `${item.id}-${item.groupID}` !== `${productId}-${groupId}`
          : item.id !== productId;
      });
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
    saveOrder: (state, action) => {
      state.orderData = action.payload;
    },
    resetOrder: (state) => {
      state.orderData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    setSelectedLocationId: (state, action: PayloadAction<number | null>) => {
      state.selectedLocationId =
        action.payload !== null ? action.payload : undefined;
    },

    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  saveOrder,
  resetOrder,
  addUser,
  deleteUser,
  setSelectedLocationId,
  setLocations,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;

export const selectShopping = (state: ReduxState) => state.shopping;
