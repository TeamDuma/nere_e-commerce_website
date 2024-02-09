'use client';
import ProgressBar from '@/components/common/ProgressBar';
import React, { useState } from 'react';

const SettingsPage = () => {
  const [selectedTab, setSelectedTab] = useState('profile');

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div className='px-6 py-8 lg:w-full'>
        <div className='items-stretch gap-4 lg:flex'>
          <div className='mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md md:p-2 lg:mb-0 lg:w-[35%]'>
            <div className='flex h-full flex-col justify-between'>
              <div className='border-b border-white'>
                <div
                  className='flex-auto justify-center p-5 text-center'
                  onClick={() => handleTabClick('profile')}
                >
                  My Profile
                </div>
              </div>
              <div className='border-b border-white'>
                <div
                  className='flex-auto justify-center p-5 text-center'
                  onClick={() => handleTabClick('order')}
                >
                  My Orders
                </div>
              </div>
              <div>
                <div
                  className='flex-auto justify-center p-5 text-center'
                  onClick={() => handleTabClick('voucher')}
                >
                  My Vouchers
                </div>
              </div>
            </div>
          </div>
          <div className='xs:mb-4 max-w-full rounded-lg bg-white p-4 shadow-md lg:w-[60%]'>
            {selectedTab === 'profile' && <ProfileContent />}
            {selectedTab === 'order' && <OrderContent />}
            {selectedTab === 'voucher' && <VoucherContent />}
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileContent = () => {
  return (
    <div className='flex '>
      <div className='mb-8'>
        <p>JOHN ISUTSAH</p>
        <div className='mt-8 flex flex-wrap'>
          <div className='p-2'>
            <p>Email Address</p>
            <p>John@gmail.com</p>
          </div>
          <div className=' p-2'>
            <p>Number</p>
            <p>0549230728</p>
          </div>
          <div className=' p-2'>
            <p>Title</p>
            <p>Mr</p>
          </div>
          <div className=' p-2'>
            <p>Total Savings</p>
            <p>GHS 500.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Order content component
const OrderContent = () => {
  return (
    <div className='flex '>
      <div className='mb-8'>
        <p>Items</p>
        <div className='m-2 mt-8 flex flex-wrap'>
          <div className='m-2 bg-gray-700 p-8 '></div>
          <div className='m-2 bg-gray-600 p-8 '></div>
          <div className='m-2 bg-gray-500 p-8 '></div>
          <div className='m-2 bg-gray-400 p-8 '></div>
        </div>
        <h1 className='my-2'>order confirmed</h1>
        <div className='progress-line'>
          <div className='progress' style={{ width: `10%` }}></div>
          <h1 className='my-2'> Picked up on Fri, 23 Aug 2024</h1>
        </div>
      </div>
    </div>
  );
};

const VoucherContent = () => {
  return (
    <div>
      <h2>Voucher Content</h2>
    </div>
  );
};

export default SettingsPage;
