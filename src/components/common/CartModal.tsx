import GroupRowRenderItem from '@/app/groups/components/GroupRowRenderItem';
import {
  useCheckoutCartMutation,
  useUpdateCartMutation,
} from '@/lib/redux/services/cart';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import {
  decreaseQuantity,
  increaseQuantity,
  selectShopping,
} from '@/lib/redux/slices/shopping';
import { Group } from 'next/dist/shared/lib/router/utils/route-regex';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, transformToCartCheckoutItem } from '@/types/cart';

interface CartModalProps {
  closeModal: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [checkoutCart] = useCheckoutCartMutation();
  const [updateCart] = useUpdateCartMutation();

  const { cartItems, selectedLocationId, userInfo } =
    useSelector(selectShopping);

  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];
  const modalRef = useRef();

  const handleClickOutside = (event: { target: any }) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.cartQuantity;
    }, 0);
  };

  const calculateSavingsPercentage = (oldPrice: number, newPrice: number) => {
    const savingsPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(savingsPercentage);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, closeModal]);

  return (
    <div
      ref={modalRef}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100%',
        width: '30%',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1001,
        overflowY: 'auto',
      }}
    >
      <div className='mb-5 rounded-lg md:w-full'>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className='my-4 flex items-center rounded-lg bg-[#FFF] p-4 shadow-md'
              style={{ width: '450px', height: '190px' }}
            >
              <div className='bg-[#F8F8F8 ] relative w-1/4 flex-shrink-0'>
                <img
                  src={item.plain_image}
                  alt={item.name}
                  className='h-32 w-full rounded-lg object-cover'
                  style={{ width: '100px' }}
                />
              </div>

              <div className='ml-4 flex-1'>
                <h2 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-bold text-[#298592]'>
                  {item.name}
                </h2>

                <div className='m-2'>
                  <div className='flex flex-col items-start'>
                    <div className='flex items-center'>
                      <span className=' font-extralight text-[#F58929]'>
                        {item?.sale_price}¢
                      </span>
                      <span
                        className='ml-3 text-[#C1C2C2]'
                        style={{ textDecoration: 'line-through' }}
                      >
                        {item?.price}¢
                      </span>
                    </div>

                    <div className='mt-2 flex items-center'>
                      <span className='rounded bg-[#8CCED7] p-1 text-xs font-bold text-white'>
                        Save{' '}
                        {calculateSavingsPercentage(
                          item.price,
                          item.sale_price
                        )}
                        %
                      </span>
                    </div>

                    <div className='mt-2 flex items-center justify-between md:flex md:space-x-6'>
                      <div className='flex items-center space-x-2 border-gray-100'>
                        <span
                          className='cursor-pointer rounded-l bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50'
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          {' '}
                          -{' '}
                        </span>
                        <input
                          id={`quantity-${item.id}`}
                          className='h-8 w-8  bg-white text-center text-xs outline-none'
                          type='number'
                          value={item.cartQuantity}
                          min='1'
                        />
                        <span
                          className='cursor-pointer rounded-r bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50'
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          {' '}
                          +{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className='mt-6 w-full rounded-lg'>
        {userInfo ? (
          <Link href='/cart'>
            <button
              type='button'
              className='mb-2 mt-5 flex w-full items-center justify-center rounded-lg bg-[#0097B2] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#0097B2]/90 focus:ring-4 focus:ring-[#0097B2]/50 dark:focus:ring-[#2557D6]/50'
            >
              <span>Checkout</span>
            </button>
          </Link>
        ) : (
          <div>
            <div className='flex items-center'>
              <p className='mx-4 mt-1 font-semibold text-[#1A464C]'>
                GH¢ {calculateTotal().toFixed(2)}
              </p>
              <button className='hover:bg-[#298592]-950 mx-4 mt-4 cursor-not-allowed rounded bg-[#298592] px-6 py-3 text-slate-100 duration-200'>
                Checkout
              </button>
            </div>

            <p className='ml-2 mt-1 animate-bounce text-base font-semibold text-red-500'>
              Please login to continue
            </p>
            <p className='mt-1  text-base font-semibold text-[#1A464C]'>
              Deliver fee is not included
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
