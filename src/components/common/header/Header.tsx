'use client';
import React, { useEffect, useState } from 'react';
import CartIcon from '../CartIcon';
import Location from '../Location';
import Logo from '../Logo';
import UserIcon from '../User';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, resetCart, selectShopping } from '@/lib/redux';
import PickupLocation from '@/app/delivery/components/PickupLocation';
import { useGetlocationsQuery } from '@/lib/redux/services/location';
import LoginModal from '../LoginModal';
import RegistrationModal from '../RegisterModal';

const Header = () => {
  const { data, isLoading } = useGetlocationsQuery();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
  const dispatch = useDispatch();

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

  const handleLogout = async () => {
    try {
      dispatch(deleteUser());

      console.log('Logout ');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <nav
      className='mx-auto flex h-16 flex-col items-center justify-between bg-white 
     md:flex-row md:px-16'
    >
      <div className='flex items-center md:mb-0'>
        <Link href='/'>
          <Logo />
        </Link>
      </div>

      <div className='hidden flex-shrink flex-grow-0 justify-start  sm:block'>
        <div className='inline-block'>
          <div className='flex w-full max-w-[600px] bg-[#F5F5F5] sm:max-w-full md:rounded-full '>
            <input
              type='text'
              className='flex w-full bg-[#F5F5F5] bg-transparent pl-2 text-[#0c0c0c] outline-0'
              placeholder='Search for products'
            />
            <button
              type='submit'
              className='relative rounded-full bg-[#F5F5F5] p-2'
            >
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
            </button>
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
                  <p style={{ color: '#298592', fontSize: 12 }}>Pick up from</p>
                  <p
                    style={{
                      color: '#298592',
                      fontWeight: 'bold',
                      fontSize: 12,
                    }}
                  >
                    {selectedLocation
                      ? selectedLocation.name
                      : 'Select a location'}
                  </p>
                </div>
              </div>
            </a>
            {userInfo && userInfo.data ? (
              <div className='relative inline-block'>
                <div
                  className='hidden items-center md:flex'
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <a
                    className='inline-block cursor-pointer rounded-full px-3 py-2 hover:bg-gray-200'
                    href='#'
                  >
                    <div className='flex items-center'>
                      <UserIcon />
                      <div className='ml-2'>
                        <p style={{ color: '#298592', fontSize: 12 }}>
                          Welcome: {userInfo?.data?.customer.name}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {isDropdownOpen && (
                  <div className='absolute mt-2 rounded-md bg-white shadow-lg'>
                    <a
                      // href='/profile'
                      className='block px-4 py-2 text-[#298592]'
                    >
                      Profile
                    </a>

                    <a
                      href='/orders'
                      className='block px-4 py-2 text-[#298592]'
                    >
                      Orders
                    </a>
                    <a
                      href='#'
                      className='block px-4 py-2 text-[#298592]'
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className='relative block'>
                <div className='hidden items-center md:flex'>
                  <a
                    className='inline-block rounded-full px-3 py-2 hover:bg-gray-200'
                    onClick={openLoginModal}
                  >
                    <div className='hidden items-center md:flex'>
                      <UserIcon />
                      <div className='ml-2'>
                        <p style={{ color: '#298592', fontSize: 12 }}>
                          Login & Register
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
          <Link
            href='/cart'
            className={`block rounded-md p-2 ${
              cartItems && cartItems.length > 0 ? 'animate-bounce' : ''
            }`}
          >
            <div className='flex flex-row gap-2'>
              <CartIcon />
              <p style={{ color: '#298592', fontSize: 12 }}>
                {(cartItems ?? []).length}
              </p>
            </div>
          </Link>
        </div>
        {locationModalVisible && (
          <PickupLocation onClose={closeModal} isOpen={locationModalVisible} />
        )}

        {loginModalVisible && (
          <LoginModal
            onClose={closeModal}
            onRegistrationClick={handleRegistrationClick}
            session={null}
            isOpen={loginModalVisible}
          />
        )}

        {registrationModalVisible && <RegistrationModal onClose={closeModal} />}
      </div>
    </nav>
  );
};

export default Header;
