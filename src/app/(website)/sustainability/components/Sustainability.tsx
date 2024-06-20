import { EcoFriendlyIcon } from '@/components/common/icons/EcoFriendlyIcon';
import { FoodWasteIcon } from '@/components/common/icons/FoodWasteIcon';
import { PackagingIcon } from '@/components/common/icons/PackagingIcon';

export const Sustainability = () => {
  return (
    <section className='nere-container'>
      <div className='mx-auto flex w-full max-w-[895px] flex-col items-center justify-center'>
        <h2 className='mb-3 text-[20px] font-bold leading-6 text-nere-green md:text-[40px] md:leading-[45.6px]'>
          Our Sustainability Initiatives
        </h2>
        <p className='mb-6 text-center text-sm leading-[20px] md:mb-[60px] md:text-[20px] md:leading-[32px]'>
          Nere is committed to driving measurable impact, aligning with
          Sustainable Development Goals (SDGs), and continuously evolving to
          meet the needs of our communities.
        </p>
      </div>

      <div className='grid gap-9 gap-y-6 text-white md:grid-cols-2 lg:grid-cols-3'>
        <Card
          title='Eco-Friendly Deliveries'
          description='Nere’s agent system minimizes carbon footprint by using sustainable transportation options'
          Icon={EcoFriendlyIcon}
        />
        <Card
          title='Reduced Packaging'
          description='We actively
          work with suppliers to minimize unnecessary packaging and promote eco-friendly materials'
          Icon={PackagingIcon}
        />
        <Card
          title='Food Waste Reduction'
          description='We actively work with suppliers to minimize unnecessary packaging and promote eco-friendly materials'
          Icon={FoodWasteIcon}
        />
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.FC;
}) => {
  return (
    <div className="rounded-[20px] bg-[url('/images/styled-green-background.png')] bg-cover ">
      <div className='px-[39px] py-[44.76px] md:px-[61px] md:py-[88px]'>
        <div className='mx-auto flex flex-col items-center justify-center gap-y-4 text-center md:max-w-[265px] md:gap-y-6'>
          <Icon />
          <h5 className='text-[20px] font-bold leading-[39px]'>{title}</h5>
          <p className='text-sm leading-[27px] md:text-base'>{description}</p>
        </div>
      </div>
    </div>
  );
};
