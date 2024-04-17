import TableOfContents from './components/TableOfContents';

const Page = () => {
  return (
    <>
      {/* component */}
      <div>
        <div className='mx-auto mt-6 max-w-7xl px-4 sm:px-2 lg:px-8'>
          <div className='grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible'>
            <div className='flex flex-col gap-8 text-left'>
              <h1 className='text-4xl	font-bold	text-[#298592]'>
                NERE COMMUNITY COOKIE POLICY
              </h1>
            </div>
          </div>
          <div className='ml-12  flex'>
            <h2 className='ml-5	text-3xl	font-bold text-[#298592]'>
              Table of content
            </h2>
          </div>
          <TableOfContents />
        </div>
      </div>
    </>
  );
};

export default Page;
