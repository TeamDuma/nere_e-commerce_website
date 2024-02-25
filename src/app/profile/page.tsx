'use client';
import ProgressBar from '@/components/common/ProgressBar';
import React, { useState } from 'react';
import UserContent from './components/UserContent';
import OrderContent from './components/OrderContent';
import VoucherContent from './components/VoucherContent';
import { FaTags, FaUser } from 'react-icons/fa';
import { IoIosListBox } from 'react-icons/io';

const SettingsPage = () => {
  const [selectedTab, setSelectedTab] = useState('profile');

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div className='px-6 py-8 lg:w-full'>
        <div className='items-stretch gap-4 lg:flex'>
          <div className='mb-4 h-[100%] rounded-lg border border-gray-200 bg-white p-6 shadow-md md:p-2 lg:mb-0 lg:w-[25%]'>
            <div className='flex h-full flex-col justify-between'>
              <div className='border-b border-white'>
                <div
                  className='flex-auto p-5'
                  onClick={() => handleTabClick('profile')}
                  style={{
                    color: selectedTab === 'profile' ? '#298592' : '#8A8886',
                  }}
                >
                  <span
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <FaUser className='mr-2' />
                    My Profile
                  </span>
                </div>
              </div>
              <div className='border-b border-white'>
                <div
                  className='flex-auto p-5'
                  onClick={() => handleTabClick('order')}
                  style={{
                    color: selectedTab === 'order' ? '#298592' : '#8A8886',
                  }}
                >
                  <span
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <IoIosListBox className='mr-2' />
                    My Orders
                  </span>
                </div>
              </div>
              <div>
                <div
                  className='flex-auto p-5'
                  onClick={() => handleTabClick('voucher')}
                  style={{
                    color: selectedTab === 'voucher' ? '#298592' : '#8A8886',
                  }}
                >
                  <span
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <FaTags className='mr-2' />
                    My Vouchers
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='xs:mb-4 max-w-full  lg:w-[70%]  '>
            {selectedTab === 'profile' && <UserContent />}
            {selectedTab === 'order' && <OrderContent />}
            {selectedTab === 'voucher' && <VoucherContent />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
