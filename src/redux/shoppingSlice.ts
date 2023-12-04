import { createSlice } from "@reduxjs/toolkit";


export interface CartItem {
  
  productID: number;
  cartQuantity: number;
  isGroupJoiner:boolean;
  locationID?:number;
  groupID?: number
  type:string;


 
}


export interface StateProps {
  cartItems: CartItem[],
  userInfo: any,
  orderData: any[],
}



const initialState:StateProps = {
  cartItems: [],
  userInfo: null,
  orderData: [],
};





export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item:CartItem) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === id);
    
      if (existingProduct) {
        if (existingProduct.hasMinQuantity) {
        existingProduct.min_quantity = Math.min(existingProduct.min_quantity + 1, existingProduct.minQuantity);
         console.log(" hasMinQuantity IncreaseQuantity.quantity",existingProduct.min_quantity)

        } else {
          console.log("has No MinQuantity")
          existingProduct.min_quantity = Math.max(existingProduct.min_quantity + 1);
          console.log("has No MinQuantity",existingProduct.min_quantity)


        }
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === id);

      if (existingProduct) {
         existingProduct.min_quantity = Math.max(existingProduct.min_quantity - 1, 1);
         console.log("decreaseQuantity.quantity",existingProduct.min_quantity)
      }
    },
    deleteProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
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
