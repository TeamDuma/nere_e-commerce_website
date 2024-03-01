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
    zIndex: 1000,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '400px',
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
    height: '600px',
    borderRadius: '15px',
    zIndex: 1001,
  },
};

const ForgotpasswordModal: React.FC<{
  onClose: () => void;
  isOpen: boolean;
  onLoginClick: () => void;
}> = ({ onClose, onLoginClick, isOpen }) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const [showLoginModal, setshowLoginModal] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleForgotPassword = async () => {
    try {
      if (isLoading) {
        return;
      }
      console.log('handleLogin');

      //   const response = await forget({ email });

      //   if ('data' in response) {
      //     const data = response.data;
      //     if (data.message === 'success') ;
      //     toast.success('Check your email inbox to change password', {
      //       autoClose: 500,
      //     });
      //     onClose();
      //     if (typeof window !== 'undefined') {
      //     }
      //   } else {
      //     handleForgetError(response.error);
      //   }
      // } catch (e) {
      //     handleForgetError(e);
      // }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          style={
            window.innerWidth > 600 ? customStylesLarge : customStylesSmall
          }
          contentLabel='Example Modal'
        >
          <>
            <div className='rounded-xl p-4 '>
              <div className=' flex items-center justify-center text-center  '>
                <Logo />
              </div>

              <p className='text	'>
                Enter your email address and we will send you a password reset
                link.
              </p>
            </div>
            <form action='' className='my-2'>
              <div className='flex flex-col space-y-5'>
                <label htmlFor='email'>
                  <p className='pb-2 text-sm font-medium	 text-slate-700'>
                    Email
                  </p>
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

                <div className='flex flex-row justify-end'></div>
                <button
                  className='inline-flex w-full items-center justify-center space-x-2 rounded-lg border-[#298592] bg-[#298592] py-3 font-medium text-white hover:bg-[#298592] hover:shadow'
                  onClick={handleForgotPassword}
                  disabled={isLoading}
                >
                  <span> {isLoading ? <Spinner /> : 'Send'}</span>
                </button>
              </div>
            </form>
          </>
        </Modal>
      </div>
    </div>
  );
};

export default ForgotpasswordModal;
