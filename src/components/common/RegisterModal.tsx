import React, { useEffect, useRef, useState } from 'react';
import LoginModal from './LoginModal';
import { useSignUpMutation } from '@/lib/redux/services/customers';
import Logo from './Logo';

const RegistrationModal = ({ onClose }) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

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

  const closeModal = () => {
    setLoginModalVisible(false);
  };
  const [signUp, { isLoading, isError, isSuccess, error }] =
    useSignUpMutation();

  const handleRegister = async () => {
    signUp({ email, name, phone, password })
      .then((data) => {
        console.log('Login successful:', data);
      })
      .catch((e) => {
        console.log('Login Error:', e);
      });
  };

  return (
    <div
      className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'
      ref={modalRef}
    >
      <div className='max-h-full w-full max-w-xl overflow-y-auto bg-white sm:rounded-2xl'>
        <div className='w-full'>
          <div className='m-8 mx-auto my-20 max-w-[400px]'>
            <div className='mb-8'>
              <Logo />
              <p className='text-gray-600'>
                Register with your email & password
              </p>
            </div>

            <label
              htmlFor='Name'
              className='text-sm font-bold leading-tight tracking-normal text-gray-800'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
              placeholder='kojo'
            />

            <label
              htmlFor='Email'
              className='text-sm font-bold leading-tight tracking-normal text-gray-800'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
              placeholder='kojo@gmail.com'
            />
            <label
              htmlFor='Phone'
              className='text-sm font-bold leading-tight tracking-normal text-gray-800'
            >
              Phone
            </label>
            <input
              type='number'
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
              placeholder='kojo@gmail.com'
            />

            <label
              htmlFor='Password'
              className='text-sm font-bold leading-tight tracking-normal text-gray-800'
            >
              Password
            </label>
            <div className='relative mb-5 mt-2'>
              <input
                type='password'
                id='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
                placeholder='Hint'
              />
            </div>

            <label
              htmlFor='ConfirmPassword'
              className='text-sm font-bold leading-tight tracking-normal text-gray-800'
            >
              Confirm password
            </label>
            <div className='relative mb-5 mt-2'>
              <input
                type='password'
                id='ConfirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
                placeholder='Hint'
              />
            </div>

            <div className='space-y-4'>
              <button
                className='w-full rounded-full bg-black p-3 font-semibold text-white'
                onClick={handleRegister}
              >
                Register
              </button>
            </div>

            <p>
              Already have an account?{' '}
              <span
                onClick={handleLoginClick}
                className='cursor-pointer text-blue-500'
              >
                Login{' '}
              </span>
            </p>
          </div>

          {loginModalVisible && (
            <LoginModal
              onClose={closeModal}
              onRegistrationClick={closeModal}
              session={null}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
