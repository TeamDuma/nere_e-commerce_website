'use client';
import React, { useEffect, useState } from 'react';
import Modal, { Styles } from 'react-modal';

import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import shopping, { selectShopping } from '@/lib/redux/slices/shopping';
import {
  usePhoneVerifyMutation,
  usePhoneVerifyTokenMutation,
} from '@/lib/redux/services/customers';

import { toast } from 'react-toastify';
import { error } from 'console';
import Logo from '@/components/common/Logo';
import Timer from '@/components/Timer';
import { useRouter } from 'next/navigation';

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
    width: '450px',
    height: '350px',
    borderRadius: '15px',
    border: 'none',
    zIndex: 10001,
  },
};
const customStylesMedium: Styles = {
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
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    maxWidth: '550px',
    margin: 'auto',
    borderRadius: '15px',
    border: 'none',
    height: '350px',
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
    flexDirection: 'column',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    margin: 'auto',
    width: '340px',
    height: '300px',
    borderRadius: '15px',
    border: 'none',
    zIndex: 1001,
  },
};

const OTP = () => {
  const { token } = useSelector(selectShopping);
  const [phoneVerifyToken] = usePhoneVerifyTokenMutation();
  const [phoneVerify] = usePhoneVerifyMutation();

  const [submitted, setSubmitted] = useState(false);
  const [istimerRunning, setistimerRunning] = useState(true);
  const { userInfo } = useSelector(selectShopping);
  const router = useRouter();
  useEffect(() => {
    console.log('(istimerRunning before)', istimerRunning);
    if (istimerRunning) {
      console.log('(istimerRunning', istimerRunning);
      setTimeout(() => {
        setistimerRunning(false);
        console.log('(istimerRunning after)', istimerRunning);
      }, 30000);
    }
  }, [istimerRunning]);

  const screenWidth = window.innerWidth;
  let modalStyles = customStylesSmall;

  if (screenWidth >= 960) {
    modalStyles = customStylesLarge;
  } else if (screenWidth >= 600) {
    modalStyles = customStylesMedium;
  }

  console.log(token);

  const [formData, setFormData] = useState({
    token:
      userInfo && userInfo.data && userInfo.data.token
        ? userInfo.data.token
        : '',
    phoneNumber:
      userInfo &&
      userInfo.data &&
      userInfo.data.customer &&
      userInfo.data.customer.phone
        ? userInfo.data.customer.phone
        : '',
  });

  const [inputs, setInputs] = useState(['', '', '', '', '']);

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value.length === 1 && index < 4) {
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

  const handleResendClick = () => {
    if (!istimerRunning) {
      if (token) {
        phoneVerify({ token }).then((response) => {
          if ('data' in response && response.data.status === 'sucsees') {
            toast.success('OTP sent successfully: ', {
              autoClose: 500,
            });
          } else if ('data' in response && response.data.status === 'sucsees') {
            toast.error(response.data.message, {
              autoClose: 500,
            });
          }
        });
      }
    }
  };

  const handleSubmit = () => {
    const otpCode = inputs.join('');
    phoneVerifyToken({ token, code: otpCode })
      .then((response) => {
        if ('data' in response && response.data) {
          if (response.data.success === true) {
            setSubmitted(true);
            toast.success('OTP verification successful');
            router.push('/');
          } else {
            toast.error(response.data.message || 'Error verifying OTP');
          }
        } else {
          toast.error('Error verifying OTP');
        }
      })
      .catch((error) => {
        toast.error(error.message || 'Error verifying OTP');
      });
  };

  // if (!userInfo || !userInfo.data) {
  //   return (
  //     <div className='text-center text-5xl text-black'>
  //       Please SignUp to view this content
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className='flex h-full flex-col items-center justify-center'>
        <Logo />
        <h2 className='mb-4 font-semibold'>Verify Phone Number</h2>
        <p className='my-4 text-sm'>
          Code is sent to{' '}
          <span className='mx-2 font-semibold'>{formData.phoneNumber} </span>
          {/* <span className='my-2 cursor-pointer text-[#298592]'>
              Change Number?
            </span> */}
        </p>
        <div className='flex flex-row'>
          {inputs.map((_, index) => (
            <div className='mx-2' key={index}>
              <input
                className='flex h-10 w-10 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-1 text-center text-lg text-black outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1'
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

          {!istimerRunning ? (
            <div className='flex flex-row items-center justify-center space-x-1 text-center text-sm font-medium text-[#f58929] underline'>
              <p onClick={handleResendClick}>Resend</p>
            </div>
          ) : null}
        </div>
        {!submitted && (
          <button
            className='mt-4 rounded bg-[#298592] px-6 py-2 text-white hover:bg-[#1e6771] focus:bg-[#08383f] focus:outline-none'
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default OTP;
