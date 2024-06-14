export const Team = () => {
  return (
    <section className='nere-container pb-[60px] pt-[60px] md:pb-[231px] md:pt-[160px]'>
      <div className='mb-3 text-center md:mb-5'>
        <h1 className='text-[20px] font-bold leading-[24px] text-nere-green md:text-[40px] md:leading-[48px]'>
          Meet the Team
        </h1>
      </div>
      <div className='flex flex-wrap gap-y-4'>
        <Card
          name='Kojo Selete-Avemegah'
          title='Product Lead'
          image='https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80'
        />
        <Card
          name='John Istutsah'
          title='Backend Lead'
          image='https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80'
        />
        <Card
          name='Alaa Ali'
          title='Front-end Lead'
          image='https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80'
        />
        <Card
          name='Jentrix Wanyama'
          title='Business Development'
          image='https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80'
        />
      </div>
    </section>
  );
};

const Card = ({
  name,
  title,
  image,
}: {
  name: string;
  title: string;
  image: string;
}) => (
  <div className='w-full sm:px-2 md:w-6/12 lg:w-3/12'>
    <div className='flex flex-col'>
      <a href='#' className=''>
        <img
          className='rounded-2xl drop-shadow-md transition-all delay-100 duration-200 hover:drop-shadow-xl'
          src={image}
          alt={name}
        />
      </a>
      <div className='mt-3 text-left'>
        <h1 className='font-bold leading-[19.2px] text-[#1A464C] md:mb-1 md:text-[20px] md:leading-6'>
          {name}
        </h1>
        <p className='text-sm leading-[16.8px] md:text-[18px] md:leading-[21.6px]'>
          {title}
        </p>
      </div>
    </div>
  </div>
);
