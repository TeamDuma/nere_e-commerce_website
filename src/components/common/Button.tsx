import { ReactNode } from 'react';

// TODO: Add real button
export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className='inline-flex w-[334px] items-center justify-center space-x-2 rounded-full border-primary bg-primary py-3 font-medium text-white hover:bg-[#298592] hover:shadow'>
      {children}
    </button>
  );
};
