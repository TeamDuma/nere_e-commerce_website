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

interface CartModalProps {
  closeModal: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [checkoutCart] = useCheckoutCartMutation();
  const [updateCart] = useUpdateCartMutation();

  const { cartItems } = useSelector(selectShopping);

  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];
  const modalRef = useRef();

  const handleClickOutside = (event: { target: any }) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
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
        right: 0, // Change left to right
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
      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Cart</h2>
      <div className='rounded-lg md:w-2/3'>
        {cartItems.map((item) => (
          <div className='mb-6 rounded-lg bg-white p-6 shadow-md md:flex md:items-center'>
            <div className='w-1/3 flex-shrink-0'>
              <img
                src={item.plain_image}
                alt={item.name}
                className='h-32 w-full rounded-lg object-cover'
                style={{ width: '50px' }}
              />
            </div>
            <div className='ml-4 flex-1'>
              <h2 className='text-lg font-bold text-gray-900'>{item.name}</h2>
              <div className='mt-4 flex items-center justify-between md:block md:space-x-6'>
                <div className='flex items-center border-gray-100'>
                  <span
                    className='cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    {' '}
                    -{' '}
                  </span>
                  <input
                    className='h-8 w-8 border bg-white text-center text-xs outline-none'
                    type='number'
                    value={item.min_quantity!!}
                    min='1'
                  />
                  <span
                    className='cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    {' '}
                    +{' '}
                  </span>
                </div>
                <div className='flex items-center space-x-4'>
                  <p className='text-sm'>{item.price}</p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartModal;
