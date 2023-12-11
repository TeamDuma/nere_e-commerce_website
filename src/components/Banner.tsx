'use client';
import React, { useEffect } from 'react';

const Banner = () => {
  return (
    <div className='flex h-96 w-full flex-nowrap overflow-hidden rounded-xl text-center'>
      <div className='flex w-full flex-none flex-col items-center justify-center space-y-4 bg-blue-600 text-white'>
        <h2 className='max-w-md text-4xl'>Your Big Ideia</h2>
        <p className='max-w-md'>
          It's fast, flexible, and reliable — with zero-runtime.
        </p>
      </div>
    </div>
  );
};

export default Banner;
