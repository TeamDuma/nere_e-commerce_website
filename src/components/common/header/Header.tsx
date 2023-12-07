'use client';
import React, { useState } from 'react';
import CartIcon from '../CartIcon';
import Location from '../Location';
import Logo from '../Logo';
import UserIcon from '../User';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectShopping } from '@/lib/redux';
import LoginModal from '../LoginModal';
import RegistrationModal from '../RegisterModal';

const Header = () => {
  const { cartItems } = useSelector(selectShopping);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registrationModalVisible, setRegistrationModalVisible] = useState(false);

  const handleLoginClick = () => {
    setLoginModalVisible(true);
  };

  const handleRegistrationClick = () => {
    setLoginModalVisible(false);
    setRegistrationModalVisible(true);
  };

  const closeModal = () => {
    setLoginModalVisible(false);
    setRegistrationModalVisible(false);
  };



  return (
    <nav className=' relative mx-auto flex h-20 w-full items-center justify-between bg-white px-16  '>
      <div className='inline-flex'>
        <a className='_o6689fn' href='/'>
          <div className='hidden md:block'>
            <Logo />
          </div>
        </a>
      </div>

      <div className='hidden flex-shrink flex-grow-0 justify-start px-2 sm:block'>
        <div className='inline-block'>
          <div className='flex w-full max-w-[600px] rounded-full bg-[#F5F5F5] px-2'>
            <input
              type='text'
              className='flex w-full bg-[#F5F5F5] bg-transparent pl-2 text-[#0c0c0c] outline-0'
              placeholder='Search for products'
            />
            <a type='submit' className='relative rounded-full bg-[#F5F5F5] p-2'>
              <svg
                width='30px'
                height='30px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' strokeWidth={0} />
                <g
                  id='SVGRepo_tracerCarrier'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    d='M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                    stroke='#999'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />{' '}
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className='my-4 flex-initial'>
        <div className='relative flex items-center justify-end'>
          <div className='mr-4 flex items-center'>
            <a
              className='inline-block rounded-full px-3 py-2 hover:bg-gray-200'
              href='#'
            >
              <div className='hidden items-center md:flex'>
                <Location />
                <div className='ml-2'>
                  <p style={{ color: '#298592', fontSize: '0.875rem' }}>
                    Pick up from
                  </p>
                  <p
                    style={{
                      color: '#298592',
                      fontWeight: 'bold',
                      fontSize: '0.875rem',
                    }}
                  >
                    Location
                  </p>
                </div>
              </div>
            </a>
            <div className='relative block'>
              <div className='hidden items-center md:flex'  
onClick={handleLoginClick}                      >
                <a
                  className='inline-block rounded-full px-3 py-2 hover:bg-gray-200'
                  href='#'
                >
                  <div className='hidden items-center md:flex'>
                    <UserIcon />
                    <div className='ml-2'>
                      <p style={{ color: '#298592', fontSize: '0.875rem' }}>
                        Login/Registeration
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Link href='/cart' className='block rounded-md bg-white p-2'>
            <div className='flex flex-row gap-2'>
              <CartIcon />{' '}
              <span className='inline-block font-bold text-[#298592]'></span>
              {(cartItems ?? []).length}
            </div>
          </Link>
        </div>
        {loginModalVisible && (
        <LoginModal onClose={closeModal} onRegistrationClick={handleRegistrationClick} />
      )}

      {registrationModalVisible && <RegistrationModal onClose={closeModal} />}
    
      </div>
    </nav>
  );
};

export default Header;
