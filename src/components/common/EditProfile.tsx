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
import { useDispatch, useSelector } from 'react-redux';
import { addUser, saveToken, selectShopping } from '@/lib/redux';

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

const EditProfile: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector(selectShopping);

  console.log('userInfo', userInfo);

  const [formData, setFormData] = useState({
    name: userInfo.data.customer.name || '',
    email: userInfo.data.customer.email || '',
    phone: userInfo.data.customer.phone || '',
  });

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
                <p className='w-60 text-gray-600'>Edit Profile</p>
              </div>
              <div className='mt-4 uppercase text-gray-800'>
                <label className='my-2 text-sm font-medium'>Title:</label>
                <div className='flex   space-x-32'>
                  <label className='flex items-center space-x-1  '>
                    <input
                      type='radio'
                      name='gender'
                      value='Mr'
                      className='form-radio text-[#298592] focus:ring-[#07454d]'
                    />
                    <span>Mr</span>
                  </label>
                  <label className='flex items-center space-x-1'>
                    <input
                      type='radio'
                      name='gender'
                      value='Mrs'
                      className='form-radio text-[#298592] focus:ring-[#07454d]'
                    />
                    <span>Mrs</span>
                  </label>
                  <label className='flex items-center space-x-1'>
                    <input
                      type='radio'
                      name='gender'
                      value='Mrs'
                      className='form-radio text-[#298592] focus:ring-[#07454d]'
                    />
                    <span>Ms</span>
                  </label>
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
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
                placeholder='kojo@gmail.com'
              />

              <div className='space-y-4'>
                <button
                  className='w-full rounded-full bg-[#298592] p-3 font-semibold text-white'
                  onClick={() => console.log('newdata', formData)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfile;
