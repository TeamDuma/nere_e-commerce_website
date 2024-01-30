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
    setIsPromoCodeApplied(true);
  };

  const totalSavings = calculateSavings(cartItems);

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

  const handleRemoveItem = (productId: number, groupId?: number) => {
    dispatch(deleteProduct({ productId, groupId }));
  };

  return (
    <div className='bg-[#FAFAFA]-100 my-4 ml-5 min-h-screen '>
      {cartItems.length === 0 ? (
        <div className='text-center text-5xl text-black'>
          Your cart is empty
          <Link href='/products'>
            <h1 className='my-5 text-[#F58929]'>Go to the Shop</h1>
          </Link>
        </div>
      ) : (
        <>
          <div className='flex h-full flex-col px-4 py-4 sm:flex-row lg:w-full'>
            <div className='flex h-fit w-full flex-col gap-4 sm:w-2/3 '>
              <div className='lg:w-90 lg:mr-6'>
                <div className='flex h-20 w-full items-center rounded-lg bg-[#F8F8F8] '>
                  <h1 className='ml-1 text-lg text-xl	 text-[#1A464C]'>
                    You have saved GHS {totalSavings} on this purchase!
                  </h1>
                </div>
              </div>
              <p className='text-xl font-medium	 text-[#1A464C]'>Your Order</p>
              {cartItems.map((item: CartItem) => (
                <div
                  key={`${item.id}-${item.groupID ?? ''}`}
                  className='items-strech border-t border-gray-50 py-8 md:flex md:py-10 lg:py-8'
                >
                  <div className='w-full md:w-4/12 2xl:w-1/4 '>
                    <img
                      src={item.plain_image}
                      alt='Black Leather Bag'
                      className='hidden h-32 object-cover object-center md:block'
                    />
                    <img
                      src={item.plain_image}
                      alt='Black Leather Bag'
                      className='h-32 w-32 object-cover object-center md:hidden'
                    />
                  </div>
                  <div className='flex flex-col justify-center md:w-6/12 md:pl-3 2xl:w-3/4'>
                    <div className='flex w-full items-center justify-between pt-1'>
                      <p className='text-sm	 font-medium	 leading-none text-gray-800 dark:text-white'>
                        {item.name}
                      </p>
                    </div>
                    <div className='flex items-center pt-5'>
                      <p className='cursor-pointer text-xs font-medium	 leading-3 text-[1A464C] dark:text-white'>
                        ¢{item.sale_price}
                      </p>
                      <p className='cursor-pointer pl-5   text-xs leading-3 text-red-500 line-through'>
                        ¢{item.price}
                      </p>
                    </div>

                    <div className='flex items-center justify-between pt-5'>
                      <div className='itemms-center flex'>
                        <span
                          className=' rounded-l bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50'
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
                        <span
                          id={`quantity-${item.id}`}
                          className='m-2.5 w-8 bg-white text-center font-semibold text-[#298592]  outline-none'
                        >
                          {item.cartQuantity}
                        </span>

                        <span
                          className={`cursor-pointer rounded-r bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50 ${
                            item.min_quantity! -
                              (item.cartQuantity + item.totalQuantity!) >
                            0
                              ? ''
                              : 'disabled'
                          }`}
                          onClick={() => {
                            {
                              dispatch(
                                increaseQuantity({
                                  productId: item.id,
                                  groupId: item.groupID,
                                })
                              );
                            }
                          }}
                        >
                          {' '}
                          +
                        </span>
                      </div>
                      <span
                        className='cursor-pointer rounded  px-3.5 py-1 duration-100 hover:bg-red-600 hover:text-white'
                        onClick={() => {
                          handleRemoveItem(item.id, item.groupID);
                        }}
                      >
                        <FaRegTrashAlt />
                      </span>
                    </div>

                    <div className='mt-5 text-xs leading-3 text-gray-600 dark:text-white'>
                      {item.min_quantity ? (
                        <ProgressBar
                          remaining={
                            item.isGroupJoiner
                              ? item.cartQuantity + (item.totalQuantity || 0)
                              : item.cartQuantity
                          }
                          total={item.min_quantity}
                        />
                      ) : null}

                      {/* <ProgressBar
                        remaining={
                          item.isGroupJoiner
                            ? item.cartQuantity + item.totalQuantity!
                            : item.cartQuantity
                        }
                        total={item.min_quantity ?? 0}
                      /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-4 flex h-fit w-full flex-col gap-4  sm:mt-0 sm:w-1/2'>
              <div className='flex flex-col gap-4 rounded-lg border p-4 text-lg font-semibold shadow-md'>
                <p className='text-l font-medium	 text-[#1A464C]'>
                  Your order summary
                </p>
                <hr className='h-0.5 bg-gray-200' />

                <div className='flex flex-row justify-between'>
                  <p className='text-sm font-normal text-[#979797] '>
                    Total items ({cartItems.length})
                  </p>
                  <p className='text-sm font-normal text-[#979797] '>
                    {' '}
                    GH¢ {calculateTotal().toFixed(2)}
                  </p>
                </div>
                <div className='flex flex-row justify-between'>
                  <p className='text-sm font-normal text-[#979797] '>
                    Delivery fee
                  </p>
                  <p className='text-sm font-normal text-[#979797] '>
                    {' '}
                    GH¢ 0.00
                  </p>
                </div>
                <div className='flex flex-row justify-between'>
                  <p className='text-gray-600'>Total</p>
                  <div>
                    <p className='text-end font-bold'>
                      {' '}
                      GH¢ {calculateTotal().toFixed(2)}
                    </p>
                  </div>
                </div>
                <hr className='h-0.5 bg-gray-200' />
                <div className='flex flex-row justify-between'>
                  <div className='flex items-center'>
                    <div className='relative mt-4 flex items-center rounded-md border border-solid border-[#D0D5DD] '>
                      <input
                        type='text'
                        placeholder='Enter promo code'
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className='w-full rounded-md border-none  outline-none'
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
                            }
                          })
                          .catch((e) => {});
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
                    <div className='flex gap-2'>
                      <button
                        onClick={openLoginModal}
                        className='text-hover w-full rounded-md border  bg-[#298592] p-2  text-sm text-white shadow-md transition-colors'
                      >
                        Check out
                      </button>
                      <Link
                        href={'./products'}
                        className='text-hover w-full rounded-md border bg-[#298592] p-2 text-center text-sm text-white shadow-md transition-colors'
                      >
                        Add more products
                      </Link>
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
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
