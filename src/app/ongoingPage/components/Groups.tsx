'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  useGetGroupsQuery,
  useGetPublicOngoingGroupsQuery,
} from '@/lib/redux/services/group';
import OngoingRow from '@/components/OngoingRow';
import GroupRowRenderModal from '@/app/groups/components/GroupRowRenderModal';
import GroupRowRenderItem from '@/app/groups/components/GroupRowRenderItem';

const Groups = () => {
  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];

  return (
    <div>
      <div className='container'>
        {isLoading && <p>Loading...</p>}
        {isError && <p style={{ color: 'red' }}>Error</p>}
        {data && (
          <div className='overflow-x-auto'>
            <div className='grid grid-cols-3 gap-6 cursor-pointer'>
              {groups.map((item) => (
                <div key={item.id}>
                  <GroupRowRenderItem item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Groups;
