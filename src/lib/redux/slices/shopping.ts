import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ReduxState } from '@/lib/redux';
import { Product } from '@/types/products';

// export interface CartItem {
//   id: string;
//   type: string;
//   productID: number;
//   cartQuantity: number;
//   isGroupJoiner: boolean;
//   locationID?: number;
//   groupID?: number;
//   quantity: number;
//   hasMinQuantity: number;
//   min_quantity: number;
//   minQuantity: number;
// }

export interface IShoppingState {
  cartItems: Product[];
  userInfo: any;
  orderData: any[];
}

const initialState: IShoppingState = {
  cartItems: [],
  userInfo: null,
  orderData: [],
};

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Product>) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += payload.quantity;
      } else {
        state.cartItems.push(payload);
      }
    },
    increaseQuantity: (state, { payload: id }: PayloadAction<number>) => {
      const existingProduct = state.cartItems.find((item) => item.id === id);
      if (existingProduct) {
        if (existingProduct.hasMinQuantity) {
          existingProduct.min_quantity = Math.min(
            existingProduct.min_quantity!! + 1,
            existingProduct.min_quantity!!
          );
        } else {
          existingProduct.min_quantity = Math.max(
            existingProduct.min_quantity!! + 1
          );
        }
      }
    },
    decreaseQuantity: (state, { payload: id }: PayloadAction<number>) => {
      const existingProduct = state.cartItems.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.min_quantity = Math.max(
          existingProduct.min_quantity!! - 1,
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
} = shoppingSlice.actions;
export default shoppingSlice.reducer;

export const selectShopping = (state: ReduxState) => state.shopping;
