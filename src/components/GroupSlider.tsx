'use client';

import React, { useEffect, useState } from 'react';

const GroupSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '../../images/nere_sunflower.png',
    '../../images/nere_breakfast.png',
    '../../images/nere_baby_tuesday.png',
  ];

  useEffect(() => {
    const moveSlideTimeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => {
      clearTimeout(moveSlideTimeout);
    };
  }, [currentIndex]);

  return (
    <div className='relative  mx-auto w-full'>
      <div
        id='default-carousel'
        className='relative h-32 overflow-hidden rounded-lg sm:h-72 xl:h-96 2xl:h-96 '
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out${
              index === currentIndex ? '' : ' hidden'
            }`}
            data-carousel-item=''
          >
            <img
              style={{ borderRadius: 10 }}
              width='100%'
              src={image}
              className='absolute left-1/2 top-1/2 block w-fit  -translate-x-1/2 -translate-y-1/2 '
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        type='button'
        className='group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
        data-carousel-prev=''
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
      ></button>

      <button
        type='button'
        className='group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
        data-carousel-next=''
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        {/* Next button content */}
      </button>
    </div>
  );
};

export default GroupSlider;
