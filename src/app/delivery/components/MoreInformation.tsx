'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal, { Styles } from 'react-modal';
import {
  selectShopping,
  setSelectedLocationId,
} from '@/lib/redux/slices/shopping';
import { useGetlocationsQuery } from '@/lib/redux/services/location';
import { ILocation } from '@/types/location';

const customStylesLarge: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '375px',
    height: '300px',
    borderRadius: '15px',
    border: 'none',
    zIndex: 1001,
  },
};
const customStylesSmall: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
    height: '300px',
    borderRadius: '15px',
    border: 'none',
    zIndex: 1001,
  },
};

interface MoreInformationProps {
  onClose: () => void;
  isOpen: boolean;
  selectedAddress: ILocation | null;
  location: ILocation | null;
}

const MoreInformation: React.FC<MoreInformationProps> = ({
  onClose,
  isOpen,
  selectedAddress,
  location,
}) => {
  const dispatch = useDispatch();

  const { data } = useGetlocationsQuery();

  console.log('MoreInformation selectedAddress', data);

  const screenWidth = window.innerWidth;
  let modalStyles = customStylesSmall;

  if (screenWidth >= 960) {
    modalStyles = customStylesLarge;
  }

  console.log('MoreInformation', selectedAddress);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={modalStyles}
        contentLabel='Example Modal'
      >
        <div className='rounded-md bg-white p-2' style={{ width: '100%' }}>
          <h2 className='mb-4 text-xl text-[#1A464C]'>DELIVERY DETAILS</h2>

          <div className='rounded-md bg-white p-2' style={{ width: '100%' }}>
            <h5 className='text-sm	font-medium'>
              Nere Pickup Station
            </h5>
            <p className='my-2 text-xs font-medium text-[#979797]'>
              {location?.name}
            </p>
            <p className='my-2 cursor-pointer text-xs font-medium text-[#298592]'>
              <a href={location?.map_url} className='underline-none'>
                See on google maps
              </a>
            </p>
            <p className='text-xs font-medium'>Contact information</p>
            <p className='my-2 text-xs font-medium text-[#979797]'>
              {location?.agent_name} {location?.agent_phone}{' '}
            </p>
            <p className='my-2 text-xs font-medium'>Opening hours:</p>
            <p className='my-2 text-xs font-medium text-[#979797]'>
              Mon - Fri 08:00 - 5:30 ; Sat 09:00 - 15:30
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MoreInformation;
