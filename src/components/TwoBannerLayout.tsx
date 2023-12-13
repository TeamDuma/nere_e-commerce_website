const TwoColumnLayout = () => {
  return (
    <>
      <div className='max-w-screen-full mx-auto mt-10 grid grid-cols-1 gap-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div
            className='relative flex h-[400px] w-full flex-col items-center justify-center  rounded-2xl border p-4 shadow-lg'
            style={{ backgroundColor: '#298592' }}
          >
            <div className=''>
              <div className='flex-auto justify-center p-5 text-center'></div>
            </div>
          </div>
          <div className='flex w-full flex-col space-y-4'>
            <div
              className='hover:shodow-lg flex h-[200px] w-full transform cursor-pointer flex-col rounded-2xl border-gray-800 p-4 shadow-md transition duration-500 ease-in hover:scale-105'
              style={{ backgroundColor: '#298592' }}
            >
              <div className='flex items-center justify-between'>
                <div className='mr-auto flex items-center'></div>
              </div>
            </div>
            <div
              className='hover:shodow-lg flex h-[200px]  w-full transform cursor-pointer flex-col rounded-2xl border-gray-800 p-4 shadow-md transition duration-500 ease-in hover:scale-105'
              style={{ backgroundColor: '#298592' }}
            >
              <div className='flex items-center justify-between'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColumnLayout;
