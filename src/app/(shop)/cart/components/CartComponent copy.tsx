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
import { FaMapPin, FaSpinner, FaTags } from 'react-icons/fa';
import LoginModal from '@/components/common/LoginModal';
import CartIcon from '@/components/common/CartIcon';
import { FaRegTrashAlt } from 'react-icons/fa';
import { ImSpinner6 } from 'react-icons/im';
import RegistrationModal from '@/components/common/RegisterModal';
import PostHogClient from '@/app/posthog';
import Location from '@/components/common/Location';
import OrderSummarySection from './OrderSummarySection';

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
  const [Loading, setLoading] = useState(false);

  const [registrationModalVisible, setRegistrationModalVisible] =
    useState(false);

  const { cartItems, selectedLocationId, userInfo } =
    useSelector(selectShopping);

  const postHogClient = PostHogClient();

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
      if (!promoCode) {
        toast.error('Please enter a promo code!');
        return;
      }

      const customer_uid = userInfo.data.customer.uid;
      const total_amount = calculateTotal();
      setLoading(true);
      const requestBody: GetDiscountAmountBody = {
        customer_uid,
        total_amount,
        voucher_code: promoCode,
      };

      const response = await getDiscountAmount(requestBody).unwrap();
      const { data } = response;
      const discountAmount = data.discount.discount_amount;
      setIsPromoCodeApplied(true);
      setDiscountAmount(Number(discountAmount));
      setLoading(false);
      // toast.success('Promo code Applied!');
      toast.success('Promo code Applied!', {
        autoClose: 500,
      });
    } catch (error) {
      setIsPromoCodeApplied(false);
      setLoading(false);
      toast.error((error as any).data.message);
    }
  };

  const totalSavings = calculateSavings(cartItems);

  const openLoginModal = () => {
    setLoginModalVisible(true);
    setRegistrationModalVisible(false);
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
    <div className=' h-full '>
      <div className=' mx-auto px-4'>
        {/* <div className='flex h-20 items-center rounded-lg bg-gray-100 md:w-1/2 '> */}
        <div className='h-20 gap-5 rounded-lg border bg-gray-50 p-2 py-2 shadow-xl md:mb-2 md:flex md:w-1/2 md:items-center'>
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
                className='mt-4 gap-5 rounded-lg border bg-gray-50 p-2 py-2 shadow-xl md:flex md:items-center'
              >
                <div className='flex'>
                  <div className='m-2  flex h-48 w-full items-center justify-center rounded-md  md:w-48 '>
                    <img
                      className='rounded-md'
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

                <div className='ml-2 flex-1'>
                  <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div className='md:col-span-2 '>
                      <div className='flex max-w-[500px] flex-col gap-3'>
                        <h6 className='text-base font-semibold leading-7 text-black'>
                          {item.name}
                        </h6>
                      </div>
                    </div>
                    <div className='m-2 flex w-96 items-center justify-between px-2 md:flex md:space-x-6'>
                      <div className='flex items-center space-x-2 border-gray-100 px-2'>
                        {item.isGroupJoiner ? (
                          <div className=' rounded-md border border-[#298592]  '>
                            <span className='p-2 text-xs font-semibold text-[#298592]'>
                              Group Code : {item.groupCode}
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div className='md:col-span-2'>
                      <div className='flex max-w-[500px] flex-col '>
                        {item.isGroupJoiner && (
                          // <div className='h-max-h-[10px] rounded-md border border-[#298592] py-1  '>
                          <div className=' my-1 flex  items-center'>
                            {' '}
                            <Location />
                            <span className='ml-2 text-lg font-medium text-[#1A464C]	'>
                              {item.locationName}
                            </span>
                          </div>
                        )}
                        <div className='flex items-center pt-2'>
                          <p className='cursor-pointer text-base font-medium leading-3 text-[#1A464C]'>
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
                            unit={item.unit}
                          />
                        ) : null}
                        {item.isGroupJoiner ? (
                          // <div className='h-max-h-[10px] rounded-md border border-[#298592] py-1  '>
                          <span className='text-xs font-medium text-[#298592]'>
                            You are joining an ongoing group
                          </span>
                        ) : (
                          // </div>
                          <span className='text-xs font-medium text-[#298592]'>
                            You are starting a new group
                          </span>
                        )}
                      </div>
                    </div>
                    <div className='mt-2 flex items-center justify-between md:flex md:space-x-6'>
                      <div className='flex items-center space-x-2 border-gray-100'>
                        <span
                          className={`cursor-pointer rounded-l bg-orange-400 px-3.5 py-1 font-bold duration-100 hover:bg-orange-500 hover:text-orange-50`}
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
                        <div className='flex h-8 w-8 items-center justify-center text-center text-xs font-bold text-[#298592]  outline-none'>
                          {item.cartQuantity}
                        </div>
                        <span
                          className={`cursor-pointer rounded-r bg-orange-400 px-3.5 py-1 font-bold duration-100 hover:bg-orange-500 hover:text-orange-50 ${
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
              </div>
            ))}
          </div>
          <div className='md:w-2/5'>
            <OrderSummarySection
              cartItems={cartItems}
              calculateTotal={calculateTotal}
              calculateTotalAfterDiscount={calculateTotalAfterDiscount}
              isPromoCodeApplied={isPromoCodeApplied}
              discountAmount={discountAmount}
              promoCode={promoCode}
              setPromoCode={setPromoCode}
              handleApplyPromoCode={handleApplyPromoCode}
              isLoading={isLoading}
              openLoginModal={openLoginModal}
              userInfo={userInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
