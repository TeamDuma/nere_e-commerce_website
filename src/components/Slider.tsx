// 'use client';
// import React, { useEffect } from 'react';

// const Slider = () => {
//   useEffect(() => {
//     const slider = document.querySelector<HTMLDivElement>('#slider');
//     let moveSlideTimeout: NodeJS.Timeout;

//     const moveSlide = () => {
//       if (!slider) return;

//       const max = slider.scrollWidth - slider.clientWidth;
//       const left = slider.clientWidth;

//       if (max === slider.scrollLeft) {
//         slider.scrollTo({ left: 0, behavior: 'smooth' });
//       } else {
//         slider.scrollBy({ left, behavior: 'smooth' });
//       }

//       moveSlideTimeout = setTimeout(moveSlide, 2000);
//     };

//     moveSlide();

//     return () => {
//       clearTimeout(moveSlideTimeout);
//     };
//   }, []);

//   return (
//     <div
//       className='space-4 flex h-96 w-full flex-nowrap overflow-hidden rounded-xl text-center'
//       id='slider'
//     >
//       <div className='flex w-full flex-none flex-col items-center justify-center space-y-4 bg-blue-600 text-white'>
//         <h2 className='max-w-md text-4xl'>Your Big Ideia</h2>
//         <p className='max-w-md'>
//           It's fast, flexible, and reliable — with zero-runtime.
//         </p>
//       </div>
//       <div className='flex w-full flex-none flex-col items-center justify-center space-y-4 bg-pink-400 text-white'>
//         <h2 className='max-w-md text-4xl'>
//           Tailwind CSS works by scanning all of your HTML
//         </h2>
//         <p className='max-w-md'>
//           It's fast, flexible, and reliable — with zero-runtime.
//         </p>
//       </div>
//       <div className='flex w-full flex-none flex-col items-center justify-center space-y-4 bg-teal-500 text-white'>
//         <h2 className='max-w-md text-4xl'>React, Vue, and HTML</h2>
//         <p className='max-w-md'>
//           Accessible, interactive examples for React and Vue powered by Headless
//           UI, plus vanilla HTML if you’d rather write any necessary JS yourself.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React, { useEffect, useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    './images/nere_sunflower.png',
    './images/nere_breakfast.png',
    './images/nere_baby_tuesday.png',
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

      <div className='absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3'>
        {images.map((_, index) => (
          <button
            key={index}
            type='button'
            className={`h-3 w-3 rounded-full${
              index === currentIndex ? ' bg-gray-800' : ''
            }`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          />
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
      >
        {/* Previous button content */}
      </button>

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

export default Slider;
