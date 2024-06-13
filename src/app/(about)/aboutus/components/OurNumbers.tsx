export const OurNumbers = () => {
  return (
    <section className='bg-[#FDF6E8] py-20 md:py-[100px]'>
      <div className='nere-container flex flex-col items-center'>
        <div className='mx-auto mb-[47px] flex flex-col items-center justify-center md:mb-[60px] md:max-w-[679px]'>
          <h2 className='mb-5 text-[20px] font-bold leading-[20px] md:text-[40px] md:leading-[52px]'>
            Our numbers tell the story
          </h2>
          <p className='text-center text-sm md:text-[18px] md:leading-[23.4px]'>
            Since inception, Nere has saved customers hundreds of cedis, grown
            our user base significantly, and expanded into new markets to reach
            more communities.
          </p>
        </div>

        <div className='flex flex-col flex-wrap justify-center gap-x-[30px] gap-y-[27px] text-center md:flex-row md:text-left'>
          <div className='flex flex-col border-[#FFAA63] pl-5  md:w-[380px] md:border-l-4'>
            <h3 className='text-5xl text-[20px] font-bold leading-[26px] text-nere-green md:text-[40px] md:leading-[52px]'>
              10k+
            </h3>
            <p className='text-xs leading-[15.6px] md:text-base md:leading-[20.8px]'>
              Communities
            </p>
          </div>
          <div className='flex flex-col border-[#FFAA63] pl-5 md:w-[380px] md:border-l-4'>
            <h3 className='text-5xl text-[20px] font-bold leading-[26px] text-nere-green md:text-[40px] md:leading-[52px]'>
              85%
            </h3>
            <p className='text-xs leading-[15.6px] md:text-base md:leading-[20.8px]'>
              Experience the power of growth
            </p>
          </div>
          <div className='flex flex-col border-[#FFAA63] pl-5 md:border-l-4'>
            <h3 className='text-5xl text-[20px] font-bold leading-[26px] text-nere-green md:text-[40px] md:leading-[52px]'>
              60k+
            </h3>
            <p className='text-xs leading-[15.6px] md:text-base md:leading-[20.8px]'>
              Total Customer Savings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
