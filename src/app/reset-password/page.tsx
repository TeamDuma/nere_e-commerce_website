'use client';
import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import Logo from '@/components/common/Logo';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

const Resetpassword = () => {
  const router = useRouter();

  const [requestToken, setRequestToken] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [isValidToken, setIsValidToken] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        router.push('/');
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/customers/reset-password/${token}`
        );
        setIsValidToken(true);
        setRequestToken(token);

        // Handle response as needed
      } catch (error: any) {
        console.error('Error verifying token:', error);
        setIsError(true);
        toast.error(
          'Failed to verify token: ' + `${error.response.data.message}`
        );
      }
    };

    verifyToken();
  }, []);

  const handleExpired = async () => {
    router.push('/');
  };

  const handleReset = async () => {
    if (!requestToken) {
      return;
    }

    if (!password || password.length < 6) {
      toast.error('Password should be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Password and Confirm Password do not match');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/customers/reset-password`,
        {
          token: requestToken,
          password: password,
          password_confirmation: confirmPassword,
        }
      );
      toast.success(`${response.data.message}`);
      router.push('/');
    } catch (error) {
      toast.error('Failed to reset password. Please try again.');
    }
  };

  return (
    <>
      {isValidToken === true && (
        <div className='rounded-4xl fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-50'>
          <div className='flex w-full items-center justify-center'>
            <div className=' mx-auto max-w-[400px]'>
              <div className='rounded-xl p-4 '>
                <div className=' flex items-center justify-center text-center  '>
                  <Logo />
                </div>
                <div className=' flex items-center justify-center text-center  '>
                  <p className='text-sm		'>Reset your Password</p>
                </div>
              </div>

              <div className='relative mb-5 mt-2'>
                <input
                  type='password'
                  id='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
                  placeholder='Password'
                />
              </div>

              <div className='relative mb-5 mt-2'>
                <input
                  type='password'
                  id='ConfirmPassword'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
                  placeholder='Confirm Password'
                />
              </div>

              <div className='space-y-4'>
                <button
                  className='w-full rounded-full bg-[#298592] p-3 font-semibold text-white'
                  onClick={handleReset}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isError && (
        <div className='flex w-full items-center justify-center'>
          <div className='relative flex  h-56 w-[800px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
            <div className='rounded-xl p-4 '>
              <div className=' flex items-center justify-center text-center  '>
                <Logo />
              </div>
              <div className=' flex items-center justify-center text-center  '>
                <p className='mb-4	text-3xl	 font-bold'>
                  Link has expired. Please generate a new link.
                </p>
              </div>
              <div className=' flex items-center justify-center text-center  '>
                <button
                  className='flex select-none items-center gap-2 rounded-lg px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-red-500 underline transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                  onClick={handleExpired}
                  type='button'
                  data-ripple-dark='true'
                >
                  Go Home.{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-4 w-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resetpassword;
