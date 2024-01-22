import React from 'react';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { CiShare2 } from 'react-icons/ci';
import { FiTarget } from 'react-icons/fi';
import { GiCoins } from 'react-icons/gi';

const PurchaseGuide = () => {
  return (
    <div className='purchase-guide'>
      <div className='guide-step'>
        <div>
          <HiOutlineRocketLaunch className='step-icon' />
        </div>

        <div className='step-text'>Launch a Purchase</div>
        <hr className='guide-line' />
        <div className='step-text'>Launch a Purchase</div>
      </div>
      <div className='guide-step'>
        <div>
          <CiShare2 className='step-icon' />
        </div>
        <div className='step-text'>Share with Friends</div>

        <hr className='guide-line' />
        <div className='step-text'>Share with Friends</div>
      </div>
      <div className='guide-step'>
        <div>
          <FiTarget className='step-icon' />
        </div>
        <div className='step-text'>Reach Target</div>

        <hr className='guide-line' />

        <div className='step-text'>Reach Target</div>
      </div>
      <div className='guide-step'>
        <div>
          <GiCoins className='step-icon' />
        </div>
        <div className='step-text'>Unlock Savings</div>

        <hr className='guide-line' />
        <div className='step-text'>Unlock Savings</div>
      </div>
    </div>
  );
};

export default PurchaseGuide;
