import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner: React.FC = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <ScaleLoader color='#fff' />
    </div>
  );
};

export default Spinner;
