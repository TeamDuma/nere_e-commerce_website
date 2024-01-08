const EntertainmentSection = () => {
  return (
    <section className='m-3 rounded '>
      <div className='mt-5 flex flex-col items-center gap-3 lg:flex-row'>
        <div className='m-3 flex w-96 rounded-lg  border border-[#298592] lg:w-1/3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-20 w-20 text-green-400'
          >
            {/* SVG path */}
          </svg>
          <div className='text-center'>
            <h2 className='my-1'>Nere Coins</h2>
            <h4 className='text-md inline  font-bold text-[#298592]'>
              Earn more
            </h4>
          </div>
        </div>

        <div className='m-3 flex w-96 rounded-lg  border border-[#298592] lg:w-1/3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-20 w-20 text-gray-400'
          >
            {/* SVG path */}
          </svg>
          <div className='text-center'>
            <h2 className='my-1 '>Game and win coins</h2>
            <h4 className='text-md inline  font-bold text-[#298592]'>
              Play Now
            </h4>
          </div>
        </div>

        <div className='m-3 flex w-96 rounded-lg  border border-[#298592] lg:w-1/3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-20 w-20 text-red-300'
          >
            {/* SVG path */}
          </svg>
          <div className='text-center'>
            <h2 className='my-1'>Loyalty offers?</h2>
            <h4 className='text-md inline  font-bold text-[#298592]'>
              Buy Again
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentSection;
