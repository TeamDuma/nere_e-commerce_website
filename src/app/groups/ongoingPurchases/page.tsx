'use client';
import React, { useState } from 'react';
import GroupRowRenderItem from '../components/GroupRowRenderItem';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { Group } from '@/types/group';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const OngoingPurchases: React.FC = () => {
  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: 'red' }}>Error</p>}
      {data && (
        <div className='relative'>
          <div className='absolute left-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer '>
            <FaArrowCircleLeft className='arrow-icon' />
          </div>
          <div className='overflow-x-auto'>
            <div className='flex flex-nowrap justify-start'>
              {groups.map((item: Group) => (
                <div
                  key={item.id}
                  className='m-4 flex-shrink-0 cursor-pointer rounded  '
                >
                  <GroupRowRenderItem item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className='absolute right-0 top-1/2 z-10  -translate-y-1/2 transform cursor-pointer'>
            <FaArrowCircleRight className='arrow-icon' />
          </div>
        </div>
      )}
    </div>
  );
};

export default OngoingPurchases;
