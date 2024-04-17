import { useState } from 'react';
import LoyaltyModal from './common/LoyaltyModal';

const ThreeBannerLayout = () => {
  const [LoyaltyVisible, setLoyaltyVisible] = useState(false);

  const openLoyalty = () => {
    setLoyaltyVisible(true);
  };

  const closeModal = () => {
    setLoyaltyVisible(false);
  };

  return (
    <>
      <div className='overflow-x-auto'>
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
        <LoyaltyModal onClose={closeModal} isOpen={LoyaltyVisible} />
      </div>
    </>
  );
};

export default ThreeBannerLayout;
