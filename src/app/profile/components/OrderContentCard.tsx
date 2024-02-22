import { Orders } from '@/types/orders';
import OrderProgressBar from '@/components/common/OrderProgressBar';

interface OrderContentCardProps {
  item: Orders;
}

const timestamp = '2024-02-05T09:44:39.886Z';
const date = new Date(timestamp);

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const OrderContentCard: React.FC<OrderContentCardProps> = ({ item }) => {
  const timestamp = item.created_at;
  const date = new Date(timestamp);
  const formattedDate = ` ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  return (
    <div className='mt-4'>
      <div className='grid grid-cols-3 gap-4'>
        <div className='... grid justify-items-stretch'>
          <div className='justify-self-auto '>
            <p className='text-xs	 font-normal	text-[#298592]	'>
              {' '}
              {formattedDate}
            </p>
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
          <p className='text-xs	 font-bold	text-[#838281]	'> {item.reference} </p>
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
          {item.groups.map((group, index) => (
            <div key={index}>
              <div
                className='relative m-2 rounded border-2 border-solid border-[#F58929] p-8'
                style={{
                  borderRadius:
                    group.total_quantity === group.product.min_quantity
                      ? '10px'
                      : '0',
                }}
              >
                <img
                  src={group.product?.plain_image}
                  alt={group.product?.name}
                  className='h-[83px] w-[83px] rounded-lg'
                  style={{ width: '20px', height: '50px' }}
                />
                {group.product.hasMinQuantity ? (
                  <span className='absolute right-0 top-0 rounded border-2 border-solid bg-[#F58929] p-1 text-xs text-white'>
                    {group.total_quantity} / {group.product.min_quantity}
                  </span>
                ) : (
                  <span className='absolute right-0 top-0 rounded border-2 border-solid bg-[#F58929] p-1 text-xs text-white'>
                    {group.total_quantity}
                  </span>
                )}
              </div>
            </div>
          ))}
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
