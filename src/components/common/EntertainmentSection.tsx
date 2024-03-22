'use client';

import { useState } from 'react';

import GameModal from './GameModal';
import LoyaltyModal from './LoyaltyModal';
import NereCoinModal from './NereCoinModal';

const EntertainmentSection = () => {
  const [GameModalVisible, setGameModalVisible] = useState(false);
  const [LoyaltyModalVisible, setLoyaltyModalVisible] = useState(false);
  const [NereCoinModalVisible, setNereCoinModalVisible] = useState(false);

  const openGameModal = () => {
    setGameModalVisible(true);
  };

  const openLoyaltyModal = () => {
    setLoyaltyModalVisible(true);
  };

  const openNereCoinModal = () => {
    setNereCoinModalVisible(true);
  };

  const closeModal = () => {
    setGameModalVisible(false);
    setLoyaltyModalVisible(false);
    setNereCoinModalVisible(false);
  };

  return (
    <div className='overflow-x-auto'>
      <div className='flex justify-start'>
        <div className='flex-shrink-0 cursor-pointer rounded'>
          <div className='m-4  ' style={{ width: '385px', height: '80px' }}>
            <div
              className='  flex items-center rounded-lg border  border-[#298592]  p-2 '
              onClick={openNereCoinModal}
            >
              <img
                className='mx-4 my-1'
                src='/images/coinSmall.svg'
                alt='Coin'
              />
              <div>
                <h2 className='font-light		'>Nere Coins</h2>
                <p className='text-md inline font-semibold text-[#298592]'>
                  {' '}
                  Earn more
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 cursor-pointer rounded'>
          <div className='m-4  ' style={{ width: '385px', height: '80px' }}>
            <div
              className='  flex items-center rounded-lg border  border-[#298592]  p-2 '
              onClick={openGameModal}
            >
              <img
                className='mx-4 my-1'
                src='/images/joystickSmall.svg'
                alt='Coin'
              />
              <div>
                <h2 className='font-light		'> Game and win coins</h2>
                <p className='text-md inline font-semibold text-[#298592]'>
                  {' '}
                  Play Now
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-shrink-0 cursor-pointer rounded'>
          <div className='m-4  ' style={{ width: '385px', height: '80px' }}>
            <div
              className='  flex items-center rounded-lg border  border-[#298592]  p-2 '
              onClick={openLoyaltyModal}
            >
              <img
                className='mx-4 my-1'
                src='/images/loyaltySmall.svg'
                alt='Coin'
              />
              <div>
                <h2 className='font-light		'>Loyalty offers?</h2>
                <p className='text-md inline font-semibold text-[#298592]'>
                  {' '}
                  Buy Again
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NereCoinModal onClose={closeModal} isOpen={NereCoinModalVisible} />
      <LoyaltyModal onClose={closeModal} isOpen={LoyaltyModalVisible} />
      <GameModal onClose={closeModal} isOpen={GameModalVisible} />
    </div>
  );
};

export default EntertainmentSection;
