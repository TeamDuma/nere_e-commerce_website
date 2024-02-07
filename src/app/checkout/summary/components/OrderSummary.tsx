import React from 'react';

interface OrderSummaryProps {
  amount: number;
  totalItems: number;
}

const OrderSummary = ({ amount, totalItems }: OrderSummaryProps) => {
  return (
    <div className='flex flex-col gap-4 rounded-sm border p-4 text-lg font-semibold shadow-md'>
      <div className='flex flex-row justify-between'>
        <p className='font-meduim ml-2 text-sm text-black'>
          {' '}
          Your order summary
        </p>
      </div>
      <hr className='h-0.5 bg-gray-200' />
      <div className='flex flex-row justify-between'>
        <p className='ml-2 text-sm font-normal text-[#828282]'>
          Total items <span>({totalItems})</span>
        </p>
        <div>
          <p className='ml-2 text-sm font-normal text-[#828282]'>
            GH¢{typeof amount === 'number' ? amount.toFixed(2) : 'N/A'}
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='ml-2 text-sm font-normal text-[#828282]'>Delivery fee</p>
        <div>
          <p className='ml-2 text-sm font-normal text-[#828282]'>GH¢0.00</p>
        </div>
      </div>

      <hr className='h-0.5 bg-gray-200' />

      <div className='flex flex-row justify-between'>
        <p className='font-meduim ml-2 text-sm text-black'>Total</p>
        <div>
          <p className='font-meduim ml-2 text-sm text-black'>
            GH¢{typeof amount === 'number' ? amount.toFixed(2) : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
