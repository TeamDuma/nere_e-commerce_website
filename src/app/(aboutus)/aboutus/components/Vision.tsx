import { Button } from '@/components/common/Button';
import { AffordableIcon } from '@/components/common/icons/AffordableIcon';
import Image from 'next/image';

export const Vision = () => {
  return (
    <>
  
  <section className="bg-[url('/images/about/collective-buying-background.png')] bg-cover bg-no-repeat md:mt-[120px] ">

      <div className='nere-container md:pb-[170px] md:pt-[144px]'>
        <div className='grid-col-1 grid gap-x-4 md:grid-cols-2'>
        <div>
            <Image
              src='/images/about/collective-buying.png'
              alt='Collective Buying'
              width={558}
              height={507}
              className='h-full w-full object-contain'
            />
          </div>
          <div className='w-full pb-8 pt-[36px] md:max-w-lg md:py-[99.5px]'>
            <h1 className='mb-3 text-[24px] font-bold leading-[28.8px] text-nere-green md:text-[40px] md:leading-[48px]'>
            Empowering Local Businesses, Building a Stronger Community{' '}
            </h1>
            <p className='mb-3 text-[14px] leading-[20px] md:mb-[45px] md:text-[18px] md:leading-[32px]'>
            Nere connects small businesses with a wider customer base through our group-buying platform. This allows them to reach new consumers, increase sales volume, and gain valuable market insights.
            </p>

         
          </div>
        
        </div>
      </div>
      <div className='nere-container md:pb-[170px] md:pt-[144px]'>
        <div className='grid-col-1 grid gap-x-4 md:grid-cols-2'>
          <div className='w-full pb-8 pt-[36px] md:max-w-lg md:py-[99.5px]'>
            <h1 className='mb-3 text-[24px] font-bold leading-[28.8px] text-nere-green md:text-[40px] md:leading-[48px]'>
            Building a Sustainable Future, Together{' '}
            </h1>
            <p className='mb-3 text-[14px] leading-[20px] md:mb-[45px] md:text-[18px] md:leading-[32px]'>
            At Nere, we believe in responsible growth. Our focus on group buying not only saves money, but also reduces overall consumption by eliminating excess packaging and wasted goods. Additionally, our innovative agent system prioritizes eco-friendly delivery methods like walking, cycling, and electric vehicles.
            </p>

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
  </>
  
  
  );
};
