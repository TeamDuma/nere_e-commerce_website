'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  useGetGroupsQuery,
  useGetPublicOngoingGroupsQuery,
  useLazyGetPublicOngoingGroupsQuery,
} from '@/lib/redux/services/group';
import OngoingRow from '@/components/OngoingRow';
import GroupRowRenderModal from '@/app/(shop)/groups/components/GroupRowRenderModal';
import GroupRowRenderItem from '@/app/(shop)/groups/components/GroupRowRenderItem';
import { Group } from '@/types/group';

const Groups = () => {
  const [getPublicGroups, { data, isLoading, isError }] =
    useLazyGetPublicOngoingGroupsQuery();
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const response = getPublicGroups()
      .unwrap()
      .then((response) => {
        setGroups(response.data.groups);
      });
  }, []);

  return (
    <div>
      <div className='container'>
        {isLoading && <p>Loading...</p>}
        {isError && <p style={{ color: 'red' }}>Error</p>}
        {groups && (
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
