import React from 'react';

const OldOrderProgressBar = () => {
  return (
    <div className=' my-2 bg-[#298592]'>
      <div className='progress-line '>
        <div
          className='border-2 border-solid   border-[#298592]'
          style={{ width: `${100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default OldOrderProgressBar;
