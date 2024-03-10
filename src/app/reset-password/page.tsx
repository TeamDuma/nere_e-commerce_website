'use client';
import React, { useEffect, useState } from 'react';
import Modal, { Styles } from 'react-modal';

import {
  useLazyForgotpasswordTokenQuery,
  useResetPasswordMutation,
} from '@/lib/redux/services/customers';

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
        console.log('response', response);
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

  const handleReset = async () => {
    if (!requestToken) {
      // Handle the case where token is null
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
      console.log('Reset password response:', response);
      toast.success(`${response.data.message}`);
      router.push('/login');
    } catch (error) {
      console.error('Error resetting password:', error);
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
        <div>
          <div className='text-center text-red-500'>
            <p>Link has expired. Please generate a new link.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Resetpassword;
