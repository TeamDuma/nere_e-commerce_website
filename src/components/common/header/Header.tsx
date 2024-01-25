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
import { ILocation } from '@/types/location';

import { BsSearch } from 'react-icons/bs';
import CartIconHeader from '../CartIconHeader';

const Header = () => {
  const { data, isLoading } = useGetlocationsQuery();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { selectedLocationId, userInfo } = useSelector(selectShopping);
  console.log('useGetLocationsQuery', selectedLocationId);

  const locations = data?.data || [];

  const [selectedAddress, setSelectedAddress] = useState<ILocation | null>(
    () => {
      return data
        ? locations.find((location) => location.id === selectedLocationId) ||
            null
        : null;
    }
  );
  const selectedLocation = selectedAddress;

  console.log('selectedAddress', selectedAddress);

  useEffect(() => {
    if (data && selectedLocationId) {
      const newlySelectedAddress = locations.find(
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
  const handleLoginClick = () => {
    setLoginModalVisible(true);
    setRegistrationModalVisible(false);
    setLocationModalVisible(false);
  };

  const handleRegistrationClick = () => {
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
    <div className='my-4 bg-white'>
      <div className='container flex flex-col  justify-between sm:flex-row '>
        {/* Logo and Icons in the same row */}
        <div className='flex flex  items-center justify-between '>
          <div className='pb-4  text-4xl font-bold text-blackish sm:mr-20 sm:pb-0 '>
            <Link href='/'>
              <Logo />
            </Link>
          </div>

          <div className='flex items-center gap-4 lg:hidden'>
            {userInfo && userInfo.data ? (
              <div className='relative mr-4 inline-block'>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <UserIcon />
                </button>
                {isDropdownOpen && (
                  <div className='absolute mt-2 rounded-md bg-white shadow-lg'>
                    <button className='block px-4 py-2 text-[#298592]'>
                      Profile
                    </button>
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
                <button onClick={openLoginModal}>
                  <UserIcon />
                </button>
              </div>
            )}
            <Link
              href='/cart'
              className={`block ${
                cartItems && cartItems.length > 0 ? 'animate-bounce' : ''
              }`}
            >
              <div className='flex flex-row gap-2'>
                <CartIconHeader />
                <p style={{ color: '#298592', fontSize: 12 }}>
                  {(cartItems ?? []).length}
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Search Input */}
        <div className='flex w-full flex-col items-center gap-4 sm:w-[300px] sm:flex-row md:w-[40%]'>
          <div className='relative w-full rounded'>
            <input
              className='w-full rounded-lg border border-gray-200 bg-[#F5F5F5] p-2 px-4'
              type='text'
              placeholder='Search for products'
            />
            <BsSearch
              className='absolute right-0 top-0 mr-3 mt-3 text-gray-400'
              size={20}
            />
          </div>
        </div>

        {/* Your new row content for small screens */}
        <div className='sm:hidden'>
          <div className='my-4 flex'>
            <div className='flex lg:hidden'>
              <button>
                <Location />
              </button>
            </div>

            {/* Responsive Navigation Icons */}
            <div className='flex  gap-4 lg:hidden'>
              <p style={{ color: '#298592', fontSize: 12 }}>Pick up from</p>
              <p
                style={{
                  color: '#298592',
                  fontWeight: 'bold',
                  fontSize: 12,
                }}
              >
                {selectedLocation ? selectedLocation.name : 'Select a location'}
              </p>
              <p
                style={{ color: '#298592', fontSize: 14, fontWeight: 'bold' }}
                onClick={handLocation}
              >
                Change
              </p>
            </div>
          </div>
        </div>

        {/* Expanded Navigation for Larger Screens */}
        <div className='hidden gap-4 text-[30px] text-gray-500 lg:flex'>
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
                    <a className='block px-4 py-2 text-[#298592]'>Profile</a>
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
            )}
          </div>
          <Link
            href='/cart'
            className={`mt-4 block rounded-md p-2 ${
              cartItems && cartItems.length > 0 ? 'animate-bounce' : ''
            }`}
          >
            <div className='flex flex-row gap-2'>
              <CartIconHeader />
              <p style={{ color: '#298592', fontSize: 12 }}>
                {(cartItems ?? []).length}
              </p>
            </div>
          </Link>

          {locationModalVisible && (
            <PickupLocation
              onClose={closeModal}
              isOpen={locationModalVisible}
            />
          )}
          {locationModalVisible && (
            <PickupLocation
              onClose={closeModal}
              isOpen={locationModalVisible}
            />
          )}

          {loginModalVisible && (
            <LoginModal
              onClose={closeModal}
              onRegistrationClick={handleRegistrationClick}
              session={null}
              isOpen={loginModalVisible}
            />
          )}

          {registrationModalVisible && (
            <RegistrationModal
              onClose={closeModal}
              isOpen={registrationModalVisible}
              onLoginClick={handleLoginClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
