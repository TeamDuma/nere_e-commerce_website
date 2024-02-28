const ThreeBannerLayout = () => {
  return (
    <>
      <section className='m-3 rounded'>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3'>
          <div className='m-4 flex items-center justify-between rounded-md border border-[#D9D9D9] bg-[#D9D9D9] p-16 shadow'></div>
          <div className='m-4 flex items-center justify-between rounded-md border border-[#D9D9D9] bg-[#D9D9D9] p-16 shadow'></div>
          <div className='m-4 flex items-center justify-between rounded-md border border-[#D9D9D9] bg-[#D9D9D9] p-16 shadow'></div>
        </div>
      </section>
    </>
  );
};

export default ThreeBannerLayout;
