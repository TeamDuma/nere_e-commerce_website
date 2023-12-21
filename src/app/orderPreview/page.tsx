'use client';

import React from 'react';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { Group } from '@/types/group';
import GroupRowRenderItem from '../groups/components/GroupRowRenderItem';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  useCheckoutCartMutation,
  useUpdateCartMutation,
} from '@/lib/redux/services/cart';
import { CartItem } from '@/types/cart';
import { selectShopping } from '@/lib/redux/slices/shopping';
import Link from 'next/link';
import FeaturedProducts from '@/components/FeaturedProducts';

const OrderPreview: React.FC = () => {
  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];

  const dispatch = useDispatch();
  const [checkoutCart] = useCheckoutCartMutation();
  const [updateCart] = useUpdateCartMutation();

  const { cartItems, selectedLocationId, userInfo } =
    useSelector(selectShopping);

  const savedAddresses = [
    { id: 1, address: 'where ever1' },
    { id: 2, address: 'where ever2' },
    { id: 3, address: 'where ever3' },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.cartQuantity;
    }, 0);
  };
  const calculateSavings = (cartItems: any[]) => {
    return cartItems.reduce((totalSavings, item) => {
      const totalOldPrice = item.price * item.cartQuantity;
      const totalNewPrice = item.sale_price * item.cartQuantity;
      const itemSavings = totalOldPrice - totalNewPrice;
      return totalSavings + itemSavings;
    }, 0);
  };

  const calculateSavingsPercentage = (oldPrice: number, newPrice: number) => {
    const savingsPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(savingsPercentage);
  };

  const totalSavings = calculateSavings(cartItems);

  console.log('cartItem', calculateTotal);
  console.log('userInfo', userInfo);

  return (
    <div className='bg-[#000]-100 my-4 min-h-screen pt-20'>
      {cartItems.length === 0 ? (
        <div className='text-center text-5xl text-black'>
          Your cart is empty
          <Link href='/products'>
            <h1 className='my-5 text-[#F58929]'>Go to the Shop</h1>
          </Link>
        </div>
      ) : (
        <>
          <h1 className='text-l  m-10 text-[#1A464C]'>
            Congrats!🎉 You Saved GHC {totalSavings} on your basket
          </h1>
          <div className='mx-auto flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 xl:px-0'>
            <div className='rounded-lg md:w-1/2'>
              {cartItems.map((item: CartItem) => (
                <div
                  key={item.id}
                  className='my-4 flex items-center rounded-lg bg-[#FFF] p-4 shadow-md'
                  style={{ width: '700px', height: '190px' }}
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
                          <span className='text-4xl font-extralight text-[#F58929]'>
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
                      </div>
                    </div>
                  </div>

                  <div className='ml-2 flex-1'>
                    <div className='mt-2 flex items-center justify-between md:flex md:space-x-6'>
                      <div className='flex items-center space-x-2 border-gray-100'>
                        <span className='cursor-pointer rounded-r bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50'>
                          {' '}
                          share{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex flex-col'>
              <div className='my-6 mt-6 h-1/2 rounded-lg border bg-[#F8F8F8] p-4 shadow-md md:mt-0 md:w-full'>
                <div className='mb-4  text-[#1A464C] '>
                  Your order summary
                  <hr className='mt-4 text-[#1A464C]' />
                </div>
                <div className='flex  text-[#1A464C]'>
                  <div className='mr-4' style={{ marginRight: '200px' }}>
                    <h1>Total items ({cartItems.length})</h1>
                    <h1>Delivery fee</h1>
                  </div>
                  <div>
                    <h1>GH¢ {calculateTotal().toFixed(2)}</h1>
                    <h1>0.00</h1>
                  </div>
                </div>
                <hr className='mt-4 text-xl text-[#1A464C]' />
                <div className='flex  text-[#1A464C]'>
                  <div className='mr-4' style={{ marginRight: '256px' }}>
                    <h1>Total </h1>
                  </div>
                  <div>
                    <h1>GH¢ {calculateTotal().toFixed(2)}</h1>
                  </div>
                </div>
              </div>

              <div className='mt-6 h-1/2 rounded-lg border bg-[#F8F8F8] p-4 shadow-md md:mt-0 md:w-full'>
                <div className='mb-4  text-[#1A464C] '>
                  Pickup Location <hr className='mt-4 text-[#1A464C]' />
                </div>
                <div className='flex  text-[#1A464C]'></div>
                <div className='flex  text-[#1A464C]'>
                  <div className='mr-4' style={{ marginRight: '256px' }}>
                    <h1> selected Location</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderPreview;
