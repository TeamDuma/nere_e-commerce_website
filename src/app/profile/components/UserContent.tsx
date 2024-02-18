import { FaCircleCheck } from 'react-icons/fa6';

const UserContent = () => {
  return (
    <>
      <div className='p-6'>
        <div className='my-2 rounded-md border border-gray-100 bg-white  p-6 shadow-md shadow-black/5'>
          <div className='flex '>
            <FaCircleCheck style={{ color: '#70C4C0', margin: 6 }} />

            <div className='mb-8'>
              <p className=' font-medium text-[#1A464C]'>JOHN ISUTSAH</p>

              <div className='mt-8 flex flex-wrap'>
                <div className='mr-8 p-2'>
                  <p className=' text-[#979797]'>Email Address</p>
                  <p className=' font-medium text-[#1A464C]'>John@gmail.com</p>
                </div>
                <div className=' mx-6 border-l-2 p-2'>
                  <p className=' text-[#979797]'>Number</p>
                  <p className=' font-medium text-[#1A464C]'>0549230728</p>
                </div>
                <div className=' mx-6 border-l-2 p-2'>
                  <p className=' text-[#979797]'>Title</p>
                  <p className=' font-medium text-[#1A464C]'>Mr</p>
                </div>
                <div className=' mx-6 border-l-2 p-2'>
                  <p className=' text-[#979797]'>Total Savings</p>
                  <p className=' font-medium text-[#1A464C]'>GHS 500.00</p>
                </div>
              </div>
            </div>
            <div className='mb-8'>
              <p className='cursor-pointer  text-[#298592]	 '>Edit</p>
            </div>
          </div>
        </div>

        <div className='mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <div className='relative mb-4 flex w-full min-w-0 flex-col break-words rounded p-6 shadow-lg dark:bg-gray-800 lg:mb-0'>
            <div className='rounded-md  bg-white' style={{ width: '100%' }}>
              <div className='flex justify-between p-2'>
                <div className='rounded-md bg-white'>Pickup Location</div>
                <div
                  className='cursor-pointer text-xs text-[#298592]	 '
                  // onClick={() => setSelectedOption('pickup')}
                >
                  Change pickup location {'>'}
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='rounded-md bg-white p-2'>
                  {/* {selectedAddress ? ( */}
                  <>
                    <p className='text-sm	 font-medium	'>
                      {/* {selectedAddress.name} */}
                    </p>
                    <p className='text-xs font-medium		text-[#979797]'>
                      MEST Ambassadorial Enclave, 20 Aluguntugui St, Accra
                    </p>
                  </>
                  {/* ) : null} */}
                </div>
                {/* <div className='m-2 text-gray-500'>
                <p>Additional information:</p>

                <p className='cursor-pointer text-[#298592]'>
                  {' '}
                  See on google maps
                </p>
                <p>Nere Agent Pickup, East Legon</p>
                <p>MEST Ambassadorial Enclave, 20 Aluguntugui St, Accra</p>
              </div> */}
              </div>
            </div>
          </div>
          <div className='rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5'>
            <div className='flex justify-between p-2'>
              <div className='rounded-md bg-white'>Nere Quest</div>
              <div className='cursor-pointer text-xs text-[#298592]	 '>
                <img src='/Users/alaa/new git e-commece/nere_e-commerce_website/public/images/coin.png' />
              </div>
            </div>
            <div className='flex justify-between p-2'>
              <div className='cursor-pointer text-xs text-[#298592]	 '>
                <img src='/Users/alaa/new git e-commece/nere_e-commerce_website/public/images/coin.png' />
                Game point
              </div>
              <div className='cursor-pointer text-xs text-[#298592]	 '>
                <img src='/Users/alaa/new git e-commece/nere_e-commerce_website/public/images/coin.png' />
                Game point
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserContent;
