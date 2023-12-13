import GroupRowRenderItem from '@/app/groups/components/GroupRowRenderItem';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { Group } from 'next/dist/shared/lib/router/utils/route-regex';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';

const SideModal = ({ closeModal }) => {
  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, closeModal]);

  return (
    <div
      ref={modalRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '30%',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1001,
        overflowY: 'auto',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
        Ongoing Groups
      </h2>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p style={{ color: 'red' }}>Error</p>}
        {data && (
          <div className='overflow-x-auto'>
            <div className='flex-col '>
              {groups.map((item) => (
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
    </div>
  );
};

export default SideModal;
