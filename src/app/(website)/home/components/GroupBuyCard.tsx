'use client';
import React from 'react';
import Link from 'next/link';
import { ProgressBarNew } from '@/components/common/ProgressBar';
import { GroupBuyIcon } from '@/components/common/icons/GroupBuyIcon';
import Image from 'next/image';
import { LocationIcon } from '@/components/common/icons/LocationIcon';
import { TimerIcon } from '@/components/common/icons/TimerIcon';
import { useTimer } from 'react-timer-hook';
import { DAYS_ENUM } from '@/constants/date';
import { Group } from '@/types/group';
import { findNextDay } from '@/lib/date';

interface IGroupBuyCard {
  group: Group;
}

export const GroupBuyCard = ({ group }: IGroupBuyCard) => {
  const { days, seconds, minutes, hours } = useTimer({
    expiryTimestamp: findNextDay(DAYS_ENUM.FRIDAY),
  });
  return (
    <div className='w-[268px] shrink-0 rounded-lg bg-white p-2 pb-[14px]'>
      <div className='relative mb-3 h-[145px] overflow-hidden rounded-lg bg-[#F8F8F8] pt-3 hover:bg-gray-100'>
        <GroupBuyIcon className='absolute -top-[1px] left-0' />
        <Link href={`/groups/ongoingPurchases/${group.id}`}>
          <Image
            src={group.product?.plain_image!}
            alt={group.product?.name!}
            className='mx-auto rounded-lg object-contain'
            style={{ width: '60px', height: '105px' }}
            width={60}
            height={105}
          />
        </Link>
      </div>
      <div>
        <h3 className='mb-1 truncate text-sm font-bold text-[#3E3E3E]'>
          {group.product?.name}
        </h3>
        <div className='mb-2 flex items-center gap-x-5'>
          <div className='text-sm font-bold text-[#F58929]'>{`GH¢  ${group.product?.sale_price}`}</div>
          <div className='text-sm font-normal text-[#3E3E3E] line-through'>
            {`GH¢  ${group.product?.price}`}
          </div>
        </div>
        <ProgressBarNew
          remaining={group.total_quantity}
          total={group.product?.min_quantity!}
        />
        <div className='mt-3 flex w-full items-center justify-between'>
          <div className='flex items-center gap-x-1'>
            <LocationIcon />
            <p className='max-w-[100px] truncate text-sm text-[#3E3E3E]'>
              {group.location?.name || ''}
            </p>
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
  );
};

export const GroupBuyCardSkeleton = () => (
  <div className='w-[268px] shrink-0 animate-pulse rounded-lg bg-white p-2 pb-[14px]'>
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
