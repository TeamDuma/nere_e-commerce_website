'use client';

import React, { useState } from 'react';
import Modal, { Styles } from 'react-modal';
import PickupLocation from './components/PickupLocation';
import AddAddressModal from './components/AddAddressModal';
import { IoIosArrowDown } from 'react-icons/io';

const customStylesLarge: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
    height: '550px',
    borderRadius: '15px',
  },
};
const customStylesSmall: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '400px',
    margin: 'auto',
    borderRadius: '15px',
    height: '90vh',
  },
};

interface DeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeliveryModal: React.FC<DeliveryModalProps> = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<
    'pickup' | 'custom' | null
  >(null);
  const [isPickupLocationOpen, setPickupLocationOpen] = useState(false);

  const closeModal = () => {
    onClose();
  };

  const togglePickupLocation = () => {
    setPickupLocationOpen(!isPickupLocationOpen);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={window.innerWidth > 600 ? customStylesLarge : customStylesSmall}
      contentLabel='Delivery Modal'
    >
      <div>
        <h2 className='mb-4 text-xl font-bold'>DELIVERY DETAILS</h2>
        <div className='mb-4'>
          <div>
            <input
              type='radio'
              id='pickupOption'
              name='deliveryOption'
              value='pickup'
              checked={selectedOption === 'pickup'}
              onChange={() => setSelectedOption('pickup')}
            />
            <label htmlFor='pickupOption'>Change pickup location</label>
          </div>
          <div
            className='flex cursor-pointer items-center justify-between'
            onClick={togglePickupLocation}
          >
            <div className='flex items-center'>
              <h3 className='mr-2 text-lg font-bold'>Pick-up location</h3>

              {/* <p>Change pickup location</p> */}
              <IoIosArrowDown />
            </div>
          </div>
          {isPickupLocationOpen && (
            <>
              <p className='mt-2'>
                Delivery between 05 December and 07 December
              </p>
              <div className='mb-4'>
                <p>Nere Agent Pickup, East Legon</p>
                <p>MEST Ambassadorial Enclave, 20 Aluguntugui St, Accra</p>
              </div>
            </>
          )}
        </div>
        <hr />
        <div className='mt-5 flex cursor-pointer items-center justify-between'>
          <div>
            <input
              type='radio'
              id='customOption'
              name='deliveryOption'
              value='custom'
              checked={selectedOption === 'custom'}
              onChange={() => setSelectedOption('custom')}
            />
          </div>
          <div className='flex items-center'>
            <h3 className='mr-2 text-lg font-bold'>Custom Address</h3>
            <p onClick={() => setSelectedOption('custom')}>
              Add preferred address
            </p>
          </div>
        </div>
      </div>

      {selectedOption === 'pickup' && (
        <PickupLocation onClose={closeModal} isOpen={isOpen} />
      )}
      {selectedOption === 'custom' && (
        <AddAddressModal onClose={closeModal} isOpen={isOpen} />
      )}
    </Modal>
  );
};

export default DeliveryModal;
