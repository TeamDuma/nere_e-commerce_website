import Location from '@/components/common/Location';
import ProgressBar from '@/components/common/ProgressBar';
import { Group } from '@/types/group';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const GroupRowRenderModal = ({ item }: { item: Group }) => {
  const router = useRouter();

  const calculateSavingsPercentage = (oldPrice: number, newPrice: number) => {
    const savingsPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(savingsPercentage);
  };

  return (
    <div
      key={item.id}
      onClick={() => router.push(`/groups/ongoingPurchases/${item.uid}`)}
      className='flex items-center p-4'
      style={{ width: '100%', maxWidth: '400px', height: '180px' }}
    >
      <div className='relative w-1/4 flex-shrink-0'>
        <img
          src={item.product.plain_image}
          alt={item.product.name}
          className='h-32 w-full rounded-lg object-cover'
          style={{ width: '100px' }}
        />
        {item.product?.price && item.product.sale_price && (
          <span className='absolute right-0 top-0 rounded p-1 text-xs font-bold text-white'>
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
        <h2 className='text overflow-hidden overflow-ellipsis font-bold text-[#298592]'>
          {item.product.name}
        </h2>

        <div className='m-2'>
          <div className='flex items-center'>
            <span className='text-lg font-extralight text-[#F58929]'>
              {item.product?.sale_price}¢
            </span>
            <span
              className='ml-3 text-[#C1C2C2]'
              style={{ textDecoration: 'line-through' }}
            >
              {item.product?.price}¢
            </span>
          </div>
          <div className='flex items-center'>
            <Location />
            <span className='my-2 text-gray-500'>
              {(item.location as any)?.name}
            </span>
          </div>
          <div className='flex items-center'>
            {item.product.hasMinQuantity && (
              <ProgressBar
                remaining={item.members.length}
                total={item.product.min_quantity ?? 0}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupRowRenderModal;
