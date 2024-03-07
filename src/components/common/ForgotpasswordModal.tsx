import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from './Logo';
import { useForgotpasswordMutation } from '@/lib/redux/services/customers';
import Modal, { Styles } from 'react-modal';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const customStyles: Styles = {
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
    justifyContent: 'center',
    alignItems: 'center',
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

const ForgotPasswordModal: React.FC<{
  onClose: () => void;
  isOpen: boolean;
  onLoginClick: () => void;
}> = ({ onClose, isOpen }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [forgotpassword] = useForgotpasswordMutation();

  const handleForgotPassword = async () => {
    try {
      if (isLoading) return;

      setIsLoading(true);
      const response = await forgotpassword({ email });

      if ('data' in response && response.data.status === 'success') {
        toast.success(response.data.message, { autoClose: 500 });
      } else {
        toast.error('Failed to send reset password email.');
      }
    } catch (error) {
      console.error('Error sending reset password email:', error);
      toast.error('Failed to send reset password email.');
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setEmail('');
    setIsLoading(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Forgot Password Modal'
    >
      <div className='rounded-xl p-4'>
        <div className='flex items-center justify-center text-center'>
          <Logo />
        </div>
        <p className='text'>
          Enter your email address and we will send you a password reset link.
        </p>
      </div>
      <form className='my-2'>
        <div className='flex flex-col space-y-5'>
          <label
            htmlFor='email'
            className='pb-2 text-sm font-medium text-slate-700'
          >
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full rounded-lg border border-slate-200 px-3 py-3 hover:shadow focus:border-slate-500 focus:outline-none'
            placeholder='Enter email address'
          />
          <button
            className='inline-flex w-full items-center justify-center space-x-2 rounded-lg border-[#298592] bg-[#298592] py-3 font-medium text-white hover:bg-[#298592] hover:shadow'
            onClick={handleForgotPassword}
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Send'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ForgotPasswordModal;
