'use client';
import { ProductCard, ProductCardSkeleton } from './ProductCard';
import { Group } from '@/types/group';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { CaretIcon } from '@/components/common/icons/CaretIcon';
import Link from 'next/link';

export const OngoingPurchases = () => {
  const { data, isLoading } = useGetPublicOngoingGroupsQuery();

  return (
    <div className='w-full rounded-[20px] bg-[#F0F4F5] px-[28px] pb-10 pt-[46px]'>
      <div className='mb-[33px] flex justify-between'>
        <h6 className='text-[20px] font-bold leading-6 text-nere-green'>
          Ongoing purchases near you
        </h6>
        <Link href='/products'>
          <div className='flex items-center gap-x-1'>
            <p className='text-sm font-bold leading-[19.2px] text-nere-green'>
              View all
            </p>
            <CaretIcon />
          </div>
        </Link>
      </div>
      <div className='grid grid-cols-4 gap-x-6'>
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        {(data?.data?.groups || []).slice(0, 4).map((item: Group) => (
          <ProductCard key={item.id} product={item.product!} />
        ))}
      </div>
    </div>
  );
};
