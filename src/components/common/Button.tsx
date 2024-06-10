import { classNames } from '@/lib/classNames';
import { ReactNode } from 'react';

// TODO: Add real button
export const Button = ({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={classNames(
        'inline-flex items-center justify-center space-x-2 rounded-full',
        'border-primary bg-primary py-3 font-medium text-white hover:bg-[#298592] hover:shadow',
        className
      )}
    >
      {children}
    </button>
  );
};
