import Logo from '@/components/common/Logo';
import OrderProgressBar from '@/components/common/OrderProgressBar';

const OrderContentCard = () => {
  return (
    <div className='mt-4'>
      <div className='grid grid-cols-3 gap-4'>
        <div className='... grid justify-items-stretch'>
          <div className='justify-self-auto '>
            <p className='text-xs	 font-normal	text-[#298592]	'>Mon, 4 Jan 2020</p>
          </div>
        </div>{' '}
        <div className='... invisible'>02</div>
        <div>
          <p className='font-font-semibold	 text-sm		text-[#838281]	'>
            {' '}
            You Saved{' '}
            <span className='font-font-semibold	 text-xs		text-[#F58929]	'>
              GHC 100 🎉
            </span>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='... grid justify-items-stretch'>
          <div className='justify-self-auto '>
            <p className='text-xs	 font-normal	text-[#343434]	'>Order ID</p>
          </div>
        </div>{' '}
        <div className='... invisible'>02</div>
        <div>
          <p className='text-xs	 font-bold	text-[#838281]	'> NCG123 </p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='... grid justify-items-stretch'>
          <div className='justify-self-auto '>
            <p className='text-xs	 font-normal	text-[#343434]	'>Pickup location</p>
          </div>
        </div>{' '}
        <div className='... invisible'>02</div>
        <div>
          <p className='text-xs	 font-bold	text-[#838281]	'> East Legon (MEST)</p>
        </div>
      </div>

      <div className='my-2 rounded-md border border-gray-100 bg-white  p-6 shadow-md shadow-black/5'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='... grid justify-items-stretch'>
            <div className='justify-self-auto '>
              <p className='text-xs	 font-normal	text-[#298592]	'>Items</p>
            </div>
          </div>{' '}
          <div className='... invisible'>02</div>
          <div>
            <p className='text-sm	 font-bold		text-[#1A464C]	'>Order Summary</p>
          </div>
        </div>
        <div className='m-2 mt-8 flex flex-wrap'>
          <div className='relative  m-2           rounded border-2 border-solid border-[#F58929] p-8'>
            <span className='absolute right-0 top-0 rounded border-2 border-solid bg-[#F58929] p-1 text-xs text-white'>
              8/12
            </span>
          </div>

          <div
            className='relative m-2 
          rounded border-2 border-solid border-[#F58929] p-8'
          >
            <span className='absolute right-0 top-0 rounded border-2 border-solid bg-[#F58929] p-1 text-xs text-white'>
              8/12
            </span>
          </div>
          <div className='relative  m-2           rounded border-2 border-solid border-[#298592] p-8'>
            <span className='absolute right-0 top-0 rounded border-2 border-solid bg-[#298592] p-1 text-xs text-white'>
              12/12
            </span>
          </div>
          <div className='relative  m-2           rounded border-2 border-solid border-[#F58929] p-8'>
            <span className='absolute right-0 top-0 rounded border-2 border-solid bg-[#F58929] p-1 text-xs text-white'>
              8/12
            </span>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <div className='... grid justify-items-stretch'>
            <div className='justify-self-auto '>
              <p className='text-xs	 font-normal	text-[#1A464C]	'>
                Order confirmed
              </p>
            </div>
          </div>{' '}
          <div className='... invisible'>02</div>
          <div>
            <p className=' text-sm		text-[#1A464C]	'>Pickup Agent </p>
          </div>
        </div>

        <OrderProgressBar remaining={7} total={12} />

        <div className='grid grid-cols-3 gap-4'>
          <p className='mt-4	  text-xs		font-medium	text-[#1A464C]'>
            Pick up on Fri, 23 Aug 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderContentCard;
