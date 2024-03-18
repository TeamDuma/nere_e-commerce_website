import React from 'react';

interface ProgressBarProps {
  remaining: number;
  total: number;
  unit: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  remaining,
  total,
  unit,
}) => {
  const remainingPercentage = (remaining / total) * 100;

  return (
    <div className='progress-bar'>
      <div className='progress-text'>{`${
        total - remaining
      } left, out of ${total} ${unit}`}</div>

      <div className='progress-line'>
        <div
          className='progress'
          style={{ width: `${remainingPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
