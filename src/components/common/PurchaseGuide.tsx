import React from 'react';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { CiShare2 } from 'react-icons/ci';
import { FiTarget } from 'react-icons/fi';
import { GiCoins } from 'react-icons/gi';

const PurchaseGuide = () => {
  return (
    <div className='purchase-guide mb-10 flex flex-col md:flex-row'>
      <h1 className='ml-4 text-sm font-semibold md:hidden'>How it works</h1>

      <div className='guide-step flex items-center'>
        <div>
          <HiOutlineRocketLaunch className='step-icon' />
        </div>

        <div className='step-text'>Launch a Purchase</div>
      </div>

      <div className='guide-step flex items-center'>
        <div>
          <CiShare2 className='step-icon' />
        </div>
        <div className='step-text'>Share with Friends</div>
      </div>

      <div className='guide-step flex items-center'>
        <div>
          <FiTarget className='step-icon' />
        </div>
        <div className='step-text'>Reach Target</div>
      </div>

      <div className='guide-step flex items-center'>
        <div>
          <GiCoins className='step-icon' />
        </div>
        <div className='step-text'>Unlock Savings</div>
      </div>
    </div>
  );
};

export default PurchaseGuide;
