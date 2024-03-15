import React from 'react';

const ProductGridLoader: React.FC = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {Array(12)
                .fill(null)
                .map((_, index) => (
                    <div key={index} className='animate-pulse'>
                        <div className='h-48 bg-gray-300 rounded'></div>
                        <div className='h-4 mt-2 bg-gray-300 rounded w-3/4'></div>
                        <div className='h-4 mt-2 bg-gray-300 rounded w-1/2'></div>
                    </div>
                ))}
        </div>
    );
};

export default ProductGridLoader;