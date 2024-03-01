import Location from '@/components/common/Location';
import ProgressBar from '@/components/common/ProgressBar';
import { Group } from '@/types/group';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const GroupRowRenderItem = ({ item }: { item: Group }) => {
  const router = useRouter();

  const calculateSavingsPercentage = (oldPrice: number, newPrice: number) => {
    const savingsPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(savingsPercentage);
  };

  console.log('item', item);

  return (
    <div
      key={item.id}
      onClick={() => router.push(`/groups/ongoingPurchases/${item.uid}`)}
      className='m-4 flex items-center  rounded-lg bg-gray-100  shadow-md'
      style={{ width: '350px', height: '160px' }}
    >
      <div className='relative w-1/4 flex-shrink-0   '>
        <img
          src={item.product?.plain_image}
          alt={item.product?.name}
          className='h-[83px] w-[83px] rounded-lg'
          style={{ width: '60px', height: '105px' }}
        />
        {item.product?.price && item.product.sale_price && (
          <span className='absolute right-0 top-0 rounded bg-[#F58929] p-1 text-xs text-white '>
            Save ¢
            <span className='ml-1'>{`${Math.round(
              item.product.price - item.product.sale_price
            )}`}</span>
            {/* {(
              item.product.price,
              item.product.sale_price
            )} 
             ¢ */}
          </span>
        )}
      </div>

      <div className='ml-4 mt-2 flex-1'>
        <h2 className='text overflow-hidden overflow-ellipsis font-bold text-[#298592]'>
          {item?.product?.name}
        </h2>
        <div className='m-2'>
          <div className='flex items-center'>
            <span className='text-xs  text-[#F58929]'>GH¢</span>
            <span className='ml-1  font-bold text-[#F58929]'>
              {item.product?.sale_price}
            </span>

            <span
              className='ml-3 text-xs font-bold text-[#C1C2C2]'
              style={{ textDecoration: 'line-through' }}
            >
              {item.product?.price}GH¢
            </span>
          </div>
          <div className='flex items-center'>
            <Location />
            <span className='my-2 text-xs text-gray-500'>
              {(item.location as any)?.name}
            </span>
          </div>
          <div className='flex items-center'>
            {item?.product?.hasMinQuantity && (
              <ProgressBar
                remaining={item.total_quantity}
                total={item.product.min_quantity ?? 0}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupRowRenderItem;
