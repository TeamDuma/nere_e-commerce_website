'use client';
import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { ProgressBarNew } from '@/components/common/ProgressBar';
import { GroupBuyIcon } from '@/components/common/icons/GroupBuyIcon';
import Image from 'next/image';
import { LocationIcon } from '@/components/common/icons/LocationIcon';
import { TimerIcon } from '@/components/common/icons/TimerIcon';
import { useTimer } from 'react-timer-hook';
import { DAY } from '@/constants/date';

interface IProductCard {
  product: Product;
}

export const ProductCard = ({ product }: IProductCard) => {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: new Date(Date.now() + 2 * DAY),
  });

  return (
    <Link href={`/product/${product.slug}`} key={product.id}>
      <div className='rounded-lg bg-white p-2 pb-[14px]'>
        <div className='relative mb-3 h-[145px] bg-[#F8F8F8] pt-3'>
          <GroupBuyIcon className='absolute left-0 top-0' />
          <Image
            src={product?.plain_image}
            alt={product?.name}
            className='mx-auto rounded-lg object-contain'
            style={{ width: '60px', height: '105px' }}
            width={60}
            height={105}
          />
        </div>
        <div>
          <h3 className='mb-1 truncate text-sm font-bold text-[#3E3E3E]'>
            {product?.name}
          </h3>
          <div className='mb-2 flex items-center gap-x-5'>
            <div className='text-sm font-bold text-[#F58929]'>{`GH¢  ${product.sale_price}`}</div>
            <div className='text-sm font-normal text-[#3E3E3E] line-through'>
              {`GH¢  ${product.price}`}
            </div>
          </div>
          <ProgressBarNew remaining={5} total={12} unit={'can'} />
          <div className='mt-3 flex w-full items-center justify-between'>
            <div className='flex items-center gap-x-1'>
              <LocationIcon />
              <p className='text-sm text-[#3E3E3E]'>Oyarifa</p>
            </div>
            <div className='flex items-center gap-x-1'>
              <TimerIcon />
              <p className='text-sm'>
                <span className=' text-[#3E3E3E]'>Ends in</span>
                <span className='inline-block w-[61px] text-center text-[#F58929]'>
                  {hours.toString().padStart(2, '0')}:
                  {minutes.toString().padStart(2, '0')}:
                  {seconds.toString().padStart(2, '0')}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ProductCardSkeleton = () => (
  <div className='animate-pulse rounded-lg bg-white p-2 pb-[14px]'>
    <div className='relative mb-3 h-[145px] bg-[#F8F8F8] pt-3'>
      <div className='absolute left-0 top-0 h-4 w-14 rounded bg-gray-200'></div>
      <div className='mx-auto h-[105px] w-[60px] rounded-lg bg-gray-200'></div>
    </div>
    <div>
      <div className='mb-1 h-4 w-full rounded bg-gray-200'></div>
      <div className='mb-2 flex items-center gap-x-5'>
        <div className='h-4 w-20 rounded bg-gray-200'></div>
      </div>
      <div className='h-2 w-full rounded bg-gray-200'></div>
      <div className='mt-3 flex w-full items-center justify-between'>
        <div className='flex items-center gap-x-1'>
          <div className='h-4 w-4 rounded bg-gray-200'></div>
          <div className='h-4 w-20 rounded bg-gray-200'></div>
        </div>
        <div className='flex items-center gap-x-1'>
          <div className='h-4 w-4 rounded bg-gray-200'></div>
          <div className='h-4 w-20 rounded bg-gray-200'></div>
        </div>
      </div>
    </div>
  </div>
);
