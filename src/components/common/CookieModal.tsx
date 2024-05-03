import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from './Logo';
import Modal, { Styles } from 'react-modal';

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
    width: '900px',
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
    height: '650px',
    borderRadius: '15px',
    zIndex: 1001,
  },
};

interface ISession {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
}

const CookieModal: React.FC<{
  session: ISession | null;
  onClose: () => void;
  isOpen: boolean;
  onRegistrationClick: () => void;
}> = ({ onClose, onRegistrationClick, isOpen }) => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={window.innerWidth > 600 ? customStylesLarge : customStylesSmall}
        contentLabel='Login Modal'
      >
        <>
          <div className='rounded-xl '>
            <div className=' flex '>
              <Logo />
            </div>
            <div className=' flex  '>
              <p className='mb-4	text-sm	 font-bold text-[#298592]'>
                Privacy & Cookie Notices{' '}
              </p>
            </div>
            <p className='text-sm '>
              {' '}
              We use cookies and various functionality, analysis and marketing
              tools in order to be able to offer our pages safely and reliably.
              They help us to optimize the website and improve your personal
              user experience. This data is also used to check website
              performance, to analyze results, and to adjust and personalize
              content.
            </p>
            <div className='my-4'></div>

            <p className='text-sm '>
              Since we value your privacy, we ask for your permission to use
              these tools. You can change or revoke your consent at any time in
              the privacy settings.
            </p>
            <div className='my-2'></div>

            <div className='flex '>
              <a href='/legal/privacy' className='text-[#298592] underline'>
                Privacy Notice
              </a>

              <a
                href='/legal/cookies'
                className='ml-4 text-[#298592] underline'
              >
                Cookie Policy
              </a>
            </div>
            <div className='my-4'></div>
            <div className='inline-flex items-center'>
              <label
                className='relative flex cursor-pointer items-center rounded-full '
                htmlFor='login'
                data-ripple-dark='true'
              >
                <input
                  id='login'
                  type='checkbox'
                  className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-[#298592] checked:bg-[#298592] checked:before:bg-[#298592] hover:before:opacity-10"
                />
                <div className='pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    stroke='currentColor'
                    strokeWidth={1}
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </label>
              <label className='ml-1 mt-px cursor-pointer select-none font-light text-gray-700'>
                I agree to Nere’s Privacy and Cookie Policy.{' '}
                <span className='text-[#298592] underline'>
                  I accept the Legal Terms
                </span>
              </label>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default CookieModal;
