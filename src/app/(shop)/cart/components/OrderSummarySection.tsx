'use client';
import {
  useCheckoutCartMutation,
  useLazyGetDiscountAmountQuery,
  useUpdateCartMutation,
} from '@/lib/redux/services/cart';
import {
  deleteProduct,
  selectShopping,
} from '@/lib/redux/slices/shopping';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { CartItem, transformToCartCheckoutItem } from '@/types/cart';

import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMapPin, FaSpinner, FaTags } from 'react-icons/fa';
import LoginModal from '@/components/common/LoginModal';
import { ImSpinner6 } from 'react-icons/im';
import RegistrationModal from '@/components/common/RegisterModal';
import PostHogClient from '@/app/posthog';
import PromoCodeSection from './PromoCodeSection';

export type GetDiscountAmountBody = {
  customer_uid: number;
  total_amount: number;
  voucher_code: string;
};

const OrderSummarySection = () => {
  const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const { cartItems, selectedLocationId, userInfo } =
    useSelector(selectShopping);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.sale_price * item.cartQuantity;
    }, 0);
  };

  const calculateTotalAfterDiscount = () => {
    let total = calculateTotal();
    if (isPromoCodeApplied && discountAmount > 0) {
      total -= discountAmount;
    }
    return total;
  };






  return (
    <div className='md:w-2/5'>
        
    <div className='gap-5 rounded-lg border bg-gray-50 p-3 shadow-xl'>
      <p className='text-l font-medium	 text-[#1A464C]'>
        Your order summary
      </p>
      <hr className='h-0.5 bg-gray-200' />

      <div className='my-2 flex justify-between'></div>
      <div className='mb-2 flex justify-between'>
        <p className='text-sm font-normal text-[#979797] '>
          Total items ({cartItems.length})
        </p>
        <p className='text-sm font-normal text-[#979797] '>
          GH¢ {calculateTotal().toFixed(2)}
        </p>
      </div>
      <div className='mb-2 flex justify-between'>
        <p className='text-sm font-normal text-[#979797] '>
          Delivery fee
        </p>
        <p className='text-sm font-normal text-[#979797] '>GH¢ 0.00 </p>
      </div>

      <div>
        {isPromoCodeApplied ? (
          <div className='mb-2 flex justify-between'>
            <p className='text-sm font-normal text-[#979797]'>
              Discount_amount
            </p>
            <p className='text-sm font-normal text-[#979797]'>
              GH¢ {discountAmount.toFixed(2)}
            </p>
          </div>
        ) : null}
      </div>

      <hr className='my-2' />
      <div className='mb-2 flex justify-between'>
        <span className='font-semibold'>Total</span>
        <span className='font-semibold'>
          {' '}
          GH¢ {calculateTotalAfterDiscount().toFixed(2)}
        </span>
      </div>
     
       <PromoCodeSection/>
         
      </div>
   
  </div>
  );
};

export default OrderSummarySection;
