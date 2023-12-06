import React from 'react';

interface IRange {
  minQuantity: number;
  members?: any[];
}

const Range = ({ minQuantity, members = [] }: IRange) => {
  // Calculate the remaining quantity
  const remainingQuantity = minQuantity ? minQuantity - members.length : 0;

  // Calculate the percentage
  const percentage = Array.isArray(members)
    ? (members.length / minQuantity) * 100
    : 0;

  return (
    <div className='m-auto  flex h-32 w-64 items-center justify-center'>
      <div className='relative min-w-full py-1'>
        <div className='h-2 rounded-full bg-gray-200'>
          <div
            className='absolute h-2 w-0 rounded-full bg-teal-600'
            style={{ width: '58.5714%' }}
          />
        </div>
        <div className='absolute bottom-0 left-0 -mb-6 -ml-1 text-gray-800'>
          {minQuantity}{' '}
        </div>
        <div className='absolute bottom-0 right-0 -mb-6 -mr-1 text-gray-800'>
          {members.length}
        </div>
      </div>
    </div>
  );
};

export default Range;
