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
    <>
      <section
        id='content'
        className='right-0 w-[100wh-60px]  p-5 transition-all duration-500 ease-in-out lg:w-[100wh-250px]'
      >
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3'>
          <div
            className='m-2  flex items-center rounded-lg border  border-[#298592]  p-2 shadow'
            onClick={openNereCoinModal}
          >
            <img className='mx-4 my-1' src='/images/coinSmall.svg' alt='Coin' />
            <div>
              <h2 className='font-light		'>Nere Coins</h2>
              <p className='text-md inline font-semibold text-[#298592]'>
                {' '}
                Earn more
              </p>
            </div>
          </div>
          <div
            className='m-2  flex items-center rounded-lg border border-[#298592]  p-2 shadow'
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
          <div
            className='m-2  flex items-center rounded-lg border border-[#298592]  p-2 shadow'
            onClick={openLoyaltyModal}
          >
            <img
                          src='/images/loyaltySmall.svg'

              className='mx-4 my-1'
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

        <NereCoinModal onClose={closeModal} isOpen={NereCoinModalVisible} />
        <LoyaltyModal onClose={closeModal} isOpen={LoyaltyModalVisible} />
        <GameModal onClose={closeModal} isOpen={GameModalVisible} />
      </section>
    </>
  );
};

export default EntertainmentSection;
