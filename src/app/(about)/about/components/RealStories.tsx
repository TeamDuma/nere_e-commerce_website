'use client';
import { NavigateIcon } from '@/components/common/icons/NavigateIcon';
import Image from 'next/image';
import { useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider, { Settings } from 'react-slick';

const settings: Settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <></>,
  prevArrow: <></>,
  responsive: [
    {
      breakpoint: 802,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const RealStories = () => {
  const sliderRef = useRef<Slider>(null);

  const goNext = () => {
    sliderRef.current?.slickNext();
  };
  const goPrevious = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className="bg-[url('/images/styled-green-background.png')] bg-cover bg-center bg-no-repeat pb-[81px] md:pb-[61px]">
      <div className='nere-container'>
        <div className='mb-[27px] pt-[71px] md:mb-[51px] md:pt-[197px]'>
          <h2 className='text-center text-[18px] font-bold leading-[21.6px] text-white md:text-[32px] md:leading-[38.4px]'>
            Real stories, Real impact
          </h2>
        </div>
        <div className='mb-[51px]'>
          <Slider ref={sliderRef} {...settings} className='testimonial'>
            <Card />
            <Card />
          </Slider>
        </div>
        <div className='hidden w-full items-center justify-center gap-x-[28px] md:flex'>
          <NavigateIcon className='cursor-pointer' onClick={goPrevious} />
          <NavigateIcon
            className='rotate-180 cursor-pointer'
            onClick={goNext}
          />
        </div>
      </div>
    </section>
  );
};

const Card = () => (
  <div>
    <div className='flex flex-col items-center justify-center gap-x-[30px] gap-y-[19px] rounded-[20px] bg-white px-5 py-4 md:px-10 md:py-10 lg:flex-row'>
      <div className='flex flex-col items-center px-[21px] md:px-[30px]'>
        <div className='mb-1 w-[38px] md:mb-4 md:w-[120px]'>
          <Image
            src='/images/about/testimonial-image.svg'
            alt='Testimonial image'
            width={120}
            height={120}
            className='h-[38px] w-[38px] rounded-full object-cover md:h-[120px] md:w-[120px]'
          />
        </div>
        <p className='text-center text-sm font-medium leading-[18.2px] md:text-[21px] md:leading-[27.3px]'>
          Ama A.
        </p>
      </div>
      <p className='text-center text-nere-black md:text-left'>
        Since using Nere, I've been able to save almost half on my monthly
        grocery bill. It's a huge weight lifted off my shoulders, and my kids
        are eating healthier than ever before
      </p>
    </div>
  </div>
);
