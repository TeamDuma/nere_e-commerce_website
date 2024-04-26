import React from 'react';
import { FaTags } from 'react-icons/fa';
import { ImSpinner6 } from 'react-icons/im';

interface OrderSummaryProps {
  cartItems: any[];
  calculateTotal: () => number;
  calculateTotalAfterDiscount: () => number;
  isPromoCodeApplied: boolean;
  discountAmount: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  handleApplyPromoCode: () => void;
  isLoading: boolean;
  openLoginModal: () => void;
  userInfo: any;
}

const OrderSummarySection: React.FC<OrderSummaryProps> = ({
  cartItems,
  calculateTotal,
  calculateTotalAfterDiscount,
  isPromoCodeApplied,
  discountAmount,
  promoCode,
  setPromoCode,
  handleApplyPromoCode,
  isLoading,
  openLoginModal,
  userInfo,
}) => {
  return (
    <div className='gap-5 rounded-lg border bg-gray-50 p-3 shadow-xl'>
      <p className='text-l font-medium text-[#1A464C]'>Your order summary</p>
      <hr className='h-0.5 bg-gray-200' />
      <div className='my-2 flex justify-between'></div>
      <div className='mb-2 flex justify-between'>
        <p className='text-sm font-normal text-[#979797]'>
          Total items ({cartItems.length})
        </p>
        <p className='text-sm font-normal text-[#979797]'>
          GH¢ {calculateTotal().toFixed(2)}
        </p>
      </div>
      <div className='mb-2 flex justify-between'>
        <p className='text-sm font-normal text-[#979797]'>Delivery fee</p>
        <p className='text-sm font-normal text-[#979797]'>GH¢ 0.00</p>
      </div>
      {isPromoCodeApplied && (
        <div className='mb-2 flex justify-between'>
          <p className='text-sm font-normal text-[#979797]'>Discount_amount</p>
          <p className='text-sm font-normal text-[#979797]'>
            GH¢ {discountAmount.toFixed(2)}
          </p>
        </div>
      )}
      <hr className='my-2' />
      <div className='mb-2 flex justify-between'>
        <span className='font-semibold'>Total</span>
        <span className='font-semibold'>
          GH¢ {calculateTotalAfterDiscount().toFixed(2)}
        </span>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex h-32 items-center'>
          <div className='relative mt-4 flex h-8 items-center rounded-md border border-solid border-[#D0D5DD]'>
            <input
              type='text'
              placeholder='Enter promo code'
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              className='w-full rounded-md border-none pl-2 outline-none'
            />
            <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <FaTags size={20} color='#1A464C' />
            </div>
          </div>
          {!userInfo ? (
            <button
              onClick={openLoginModal}
              className='ml-8 rounded-md px-4 py-2 text-[#1A464C]'
            >
              Apply
            </button>
          ) : (
            <button
              onClick={handleApplyPromoCode}
              disabled={isPromoCodeApplied || isLoading}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummarySection;
