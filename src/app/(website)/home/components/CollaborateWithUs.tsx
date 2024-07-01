import { ArrowIcon } from '@/components/common/icons/ArrowIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const cardsData = [
  {
    title: 'Become an Agent',
    description:
      'Earn extra cash by becoming a community fulfillment agent to facilitate pick-ups.',
    image: '/images/about/become-agent.png',
  },
  {
    title: 'Become a supplier',
    description:
      'Partner with us, reach new customers and drive sales through our growing network.',
    image: '/images/about/become-supplier.png',
  },
  {
    title: 'Partner with us',
    description:
      'Whether through funding or brand partnerships, contact us to discuss how your support can help us create lasting change',
    image: '/images/about/partner-with-us.png',
  },
];

export const CollaborateWithUs = () => {
  return (
    <section
      id='collaborate-with-us'
      className='bg-[#FEFDFB] pb-[120px] pt-20 text-nere-black md:pt-[110px]'
    >
      <div className='nere-container'>
        <h2 className='mb-3 text-center text-[20px] font-bold leading-6 tracking-[-0.32px] text-nere-green md:mb-[60px] md:text-[40px] md:leading-[64px]'>
          Collaborate with us!
        </h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
          {cardsData.map(({ title, description, image }, index) => (
            <div
              key={index}
              className='flex h-[317px] w-full flex-col justify-between bg-white md:h-[376px] md:w-[382px]'
            >
              <div>
                <h5 className='mb-4 text-base font-bold leading-[32px] text-[#3B3B3B] md:mb-5 md:text-[18px]'>
                  {title}
                </h5>
                <div className='mb-4 md:mb-5'>
                  <Image
                    src={image}
                    alt={`${title} image`}
                    width={376}
                    height={165}
                    className='h-[165px] w-full rounded-lg object-cover md:h-[165px] md:w-[376px]'
                  />
                </div>
                <p className='text-sm leading-[20px] md:text-[18px] md:leading-[29px]'>
                  {description}
                </p>
              </div>
              <Link href='#'>
                <div className='flex items-center gap-x-3'>
                  <p className='text-sm font-bold leading-[32px] text-[#298592] md:text-[18px]'>
                    Learn more
                  </p>
                  <ArrowIcon />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
