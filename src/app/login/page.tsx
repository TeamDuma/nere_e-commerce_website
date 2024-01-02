'use client';
import Logo from '@/components/common/Logo';
import { useSignInMutation } from '@/lib/redux/services/customers';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { useRouter } from 'next/router';

import { addUser } from '@/lib/redux/slices/shopping';
import { ILoginResponse } from '@/types/customer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

interface ISession {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
}

const Login: React.FC<{
  session: ISession | null;
  onClose: () => void;
  onRegistrationClick: () => void;
}> = ({ session, onClose, onRegistrationClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [signIn, { isLoading, isError, isSuccess, error }] =
    useSignInMutation();

  const handleLogin = async () => {
    try {
      const response = await signIn({ email, password });

      if ('data' in response) {
        const data = response.data;
        if (data.message === 'success') dispatch(addUser({ data }));
        toast.success('Loged In.');

        if (typeof window !== 'undefined') {
        }

        console.log('Login successful:', data);
      } else {
        handleLoginError(response.error);
      }
    } catch (e) {
      handleLoginError(e);
    }
  };

  const handleLoginError = (error: any) => {
    console.log('Login Error:', error);

    toast.error('Login failed. Please check your credentials.');
  };

  useEffect(() => {
    if (session?.user) {
      const { name, email } = session.user;
      console.log('add user');
    } else {
      console.log('deleteUser');
    }
  }, [session, dispatch]);
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-md  rounded-lg bg-white shadow-md'>
        <div className='max-h-full w-full max-w-xl overflow-y-auto bg-white sm:rounded-2xl'>
          <div className='w-full'>
            <div className='m-8 mx-auto  max-w-[400px]'>
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
                type='email'
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
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
                  placeholder='Password'
                />
              </div>

              <div className='space-y-4'>
                <button
                  className='w-full rounded-full bg-[#298592] p-3 font-semibold text-white'
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

export default Login;
