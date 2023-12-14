'use client';
import React, { useEffect, useState } from 'react';
import CartIcon from '../CartIcon';
import Location from '../Location';
import Logo from '../Logo';
import UserIcon from '../User';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectShopping, useDispatch } from '@/lib/redux';
import PickupLocation from '@/app/delivery/components/PickupLocation';
import { useGetlocationsQuery } from '@/lib/redux/services/location';
import LoginModal from '../LoginModal';
import RegistrationModal from '../RegisterModal';

const Header = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetlocationsQuery();
  const { selectedLocationId, locations, userInfo } =
    useSelector(selectShopping);
  console.log('useGetLocationsQuery', selectedLocationId);

  const [selectedAddress, setSelectedAddress] = useState<Location | null>(
    () => {
      return data
        ? data.find((location) => location.id === selectedLocationId) ||
            selectedLocationId
        : null;
    }
  );
  // const selectedLocation = locations.find((location: Location) => location.id === selectedLocationId);
  const selectedLocation = selectedAddress;

  console.log('selectedAddress', selectedAddress);

  useEffect(() => {
    if (data && selectedLocationId) {
      const newlySelectedAddress = data.find(
        (location) => location.id === selectedLocationId
      );
      setSelectedAddress(newlySelectedAddress || null);
    }
  }, [selectedLocationId, data]);

  const { cartItems } = useSelector(selectShopping);
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const [registrationModalVisible, setRegistrationModalVisible] =
    useState(false);

  const handLocation = () => {
    setLocationModalVisible(true);
  };

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };

  const handleRegistrationClick = () => {
    setLoginModalVisible(false);
    setRegistrationModalVisible(true);
  };

  const closeModal = () => {
    setLoginModalVisible(false);
    setRegistrationModalVisible(false);
    setLocationModalVisible(false);
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
              <div
                className='hidden items-center md:flex'
                onClick={handLocation}
              >
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
                    {selectedLocation
                      ? selectedLocation.name
                      : 'Select a location'}
                  </p>
                </div>
              </div>
            </a>
            {userInfo ? (
              <div className='ml-2'>
                <p style={{ color: '#298592', fontSize: '1.2rem' }}>
                  Welcome:
                  {userInfo.data.data.customer.name}
                </p>
              </div>
            ) : (
              <div className='relative block'>
                <div
                  className='hidden items-center md:flex'
                  onClick={openLoginModal}
                >
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
            )}
          </div>
          <Link href='/cart' className='block rounded-md bg-white p-2'>
            <div className='flex flex-row gap-2'>
              <CartIcon />{' '}
              <span className='inline-block font-bold text-[#298592]'></span>
              {(cartItems ?? []).length}
            </div>
          </Link>
        </div>
        {locationModalVisible && (
          <PickupLocation closePickupModal={closeModal} />
        )}

        {loginModalVisible && (
          <LoginModal
            onClose={closeModal}
            onRegistrationClick={handleRegistrationClick}
            session={null}
          />
        )}

        {registrationModalVisible && <RegistrationModal onClose={closeModal} />}
      </div>
    </nav>
  );
};

export default Header;
