import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from './Logo';
import { useSignInMutation } from '@/lib/redux/services/customers';
import { addUser, deleteUser } from '@/lib/redux';
import Modal, { Styles } from 'react-modal';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba( 190,192,193, 0.7)',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '500px',
    borderRadius: '15px',
    overflow: 'hidden',
  },
};

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
  isOpen: boolean;
  onRegistrationClick: () => void;
}> = ({ session, onClose, onRegistrationClick, isOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const [signIn, { isLoading, isError, isSuccess, error }] =
    useSignInMutation();

  const handleLogin = async () => {
    try {
      if (isLoading) {
        return;
      }

      const response = await signIn({ email, password });

      if ('data' in response) {
        const data = response.data;
        if (data.message === 'success') dispatch(addUser({ data }));
        toast.success('Loged In successfully');
        onClose();
        if (typeof window !== 'undefined') {
        }
      } else {
        handleLoginError(response.error);
      }
    } catch (e) {
      handleLoginError(e);
    }
  };

  const handleLoginError = (error: any) => {
    toast.error('Login failed. Please check your credentials.');
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='rounded-4xl fixed left-0 top-0 flex h-full w-full items-center  justify-center bg-opacity-50'>
          <div className='sm:rounded-4xl  w-full max-w-xl overflow-y-auto bg-white'>
            <div className='flex w-full items-center justify-center'>
              {' '}
              <div className='m-8 mx-auto  max-w-[300px]'>
                <div className='mb-8'>
                  <Logo />
                  <p>Login with your email & Password</p>
                </div>

                <label
                  htmlFor='Email'
                  className='text-sm  leading-tight tracking-normal text-gray-800'
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
                  className='text-sm  leading-tight tracking-normal text-gray-800'
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
                  <div className='space-y-4'>
                    <button
                      className='w-full rounded-full bg-[#298592] p-3 font-semibold text-white'
                      onClick={handleLogin}
                      disabled={isLoading}
                    >
                      {isLoading ? <Spinner /> : 'Login'}
                    </button>
                  </div>
                </div>

                <div className='inline-flex w-full items-center justify-center'>
                  <hr className='my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700' />
                  <span className='absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white'>
                    or
                  </span>
                </div>
                <p>
                  Don't have an account?{' '}
                  <span
                    onClick={onRegistrationClick}
                    className='cursor-pointer text-[#298592]'
                  >
                    Register
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
