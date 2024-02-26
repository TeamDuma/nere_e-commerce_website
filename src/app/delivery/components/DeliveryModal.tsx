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
import { IoIosArrowDown } from 'react-icons/io';
import PickupLocation from '@/app/delivery/components/SelectPickupLocation';

const customStylesLarge: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '650px',
    height: '500px',
    borderRadius: '15px',
    border: 'none',
  },
};
const customStylesMedium: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '550px',
    margin: 'auto',
    borderRadius: '15px',
    border: 'none',
    height: '500px',
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
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 'auto',
    borderRadius: '15px',
    border: 'none',
    height: '500px',
    // width: '90%',
    width: '350px',
  },
};

const DeliveryModal: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const dispatch = useDispatch();
  const { selectedLocationId } = useSelector(selectShopping);

  const { data, isLoading } = useGetlocationsQuery();
  const locations = data?.data || [];

  const [selectedAddress, setSelectedAddress] = useState<ILocation | null>(
    () => {
      return (
        locations.find((location) => location.id === selectedLocationId) || null
      );
    }
  );
  const [selectedOption, setSelectedOption] = useState<'pickup' | null>(null);

  const closeModal = () => {
    onClose();
  };

  const handleSelectLocation = () => {
    if (selectedAddress) {
      dispatch(setSelectedLocationId(selectedAddress.id));
      onClose();
    } else {
      onClose();
    }
  };

  useEffect(() => {
    if (data && selectedLocationId) {
      const newlySelectedAddress = locations.find(
        (location) => location.id === selectedLocationId
      );
      setSelectedAddress(newlySelectedAddress || null);
    }
  }, [selectedLocationId, data]);

  const screenWidth = window.innerWidth;
  let modalStyles = customStylesSmall;

  if (screenWidth >= 960) {
    modalStyles = customStylesLarge;
  } else if (screenWidth >= 600) {
    modalStyles = customStylesMedium;
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={modalStyles}
        contentLabel='Example Modal'
      >
        <div className='rounded-md bg-white p-2' style={{ width: '100%' }}>
          <h2 className='mb-4 text-xl'>DELIVERY DETAILS</h2>

          <div className='rounded-md bg-white p-2' style={{ width: '100%' }}>
            <input
              style={{ marginRight: 10 }}
              type='radio'
              id='pickupOption'
              name='deliveryOption'
              value='selected'
              checked={selectedOption !== 'pickup'}
            />
            <label
              htmlFor='pickupOption'
              className='text-base	font-medium	 text-[#000]'
            >
              Pick-up location
            </label>
            <h5 className='mb-4 ml-4 text-sm text-[#979797]'>
              Delivery between 05 December and 07 December
            </h5>
          </div>

          <div
            className='rounded-md border border-[#CFCFCF] bg-white'
            style={{ width: '100%' }}
          >
            <div className='flex justify-between p-2'>
              <div className='rounded-md bg-white'>Pickup Location</div>
              {selectedAddress ? (
                <div
                  className='cursor-pointer text-xs text-[#298592] underline underline-offset-1	 '
                  onClick={() => setSelectedOption('pickup')}
                >
                  Change pickup location {'>'}
                </div>
              ) : (
                <p
                  className='cursor-pointer text-xs font-medium text-[#298592] underline underline-offset-1'
                  onClick={() => setSelectedOption('pickup')}
                >
                  Please select a Location{'>'}
                </p>
              )}
            </div>

            <div className='flex flex-col border-t border-[#CFCFCF]'>
              <div className='rounded-md bg-white p-2'>
                {selectedAddress ? (
                  <>
                    <p className='text-sm	 font-medium	'>
                      {selectedAddress.name}
                    </p>
                    <p className='text-xs font-medium		text-[#979797]'>
                      MEST Ambassadorial Enclave, 20 Aluguntugui St, Accra
                    </p>
                  </>
                ) : (
                  <p className='text-xs font-medium		text-[#979797]'>
                    Please select a Location
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className='m-5 flex flex-col sm:flex-row'>
            <button
              className='mb-2 rounded-md border-2 border-solid border-[#298592] p-2 text-[#298592] sm:mb-0 sm:mr-2'
              style={{ width: '100%' }}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className='rounded-md bg-[#298592] p-2 text-white'
              style={{ width: '100%' }}
              onClick={handleSelectLocation}
            >
              Continue
            </button>
          </div>
        </div>

        {selectedOption === 'pickup' && (
          <PickupLocation onClose={closeModal} isOpen={isOpen} />
        )}
      </Modal>
    </div>
  );
};

export default DeliveryModal;
