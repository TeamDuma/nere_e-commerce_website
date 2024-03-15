import React from 'react';

const ProductGridLoader: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <div key={index} className='animate-pulse'>
            <div className='h-48 rounded bg-gray-300'></div>
            <div className='mt-2 h-4 w-3/4 rounded bg-gray-300'></div>
            <div className='mt-2 h-4 w-1/2 rounded bg-gray-300'></div>
          </div>
        ))}
    </div>
  );
};

export default ProductGridLoader;
