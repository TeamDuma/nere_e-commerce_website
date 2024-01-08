'use client';
import {
  useCheckoutCartMutation,
  useUpdateCartMutation,
} from '@/lib/redux/services/cart';
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  selectShopping,
} from '@/lib/redux/slices/shopping';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { CartItem, transformToCartCheckoutItem } from '@/types/cart';
import ProgressBar from '@/components/common/ProgressBar';
import FeaturedProducts from '@/components/FeaturedProducts';
import ViewMore from '@/components/common/ViewMore';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTags } from 'react-icons/fa';
import LoginModal from '@/components/common/LoginModal';
import CartIcon from '@/components/common/CartIcon';
import { FaRegTrashAlt } from 'react-icons/fa';

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [checkoutCart] = useCheckoutCartMutation();

  const [updateCart] = useUpdateCartMutation();
  const [promoCode, setPromoCode] = useState<string>('');
  const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const [registrationModalVisible, setRegistrationModalVisible] =
    useState(false);

  const { cartItems, selectedLocationId, userInfo } =
    useSelector(selectShopping);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.sale_price * item.cartQuantity;
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

  const handleApplyPromoCode = () => {
    console.log('Applied promo code:', promoCode);
    setIsPromoCodeApplied(true);
  };

  const totalSavings = calculateSavings(cartItems);

  console.log('calculateTotal', calculateTotal);
  console.log('cartItem', cartItems);

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };

  const handleRegistrationClick = () => {
    setLoginModalVisible(false);
    setRegistrationModalVisible(true);
  };

  const closeModal = () => {
    setLoginModalVisible(false);
    setRegistrationModalVisible(false);
  };

  const handleRemoveItem = (productId: number) => {
    dispatch(deleteProduct(productId));
    console.log('handleRemoveItem');
  };

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
            You have saved {totalSavings} GHS on this purchase!
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
                    <h2 className='text overflow-hidden  overflow-ellipsis font-bold text-[#298592]'>
                      {item.name}
                    </h2>

                    <div className='m-2'>
                      <div className='flex flex-col items-start'>
                        <div className='flex items-center'>
                          <span className='font-extralight text-[#F58929]'>
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
                        <div className='flex items-center'>
                          {item.hasMinQuantity && (
                            <ProgressBar
                              remaining={item.cartQuantity}
                              total={item.min_quantity ?? 0}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='ml-2 flex-1'>
                    <div className='mt-2 flex items-center justify-between md:flex md:space-x-6'>
                      <div className='flex items-center space-x-2 border-gray-100'>
                        <span
                          className='cursor-pointer rounded-l bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50'
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          {' '}
                          -{' '}
                        </span>
                        <span
                          id={`quantity-${item.id}`}
                          className='m-2.5 w-8 bg-white text-center font-semibold text-[#298592]  outline-none'
                        >
                          {item.cartQuantity}
                        </span>

                        <span
                          className='cursor-pointer rounded-r bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50'
                          onClick={() => {
                            console.log('item.id', item.id);
                            dispatch(increaseQuantity(item.id));
                          }}
                        >
                          {' '}
                          +{' '}
                        </span>

                        <span
                          className='cursor-pointer rounded  px-3.5 py-1 duration-100 hover:bg-red-600 hover:text-white'
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <FaRegTrashAlt />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-6 h-1/2 rounded-lg border bg-[#F8F8F8] p-4 shadow-md md:mt-0 md:w-1/3'>
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
                  <h1> GH¢ {calculateTotal().toFixed(2)}</h1>
                  <h1>0.00</h1>
                </div>
              </div>

              <hr className='my-4 text-xl text-[#1A464C] ' />
              <div className='flex  text-[#1A464C]'>
                <div style={{ marginRight: '256px' }}>
                  <h1>Total </h1>
                </div>

                <div>
                  <h1>GH¢ {calculateTotal().toFixed(2)}</h1>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='relative mt-4 flex items-center rounded-md border border-solid border-[#D0D5DD] p-2'>
                  <input
                    type='text'
                    placeholder='Enter promo code'
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className='w-full rounded-md border-none p-2 outline-none'
                  />
                  <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                    <FaTags size={20} color='#1A464C' />
                  </div>
                </div>
                <button
                  onClick={handleApplyPromoCode}
                  disabled={!promoCode.trim()}
                  className='ml-8 rounded-md px-4 py-2 text-[#1A464C]'
                >
                  {isPromoCodeApplied ? 'PromoCode Applied' : 'Apply'}
                </button>
              </div>

              {userInfo ? (
                <button
                  type='button'
                  className='mb-2 mt-5 flex w-full items-center justify-center rounded-lg bg-[#0097B2] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#0097B2]/90 focus:ring-4 focus:ring-[#0097B2]/50 dark:focus:ring-[#2557D6]/50'
                  onClick={() => {
                    if (selectedLocationId) {
                      const locationID = selectedLocationId;
                      const customerID = userInfo.data.customer.id;
                      const totalAmount = calculateTotal();
                      const voucherCode = promoCode;
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
                        voucherCode,
                      })
                        .then((data) => {
                          if (
                            'data' in data &&
                            'authorization_url' in data.data
                          ) {
                            const paymentAuthorizationUrl =
                              data.data.authorization_url;
                            window.location.href = paymentAuthorizationUrl;
                          } else {
                            console.log('Error in data structure:', data);
                          }
                        })
                        .catch((e) => {
                          console.log('Error', e);
                        });
                    } else {
                      toast.warning(
                        'Please select a delivery location before checkout.'
                      );
                    }
                  }}
                >
                  <span>Checkout</span>
                </button>
              ) : (
                <div>
                  <div className='flex items-center'>
                    <p className='mx-4 mt-1 font-semibold text-[#1A464C]'>
                      GH¢ {calculateTotal().toFixed(2)}
                    </p>
                    <button
                      className='hover:bg-[#298592]-950 mx-4 mt-4 cursor-not-allowed rounded bg-[#298592] px-6 py-3 text-slate-100 duration-200'
                      onClick={openLoginModal}
                    >
                      Checkout
                    </button>
                  </div>

                  <p className='ml-2 mt-1 animate-bounce text-base font-semibold text-red-500'>
                    Please login to continue
                  </p>
                  <p className='mt-1 text-base font-semibold text-[#1A464C]'>
                    Delivery fee is not included
                  </p>

                  <LoginModal
                    onClose={closeModal}
                    onRegistrationClick={handleRegistrationClick}
                    session={null}
                    isOpen={loginModalVisible}
                  />
                </div>
              )}
            </div>
          </div>
          <h1 className='text-l  mt-5 text-[#1A464C]'>
            Items related to your cart
          </h1>
          <FeaturedProducts />
        </>
      )}
    </div>
  );
};

export default Cart;
