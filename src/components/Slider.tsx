import React, { useEffect, useRef, useState } from 'react';
const Banner = () => {
  const currentIndexRef = useRef(0);
  const [, setTick] = useState(0); // Dummy state for triggering re-renders
  const images = [
    '../images/nere_sunflower.png',
    '../images/nere_breakfast.png',
    '../images/nere_baby_tuesday.png',
  ];

  useEffect(() => {
    const moveSlideInterval = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % images.length;
      setTick((tick) => tick + 1);
    }, 7000);

    return () => {
      clearInterval(moveSlideInterval);
    };
  }, []);

  const handlePrevButtonClick = () => {
    currentIndexRef.current =
      currentIndexRef.current === 0
        ? images.length - 1
        : currentIndexRef.current - 1;
    setTick((tick) => tick + 1);
  };

  const handleNextButtonClick = () => {
    currentIndexRef.current = (currentIndexRef.current + 1) % images.length;
    setTick((tick) => tick + 1);
  };

  return (
    <div className='relative mx-auto w-full'>
      <div
        id='default-carousel'
        className='relative mb-6 h-32 overflow-hidden rounded-xl sm:h-72 xl:h-96 2xl:h-96'
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentIndexRef.current ? '' : 'hidden'
            }`}
            data-carousel-item=''
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className='absolute h-full w-full object-cover'
            />
          </div>
        ))}
      </div>

      <button
        type='button'
        className='group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none '
        data-carousel-prev=''
        onClick={handlePrevButtonClick}
      ></button>

      <button
        type='button'
        className='group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
        data-carousel-next=''
        onClick={handleNextButtonClick}
      >
        {/* Next button content */}
      </button>
    </div>
  );
};

export default Banner;
