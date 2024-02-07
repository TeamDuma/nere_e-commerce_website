'use client';
import {
  useCheckoutCartMutation,
  useUpdateCartMutation,
} from '@/lib/redux/services/cart';
import { selectShopping } from '@/lib/redux/slices/shopping';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

import CartComponent from './components/CartComponent';

const Cart = () => {
  const router = useRouter();

  const [registrationModalVisible, setRegistrationModalVisible] =
    useState(false);

  const { cartItems, selectedLocationId, userInfo } =
    useSelector(selectShopping);

  return (
    <div className='bg-[#FFFFFF]-100 my-4 ml-5 min-h-screen '>
      {cartItems.length === 0 ? (
        <div className='text-center text-5xl text-black'>
          Your cart is empty
          <Link href='/products'>
            <h1 className='my-5 text-[#F58929]'>Go to the Shop</h1>
          </Link>
        </div>
      ) : (
        <>
          <CartComponent />
        </>
      )}
    </div>
  );
};

export default Cart;
