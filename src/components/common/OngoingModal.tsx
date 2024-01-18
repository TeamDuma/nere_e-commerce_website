import GroupRowModalItem from '@/app/groups/components/GroupRowRenderItem';
import GroupRowModaltem from '@/app/groups/components/GroupRowRenderItem';
import GroupRowRenderItem from '@/app/groups/components/GroupRowRenderItem';
import GroupRowRenderModal from '@/app/groups/components/GroupRowRenderModal';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { Group } from 'next/dist/shared/lib/router/utils/route-regex';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal, { Styles } from 'react-modal';

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba( 190,192,193, 0.7)',
  },
  content: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 'auto',
    height: '105%',
    width: '95%',
    maxWidth: '450px',
    margin: 'auto',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1001,
    overflowY: 'auto',
  },
};

const OngoingModal: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups ?? [];
  const modalRef = useRef();

  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
      <h2
        style={{
          fontSize: '24px',
          color: '#298592',
          fontWeight: 'bold',
          marginTop: '20px',
        }}
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
                <div
                  key={item.id}
                  className='my-8 flex-shrink-0 rounded border'
                >
                  <GroupRowRenderModal item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default OngoingModal;
