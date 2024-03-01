'use client';
import React, { useState } from 'react';
import GroupRowRenderItem from '../components/GroupRowRenderItem';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { Group } from '@/types/group';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const OngoingPurchases: React.FC = () => {
  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];
  const itemsPerPage = 3; // Number of items to display per page

  const [currentPage, setCurrentPage] = useState(0);

  const goToNextPage = () => {
    setCurrentPage(
      (prevPage) => (prevPage + 1) % Math.ceil(groups.length / itemsPerPage)
    );
  };

  const goToPreviousPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage - 1 + Math.ceil(groups.length / itemsPerPage)) %
        Math.ceil(groups.length / itemsPerPage)
    );
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, groups.length);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: 'red' }}>Error</p>}
      {data && (
        <div className='relative'>
          {/* Left arrow */}
          <div
            className='absolute left-0 top-1/2 -translate-y-1/2 transform cursor-pointer '
            onClick={goToPreviousPage}
          >
            <FaArrowCircleLeft className='arrow-icon' />
          </div>
          {/* Right arrow */}
          <div
            className='absolute right-10 top-1/2 z-10  -translate-y-1/2 transform cursor-pointer'
            onClick={goToNextPage}
          >
            <FaArrowCircleRight className='arrow-icon' />
          </div>
          <div className='flex flex-nowrap justify-start overflow-x-auto'>
            {groups.slice(startIndex, endIndex).map((item: Group) => (
              <div
                key={item.id}
                className='m-2 flex-shrink-0 cursor-pointer rounded'
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
