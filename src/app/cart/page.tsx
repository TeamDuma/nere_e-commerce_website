'use client';
import {
  useCheckoutCartMutation,
  useUpdateCartMutation,
} from '@/lib/redux/services/cart';
import {
  decreaseQuantity,
  increaseQuantity,
  selectShopping,
} from '@/lib/redux/slices/shopping';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { CartItem, transformToCartCheckoutItem } from '@/types/cart';

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [checkoutCart] = useCheckoutCartMutation();
  const [updateCart] = useUpdateCartMutation();

  const { cartItems, selectedLocationId } = useSelector(selectShopping);
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

  console.log('cartItem', calculateTotal);

  const handleCheckout = async () => {
    // if (savedAddresses.length > 0) {
    //   router.push('/delivery');
    // } else {
    //   alert('No saved addresses. Please add a new address.');
    // }
  };

  return (
    <div className='bg-[#000]-100 min-h-screen pt-20'>
      <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
      <div className='mx-auto flex max-w-5xl flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 xl:px-0'>
        <div className='rounded-lg md:w-2/3'>
          {cartItems.map((item: CartItem) => (
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
                      value={item.cartQuantity!!}
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
                  <div className='flex items-center space-x-4'></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
          <div className='mb-4 text-xl font-bold'>
            Total: GH¢ {calculateTotal().toFixed(2)}
          </div>

          <span
            className='cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'
            onClick={() => {
              const locationID = selectedLocationId;
              const customerID = 1;
              const totalAmount = calculateTotal();
              const cartObject = cartItems.map((item: CartItem) => {
                const isStartingGroup = !item.isGroupJoiner;
                return transformToCartCheckoutItem(
                  item,
                  isStartingGroup ? locationID : undefined
                );
              });
              checkoutCart({
                customerID,
                totalAmount,
                cartObject,
              })
                .then((data) => {
                  console.log('Successful!!!!', data);
                })
                .catch((e) => {
                  console.log('Error', e);
                });
            }}
          >
            {' '}
            chekOut
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
