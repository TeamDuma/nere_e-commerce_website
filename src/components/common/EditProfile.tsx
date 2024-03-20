import React, { useState } from 'react';
import Modal, { Styles } from 'react-modal';
import { useUpdateCustomerMutation } from '@/lib/redux/services/customers';
import Logo from './Logo';
import { toast } from 'react-toastify';
import OTPModal from '../OTPModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectShopping } from '@/lib/redux';
import { CustomerTitle } from '@/types/customer';
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

const EditProfile: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const { userInfo, token } = useSelector(selectShopping);

  const uid = userInfo?.data?.customer?.uid as string;
  const jwt_token = token as string;

  const [updateCustomer, { isLoading, isSuccess, isError, error, data }] =
    useUpdateCustomerMutation();
  const [formData, setFormData] = useState({
    name: (userInfo?.data?.customer?.name as string) || ('' as string),
    title: (userInfo?.data?.customer?.title as CustomerTitle) || ('' as string),
  });

  const handleSubmit = async () => {
    try {
      const response = await updateCustomer({
        uid,
        token: jwt_token,
        ...formData,
      }).unwrap();

      setFormData({
        ...formData,
        name: response.customer.name,
        title: response.customer.title,
      });
      toast.success('Profile Updated Successfully', { autoClose: 1000 });
    } catch (error) {
      toast.error('An error occurred', { autoClose: 1000 });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Registration Modal'
      style={window.innerWidth > 600 ? customStylesLarge : customStylesSmall}
    >
      <>
        <div className='rounded-xl p-4 '>
          <div className=' flex items-center justify-center text-center  '>
            <Logo />
          </div>
          <div className=' flex items-center justify-center text-center  '>
            <p className='text-sm	font-bold	'>Edit Profile</p>
          </div>
        </div>
        <div className=' mx-auto max-w-[400px]'>
          <div className='mb-4'></div>
          <div className='mt-4 uppercase text-gray-800'>
            <label className='my-2 text-sm font-medium'>Title:</label>
            <div className='flex space-x-8 sm:space-x-32'>
              <label className='flex items-center space-x-1  '>
                <input
                  type='radio'
                  name='gender'
                  value={CustomerTitle.MR}
                  className='form-radio text-[#298592] focus:ring-[#07454d]'
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value as CustomerTitle,
                    })
                  }
                  checked={formData.title === 'Mr'}
                />
                <span>Mr</span>
              </label>
              <label className='flex items-center space-x-1'>
                <input
                  type='radio'
                  name='gender'
                  value={CustomerTitle.MRS}
                  className='form-radio text-[#298592] focus:ring-[#07454d]'
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value as CustomerTitle,
                    })
                  }
                  checked={formData.title === 'Mrs'}
                />
                <span>Mrs</span>
              </label>
              <label className='flex items-center space-x-1'>
                <input
                  type='radio'
                  name='gender'
                  value={CustomerTitle.MS}
                  className='form-radio text-[#298592] focus:ring-[#07454d]'
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value as CustomerTitle,
                    })
                  }
                  checked={formData.title === 'Ms'}
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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
            placeholder='Kojo'
          />

          {/* <label
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
          /> */}

          <div className='space-y-4'>
            <button
              className='w-full rounded-full bg-[#298592] p-3 font-semibold text-white'
              onClick={handleSubmit}
            >
              {isLoading ? <Spinner /> : 'Save'}
            </button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default EditProfile;
