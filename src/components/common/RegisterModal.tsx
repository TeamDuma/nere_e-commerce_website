// RegistrationModal.jsx
import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import LoginModal from './LoginModal';

const RegistrationModal = ({ onClose }) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);


  const handleLoginClick = () => {
    setLoginModalVisible(true);

  };

  const handleRegistrationClick = () => {
    setLoginModalVisible(false);
    onClose();

  };

  const closeModal = () => {
    setLoginModalVisible(false);
  };



  return (
    <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50' ref={modalRef}>
    <div className='max-h-full w-full max-w-xl overflow-y-auto bg-white sm:rounded-2xl'>
      <div className='w-full'>
        <div className='m-8 mx-auto my-20 max-w-[400px]'>
          <div className='mb-8'>
            <Logo />

            <p className='text-gray-600'>Login with your email & Password</p>
          </div>
          <label
            htmlFor='Name'
            className='text-sm font-bold leading-tight tracking-normal text-gray-800'
          >
            Name{' '}
          </label>
          <input
            id='name'
            className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
            placeholder='kojo'
          />
          <label
            htmlFor='Email'
            className='text-sm font-bold leading-tight tracking-normal text-gray-800'
          >
            Email{' '}
          </label>
          <input
            id='name'
            className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
            placeholder='kojo@gmail.com'
          />
          <label
            htmlFor='Password'
            className='text-sm font-bold leading-tight tracking-normal text-gray-800'
          >
            Password{' '}
          </label>
          <div className='relative mb-5 mt-2'>
            <input
              id='Password'
              className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
              placeholder='Hint'
            />
          </div>
          <label
            htmlFor='Password'
            className='text-sm font-bold leading-tight tracking-normal text-gray-800'
          >
          Confirm password {' '}
          </label>
          <div className='relative mb-5 mt-2'>
            <input
              id='Password'
              className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
              placeholder='Hint'
            />
          </div>


          <div className='space-y-4'>
            <button className='w-full rounded-full bg-black p-3 font-semibold text-white' onClick={console.log("reg")}>
            Go to Registration              </button>
          </div>
          <p>
        Already have an account?{' '}
                <span onClick={handleLoginClick} className='text-blue-500 cursor-pointer'>
          Login                </span>
              </p>
        </div>
        {loginModalVisible && (
        <LoginModal onClose={closeModal} onRegistrationClick={closeModal} />
      )}
    
      </div>
    </div>
  </div>
    // <div className='modal'>
    //   {/* Add your registration modal content here */}
    //   <button onClick={onClose}>Close</button>
    // </div>
  );
};

export default RegistrationModal;
