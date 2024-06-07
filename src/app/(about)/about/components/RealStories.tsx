'use client';
import { NavigateIcon } from '@/components/common/icons/NavigateIcon';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const RealStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Carousel>(null);

  const goToNext = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const updateCurrentSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <section className="h-[701px] bg-[url('/images/styled-green-background.png')] bg-cover bg-center bg-no-repeat">
      <div className='nere-container'>
        <h2 className='mb-[51px] pt-[197px] text-center text-[32px] font-bold leading-[38.4px] text-white'>
          Real stories, Real impact
        </h2>
        <div className='mb-[51px] grid grid-cols-2 gap-10'>
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className='flex items-center justify-center gap-[30px] rounded-[20px] bg-white p-10'
            >
              <div className='px-[30px]'>
                <div className='mb-4 aspect-square min-w-[120px]'>
                  <Image
                    src='/images/about/testimonial-image.svg'
                    alt='Testimonial image'
                    width={120}
                    height={120}
                  />
                </div>
                <p className='text-center text-[21px] font-medium leading-[27.3px]'>
                  Ama A.
                </p>
              </div>
              <p className='text-nere-black'>
                Since using Nere, I've been able to save almost half on my
                monthly grocery bill. It's a huge weight lifted off my
                shoulders, and my kids are eating healthier than ever before
              </p>
            </div>
          ))}
        </div>

        {/* <div className='mb-[51px]'>
          <Carousel
            ref={carouselRef}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            centerMode
            centerSlidePercentage={50}
            selectedItem={currentSlide}
            swipeable
            onChange={updateCurrentSlide}
          >
            <div className='mr-20 flex items-center justify-center gap-[30px] rounded-[20px] bg-white p-10'>
              <TestImage />
              <p className='text-nere-black'>
                Since using Nere, I've been able to save almost half on my
                monthly grocery bill. It's a huge weight lifted off my
                shoulders, and my kids are eating healthier than ever before
              </p>
            </div>
            <div className='flex items-center justify-center gap-[30px] rounded-[20px] bg-white p-10'>
              <TestImage />

              <p className='text-nere-black'>
                Since using Nere, I've been able to save almost half on my
                monthly grocery bill. It's a huge weight lifted off my
                shoulders, and my kids are eating healthier than ever before
              </p>
            </div>
          </Carousel>
        </div> */}
        <div className='flex w-full items-center justify-center gap-x-[33px]'>
          <NavigateIcon className='cursor-pointer' onClick={goToPrev} />
          <NavigateIcon
            className='rotate-180 cursor-pointer'
            onClick={goToNext}
          />
        </div>
      </div>
    </section>
  );
};
