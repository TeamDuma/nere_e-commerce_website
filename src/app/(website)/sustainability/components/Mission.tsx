import { MissionIcon } from '@/components/common/icons/MissionIcon';
import { VissionIcon } from '@/components/common/icons/VissionIcon';

export const Mission = () => {
  return (
    <section className="bg-[url('/images/styled-green-background.png')] bg-cover md:bg-center md:bg-no-repeat">
      <div className='mx-auto px-4 py-[60px] md:max-w-[948px] md:py-[74px]'>
        <div className='grid gap-y-9 text-white md:grid-cols-2'>
          <div className='flex flex-col items-center gap-y-6 border-white md:border-r-2 md:py-[41px] md:pr-[96px]'>
            <MissionIcon />
            <h4 className='font-medium md:text-[40px] md:leading-[47.21px]'>
              Mission
            </h4>
            <p className='text-center'>
              Crowdfunding is a method of raising capital through the collective
              effort of friends, family, customers, and individual investors.
              Also, Crowdfunding is the practice of funding a project or venture
              by raising money from a large number of people, typically via the
              internet.
            </p>
          </div>
          <div className='flex flex-col items-center gap-y-6 md:py-[41px] md:pl-[96px]'>
            <VissionIcon />
            <h4 className='font-medium md:text-[40px] md:leading-[47.21px]'>
              Vision
            </h4>
            <p className='text-center'>
              Crowdfunding is a method of raising capital through the collective
              effort of friends, family, customers, and individual investors.
              Also, Crowdfunding is the practice of funding a project or venture
              by raising money from a large number of people, typically via the
              internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
