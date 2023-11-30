"use client"
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteProduct } from '@/redux/shoppingSlice';
// import Cart from '@/app/cart/Page';
const Cart = () => {
    const dispatch = useDispatch();
  const  {cartItems}  = useSelector((state: any) => state.shopping);
console.log('cartItems',cartItems)




  return (
  <div>
    <div>cart</div>
  <div className="flex items-center text-lg w-20 justify-between">
  <span
     onClick={() => dispatch(deleteProduct(cartItems))}
    className="cursor-pointer"
  >
    _
  </span>
  <span
     onClick={() => dispatch(addToCart(cartItems))}
    className="cursor-pointer"
  >
    +
  </span>
</div>
</div>
  );
};

export default Cart;
