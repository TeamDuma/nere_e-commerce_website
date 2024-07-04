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
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useRouter } from 'next/navigation';
import Spinner from './Spinner';

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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '800px',
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
    height: '770px',
    borderRadius: '15px',
    border: 'none',
    zIndex: 1001,
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
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleOtpClick = () => {
    setoTpModalVisible(true);
  };

  const handlePhoneNumberChange = (value: string | undefined) => {
    setPhoneNumber(value);
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

    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
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

    signUp({ email, name, phone: phoneNumber, password })
      .then((response) => {
        if ('data' in response) {
          const data = response.data;
          const token = data.token;

          if (data.success === true) {
            dispatch(addUser({ data }));
          }

          if (token !== undefined) {
            dispatch(saveToken(token));
            toast.success('Signed Up successfully', {
              autoClose: 500,
            });
            phoneVerify({ token }).then((response) => {
              router.push('/phoneVerify');
              onClose();
            });
          } else {
            console.error('Token is undefined');
            toast.error('Error signing up');
          }
        } else {
          console.error(response.error);
          toast.error('Error signing up');
        }
      })
      .catch((error) => {
        toast.error(error.message || 'Error signing up');
      });
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phoneNumber: string): boolean => {
    return /^\+\d+$/.test(phoneNumber);
  };

  const handleGoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    const agt_code = localStorage.getItem('agt_code');
    window.location.href = `${
      process.env.NEXT_PUBLIC_API_URL
    }/auth/google/login${agt_code ? `?agt_code=${agt_code}` : ''}`;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Registration Modal'
      style={window.innerWidth > 600 ? customStylesLarge : customStylesSmall}
    >
      <div className='rounded-4xl fixed left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-50'>
        <div className='sm:rounded-4xl max-h-full w-full max-w-xl overflow-y-auto bg-white p-4 sm:max-h-screen'>
          <div className='flex w-full items-center justify-center'>
            <div className=' mx-auto max-w-[400px]'>
              <div className='rounded-xl'>
                <div className=' flex items-center justify-center text-center  '>
                  <Logo />
                </div>
                <div className=' flex items-center justify-center text-center  '>
                  <p className='text-sm	font-bold	'>
                    Register with your email & password
                  </p>
                </div>
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
                placeholder='Kojo'
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
                htmlFor='phoneNumber'
                className='block text-sm font-bold text-gray-800'
              >
                Phone (WhatsApp Number)
              </label>
              <div className='relative mb-5 mt-2 rounded border border-gray-300 focus:border focus:border-indigo-700 focus:outline-none'>
                <PhoneInput
                  international
                  defaultCountry='GH'
                  value={phoneNumber as any}
                  style={{
                    outline: 'none',
                    border: '1px solid #ffffff',
                    margin: '10px',
                  }}
                  onChange={handlePhoneNumberChange}
                />
              </div>

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

              <p className='ml-8 mt-4'>
                Already have an account?{' '}
                <span
                  onClick={onLoginClick}
                  className='cursor-pointer text-[#298592]'
                >
                  Login
                </span>
              </p>

              <div className='inline-flex w-full items-center justify-center'>
                <hr className='my-2 h-px w-32 border-0 bg-gray-200 ' />
                <span className='  bg-white px-3 font-medium text-gray-900 '>
                  or
                </span>
                <hr className='my-4 h-px w-32 border-0 bg-gray-200 ' />
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
                      Sign up with Google
                    </span>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* <OTPModal
          onClose={onClose}
          isOpen={oTpModalVisible}
          phoneNumber={phone}
        /> */}
      </div>
    </Modal>
  );
};

export default RegistrationModal;
