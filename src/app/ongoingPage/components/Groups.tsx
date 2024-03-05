'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  useGetGroupsQuery,
  useGetPublicOngoingGroupsQuery,
  useLazyGetPublicOngoingGroupsQuery,
} from '@/lib/redux/services/group';
import OngoingRow from '@/components/OngoingRow';
import GroupRowRenderModal from '@/app/groups/components/GroupRowRenderModal';
import GroupRowRenderItem from '@/app/groups/components/GroupRowRenderItem';

const Groups = () => {
  // const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const [getPublicGroups, { data, isLoading, isError }] = useLazyGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];

  return (
    <div>
      <div className='container'>
        {isLoading && <p>Loading...</p>}
        {isError && <p style={{ color: 'red' }}>Error</p>}
        {data && (
          <div className='overflow-x-auto'>
            <div className='grid cursor-pointer grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 '>
              {/* Mapping Group Items */}
              {groups.map((item) => (
                <div key={item.id} className='sm:m-4'>
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
