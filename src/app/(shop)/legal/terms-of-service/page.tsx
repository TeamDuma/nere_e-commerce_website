'use client';
import TableOfContents from './components/TableOfContents';
import Watermark from '@uiw/react-watermark';
const Page = () => {
  return (
    <>
      {/* component */}
      <Watermark
        height={400}
        width={600}
        image='https://res.cloudinary.com/dc0q9vdbb/image/upload/v1713378960/Group_14023_1_oy6qvc.png'
      >
        <div>
          <div className='mx-auto mt-6 max-w-7xl px-4 sm:px-2 lg:px-8'>
            <div className='grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible'>
              <div className='flex flex-col gap-8 text-left'>
                <h1 className='text-4xl	font-bold	text-[#298592]'>
                  Nere Community Terms of Service- Contents
                </h1>
                <p>
                  Welcome message: Welcome to Nere Community! We’re happy to
                  have you on board. We hope that you enjoy your experience!
                  Please be sure to familiarize yourself with our terms stated
                  below.
                </p>
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
      </Watermark>
    </>
  );
};

export default Page;
