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

  const handleRemoveItem = (productId: number) => {
    dispatch(deleteProduct(productId));
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
          <div className='flex h-full w-full flex-col px-4 py-4 sm:flex-row'>
            <div className='flex h-fit w-full flex-col gap-4 sm:w-2/3 '>
              <div className='lg:mr-6 lg:w-1/2'>
                <div className='flex h-20 items-center rounded-lg bg-[#F8F8F8] '>
                  <h1 className='ml-1 text-2xl text-lg	 text-[#1A464C]'>
                    You have saved GHS {totalSavings} on this purchase!
                  </h1>
                </div>
              </div>
              <p className='text-xl font-bold text-[#1A464C]'>Your Order</p>
              {cartItems.map((item: CartItem) => (
                <div
                  key={item.id}
                  className='py-sm:flex-row flex h-full w-full flex-col rounded-lg border px-2 sm:justify-between'
                >
                  <div className='flex flex-col gap-3 sm:flex-row'>
                    <div className='flex flex-row items-center gap-6'>
                      <div className='h-24 w-20'>
                        <div className='mx-auto h-12 rounded-md object-cover md:max-w-lg'>
                          <img
                            src={item.plain_image}
                            alt={item.name}
                            className='h-24 w-full rounded-lg object-cover sm:w-24'
                          />
                        </div>
                      </div>

                      <div className='flex flex-col gap-1'>
                        <h3 className='text-20 text-lg font-medium uppercase text-[#1A464C]'>
                          {item?.name}
                        </h3>
                        <div className='flex items-center space-x-1'>
                          <span className='text-sm font-bold text-[#1A464C] sm:text-base'>
                            ¢{item?.sale_price}
                          </span>
                          <span className='text-sm text-[#F31748] line-through sm:text-base'>
                            ¢{item?.price}
                          </span>
                          <span className='rounded-xl bg-[#8CCED7] p-1 text-xs font-bold text-white sm:text-sm'>
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
                              remaining={item.cartQuantity + item.totalQuantity}
                              total={item.min_quantity ?? 0}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className='mt-2 sm:mt-0'>
                      <div className='mt-2 sm:ml-2 sm:flex-1'>
                        <div className='mt-2 flex items-center space-x-2 border-gray-100'>
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
                            className={`cursor-pointer rounded-r bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50 ${
                              item.min_quantity! -
                                (item.cartQuantity + item.totalQuantity) >
                              0
                                ? ''
                                : 'disabled'
                            }`}
                            onClick={() => {
                              if (
                                item.min_quantity! -
                                  (item.cartQuantity + item.totalQuantity) >
                                0
                              ) {
                                dispatch(increaseQuantity(item.id));
                              }
                            }}
                          >
                            {' '}
                            +
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
                </div>
              ))}
            </div>

            <div className='mt-4 flex h-fit w-full flex-col gap-4 p-2 sm:mt-0 sm:w-1/3'>
              <div className='flex flex-col gap-4 rounded-lg border p-2 text-lg font-semibold shadow-md'>
                <p className='text-xl font-bold text-[#1A464C]'>
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
                        className='text-hover w-full rounded-md bg-[#298592] p-2 text-sm text-white shadow-md transition-colors hover:bg-[#8CCED7]'
                        onClick={openLoginModal}
                      >
                        Check out
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
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
