import GroupRowModalItem from '@/app/groups/components/GroupRowRenderItem';
import GroupRowModaltem from '@/app/groups/components/GroupRowRenderItem';
import GroupRowRenderItem from '@/app/groups/components/GroupRowRenderItem';
import GroupRowRenderModal from '@/app/groups/components/GroupRowRenderModal';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { Group } from 'next/dist/shared/lib/router/utils/route-regex';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';

interface SideModalProps {
  closeModal: () => void;
}

const SideModal: React.FC<SideModalProps> = ({ closeModal }) => {
  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];
  const modalRef = useRef();

  const handleClickOutside = (event: { target: any }) => {
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
      <h2
        style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#298592' }}
      >
        Ongoing Purchases near me{' '}
      </h2>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p style={{ color: 'red' }}>Error</p>}
        {data && (
          <div className='overflow-x-auto'>
            <div className='flex-col '>
              {groups.map((item) => (
                <div key={item.id} className='m-2 flex-shrink-0 rounded border'>
                  <GroupRowRenderModal item={item} />
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
