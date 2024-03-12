import React from 'react';

interface OrderSummaryProps {
  amount: number;
  totalItems: number;
}

const OrderSummary = ({ amount, totalItems }: OrderSummaryProps) => {
  return (
    <div className='flex h-fit w-full flex-col gap-4 py-4 '>
      <div className='flex h-fit w-full flex-col gap-4 py-4 '>
        <div className='flex flex-col gap-4 rounded-sm border p-4 text-lg font-semibold shadow-md'>
          <div className='flex flex-row justify-between'>
            <p className='font-meduim ml-2 text-sm text-black'>
              {' '}
              Your order summary
            </p>
          </div>
          <hr className='h-0.5 bg-gray-200' />
          <div className='flex flex-row justify-between'>
            <p className='ml-2 text-sm font-normal text-[#828282]'>Total</p>
            <div>
              <p className='ml-2 text-sm font-normal text-[#828282]'>GH¢0.00</p>
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='ml-2 text-sm font-normal text-[#828282]'>
              Delivery fee
            </p>
            <div>
              <p className='ml-2 text-sm font-normal text-[#828282]'>GH¢0.00</p>
            </div>
          </div>

          <hr className='h-0.5 bg-gray-200' />

          <div className='flex flex-row justify-between'>
            <p className='font-meduim ml-2 text-sm text-black'>Total</p>
            <div>
              <p className='font-meduim ml-2 text-sm text-black'>GH¢0.00</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3 rounded-sm border p-4 text-lg font-semibold shadow-md'>
          <div className='flex flex-row justify-between'>
            <p className='font-meduim ml-2 text-sm text-black'>
              Pickup Location
            </p>
          </div>
          <hr className='h-0.5 bg-gray-200' />
          <div className='flex flex-row justify-between'>
            <p className='ml-2 text-sm font-bold text-black'>
              Nere Agent Pickup, East Legon
            </p>
          </div>

          <div className='flex flex-row justify-between'>
            <p className='ml-2 text-sm font-normal text-[#828282]'>
              MEST Ambassadorial Enclave, 20 Aluguntugui St, Accra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
