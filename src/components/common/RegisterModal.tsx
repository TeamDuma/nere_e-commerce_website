import React, { useState } from 'react';
import Modal, { Styles } from 'react-modal';
import LoginModal from './LoginModal';
import {
  useSignUpMutation,
  usePhoneVerifyMutation,
} from '@/lib/redux/services/customers';
import Logo from './Logo';
import { toast } from 'react-toastify';
import OTPModal from '../OTPModal';
import { useDispatch } from 'react-redux';
import { addUser, saveToken } from '@/lib/redux';

const customStylesLarge: Styles = {
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
    height: '750px',
    borderRadius: '15px',
  },
};
const customStylesSmall: Styles = {
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
    width: '350px',
    height: '650px',
    borderRadius: '15px',
  },
};

const RegistrationModal: React.FC<{
  onClose: () => void;
  isOpen: boolean;
  onLoginClick: () => void;
}> = ({ onClose, isOpen, onLoginClick }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [oTpModalVisible, setoTpModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleOtpClick = () => {
    setoTpModalVisible(true);
  };

  const [signUp, { isLoading, isError, isSuccess, error }] =
    useSignUpMutation();
  const [phoneVerify] = usePhoneVerifyMutation();

  const handleRegister = async () => {
    if (!name) {
      toast.error('Name should not be empty');
      return;
    }

    if (!email || !isValidEmail(email)) {
      toast.error('Email must be a valid email address');
      return;
    }

    if (!phone || !isValidPhoneNumber(phone)) {
      toast.error('Phone must be a valid phone number');
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
    signUp({ email, name, phone, password })
      .then((response) => {
        if ('data' in response) {
          const data = response.data;
          const token = response.data.token;
          if (data.message === 'success') {
            dispatch(addUser({ data }));
          }
          dispatch(saveToken(token));
          toast.success('Signed Up successfully');
          phoneVerify({ token }).then((response) => {
            handleOtpClick();
            console.log('response', response);
          });
        } else {
          console.log('response', response.error);
        }
      })
      .catch((error) => {
        toast.error(error.message || 'Error signing up');
      });
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phone: string): boolean => {
    return /^\+\d{12}$/.test(phone);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Registration Modal'
      style={window.innerWidth > 600 ? customStylesLarge : customStylesSmall}
    >
      <div className='rounded-4xl fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-50'>
        <div className='sm:rounded-4xl max-h-full w-full max-w-xl overflow-y-auto bg-white sm:max-h-screen'>
          <div className='flex w-full items-center justify-center'>
            <div className=' mx-auto max-w-[400px]'>
              <div className='mb-4'>
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
                htmlFor='Phone'
                className='text-sm font-bold leading-tight tracking-normal text-gray-800'
              >
                Phone
              </label>
              <input
                type='text'
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
                  className='w-full rounded-full bg-[#298592] p-3 font-semibold text-white'
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
              <div className='inline-flex w-full items-center justify-center'>
                <hr className='my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700' />
                <span className='absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white'>
                  or
                </span>
              </div>
              <p>
                Already have an account?{' '}
                <span
                  onClick={onLoginClick}
                  className='cursor-pointer text-[#298592]'
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
        <OTPModal
          onClose={onClose}
          isOpen={oTpModalVisible}
          phoneNumber={phone}
        />
      </div>
    </Modal>
  );
};

export default RegistrationModal;
