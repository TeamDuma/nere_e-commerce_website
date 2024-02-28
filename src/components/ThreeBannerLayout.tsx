const ThreeBannerLayout = () => {
  return (
    <>
      <section className='m-3 rounded'>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3'>
          <div className='m-4 flex items-center justify-between rounded-md border border-[#D9D9D9] bg-[#D9D9D9] p-16 shadow'></div>
          <div className='m-4 flex items-center justify-between rounded-md border border-[#D9D9D9] bg-[#D9D9D9] p-16 shadow'></div>
          <div className='m-4 flex items-center justify-between rounded-md border border-[#D9D9D9] bg-[#D9D9D9] p-16 shadow'></div>
        </div>
        {/* <div className='mt-5 flex flex-col items-center gap-3 lg:flex-row lg:justify-between'>
          <div className='m-3 flex h-36 w-80 rounded-lg border border-[#D9D9D9] bg-[#D9D9D9] lg:w-1/3'></div>

          <div className='m-3 flex h-36 w-80 rounded-lg border border-[#D9D9D9] bg-[#D9D9D9] lg:w-1/3'></div>

          <div className='m-3 flex h-36 w-80 rounded-lg border border-[#D9D9D9] bg-[#D9D9D9] lg:w-1/3'></div>
        </div> */}
      </section>

      {/* <section className='m-3 rounded '>
        <div className='mt-5 flex flex-col items-center gap-3 lg:flex-row'>
          <div className='m-3 flex h-36 w-80 rounded-lg border  border-[#D9D9D9] bg-[#D9D9D9] lg:w-1/3'></div>

          <div className='m-3 flex h-36 w-80 rounded-lg border  border-[#D9D9D9] bg-[#D9D9D9] lg:w-1/3'>
            <div className='text-center'></div>
          </div>

          <div className='m-3 flex h-36 w-80 rounded-lg border  border-[#D9D9D9] bg-[#D9D9D9] lg:w-1/3'>
            <div className='text-center'></div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ThreeBannerLayout;
