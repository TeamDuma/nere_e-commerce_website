import React from 'react';

interface PriceDisplayProps {
  newPrice: number;
  oldPrice: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ newPrice, oldPrice }) => {
  const savedAmount = oldPrice - newPrice;
  const savedPercentage = ((savedAmount / oldPrice) * 100).toFixed(2);

  return (
    <div className="flex items-center mt-8 ">
      <span className="text-[#1A464C] font-bold text-lg mr-4">¢{newPrice}</span>
      <span className="text-red-500 line-through text-sm mr-4">¢{oldPrice}</span>
      <div className="bg-[#8CCED7] text-white rounded-xl">
        Save {savedPercentage}%
      </div>
    </div>
  );
};

export default PriceDisplay;
