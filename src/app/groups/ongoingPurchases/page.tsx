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
                className='mr-4 mt-2 flex-shrink-0 rounded border'
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
