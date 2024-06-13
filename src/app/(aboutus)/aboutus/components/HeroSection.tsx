import { Button } from '@/components/common/Button';
import { AffordableIcon } from '@/components/common/icons/AffordableIcon';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    // <div className="bg-[url('/images/about/hero-background.svg')] bg-contain pb-0 pt-0 md:pb-[120px] md:pt-[72px]">
    <div className='nere-container relative'>
      <div className='flex w-full justify-center'>
        <div className='flex flex-col items-center justify-center pt-20  text-center md:pt-24 lg:ml-16 lg:max-w-[1163px]'>
          <h1 className='text-2xl font-bold leading-[28.32px] md:text-[60px] md:leading-[70.81px]'>
            <span>What if everyone had access to affordable </span>
            <span className='inline-flex flex-col'>
              <span className='text-nere-orange'>essentials?</span>
              <AffordableIcon className='-mt-2 ml-2 w-28 md:ml-0 md:mt-0 md:w-full' />
            </span>
          </h1>
          <p className='mb-8 mt-4 text-center text-sm md:text-[20px] md:leading-8'>
            Nere's impact extends beyond savings. We're committed to building a
            more sustainable future for all.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};
