'use client';

import React from 'react';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { Group } from '@/types/group';
import GroupRowRenderItem from '../groups/components/GroupRowRenderItem';

const OrderPreview: React.FC = () => {
  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];
  // const OrderPreview = () => {

  return (
    <>
      <div className='flex h-full w-screen flex-col px-14 py-7 md:flex-row'>
        <div className='flex h-fit w-full flex-col gap-4 p-4 '>
          <h1>Congrats!🎉 You Saved GHC 50 on your basket </h1>
          <div className='mt-5 flex flex-col rounded-sm border p-4 text-lg font-semibold shadow-md'>
            <div className='flex flex-col justify-between gap-3 '>
              <div>
                {isLoading && <p>Loading...</p>}
                {isError && <p style={{ color: 'red' }}>Error</p>}
                {data && (
                  <div className='flex-col '>
                    {groups.map((item: Group) => (
                      <div
                        key={item.id}
                        className='mr-4 mt-2 flex-shrink-0 rounded border'
                      >
                        <GroupRowRenderItem item={item} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='ml-3 mt-5 flex h-fit w-full flex-col gap-3 p-4 md:w-2/3'>
          <div className='flex flex-col gap-4 rounded-sm border p-4 text-lg font-semibold shadow-md'>
            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>Your order summary</p>
            </div>
            <hr className='h-0.5 bg-gray-200' />

            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>Total items (5) </p>
              <p className='text-end font-bold'> GH¢ 1280.00</p>
            </div>

            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>Delivery fee</p>
              <p className='text-end font-bold'> GH¢ 0.00</p>
            </div>

            <hr className='h-0.5 bg-gray-200' />
            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>Total</p>
              <div>
                <p className='text-end font-bold'> GH¢ 1280.00</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 rounded-sm border p-4 text-lg font-semibold shadow-md'>
            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>Pickup Location</p>
            </div>
            <hr className='h-0.5 bg-gray-200' />

            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>Nere Agent Pickup, East Legon </p>
            </div>
            <div className='mb-12 flex flex-row justify-between'>
              <p className='text-gray-600'>
                MEST Ambassadorial Enclave, 20 Aluguntugui St, Accra{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPreview;
