interface IListNumber {
  count: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export const ListNumber = ({
  count,
  title,
  description,
  isLast,
}: IListNumber) => (
  <div className='flex gap-x-2 lg:gap-x-[28px]'>
    <div className='flex flex-col items-center'>
      <span className='grid h-9 w-9 place-items-center rounded-full bg-[#FAEFDB] text-[9.6px] font-bold leading-[21.89px] text-[#F58929] md:text-[16px] md:leading-[36.48px] lg:h-[60px] lg:w-[60px]'>
        {count}
      </span>
      {!isLast && <div className='w-1 flex-1 bg-[#FAEFDB]'></div>}
    </div>
    <div className={`max-w-[564px] ${!isLast ? 'pb-[28px]' : ''}`}>
      <h4 className='mb-1 text-base font-bold leading-[19.2px] text-primary md:text-[24px] md:leading-[28.8px]'>
        {title}
      </h4>
      <p className='text-sm leading-[20px] md:text-base md:leading-[20px]'>
        {description}
      </p>
    </div>
  </div>
);
