import { Button } from '@/components/common/Button';
import Image from 'next/image';

export const CollectiveBuying = () => {
  return (
    <section className="mt-[120px] bg-[url('/images/about/collective-buying-background.png')] bg-cover bg-no-repeat ">
      <div className='nere-container pb-[170px] pt-[144px]'>
        <div className='grid-col-1 grid gap-x-4 md:grid-cols-2'>
          <div className='max-w-lg py-[99.5px]'>
            <h1 className='mb-3 text-[24px] font-bold leading-[28.8px] text-nere-green md:text-[40px] md:leading-[48px]'>
              Savings Through Collective Buying
            </h1>
            <p className='mb-[45px] text-[14px] leading-[20px] md:text-[18px] md:leading-[32px]'>
              We believe in the power of collective purchasing to drive
              significant savings for individuals and communities. By joining
              our network, you can access essential goods at discounted prices
              through our innovative group buying model.
            </p>
            <Button>Join the community</Button>
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
