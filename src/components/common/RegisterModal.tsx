import React from 'react';
import Modal, { Styles } from 'react-modal';
import LoginModal from './LoginModal';
import { useSignUpMutation } from '@/lib/redux/services/customers';
import Logo from './Logo';
import { toast } from 'react-toastify';

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
    height: '800px',
    borderRadius: '15px',
  },
};

const RegistrationModal = ({ onClose }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const [signUp, { isLoading, isError, isSuccess, error }] =
    useSignUpMutation();

  const handleRegister = async () => {
    if (!name) {
      alert('Name should not be empty');
      return;
    }

    if (!email || !isValidEmail(email)) {
      alert('Email must be a valid email address');
      return;
    }

    if (!phone || !isValidPhoneNumber(phone)) {
      alert('Phone must be a valid phone number');
      return;
    }
    if (!password || password.length < 6) {
      alert('Password should be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }

    signUp({ email, name, phone, password })
      .then((data) => {
        console.log('Login successful:', data);
        toast.success('signUp successfully');
        onClose();
      })
      .catch((e) => {
        console.log('Login Error:', e);
        toast.error(e);
      });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel='Registration Modal'
      style={customStyles}
    >
      <div className='max-h-full w-full max-w-xl overflow-y-auto bg-white sm:rounded-2xl'>
        <div className='w-full'>
          <div className='m-8 mx-auto my-20 max-w-[400px]'>
            <div className='mb-8'>
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
              Email
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
              type='number'
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
                className='w-full rounded-full bg-black p-3 font-semibold text-white'
                onClick={handleRegister}
              >
                Register
              </button>
            </div>

            <p>
              Already have an account?{' '}
              <span
                // onClick={handleLoginClick}
                className='cursor-pointer text-blue-500'
              >
                Login{' '}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegistrationModal;
