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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '350px',
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
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxWidth: '550px',
    margin: 'auto',
    borderRadius: '15px',
    border: 'none',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    border: 'none',
    height: '40vh',
  },
};

const GameModal: React.FC<{
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
    <div className=' bg-gray-50'>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={modalStyles}
        contentLabel='Example Modal'
      >
        <div className='flex h-full flex-col items-center justify-center'>
          <h2 className='mb-4 text-2xl	font-semibold	 text-[#298592]'>
            Coming Soon !!
          </h2>
          <div className='w-156 h-156  mb-4 text-xl'>
            <img
              className='w-156 h-156 mx-1 my-1'
              src='/images/joystick.svg'
              alt='Coin'
            />
          </div>
          <h2 className='mb-4 text-xl font-medium	'>Game & Earn</h2>
          <div className='... flex items-stretch'>
            <p className='mb-4 text-center text-sm font-normal			'>
              Enjoy exciting games while you shop, and win Nere coins that can
              be redeemed as Discount!{' '}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GameModal;
