'use client';
import React, { useEffect, useState } from 'react';
import Modal, { Styles } from 'react-modal';

import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import shopping, { selectShopping } from '@/lib/redux/slices/shopping';
import {
  useLazyForgotpasswordTokenQuery,
  usePhoneVerifyMutation,
  usePhoneVerifyTokenMutation,
  useResetPasswordMutation,
} from '@/lib/redux/services/customers';

import { toast } from 'react-toastify';
import { error } from 'console';
import Logo from '@/components/common/Logo';
import Timer from '@/components/Timer';
import { useRouter, useSearchParams } from 'next/navigation';

const Resetpassword = () => {
  const [forgotpasswordToken, { data, isFetching, isLoading, isSuccess }] =
    useLazyForgotpasswordTokenQuery();

  const [resetPassword] = useResetPasswordMutation();

  const router = useRouter();

  const [Token, setToken] = React.useState('');

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      forgotpasswordToken(token)
        .then((response) => {
          setToken(token);
          console.log('response', response);
        })
        .catch((error) => {
          console.error('Error verifying token:', error);
        });
    }
  }, []);

  const handleReset = async () => {
    if (!token) {
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
      const response = await resetPassword({
        token,
        password,
        password_confirmation: confirmPassword,
      });

      console.log('formattedPhone', password, confirmPassword);

      // Handle response as needed
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('Failed to reset password');
    }
  };

  return (
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
  );
};

export default Resetpassword;
