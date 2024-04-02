import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from './Logo';
import { useSignInMutation } from '@/lib/redux/services/customers';
import { addUser, saveToken } from '@/lib/redux';
import Modal, { Styles } from 'react-modal';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
import ForgotpasswordModal from './ForgotpasswordModal';
import axios from 'axios';

const customStylesLarge: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '509px',
    height: '650px',
    borderRadius: '15px',
    border: 'none',
    zIndex: 1001,
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
    zIndex: 1000,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
    height: '650px',
    borderRadius: '15px',
    zIndex: 1001,
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
  const [showForgetPasswodModal, setShowForgetPasswodModal] = useState(false);

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
        if (data.message === 'success') {
          dispatch(addUser({ data }));
          dispatch(saveToken(data.token));
        }
        toast.success('Logged In successfully', {
          autoClose: 500,
        });
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

  const handleGoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`;
  };

  const handleForgotPassword = () => {
    setShowForgetPasswodModal(true);
  };

  const onLoginClick = () => {
    setShowForgetPasswodModal(false);
    console.log(showForgetPasswodModal);
  };

  const handleCloseForgotPassword = () => {
    setShowForgetPasswodModal(false);
    console.log(showForgetPasswodModal);
  };

  const handleLoginError = (error: any) => {
    console.log(error);
    toast.error('Login failed. Please check your credentials.');
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={window.innerWidth > 600 ? customStylesLarge : customStylesSmall}
        contentLabel='Login Modal'
      >
        <>
          <div className='rounded-xl p-4 '>
            <div className=' flex items-center justify-center text-center'>
              <Logo />
            </div>
            <div className=' flex items-center justify-center text-center  '>
              <p className='text-sm	font-bold	'>
                Login with your email & password
              </p>
            </div>
          </div>
          <form action='' className='my-2'>
            <div className='flex flex-col space-y-5'>
              <label htmlFor='email'>
                <p className='pb-2 text-sm font-medium	 text-slate-700'>Email</p>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full rounded-lg border border-slate-200 px-3 py-3 hover:shadow focus:border-slate-500 focus:outline-none'
                  placeholder='Enter email address'
                />
              </label>
              <label htmlFor='password'>
                <p className='pb-2 text-sm font-medium	 text-slate-700'>
                  Password
                </p>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full rounded-lg border border-slate-200 px-3 py-3 hover:shadow focus:border-slate-50 focus:outline-none'
                  placeholder='Enter your password'
                />
              </label>
              <div className='flex flex-row justify-end'>
                <div>
                  <text
                    href='#'
                    className='cursor-pointer font-medium text-[#298592] hover:underline'
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </text>
                </div>
              </div>
              <button
                className='inline-flex w-full items-center justify-center space-x-2 rounded-lg border-[#298592] bg-[#298592] py-3 font-medium text-white hover:bg-[#298592] hover:shadow'
                onClick={handleLogin}
                disabled={isLoading}
              >
                <span> {isLoading ? <Spinner /> : 'Login'}</span>
              </button>
              <p className='text-center'>
                Dont have any account?{' '}
                <a
                  href='#'
                  className='inline-flex items-center space-x-1 font-medium text-[#298592]'
                >
                  <span onClick={onRegistrationClick}>Register</span>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </span>
                </a>
              </p>
              <div className='inline-flex w-full items-center justify-center'>
                <hr className='my-4 h-px w-64 border-0 bg-gray-200 ' />
                <span className='absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900  '>
                  or
                </span>
              </div>

              <button
                className='inline-flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-solid border-[#298592] bg-white py-2 font-medium text-[#298592]'
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <span>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <span className='flex flex-row gap-6'>
                      <svg
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 48 48'
                        className='block h-6 w-6'
                      >
                        <path
                          fill='#EA4335'
                          d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
                        ></path>
                        <path
                          fill='#4285F4'
                          d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
                        ></path>
                        <path
                          fill='#FBBC05'
                          d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
                        ></path>
                        <path
                          fill='#34A853'
                          d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
                        ></path>
                        <path fill='none' d='M0 0h48v48H0z'></path>
                      </svg>
                      Sign in with Google
                    </span>
                  )}
                </span>
              </button>
            </div>
          </form>

          <ForgotpasswordModal
            onClose={handleCloseForgotPassword}
            isOpen={showForgetPasswodModal}
            onLoginClick={onLoginClick}
          />
        </>
      </Modal>
    </div>
  );
};

export default LoginModal;
