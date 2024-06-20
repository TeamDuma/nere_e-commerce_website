import Image from 'next/image';

export const Vision = () => {
  return (
    <section className='nere-container pb-20 pt-[60px] md:pb-[130px] md:pt-[110px]'>
      <div className='grid-col-1 mb-12 grid gap-x-4 md:grid-cols-2'>
        <div className='order-2 md:order-1'>
          <Image
            src='/images/about/vision-1.png'
            alt='Vision Image'
            width={584}
            height={390}
            className='object-contain md:w-[584px]'
          />
        </div>
        <div className='order-1 my-auto w-full md:order-2 md:pl-10 lg:pl-20'>
          <h1 className='mb-3 text-[24px] font-bold leading-[28.8px] text-nere-green md:text-[40px] md:leading-[48px]'>
            Empowering Local Businesses, Building a Stronger Community
          </h1>
          <p className='mb-6 text-[14px] leading-[20px] md:text-[18px] md:leading-[32px]'>
            Nere connects small businesses with a wider customer base through
            our group-buying platform. This allows them to reach new consumers,
            increase sales volume, and gain valuable market insights.
          </p>
        </div>
      </div>
      <div className='grid-col-1 grid gap-x-4 md:grid-cols-2'>
        <div className='my-auto w-full md:max-w-lg'>
          <h1 className='mb-3 text-[24px] font-bold leading-[28.8px] text-nere-green md:text-[40px] md:leading-[48px]'>
            Building a Sustainable Future, Together
          </h1>
          <p className='mb-6 text-[14px] leading-[20px] md:pr-10 md:text-[18px] md:leading-[32px] lg:pr-20'>
            At Nere, we believe in responsible growth. Our focus on group buying
            not only saves money, but also reduces overall consumption by
            eliminating excess packaging and wasted goods. Additionally, our
            innovative agent system prioritizes eco-friendly delivery methods
            like walking, cycling, and electric vehicles.
          </p>
        </div>
        <div>
          <Image
            src='/images/about/vision-2.png'
            alt='Vision Image'
            width={590}
            height={395}
            className='object-contain md:w-[590px]'
          />
        </div>
      </div>
    </section>
  );
};
