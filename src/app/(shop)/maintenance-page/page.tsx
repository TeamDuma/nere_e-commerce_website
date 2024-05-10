'use client';
import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:gap-28 md:px-44 md:py-20 lg:flex-row lg:px-24 lg:py-24'>
      <div className='relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pb-24'>
        <div className='relative'>
          <div className='mb-8'>
            <h1 className='my-2 text-4xl font-bold text-[#1A464C]'>
              Page under maintenance...{' '}
            </h1>
            <p className='my-2 text-gray-800'>
              This page is currently under maintenance and will be back soon.{' '}
            </p>
            <a href='/'>
              <button className='my-4 w-full rounded-md border bg-[#298592] px-24 py-3 text-center text-sm font-bold text-white hover:bg-[#298592] focus:outline-none focus:ring-2 focus:ring-[#298592] focus:ring-opacity-50 sm:w-auto '>
                Continue shopping{' '}
              </button>
            </a>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <Image
          src='/images/maintenance.svg'
          width={400}
          height={300}
          alt={'Maintenace in progress Image'}
        />
      </div>
    </div>
  );
};

export default Page;
