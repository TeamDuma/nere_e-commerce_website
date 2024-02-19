'use client';

import React, { useEffect, useState } from 'react';
import Modal, { Styles } from 'react-modal';

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
    width: '400px',
    height: '350px',
    borderRadius: '15px',
  },
};
const customStylesMedium: Styles = {
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
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxWidth: '550px',
    margin: 'auto',
    borderRadius: '15px',
    height: '350px',
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
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '400px',
    margin: 'auto',
    borderRadius: '15px',
    height: '40vh',
  },
};

const LoyaltyModal: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const closeModal = () => {
    onClose();
  };

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
        <div className='flex h-full flex-col items-center justify-center'>
          <h2 className='mb-4 text-xl'>Coming Soon !!</h2>
          <h2 className='mb-4 text-xl'>image</h2>
          <h2 className='mb-4 text-xl'>Loyalty Offers</h2>
          <div className='... flex items-stretch'>
            <p className='mb-4 text-center'>
              Enjoy exciting games while you shop, and win Nere coins that can
              be redeemed as Discount!{' '}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoyaltyModal;
