'use client';

const Page = () => {
  return (
    <div className='flex flex-col-reverse justify-center gap-16 px-4 py-24 md:gap-28 md:px-44 md:py-20 lg:flex-row lg:px-24 lg:py-24'>
      <div className='relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24'>
        <div className='relative'>
          <div className='absolute'>
            <div className=''>
              <h1 className='my-4 text-4xl font-bold text-[#1A464C]'>
                We can't find the page you're looking for...{' '}
              </h1>
              <p className='my-4 text-[#565656]'>
                Uh oh. Looks like you've taken a wrong turn.
              </p>
              <a href='/'>
                <button className='md hover:bg-[#298592 my-4 rounded border bg-[#298592] px-8 py-4 text-center text-white focus:outline-none focus:ring-2 focus:ring-[#298592] focus:ring-opacity-50 sm:w-full lg:w-auto'>
                  Go back home{' '}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className='mx-5 my-1' src='/images/404.svg' alt='Coin' />
      </div>
    </div>
  );
};

export default Page;
