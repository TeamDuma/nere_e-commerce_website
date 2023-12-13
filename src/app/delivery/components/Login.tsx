import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; // Importing useDispatch
import { useSignInMutation } from '@/lib/redux/services/customers';
import { addUser, deleteUser } from '@/lib/redux';
import Logo from '@/components/common/Logo';

interface ISession {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
}

const LoginModal: React.FC<{
  session: ISession | null;
  onClose: () => void;
  onRegistrationClick: () => void;
}> = ({ session, onClose, onRegistrationClick }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch(); // Use useDispatch to get the dispatch function

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const [signIn, { isLoading, isError, isSuccess, error }] =
    useSignInMutation();

  const handleLogin = async () => {
    try {
      const data = await signIn({ email, password });
      dispatch(addUser({ data }));
      onClose();

      console.log('Login successful:', data);
    } catch (e) {
      console.log('Login Error:', e);
    }
  };

  useEffect(() => {
    if (session?.user) {
      const { name, email } = session.user;
      console.log('add user');
    } else {
      console.log('deleteUser');
      // dispatch(deleteUser());
    }
  }, [session, dispatch]);

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

export default LoginModal;
