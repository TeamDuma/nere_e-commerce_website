import Marquee from 'react-fast-marquee';
import { AutoSurveilIcon } from '@/components/common/icons/AutoSurveilIcon';
import { BabyNestIcon } from '@/components/common/icons/BabyNestIcon';
import { CaramelIcon } from '@/components/common/icons/CaramelIcon';
import { DexwinIcon } from '@/components/common/icons/DexwinIcon';
import { ImaniIcon } from '@/components/common/icons/ImaniIcon';
import { SunnyIcon } from '@/components/common/icons/SunnyIcon';

export const TrustedBrands = () => (
  <section className='nere-container pb-0 pt-[25px] md:pb-[25px]'>
    <div className='flex w-full justify-center'>
      <p className='mb-3 px-6 text-center text-sm font-medium leading-[19.61px] text-nere-black md:mb-6 md:text-[20px] md:leading-6'>
        Trusted by brands
      </p>
    </div>
    <Marquee gradient={false} speed={40}>
      <AutoSurveilIcon className='mr-12 md:mr-24' />
      <DexwinIcon className='mr-10 md:mr-20' />
      <ImaniIcon className='mr-10 md:mr-20' />
      <SunnyIcon className='mr-12 md:mr-24' />
      <CaramelIcon className='mr-12 md:mr-24' />
      <BabyNestIcon className='mr-12 md:mr-24' />
    </Marquee>
  </section>
);
