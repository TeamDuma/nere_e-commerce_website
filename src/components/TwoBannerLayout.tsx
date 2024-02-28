import Link from 'next/link';

const TwoColumnLayout = () => {
  return (
    <>
      <div className='max-w-screen-full mx-auto mt-10 grid grid-cols-1 gap-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <Link href={`/category/${'breakfast'}`}>
            <div className='relative flex cursor-pointer flex-col rounded-2xl'>
              <img
                className='mx-2 my-2'
                src='/images/breakfasCombo.svg'
                alt='breakfasCombo'
              />
              <div className=''>
                <div className='flex-auto justify-center p-5 text-center'></div>
              </div>
            </div>
          </Link>
          <div className='flex w-full flex-col space-y-2'>
            <Link href={`/category/${'water-and-beverages'}`}>
              <div className='relative flex cursor-pointer flex-col rounded-2xl'>
                <img
                  className='mx-4 my-1'
                  src='/images/beverages.svg'
                  alt='beverages'
                />
                <div className='flex items-center justify-between'>
                  <div className='mr-auto flex items-center'></div>
                </div>
              </div>
            </Link>
            <Link href={`/category/${'baby-food'}`}>
              <div className='relative flex cursor-pointer flex-col rounded-2xl'>
                <img
                  className='mx-4 my-1'
                  src='/images/cereal.svg'
                  alt='cereal'
                />
                <div className='flex items-center justify-between'></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColumnLayout;
