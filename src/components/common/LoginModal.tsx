import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import Logo from './Logo';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useSignInMutation } from '@/lib/redux/services/customers';

const LoginModal = ({ onClose, onRegistrationClick }) => {
  const modalRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const [signIn, {isLoading, isError, isSuccess, error}] = useSignInMutation()

  const handleLogin = async () => {
    signIn({email, password}).then((data)=>{
      console.log('Login successful:', data);
    }).catch((e)=>{ 
      console.log('Login Error:', e);

    })
    // try {
    //   const response = await fetch(
    //     'https://nere-server.herokuapp.com/api/customers/signIn',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         email,
    //         password,
    //       }),
    //     }
    //   );

    //   if (!response.ok) {
    //     // Handle login error (e.g., display error message to the user)
    //     const errorData = await response.json();
    //     console.error('Login failed:', errorData);
    //     return;
    //   }

    //   // Handle the response accordingly (e.g., update state, show success message)
    //   const responseData = await response.json();
    //   console.log('Login successful:', responseData);

    //   // Close the modal
    //   onClose();
    // } catch (error) {
    //   console.error('Login error:', error);
    // }
  };

  return (
    <div className='modal' ref={modalRef}>
      <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
        <div className='max-h-full w-full max-w-xl overflow-y-auto bg-white sm:rounded-2xl'>
          <div className='w-full'>
            <div className='m-8 mx-auto my-20 max-w-[400px]'>
              <div className='mb-8'>
                <Logo />
                <p className='text-gray-600'>
                  Login with your email & Password
                </p>
              </div>

              <label
                htmlFor='Email'
                className='text-sm font-bold leading-tight tracking-normal text-gray-800'
              >
                Email{' '}
              </label>
              <input
                type='email' // Set input type to 'email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  type='password' // Set input type to 'password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
                  placeholder='Password'
                />
              </div>

              <div className='space-y-4'>
                <button
                  className='w-full rounded-full bg-black p-3 font-semibold text-white'
                  onClick={() => handleLogin()}
                >
                  Login
                </button>
              </div>

              <p>
                Don't have an account?{' '}
                <span
                  onClick={onRegistrationClick}
                  className='cursor-pointer text-blue-500'
                >
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
