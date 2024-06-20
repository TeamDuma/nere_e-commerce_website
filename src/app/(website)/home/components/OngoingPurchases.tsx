'use client';
import { GroupBuyCard, GroupBuyCardSkeleton } from './GroupBuyCard';
import { Group } from '@/types/group';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { CaretIcon } from '@/components/common/icons/CaretIcon';
import Link from 'next/link';

export const OngoingPurchases = () => {
  const { data, isLoading } = useGetPublicOngoingGroupsQuery();
  const groups = data?.data?.groups || [];

  if (groups.length === 0 && !isLoading) {
    return null;
  }

  return (
    <div className='relative md:h-[332px]'>
      <div className='-bottom-[100px] left-0 right-0 mx-auto w-full md:absolute md:max-w-[1261px] md:px-8 '>
        <div className='w-full bg-[#F0F4F5] pb-[28px] pl-4 pt-[29px] md:rounded-[20px] md:px-[28px] md:pb-10 md:pt-[46px]'>
          <div className='mb-3 flex justify-between md:mb-[33px]'>
            <h6 className='text-sm font-bold leading-[16.8px] text-nere-green md:text-[20px] md:leading-6'>
              Ongoing purchases near you
            </h6>
            <Link href='/products'>
              <div className='flex items-center gap-x-1 pr-4'>
                <p className='text-sm font-bold leading-[16.8px] text-nere-green md:leading-[19.2px]'>
                  View all
                </p>
                <CaretIcon />
              </div>
            </Link>
          </div>
          <div className='flex space-x-5 overflow-x-auto'>
            {isLoading &&
              Array.from({ length: 4 }).map((_, i) => (
                <GroupBuyCardSkeleton key={i} />
              ))}
            {groups.slice(0, 4).map((group: Group) => (
              <GroupBuyCard key={group.id} group={group} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
