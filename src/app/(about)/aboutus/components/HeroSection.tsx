import { AffordableIcon } from '@/components/common/icons/AffordableIcon';

export const HeroSection = () => {
  return (
    <div className="bg-[url('/images/about/hero-background.svg')] bg-contain pt-0 md:pt-[72px]">
      <div className='nere-container relative'>
        <div className='flex flex-col items-center justify-center pt-20  text-center md:pt-24'>
          <h1 className='text-2xl font-bold leading-[28.32px] md:text-[60px] md:leading-[70.81px]'>
            <span>What if everyone had access to affordable </span>
            <span className='inline-flex flex-col'>
              <span>essentials?</span>
              <AffordableIcon className='-mt-2 ml-2 w-28 md:ml-0 md:mt-0 md:w-full' />
            </span>
          </h1>
          <p className='text-center text-sm md:w-[776px] md:text-[20px] md:leading-8'>
            Nere's impact extends beyond savings. We're committed to building a
            more sustainable future for all.
          </p>
        </div>
      </div>
    </div>
  );
};
