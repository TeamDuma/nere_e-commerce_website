import { useRouter } from 'next/navigation';

const GroupRowRenderItem = ({ item }: { item: any }) => {
  const router = useRouter();

  return (
    <div
      key={item.id}
      onClick={() => router.push(`/groups/ongoingPurchases/${item.uid}`)}
      className='flex items-center rounded-lg bg-white p-4 shadow-md'
    >
      <div className='relative w-1/3 flex-shrink-0'>
        <img
          src={item.product.plain_image}
          alt={item.name}
          className='h-32 w-full rounded-lg object-cover'
          style={{ width: '100px' }} 
        />
        <div className='absolute right-0 top-0 bg-orange-500 p-1 font-bold text-white'>
          Save %{' '}
        </div>
      </div>
      <div className='ml-4 flex-1'>
        <h2 className='text-lg font-bold text-gray-900'>{item.product.name}</h2>

        <h2 className='text-lg font-bold text-gray-900'>{item.product.id}</h2>
        <p className='mt-1 text-xs text-gray-700'>{item.size}</p>
      </div>
    </div>
  );
};

export default GroupRowRenderItem;
