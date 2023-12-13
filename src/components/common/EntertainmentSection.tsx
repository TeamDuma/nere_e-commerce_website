const EntertainmentSection = () => {
  return (
    <section className='m-3 rounded bg-white p-5'>
      <div className='mt-5 flex flex-col items-center gap-5 lg:flex-row'>
        <div className='m-3 flex w-96 items-center justify-evenly rounded border border-gray-300 p-3 lg:w-1/3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-20 w-20 text-green-400'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
            />
          </svg>
          <div className='text-center'>
            <h2 className='pb-2 text-4xl font-bold'>0%</h2>
            <h4 className='text-md inline text-gray-500'>Very Satisfied</h4>
          </div>
        </div>
        <div className='m-3 flex w-96 items-center justify-evenly rounded border border-gray-300 p-3 lg:w-1/3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-20 w-20 text-gray-400'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.182 15.182a25.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
            />
          </svg>
          <div className='text-center'>
            <h2 className='pb-2 text-4xl font-bold'>0%</h2>
            <h4 className='text-md inline text-gray-500'>Neutral</h4>
          </div>
        </div>
        <div className='m-3 flex w-96 items-center justify-evenly rounded border border-gray-300 p-3 lg:w-1/3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-20 w-20 text-red-300'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
            />
          </svg>
          <div className='text-center'>
            <h2 className='pb-2 text-4xl font-bold'>0%</h2>
            <h4 className='text-md inline text-gray-500'>Very Unsatisfied</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentSection;
