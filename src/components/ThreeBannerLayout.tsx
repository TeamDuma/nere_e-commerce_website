const ThreeBannerLayout = () => {
  return (
    <>
      <div className='overflow-x-auto'>
        <div className='ml-8 flex justify-start'>
          <div className='flex-shrink-0 cursor-pointer rounded'>
            <div className='m-2' style={{ width: '460px', height: '170px' }}>
              <img
                src='/images/coupon1.svg'
                alt='Your Image'
                className='h-auto w-full'
              />
            </div>
          </div>
          <div className='flex-shrink-0 cursor-pointer rounded'>
            <div className='m-2' style={{ width: '460px', height: '170px' }}>
              <img
                src='/images/coupon2.svg'
                alt='Your Image'
                className='h-auto w-full'
              />
            </div>
          </div>
          <div className='flex-shrink-0 cursor-pointer rounded'>
            <div className='m-2' style={{ width: '460px', height: '170px' }}>
              <img
                src='/images/coupon3.svg'
                alt='Your Image'
                className='h-auto w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeBannerLayout;
