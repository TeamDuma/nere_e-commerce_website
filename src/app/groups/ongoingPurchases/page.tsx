'use client';

import React from 'react';
import GroupRowRenderItem from '../components/GroupRowRenderItem';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/groups';

const OngoingPurchases: React.FC = () => {
  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: 'red' }}>Error</p>}
      {data && (
        <div className='overflow-x-auto'>
          <div className='flex flex-nowrap justify-start'>
            {data.map((item: any) => (
              <div key={item.id} className='mr-4 flex-shrink-0'>
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
