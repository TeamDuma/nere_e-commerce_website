import React from 'react';

interface OrderProgressBarProps {
  remaining: number;
  total: number;
}

const OrderProgressBar: React.FC<OrderProgressBarProps> = ({
  remaining,
  total,
}) => {
  const remainingPercentage = (remaining / total) * 100;

  return (
    <div className='progress-bar my-2 bg-teal-800'>
      <div className='progress-line bg-teal-800'>
        <div
          className='progress bg-teal-800'
          style={{ width: `${remainingPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default OrderProgressBar;
