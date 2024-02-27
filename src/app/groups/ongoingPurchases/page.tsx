'use client';

import React from 'react';
import GroupRowRenderItem from '../components/GroupRowRenderItem';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { Group } from '@/types/group';

const OngoingPurchases: React.FC = () => {
  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: 'red' }}>Error</p>}
      {data && (
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
      )}
    </div>
  );
};

export default OngoingPurchases;
