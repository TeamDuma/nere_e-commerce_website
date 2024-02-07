'use client';
import {
  useCheckoutCartMutation,
  useLazyGetDiscountAmountQuery,
  useUpdateCartMutation,
} from '@/lib/redux/services/cart';
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  selectShopping,
} from '@/lib/redux/slices/shopping';
import React, { useEffect, useState } from 'react';
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

export type GetDiscountAmountBody = {
  customer_uid: number;
  total_amount: number;
  voucher_code: string;
};

const CartComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [checkoutCart] = useCheckoutCartMutation();

  const [updateCart] = useUpdateCartMutation();
  const [promoCode, setPromoCode] = useState<string>('');
  const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [getDiscountAmount, { isLoading }] = useLazyGetDiscountAmountQuery();
  const [discountAmount, setDiscountAmount] = useState(0);

  const [registrationModalVisible, setRegistrationModalVisible] =
    useState(false);

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

  const handleApplyPromoCode = async () => {
    try {
      const customer_uid = userInfo.data.customer.uid;
      const total_amount = calculateTotal();

      const requestBody: GetDiscountAmountBody = {
        customer_uid,
        total_amount,
        voucher_code: promoCode,
      };

      const response = await getDiscountAmount(requestBody).unwrap();
      const { data } = response;
      const discountAmount = data.discount.discount_amount;
      console.log('discountAmount', discountAmount);
      setIsPromoCodeApplied(true);
      setDiscountAmount(discountAmount);
      toast.success('Promo code Applied!');
    } catch (error) {
      console.error('Error during fetch:', error);
      toast.error((error as any).data.message);
    }
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
    <div className=' h-full py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex h-20 w-1/2 items-center rounded-lg bg-gray-100 '>
          <h1 className='ml-2 text-lg text-[#1A464C] '>
            You have saved GHS {totalSavings} on this purchase!
          </h1>
        </div>{' '}
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='md:w-3/5'>
            <div className='mt-8 grid grid-cols-12 border-gray-200 pb-6 max-md:hidden'>
              <div className='col-span-12 md:col-span-7'>
                <p className='text-2xl	 font-medium	leading-8 text-[#1A464C]'>
                  Your Order
                </p>
              </div>
            </div>
            {cartItems.map((item: CartItem) => (
              <div
                key={`${item.id}-${item.groupID ?? ''}`}
                className='gap-5 border-b border-gray-200 py-6 md:flex md:items-center'
              >
                <div className='flex'>
                  <div
                    style={{
                      backgroundSize: 'cover',
                      backgroundColor: '#F8F8F8',
                      width: '200px',
                      height: '200px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '10px',
                    }}
                  >
                    <img
                      style={{ borderRadius: '10px' }}
                      src={item?.plain_image}
                      width={
                        item.name === 'Frytol sunflower oil 0.9L' ||
                        item.name === "Dr. Annie's honey 500ml"
                          ? '60px'
                          : '90px'
                      }
                      alt='cerelac image'
                    />
                  </div>
                </div>

                <div className='flex-1'>
                  <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div className='md:col-span-2'>
                      <div className='flex max-w-[500px] flex-col gap-3'>
                        <h6 className='text-base font-semibold leading-7 text-black'>
                          {item.name}
                        </h6>
                        <div className='flex items-center pt-5'>
                          <p className='cursor-pointer text-base font-medium leading-3 text-[1A464C] dark:text-white'>
                            ¢{item.sale_price}
                          </p>
                          <p className='cursor-pointer pl-2 text-sm leading-3 text-red-500 line-through'>
                            ¢{item.price}
                          </p>
                        </div>

                        <div className='flex items-center md:mt-3'>
                          <span className='my-2 rounded-xl bg-[#8CCED7] px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50'>
                            {' '}
                            Save{' '}
                            {calculateSavingsPercentage(
                              item.price,
                              item.sale_price
                            )}
                            %
                          </span>
                        </div>
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
                      </div>
                    </div>
                    <div className='flex items-center md:mt-3'>
                      <span
                        className='rounded-l bg-orange-400 px-3.5 py-1 duration-100 hover:bg-orange-500 hover:text-orange-50'
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
                        -
                      </span>
                      <span
                        id={`quantity-${item.id}`}
                        className='mx-2.5 w-8 text-center font-semibold text-[#1A464C] outline-none'
                      >
                        {item.cartQuantity}
                      </span>
                      <button
                        className={`
      cursor-pointer 
      rounded-r bg-orange-400
      px-3.5 py-1 duration-100 
      hover:bg-orange-500 
      hover:text-orange-50
      ${
        item.min_quantity! - (item.cartQuantity + item.totalQuantity!) > 0
          ? ''
          : 'disabled'
      }`}
                        onClick={() => {
                          dispatch(
                            increaseQuantity({
                              productId: item.id,
                              groupId: item.groupID,
                            })
                          );
                        }}
                      >
                        {' '}
                        +
                      </button>

                      <div className='ml-5'>
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
            ))}
          </div>
          <div className='md:w-2/5'>
            <div className='rounded-lg bg-gray-50 p-6 shadow-md'>
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
              <div className='flex flex-row justify-between'>
                <div className='flex h-32 items-center	'>
                  <div className='relative mt-4 flex h-8 items-center	 rounded-md border border-solid border-[#D0D5DD] '>
                    <input
                      type='text'
                      placeholder='Enter promo code'
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className='w-full rounded-md border-none pl-2 outline-none'
                    />
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                      <FaTags size={20} color='#1A464C' />
                    </div>
                  </div>
                  {userInfo ? (
                    <button
                      onClick={handleApplyPromoCode}
                      disabled={isPromoCodeApplied || !promoCode.trim()}
                      className='ml-8 rounded-md px-4 py-2 text-[#1A464C]'
                    >
                      {isPromoCodeApplied ? 'Promo code applied!' : 'Apply'}
                    </button>
                  ) : (
                    <div>
                      {' '}
                      <button
                        onClick={openLoginModal}
                        className='ml-8 rounded-md px-4 py-2 text-[#1A464C]'
                      >
                        Apply
                      </button>
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
                      Continue Shopping
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
      </div>
    </div>
  );
};

export default CartComponent;
