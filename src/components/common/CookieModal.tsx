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
    width: '500px',
    height: '400px',
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
    zIndex: 1001,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
    margin: 'auto',
    borderRadius: '15px',
    border: 'none',
    height: '400px',
  },
};

const CookieModal: React.FC<{
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
        <>
          {/* This is an example component */}
          <div className='max-full mx-auto'>
            {/* Modal toggle */}
            <button
              className='block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              type='button'
              data-modal-toggle='default-modal'
            >
              Toggle modal
            </button>
            {/* Main modal */}
            <div
              id='default-modal'
              data-modal-show='true'
              aria-hidden='true'
              className='h-modal fixed left-0 right-0 top-4 z-50 hidden items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full'
            >
              <div className='relative h-full w-full max-w-2xl px-4 md:h-auto'>
                {/* Modal content */}
                <div className='relative rounded-lg bg-white shadow dark:bg-gray-700'>
                  {/* Modal header */}
                  <div className='flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600'>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl'>
                      Terms of Service
                    </h3>
                    <button
                      type='button'
                      className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                      data-modal-toggle='default-modal'
                    >
                      <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className='space-y-6 p-6'>
                    <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </p>
                  </div>
                  {/* Modal footer */}
                  <div className='flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600'>
                    <button
                      data-modal-toggle='default-modal'
                      type='button'
                      className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                      I accept
                    </button>
                    <button
                      data-modal-toggle='default-modal'
                      type='button'
                      className='rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className='mt-5'>
              This modal element is part of a larger, open-source library of
              Tailwind CSS components. Learn more by going to the official{' '}
              <a
                className='text-blue-600 hover:underline'
                href='#'
                target='_blank'
              >
                Flowbite Documentation
              </a>
              .
            </p>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default CookieModal;
