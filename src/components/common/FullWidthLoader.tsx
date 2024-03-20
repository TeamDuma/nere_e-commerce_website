import React from 'react';

const FullWidthLoader: React.FC = () => {
    return (
        <div className='w-full'>
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <div key={index} className='animate-pulse'>
                        <div className='h-48 w-full rounded bg-gray-300'></div>
                        <div className='mt-2 h-4 w-full rounded bg-gray-300'></div>
                        <div className='mt-2 h-4 w-full rounded bg-gray-300'></div>
                    </div>
                ))}
        </div>
    );
};

export default FullWidthLoader;