'use client';
import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <div className='flex flex-col-reverse justify-center px-4 pb-12 md:gap-28  md:px-44 md:py-20 lg:flex-row lg:px-24 lg:py-24 '>
        <div className='relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24'>
          <div className='relative'>
            <div className='absolute'>
              <div className=''>
                <h1 className='my-2 text-center	 text-lg font-bold text-[#1A464C] md:text-4xl'>
                  Page under maintenance...
                </h1>
                <p className='my-2 text-center text-sm text-gray-800  md:text-base '>
                  This page is currently under maintenance and will be back
                  soon.
                </p>
                <button className='my-4 w-full rounded-full	 border bg-[#1A464C] px-8 py-3 text-center text-sm font-bold text-white hover:bg-[#1A464C] focus:outline-none focus:ring-2 focus:ring-[#298592] focus:ring-opacity-50 sm:w-auto md:px-24'>
                  Continue shopping
                </button>
              </div>
            </div>
            <div className='pb-32	'></div>
          </div>
        </div>
        <div>
          <Image
            src='/images/maintenance.svg'
            width={400}
            height={300}
            alt={'Maintenance in progress Image'}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
