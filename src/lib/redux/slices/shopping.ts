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
      const cartItem = state.cartItems.find(
        (existingItem) => existingItem.id === item.id
      );

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

    increaseQuantity: (state, { payload: id }: PayloadAction<number>) => {
      const existingProduct = state.cartItems.find((item) => item.id === id);
      console.log('existingProduct', current(existingProduct));
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
    decreaseQuantity: (state, { payload: id }: PayloadAction<number>) => {
      const existingProduct = state.cartItems.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.cartQuantity = Math.max(
          existingProduct.cartQuantity!! - 1,
          1
        );
      }
    },
    deleteProduct: (state, { payload: id }: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
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
