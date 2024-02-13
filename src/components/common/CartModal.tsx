import GroupRowRenderItem from '@/app/groups/components/GroupRowRenderItem';
import {
  useCheckoutCartMutation,
  useUpdateCartMutation,
} from '@/lib/redux/services/cart';
import Modal, { Styles } from 'react-modal';

import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  selectShopping,
} from '@/lib/redux/slices/shopping';
import { Group } from 'next/dist/shared/lib/router/utils/route-regex';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, transformToCartCheckoutItem } from '@/types/cart';
import { FaRegTrashAlt } from 'react-icons/fa';

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(190, 192, 193, 0.7)',
  },
  content: {
    position: 'fixed',
    top: '25%',
    left: 'auto',
    right: 0,
    height: '120%',
    width: '95%',
    maxWidth: '380px',
    margin: 'auto',
    backgroundColor: 'white',
    padding: '20px',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1001,
    overflowY: 'auto',
  },
};

const CartModal: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const dispatch = useDispatch();
  const [checkoutCart] = useCheckoutCartMutation();
  const [updateCart] = useUpdateCartMutation();

  const { cartItems, selectedLocationId, userInfo } =
    useSelector(selectShopping);

  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];

  const handleRemoveItem = (productId: number, groupId?: number) => {
    dispatch(deleteProduct({ productId, groupId }));
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

  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
      <div className='mb-5 rounded-lg md:w-full'>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className='my-5 flex items-center rounded-lg border-2 border-gray-50 bg-[#fff] p-4 shadow-md'
              style={{ width: '350px', height: '140px' }}
            >
              <div className='relative w-1/4 flex-shrink-0 bg-[#F5F5F5]'>
                <img
                  src={item.plain_image}
                  alt={item.name}
                  className='h-140 w-full rounded-lg object-cover'
                  style={{ width: '103px', height: '105px' }}
                />
                {item?.price && item.sale_price && (
                  <span className='absolute right-0 top-0 rounded bg-[#F58929] p-1 text-xs text-white'>
                    Save{' '}
                    {calculateSavingsPercentage(item.price, item.sale_price)}%
                  </span>
                )}
              </div>

              <div className='ml-4 flex-1'>
                <h2 className='text overflow-hidden overflow-ellipsis text-[#298592]'>
                  {item.name}
                </h2>
                <div className='m-2'>
                  <div className='flex items-center'>
                    <span className='text-xs  text-[#F58929]'>GH¢</span>
                    <span className='ml-1  font-bold text-[#F58929]'>
                      {item?.sale_price}
                    </span>

                    <span
                      className='ml-3 text-xs font-bold text-[#C1C2C2]'
                      style={{ textDecoration: 'line-through' }}
                    >
                      {item?.price}GH¢
                    </span>
                  </div>
                </div>

                <div className='mt-2 flex items-center justify-between md:flex md:space-x-6'>
                  <div className='flex items-center space-x-2 border-gray-100'>
                    <span
                      className={`cursor-pointer rounded-l bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50`}
                      onClick={() =>
                        dispatch(
                          decreaseQuantity({
                            productId: item.id,
                            groupId: item.groupID,
                          })
                        )
                      }
                    >
                      {' '}
                      -{' '}
                    </span>
                    <div className='flex h-8 w-8 items-center justify-center bg-white text-center text-xs font-bold text-[#298592]  outline-none'>
                      {item.cartQuantity}
                    </div>

                    {/* <div
                      id={`quantity-${item.id}`}
                      className='h-8 w-8  bg-white text-center text-xs outline-none'
                      type='number'
                      value={item.cartQuantity}
                      min='1'
                    /> */}
                    <span
                      className={`cursor-pointer rounded-r bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50 ${
                        !item.min_quantity ||
                        (item.isGroupJoiner
                          ? item.cartQuantity + (item.totalQuantity || 0)
                          : item.cartQuantity) < (item.min_quantity ?? 0)
                          ? ''
                          : 'pointer-events-none opacity-50'
                      }`}
                      onClick={() =>
                        dispatch(
                          increaseQuantity({
                            productId: item.id,
                            groupId: item.groupID,
                          })
                        )
                      }
                    >
                      {' '}
                      +{' '}
                    </span>
                    <div className='cursor-pointer pl-5'>
                      <span
                        onClick={() => {
                          handleRemoveItem(item.id, item.groupID);
                        }}
                      >
                        <FaRegTrashAlt size={20} color='#1A464C' />
                      </span>
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
              Delivery fee is not included
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CartModal;
