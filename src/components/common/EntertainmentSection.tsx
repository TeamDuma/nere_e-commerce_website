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
    <section className='m-3 rounded '>
      <div className='mt-5 flex flex-col items-center gap-3 lg:flex-row'>
        <div
          className='m-3 flex w-80 rounded-lg  border border-[#298592] lg:w-1/3'
          onClick={openNereCoinModal}
        >
          <img className='mx-4 my-1' src='/images/coinSmall.svg' alt='Coin' />
          <div>
            <h2 style={{ fontSize: '12px' }}>Nere Coins</h2>
            <h4
              className='text-md inline font-semibold text-[#298592]'
              style={{ fontSize: '14px' }}
            >
              Earn more
            </h4>
          </div>
        </div>

        <div
          className='m-3 flex w-80 rounded-lg  border border-[#298592] lg:w-1/3'
          onClick={openGameModal}
        >
          <img
            className='mx-4 my-1'
            src='/images/joystickSmall.svg'
            alt='Coin'
          />

          <div>
            <h2 className='my-1' style={{ fontSize: '12px' }}>
              Game and win coins
            </h2>
            <h4
              className='text-md inline font-semibold text-[#298592]'
              style={{ fontSize: '14px' }}
            >
              Play Now
            </h4>
          </div>
        </div>

        <div
          className='m-3 flex w-80 rounded-lg  border border-[#298592] lg:w-1/3'
          onClick={openLoyaltyModal}
        >
          <img
            className='mx-4 my-1'
            src='/images/loyaltySmall.svg'
            alt='Coin'
          />

          <div>
            <h2 className='my-1' style={{ fontSize: '12px' }}>
              Loyalty offers?
            </h2>
            <h4
              className='text-md inline font-semibold text-[#298592]'
              style={{ fontSize: '14px' }}
            >
              Buy Again
            </h4>
          </div>
        </div>
      </div>

      <NereCoinModal onClose={closeModal} isOpen={NereCoinModalVisible} />
      <LoyaltyModal onClose={closeModal} isOpen={LoyaltyModalVisible} />
      <GameModal onClose={closeModal} isOpen={GameModalVisible} />
    </section>
  );
};

export default EntertainmentSection;
