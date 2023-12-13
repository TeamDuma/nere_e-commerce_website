import { Group } from '@/types/group';
import { useRouter } from 'next/navigation';

const GroupRowRenderItem = ({ item }: { item: Group }) => {
  const router = useRouter();

  const calculateSavingsPercentage = (oldPrice: number, newPrice: number) => {
    const savingsPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(savingsPercentage);
  };

  return (
    <div
      key={item.id}
      onClick={() => router.push(`/groups/ongoingPurchases/${item.uid}`)}
      className='flex items-center rounded-lg bg-white p-4 shadow-md'
    >
      <div className='relative w-1/3 flex-shrink-0'>
        <img
          src={item.product.plain_image}
          alt={item.product.name}
          className='h-32 w-full rounded-lg object-cover'
          style={{ width: '100px' }}
        />
        {item.product?.price && item.product.sale_price && (
          <span className='absolute left-0 top-0 ml-3 mt-3 rounded bg-[#8CCED7] p-1 text-xs font-bold text-white'>
            Save{' '}
            {calculateSavingsPercentage(
              item.product.price,
              item.product.sale_price
            )}
            %
          </span>
        )}
      </div>

      <div className='ml-4 flex-1'>
        <h2 className='text-lg font-bold text-gray-900'>{item.product.name}</h2>
        <div className='mt-3 flex items-center'>
          <span className='text-4xl font-extralight text-[#1A464C]'>
            {item.product?.sale_price}¢
          </span>
          <span
            className='ml-3 text-red-500'
            style={{ textDecoration: 'line-through' }}
          >
            {item.product?.price}¢
          </span>
        </div>{' '}
      </div>
    </div>
  );
};

export default GroupRowRenderItem;
