import { useEffect, useRef, useState } from 'react';
import LoyaltyModal from './common/LoyaltyModal';

const ThreeBannerLayout = () => {
  const [loyaltyVisible, setLoyaltyVisible] = useState(false);

  const openLoyalty = () => {
    setLoyaltyVisible(true);
  };

  const closeModal = () => {
    setLoyaltyVisible(false);
  };

  const currentIndexRef = useRef(0);
  const [, setTick] = useState(0); // Dummy state for triggering re-renders
  const images = [
    '/images/coupon1.svg',
    '/images/coupon.svg',
    '/images/coupon3.svg',
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
    <div className='overflow-x-auto'>
      {/* Display original code on large screens */}
      <div className='hidden sm:block'>
        <div className='ml-8 flex justify-start space-x-24'>
          <div className='flex-shrink-0 cursor-pointer rounded md:mr-8'>
            <div className='m-2 sm:w-1/2 md:w-full '>
              <img
                src='/images/coupon1.svg'
                alt='Your Image'
                className='h-auto w-full'
              />
            </div>
          </div>
          <div className='flex-shrink-0 cursor-pointer rounded md:mr-8'>
            <div className='m-2 sm:w-1/2 md:w-full ' onClick={openLoyalty}>
              <img
                src='/images/coupon.svg'
                alt='Your Image'
                className='h-auto w-full'
              />
            </div>
          </div>
          <div className='flex-shrink-0 cursor-pointer rounded md:mr-8'>
            <div className='m-2 sm:w-1/2 md:w-full '>
              <img
                src='/images/coupon3.svg'
                alt='Your Image'
                className='h-auto w-full'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Display modified carousel on small screens */}
      <div className='sm:hidden'>
        <div className='ml-8 flex justify-start space-x-24'>
          <div className='flex-shrink-0 cursor-pointer rounded md:mr-8'>
            <div className='m-2 sm:w-1/2 md:w-full '>
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
                    className='h-full w-full object-cover'
                    onClick={index === 1 ? openLoyalty : undefined} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LoyaltyModal onClose={closeModal} isOpen={loyaltyVisible} />
    </div>
  );
};

export default ThreeBannerLayout;
