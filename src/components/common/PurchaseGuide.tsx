import React from 'react';

const PurchaseGuide = () => {
  return (
    <div className='purchase-guide'>
      <div className='guide-step'>
        <div className='step-icon'>1</div>
        <div className='step-text'>Launch a Purchase</div>
      </div>
      <div className='guide-line' />
      <div className='guide-step'>
        <div className='step-icon'>2</div>
        <div className='step-text'>Share with Friends</div>
      </div>
      <div className='guide-line' />
      <div className='guide-step'>
        <div className='step-icon'>3</div>
        <div className='step-text'>Reach Target</div>
      </div>
      <div className='guide-line' />
      <div className='guide-step'>
        <div className='step-icon'>4</div>
        <div className='step-text'>Unlock Savings</div>
      </div>
    </div>
  );
};

export default PurchaseGuide;
