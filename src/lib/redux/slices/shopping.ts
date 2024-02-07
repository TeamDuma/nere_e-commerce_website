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
      const existingIndex = state.cartItems.findIndex(
        (existingItem) =>
          existingItem.id === item.id && existingItem.groupID === item.groupID
      );
      if (existingIndex !== -1) {
        state.cartItems[existingIndex].cartQuantity += quantity;
      } else {
        state.cartItems.push({ ...item, cartQuantity: quantity });
      }
    },

    increaseQuantity: (
      state,
      { payload }: PayloadAction<{ productId: number; groupId?: number }>
    ) => {
      const { productId, groupId } = payload;
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === productId && item.groupID === groupId
      );
      if (existingIndex !== -1) {
        state.cartItems[existingIndex].cartQuantity++;
      }
    },
    decreaseQuantity: (
      state,
      { payload }: PayloadAction<{ productId: number; groupId?: number }>
    ) => {
      const { productId, groupId } = payload;
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === productId && item.groupID === groupId
      );
      if (existingIndex !== -1) {
        state.cartItems[existingIndex].cartQuantity = Math.max(
          state.cartItems[existingIndex].cartQuantity - 1,
          1
        );
      }
    },
    deleteProduct: (
      state,
      { payload }: PayloadAction<{ productId: number; groupId?: number }>
    ) => {
      const { productId, groupId } = payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== productId || item.groupID !== groupId
      );
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
