import { AirbnbIcon } from '@/components/common/icons/AirbnbIcon';
import { AmazonIcon } from '@/components/common/icons/AmazonIcon';
import { CoinbaseIcon } from '@/components/common/icons/CoinbaseIcon';
import { GoogleIcon } from '@/components/common/icons/GoogleIcon';
import { SlackIcon } from '@/components/common/icons/SlackIcon';
import { StripeIcon } from '@/components/common/icons/StripeIcon';
import { TwitchIcon } from '@/components/common/icons/TwitchIcon';
import Marquee from 'react-fast-marquee';

export const TrustedBrands = () => (
  <section className='py-[25px]'>
    <div className='flex w-full justify-center'>
      <p className='mb-3 px-6 text-center text-sm font-medium leading-[19.61px] text-nere-black md:mb-6 md:text-[20px] md:leading-6'>
        Trusted by brands
      </p>
    </div>
    <Marquee gradient={false} speed={40}>
      <AirbnbIcon className='mr-12 md:mr-24' />
      <SlackIcon className='mr-12 md:mr-24' />
      <GoogleIcon className='mr-12 md:mr-24' />
      <AmazonIcon className='mr-12 md:mr-24' />
      <TwitchIcon className='mr-12 md:mr-24' />
      <StripeIcon className='mr-12 md:mr-24' />
      <CoinbaseIcon className='mr-12 md:mr-24' />
    </Marquee>
  </section>
);
