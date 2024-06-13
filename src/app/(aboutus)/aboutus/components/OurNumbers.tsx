import { Button } from '@/components/common/Button';
import { AffordableIcon } from '@/components/common/icons/AffordableIcon';
import Image from 'next/image';

export const OurNumbers = () => {
  return (
    <>
      {/* component */}

      <div className='container mx-auto flex w-full flex-col'>
        <div className='w-full'>
          <div className='mx-auto flex w-full max-w-[767px] flex-col items-center justify-center'>
            <h2 className='mb-3 text-2xl font-bold leading-[27.36px] text-nere-green md:text-[40px] md:leading-[45.6px]'>
              Our numbers tell the story{' '}
            </h2>
            <p className='mb-6 text-center text-sm md:mb-8 md:text-[20px] md:leading-8'>
              Since inception, Nere has saved customers hundreds of cedis, grown
              our user base significantly, and expanded into new markets to
              reach more communities.
            </p>
          </div>

          <div className='container mx-auto my-32 flex flex-col items-center gap-16'>
            <div className='grid w-full grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4'></div>
            <div className='grid w-full grid-cols-1 items-center gap-y-8 text-center md:grid-cols-2 lg:grid-cols-4 '>
              <div className='flex flex-col '>
                <h3 className='text-dark-grey-900 text-center text-5xl font-extrabold leading-tight'>
                  <span id='countto1' />
                  10k+
                </h3>
                <p className='text-dark-grey-600 text-center text-base font-medium leading-7'>
                  Communities{' '}
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='text-dark-grey-900 text-center text-5xl font-extrabold leading-tight'>
                  <span id='countto2' />
                  85%
                </h3>
                <p className='text-dark-grey-600 text-center text-base font-medium leading-7'>
                  Experience the power of growth{' '}
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='text-dark-grey-900 text-center text-5xl font-extrabold leading-tight'>
                  <span id='countto3' data-decimal={1} />
                  60k+{' '}
                </h3>
                <p className='text-dark-grey-600 text-center text-base font-medium leading-7'>
                  Total Customer Savings{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
