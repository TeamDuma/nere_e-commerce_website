import { CheckedIcon } from '@/components/common/icons/CheckedIcon';
import Image from 'next/image';

export const MakeAdifference = () => {
  return (
    <section className='nere-container pb-[54px] pt-[57px] md:pb-[110px] md:pt-[120px]'>
      <div className='grid-col-1 grid gap-x-4 md:grid-cols-2'>
        <div className='w-full md:max-w-lg'>
          <h1 className='mb-3 text-[24px] font-bold capitalize leading-[28.8px] tracking-[-0.32px] text-nere-green md:w-[438.66px] md:text-[60px] md:leading-[64px]'>
            How we make a difference
          </h1>
          <p className='mb-6 text-[14px] leading-[20px] md:text-[18px] md:leading-[32px]'>
            At Nere, we believe in the power of collective action to drive
            positive change. Our journey began with a simple idea: to
            democratize access to affordable goods for all.
          </p>

          <div className='flex justify-between'>
            <ul className='flex flex-col gap-y-3'>
              {[
                'Convenience & Choice',
                'Community Connection',
                'Sustainability',
              ].map((item, index) => (
                <li key={index} className='flex items-center gap-x-3'>
                  <CheckedIcon />
                  <span className='text-[14px] font-bold leading-[20px] md:text-[18px] md:leading-[32.04px]'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mt-6 md:mt-0'>
          <Image
            src='/images/about/make-a-difference.png'
            alt='Make a difference'
            width={558}
            height={507}
            className='h-full w-full object-contain'
          />
        </div>
      </div>
    </section>
  );
};
