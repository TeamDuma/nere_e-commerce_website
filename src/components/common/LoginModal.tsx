import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from './Logo';
import { useSignInMutation } from '@/lib/redux/services/customers';
import { addUser, deleteUser } from '@/lib/redux';
import Modal, { Styles } from 'react-modal';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const customStylesLarge: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '509px',
    height: '600px',
    borderRadius: '15px',
    border: 'none',
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
    height: '600px',
    borderRadius: '15px',
    border: 'none',
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
        toast.success('Loged In successfully', {
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

  const handleLoginError = (error: any) => {
    toast.error('Login failed. Please check your credentials.');
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={window.innerWidth > 600 ? customStylesLarge : customStylesSmall}
        contentLabel='Example Modal'
      >
        <>
          <div className='rounded-xl p-4 '>
            <div className=' flex items-center justify-center text-center  '>
              <Logo />
            </div>
            <div className=' flex items-center justify-center text-center  '>
              <p className='text-sm	font-bold	'>
                Login with your email & Password
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
                  <a href='#' className='font-medium text-[#298592]'>
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button
                className='inline-flex w-full items-center justify-center space-x-2 rounded-lg border-[#298592] bg-[#298592] py-3 font-medium text-white hover:bg-[#298592] hover:shadow'
                onClick={handleLogin}
                disabled={isLoading}
              >
                <span> {isLoading ? <Spinner /> : 'Login'}</span>
              </button>
              <div className='inline-flex w-full items-center justify-center'>
                <hr className='my-4 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700' />
                <span className='absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white'>
                  or
                </span>
              </div>

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
            </div>
          </form>
        </>
      </Modal>
    </div>
  );
};

export default LoginModal;
