import ProgressBar from '@/components/common/ProgressBar';
import { CiShare2 } from 'react-icons/ci';
import { FiMapPin } from 'react-icons/fi';
import { MdGroups, MdOutlineAccessAlarms } from 'react-icons/md';

const Orders = () => {
  return (
    <>
      {/* component */}
      <div className='flex h-full w-screen flex-col px-14 py-7 md:flex-row'>
        {/* My Cart */}
        <div className='flex h-fit w-full flex-col gap-4 p-4 '>
          <p className='text-xl font-extrabold text-[#298592]'>
            Congrats! 🎉 You Saved GHC 50 on your basket{' '}
          </p>
          {/* Product */}
          <div className='flex flex-col rounded-sm border p-4 text-lg font-semibold shadow-md'>
            <div className='flex flex-col justify-between gap-3 md:flex-row'>
              {/* Product Information */}
              <div className='flex flex-row items-center gap-6'>
                <div className='h-28 w-28'>
                  <img
                    className='h-full w-full'
                    src='https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/09/NQQ-4635-309/NQQ-4635-309_zoom1.jpg?ts=1675445414&ims=544x'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-lg font-semibold text-[#298592]'>
                    Sunflower Oil (900ml)
                  </p>
                  <div>
                    <p className='text-sm font-normal text-[#F58929]  '>
                      CH¢20.0
                      <span className='ml-2 text-[#C1C2C2] line-through'>
                        CH¢42.0
                      </span>
                    </p>
                  </div>

                  <div className='flex items-center '>
                    <div className='flex items-center'>
                      <MdOutlineAccessAlarms className='my-2 text-[#298592]' />
                      <p className='ml-2 text-sm font-normal text-[#828282]'>
                        Ends in <span className='text-[#F58929]'>12:32:09</span>
                      </p>
                    </div>

                    <div className='ml-4 flex items-center'>
                      <FiMapPin className='my-2 text-[#298592]' />

                      <p className='ml-2 text-sm font-normal text-[#828282]'>
                        Oyarifa dropbar
                      </p>
                    </div>
                  </div>

                  <ProgressBar remaining={4} total={12} unit='bottles' />
                </div>
              </div>

              <div className='self-center'>
                <CiShare2 className='text-[#F58929]' />
              </div>
            </div>
          </div>
        </div>
        {/* Purchase Resume */}
        <div className='flex h-fit w-full flex-col gap-4 p-4 md:w-2/3'>
          <div className='flex flex-col gap-4 rounded-sm border p-4 text-lg font-semibold shadow-md'>
            <div className='flex flex-row justify-between'>
              <p className='font-meduim ml-2 text-sm text-black'>
                {' '}
                Your order summary
              </p>
            </div>
            <hr className='h-0.5 bg-gray-200' />
            <div className='flex flex-row justify-between'>
              <p className='ml-2 text-sm font-normal text-[#828282]'>Total</p>
              <div>
                <p className='ml-2 text-sm font-normal text-[#828282]'>
                  GH¢0.00
                </p>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='ml-2 text-sm font-normal text-[#828282]'>
                Delivery fee
              </p>
              <div>
                <p className='ml-2 text-sm font-normal text-[#828282]'>
                  GH¢0.00
                </p>
              </div>
            </div>

            <hr className='h-0.5 bg-gray-200' />

            <div className='flex flex-row justify-between'>
              <p className='font-meduim ml-2 text-sm text-black'>Total</p>
              <div>
                <p className='font-meduim ml-2 text-sm text-black'>GH¢0.00</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 rounded-sm border p-4 text-lg font-semibold shadow-md'>
            <div className='flex flex-row justify-between'>
              <p className='font-meduim ml-2 text-sm text-black'>
                Pickup Location
              </p>
            </div>
            <hr className='h-0.5 bg-gray-200' />
            <div className='flex flex-row justify-between'>
              <p className='ml-2 text-sm font-bold text-black'>
                Nere Agent Pickup, East Legon
              </p>
            </div>

            <div className='flex flex-row justify-between'>
              <p className='ml-2 text-sm font-normal text-[#828282]'>
                MEST Ambassadorial Enclave, 20 Aluguntugui St, Accra
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
