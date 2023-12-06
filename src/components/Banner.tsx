'use client';
import React, { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    const slider = document.querySelector<HTMLDivElement>('#slider');
    let moveSlideTimeout: NodeJS.Timeout;

    const moveSlide = () => {
      if (!slider) return;

      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (max === slider.scrollLeft) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left, behavior: 'smooth' });
      }

      moveSlideTimeout = setTimeout(moveSlide, 2000);
    };

    moveSlide();

    return () => {
      clearTimeout(moveSlideTimeout);
    };
  }, []);

  return (
    <div
      className='flex h-96 w-full flex-nowrap overflow-hidden rounded-xl text-center'
      id='slider'
    >
      <div className='flex w-full flex-none flex-col items-center justify-center space-y-4 bg-blue-600 text-white'>
        <h2 className='max-w-md text-4xl'>Your Big Ideia</h2>
        <p className='max-w-md'>
          It's fast, flexible, and reliable — with zero-runtime.
        </p>
      </div>
      <div className='flex w-full flex-none flex-col items-center justify-center space-y-4 bg-pink-400 text-white'>
        <h2 className='max-w-md text-4xl'>
          Tailwind CSS works by scanning all of your HTML
        </h2>
        <p className='max-w-md'>
          It's fast, flexible, and reliable — with zero-runtime.
        </p>
      </div>
      <div className='flex w-full flex-none flex-col items-center justify-center space-y-4 bg-teal-500 text-white'>
        <h2 className='max-w-md text-4xl'>React, Vue, and HTML</h2>
        <p className='max-w-md'>
          Accessible, interactive examples for React and Vue powered by Headless
          UI, plus vanilla HTML if you’d rather write any necessary JS yourself.
        </p>
      </div>
    </div>
  );
};

export default Banner;
