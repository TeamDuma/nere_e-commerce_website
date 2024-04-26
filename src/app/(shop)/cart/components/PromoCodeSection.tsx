'use client';
import {
  useCheckoutCartMutation,
  useLazyGetDiscountAmountQuery,
  useUpdateCartMutation,
} from '@/lib/redux/services/cart';
import { deleteProduct, selectShopping } from '@/lib/redux/slices/shopping';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { CartItem, transformToCartCheckoutItem } from '@/types/cart';

import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMapPin, FaSpinner, FaTags } from 'react-icons/fa';
import LoginModal from '@/components/common/LoginModal';
import { ImSpinner6 } from 'react-icons/im';
import RegistrationModal from '@/components/common/RegisterModal';
import PostHogClient from '@/app/posthog';

export type GetDiscountAmountBody = {
  customer_uid: number;
  total_amount: number;
  voucher_code: string;
};

const PromoCodeSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [checkoutCart] = useCheckoutCartMutation();

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

  return (
        
    <div>
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

      <div className='flex flex-row justify-between'>
        <div className='flex h-32 items-center	'>
          <div className='relative mt-4 flex h-8 items-center	 rounded-md border border-solid border-[#D0D5DD] '>
            <input
              type='text'
              placeholder='Enter promo code'
              value={promoCode}
              onChange={(e) =>
                setPromoCode(e.target.value.toUpperCase())
              }
              className='w-full rounded-md border-none pl-2 outline-none'
            />
            <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <FaTags size={20} color='#1A464C' />
            </div>
          </div>
          {userInfo ? (
            <button
              onClick={handleApplyPromoCode}
              disabled={isPromoCodeApplied || Loading}
              className='relative ml-8 rounded-md px-4 py-2 text-[#1A464C]'
            >
              {isLoading && (
                <ImSpinner6
                  className='absolute left-24 top-1/2 -translate-y-1/2 transform animate-spin'
                  style={{ fontSize: '24px' }}
                />
              )}
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
        <div>
          <div className='flex gap-2'>
            <button
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
                  console.log('cart', {
                    customerID,
                    totalAmount,
                    cartObject,
                    voucherCode,
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
                  postHogClient.capture({
                    distinctId: userInfo.data.customer.email,
                    event: 'checkoutProductClicked',
                    properties: { ...cartItems },
                  });
                } else {
                  toast.warning(
                    'Please select a delivery location before checkout.'
                  );
                }
              }}
              className='text-hover w-full rounded-md border  bg-[#298592] p-2  text-sm text-white shadow-md transition-colors'
            >
              Checkout
            </button>
            <Link
              href={'./products'}
              className='text-hover w-full rounded-md border bg-white p-2 text-center text-sm text-[#298592] shadow-md transition-colors'
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className='flex gap-2'>
            <button
              onClick={() => {
                openLoginModal();
                postHogClient.capture({
                  distinctId: userInfo?.data?.customer.email,
                  event: 'checkoutProductClicked_LoggedOut',
                  properties: { ...cartItems },
                });
              }}
              className='text-hover w-full rounded-md border  bg-[#298592] p-2  text-sm text-white shadow-md transition-colors'
            >
              Checkout
            </button>
            <Link
              href={'./products'}
              className='text-hover w-full rounded-md border bg-white p-2 text-center text-sm text-[#298592] shadow-md transition-colors'
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
          <RegistrationModal
            onClose={closeModal}
            onLoginClick={openLoginModal}
            isOpen={registrationModalVisible}
          />
        </div>
      )}
    </div>

  );
};

export default PromoCodeSection;
