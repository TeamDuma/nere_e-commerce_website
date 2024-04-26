'use client';

import { selectShopping } from '@/lib/redux/slices/shopping';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import CartItemsList from './CartItemsList';
import OrderSummarySection from './OrderSummarySection';

export type GetDiscountAmountBody = {
  customer_uid: number;
  total_amount: number;
  voucher_code: string;
};

const CartComponent = () => {
  const { cartItems } = useSelector(selectShopping);

  const calculateSavings = (cartItems: any[]) => {
    return cartItems.reduce((totalSavings, item) => {
      const totalOldPrice = item.price * item.cartQuantity;
      const totalNewPrice = item.sale_price * item.cartQuantity;
      const itemSavings = totalOldPrice - totalNewPrice;
      return totalSavings + itemSavings;
    }, 0);
  };

  const totalSavings = calculateSavings(cartItems);

  return (
    <div className=' h-full '>
      <div className=' mx-auto px-4'>
        <div className='h-20 gap-5 rounded-lg border bg-gray-50 p-2 py-2 shadow-xl md:mb-2 md:flex md:w-1/2 md:items-center'>
          <h1 className='ml-2 text-lg text-[#1A464C] '>
            You have saved GHS {totalSavings} on this purchase!
          </h1>
        </div>{' '}
        <div className='flex flex-col gap-4 md:flex-row'>
          <CartItemsList />
          <OrderSummarySection />
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
