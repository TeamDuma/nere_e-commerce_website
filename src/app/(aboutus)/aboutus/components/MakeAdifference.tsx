import { Button } from '@/components/common/Button';
import Image from 'next/image';

export const MakeAdifference = () => {
  return (
    <section className="bg-[url('/images/about/collective-buying-background.png')] bg-cover bg-no-repeat md:mt-[120px] ">
      <div className='nere-container md:pb-[170px] md:pt-[144px]'>
        <div className='grid-col-1 grid gap-x-4 md:grid-cols-2'>
          <div className='w-full pb-8 pt-[36px] md:max-w-lg md:py-[99.5px]'>
            <h1 className='mb-3 text-[24px] font-bold leading-[28.8px] text-nere-green md:text-[40px] md:leading-[48px]'>
              How we make a difference{' '}
            </h1>
            <p className='mb-3 text-[14px] leading-[20px] md:mb-[45px] md:text-[18px] md:leading-[32px]'>
              At Nere, we believe in the power of collective action to drive
              positive change. Our journey began with a simple idea: to
              democratize access to affordable goods for all.
            </p>

            <div className='flex justify-between pt-8'>
              <ul className='flex flex-col gap-y-2.5'>
                <li className='flex space-x-3  '>
                  <img
                    width={50}
                    height={50}
                    src='https://img.icons8.com/ios-filled/50/#F58929/checked--v1.png'
                    alt='checked--v1'
                    className='h-6 w-6'
                  />
                  <span className='paragraph-l font-bold'>Item 1</span>
                </li>
                <li className='flex space-x-3  '>
                  <img
                    width={50}
                    height={50}
                    src='https://img.icons8.com/ios-filled/50/#F58929/checked--v1.png'
                    alt='checked--v1'
                    className='h-6 w-6'
                  />
                  <span className='paragraph-l font-bold'>Item 1</span>
                </li>
                <li className='flex space-x-3  '>
                  <img
                    width={50}
                    height={50}
                    src='https://img.icons8.com/ios-filled/50/#F58929/checked--v1.png'
                    alt='checked--v1'
                    className='h-6 w-6'
                  />
                  <span className='paragraph-l font-bold'>Item 1</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src='/images/about/collective-buying.png'
              alt='Collective Buying'
              width={558}
              height={507}
              className='h-full w-full object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
