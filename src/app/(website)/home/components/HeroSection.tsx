import Button from '@/components/common/Button';
import { AffordableIcon } from '@/components/common/icons/AffordableIcon';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className="bg-[url('/images/about/hero-background.svg')] bg-cover pb-0 pt-0 md:pb-[120px] md:pt-[72px] lg:bg-contain">
      <div className='nere-container relative'>
        <div className='flex w-full justify-center'>
          <Image
            src='/images/about/hero-1.png'
            alt='Togetherness'
            height={225.86}
            width={266.25}
            className='absolute left-0 top-0 hidden object-contain lg:block'
          />
          <Image
            src='/images/about/hero-2.png'
            alt='Group buy'
            height={197}
            width={232.18}
            className='absolute -bottom-12 right-10 hidden object-contain lg:block'
          />
          <div className='flex flex-col items-center justify-center pb-6 pt-20 md:pt-24 lg:ml-16 lg:max-w-[780px]'>
            <h1 className='text-center text-2xl font-bold leading-[28.32px] md:text-[60px] md:leading-[70.81px]'>
              <span>Empowering Communities Through </span>
              <span className='inline-flex flex-col'>
                <span className='text-nere-orange'>Affordable</span>
                <AffordableIcon className='-mt-2 ml-2 w-28 md:ml-0 md:mt-0 md:w-full' />
              </span>
              <span> Goods</span>
            </h1>
            <p className='mb-8 mt-4 text-center text-sm md:text-[20px] md:leading-8'>
              Nere makes it possible. Join our story of empowering communities
              through affordable goods and sustainable practices.
            </p>
            <Link href='#collaborate-with-us'>
              <Button className='w-full md:w-[334px]'>
                Join the community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
