import React from 'react';

interface ProgressBarProps {
  remaining: number;
  total: number;
  unit?: string;
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

export const ProgressBarNew = ({ remaining, total }: ProgressBarProps) => {
  const remainingPercentage = (remaining / total) * 100;
  return (
    <div>
      <p className='mb-2 text-sm leading-[14px] text-[#3E3E3E]'>
        {`${total - remaining} Left, out of ${total}`}
      </p>
      <div className='h-1 rounded-[20px] bg-[#FCF5E8]'>
        <div
          className='h-1 rounded-l-[20px] bg-[#F58929]'
          style={{ width: `${remainingPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
