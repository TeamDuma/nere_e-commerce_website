import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';
import React from 'react';
import { MdGroups } from 'react-icons/md';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { FaRegUserCircle } from 'react-icons/fa';
import Link from 'next/link';

interface OngoingRowProps {}

const OngoingRow: React.FC<OngoingRowProps> = ({}) => {
  const {
    data: ongoingGroupsData,
    isLoading: ongoingGroupsLoading,
    error: ongoingGroupsError,
  } = useGetPublicOngoingGroupsQuery();
  const { data: productsData, isLoading: productsLoading } =
    useGetActiveProductsQuery();
  const products = productsData?.data?.products ?? [];
  const groups = ongoingGroupsData?.data?.groups ?? [];

  return (
    <div className='mb-4 flex flex-col justify-between rounded-xl	 bg-[#F0F4F5] p-2 md:flex-row md:p-3'>
      <div className="box-border hidden w-full rounded-xl	 bg-['#b4c8ca'] p-3 md:block md:w-1/2">
        <div className='flex flex-col items-center justify-between gap-1 md:flex-row'>
          <Link href={'/ongoingPage'}>
            <div className='flex items-center md:gap-2'>
              <MdGroups className='social-icon' />
              <p className='p-text'>Ongoing Purchases near me</p>
            </div>
          </Link>
          <div className='hidden md:ml-2  md:hidden lg:ml-2 lg:flex lg:items-center'>
            <div className='md:ml-2'>
              <p className='p-text2'>Products</p>
              <p className='p-text3'>{products?.length}+</p>
            </div>
          </div>
          <div className='hidden md:ml-2  md:hidden lg:ml-2 lg:flex lg:items-center'>
            <div className='md:ml-2'>
              <p className='p-text2'>Products</p>
              <p className='p-text3'>{products?.length}+</p>
            </div>
          </div>
          {/* <div className='md:ml-2'>
          <p className='p-text2'>Groups</p>
          <p className='p-text3'>{groups.length}</p>
        </div> */}
        </div>
      </div>

      <div className='box-border hidden w-full rounded-lg bg-white p-3 md:block md:w-1/2'>
        <div className='flex flex-col items-center justify-between  md:flex-row'>
          <Link href={'/products'}>
            <div className='flex items-center gap-2 md:gap-2'>
              <HiOutlineRocketLaunch className='social-icon' />
              <p className='p-text'>Launch a purchase</p>
            </div>
          </Link>
          <div className='hidden md:ml-2  md:hidden lg:ml-2 lg:flex lg:items-center'>
            <div className='md:ml-2'>
              <p className='p-text2'>Delivery Time</p>
              <p className='p-text4'>2 : 00 : 00</p>
            </div>
          </div>
          <div className='hidden md:ml-2  md:hidden lg:ml-2 lg:flex lg:items-center'>
            <div className='md:ml-2'>
              <p className='p-text2'>Discounts</p>
              <p className='p-text4'>20% off</p>
            </div>
          </div>
          <div className='hidden md:ml-2  md:hidden lg:ml-2 lg:flex lg:items-center'>
            <div className='md:ml-2'>
              <p className='p-text2'>Delivery Fee</p>
              <p className='p-text4'>GHS 99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingRow;
