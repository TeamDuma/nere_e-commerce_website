export const OngoingPurchases = () => {
  return (
    <div className='w-full rounded-[20px] bg-[#F0F4F5] px-[28px] pb-10 pt-[46px]'>
      <div className='mb-[33px] flex justify-between'>
        <h6 className='text-[20px] font-bold leading-6 text-nere-green'>
          Ongoing purchases near you
        </h6>
        <div className='flex items-center gap-x-1'>
          <p className='text-sm font-bold leading-[19.2px] text-nere-green'>
            View all
          </p>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 12L10 8L6 4'
              stroke='#04484D'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-x-6'>
        <>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className='h-[268px] bg-gray-200' />
          ))}
        </>
      </div>
    </div>
  );
};
