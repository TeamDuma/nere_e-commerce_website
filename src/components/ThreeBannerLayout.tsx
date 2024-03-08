const ThreeBannerLayout = () => {
  return (
    <>
      <section
        id='content'
        className='right-0 w-[100wh-60px]  p-5 transition-all duration-500 ease-in-out lg:w-[100wh-250px]'
      >
        <div className='relative'>
          <div className='overflow-x-auto'>
            <div className='flex flex-nowrap justify-start'>
              <div className=' flex-shrink-0 cursor-pointer rounded  '>
                <div
                  className='m-2 '
                  style={{ width: '370px', height: '160px' }}
                >
                  <div className='m-4 flex items-center justify-between rounded-md border border-[#D9D9D9] bg-[#D9D9D9] p-16 shadow'></div>
                </div>
              </div>
              <div className=' flex-shrink-0 cursor-pointer rounded  '>
                <div
                  className='m-2 '
                  style={{ width: '370px', height: '160px' }}
                >
                  <div className='m-4 flex items-center justify-between rounded-md border border-[#D9D9D9] bg-[#D9D9D9] p-16 shadow'></div>
                </div>
              </div>
              <div className=' flex-shrink-0 cursor-pointer rounded  '>
                <div
                  className='m-2 '
                  style={{ width: '370px', height: '160px' }}
                >
                  <div className='m-4 flex items-center justify-between rounded-md border border-[#D9D9D9] bg-[#D9D9D9] p-16 shadow'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeBannerLayout;
