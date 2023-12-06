import React from 'react';

interface PriceDisplayProps {
  newPrice: number;
  oldPrice: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ newPrice, oldPrice }) => {
  const savedAmount = oldPrice - newPrice;
  const savedPercentage = ((savedAmount / oldPrice) * 100).toFixed(2);

  return (
    <div className='mt-8 flex items-center '>
      <span className='mr-4 text-lg font-bold text-[#1A464C]'>¢{newPrice}</span>
      <span className='mr-4 text-sm text-red-500 line-through'>
        ¢{oldPrice}
      </span>
      <div className='rounded-xl bg-[#8CCED7] text-white'>
        Save {savedPercentage}%
      </div>
    </div>
  );
};

export default PriceDisplay;
