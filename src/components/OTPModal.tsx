import React, { useEffect, useState } from 'react';
import Modal, { Styles } from 'react-modal';
import Logo from './common/Logo';
import Timer from './Timer';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import shopping, { selectShopping } from '@/lib/redux/slices/shopping';
import { usePhoneVerifyTokenMutation } from '@/lib/redux/services/customers';
import { toast } from 'react-toastify';

const customStylesLarge: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '450px',
    height: '350px',
    borderRadius: '15px',
  },
};
const customStylesMedium: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    maxWidth: '550px',
    margin: 'auto',
    borderRadius: '15px',
    height: '350px',
  },
};

const customStylesSmall: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '400px',
    margin: 'auto',
    borderRadius: '15px',
    height: '40vh',
  },
};

const OTPModal: React.FC<{
  onClose: () => void;
  isOpen: true;
  phoneNumber: string;
}> = ({ onClose, isOpen, phoneNumber }) => {
  const { token } = useSelector(selectShopping);
  const [phoneVerifyToken] = usePhoneVerifyTokenMutation();

  console.log(phoneNumber, token);

  const screenWidth = window.innerWidth;
  let modalStyles = customStylesSmall;

  if (screenWidth >= 960) {
    modalStyles = customStylesLarge;
  } else if (screenWidth >= 600) {
    modalStyles = customStylesMedium;
  }

  const [inputs, setInputs] = useState(['', '', '', '', '', '']);

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value.length === 1 && index < 5) {
      const nextInput = document.getElementById(
        `input-${index + 1}`
      ) as HTMLInputElement | null;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain');
    const pastedChars = pastedData.split('');
    const newInputs = [...inputs];
    pastedChars.forEach((char, index) => {
      if (index < inputs.length) {
        newInputs[index] = char;
      }
    });
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    const otpCode = inputs.join('');
    console.log('handleSubmit', token, otpCode);
    phoneVerifyToken(token, otpCode)
      .then((response) => {
        console.log('hi', token, otpCode);
        console.log('response', response);
        // toast.success('signUp successfully');
        onClose();
      })
      .catch((error) => {
        toast.error(error.message || 'Error signing up');
      });
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={modalStyles}
        contentLabel='OTP Modal'
      >
        <div className='flex h-full flex-col items-center justify-center'>
          <Logo />
          <h2 className='mb-4 font-semibold'>Verify Phone Number</h2>
          <p className='text-sm'>
            Code is sent to {phoneNumber}
            <span className='cursor-pointer text-[#298592]'>
              Change Number?
            </span>
          </p>
          <div className='flex flex-row '>
            {inputs.map((_, index) => (
              <div className='w-35 h-30 m-2' key={index}>
                <input
                  className='flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-5 text-center text-lg text-black outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1' // Added text-black class
                  type='text'
                  name={`input-${index}`}
                  id={`input-${index}`}
                  maxLength={1}
                  value={inputs[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onPaste={(e) => handlePaste(e)}
                />
              </div>
            ))}
          </div>

          <div className='flex flex-row items-center justify-center space-x-1 text-center text-sm font-medium text-gray-500'>
            <div>
              <Timer />
            </div>
            <a
              className='flex flex-row items-center text-[#B8B7B5]'
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resend
            </a>
          </div>
          <button
            className='mt-4 rounded bg-[#298592] px-6 py-2 text-white hover:bg-[#1e6771] focus:bg-blue-600 focus:outline-none'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default OTPModal;
