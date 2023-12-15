import React from 'react';

interface ProgressBarProps {
  remaining: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ remaining, total }) => {
  const remainingPercentage = (remaining / total) * 100;

  return (
    <div className='progress-bar'>
      <div className='progress-text'>{`${
        total - remaining
      } Left, out of ${total}`}</div>

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
