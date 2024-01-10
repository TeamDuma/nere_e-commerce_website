import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';
import React from 'react';
import { MdGroups } from 'react-icons/md';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { FaRegUserCircle } from 'react-icons/fa';

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

  console.log('Home ongoingGroupsData', groups);

  console.log('Home', products);
  return (
    <div className='mb-10 mt-10 flex flex-col justify-between rounded-md bg-[#F0F4F5] p-5 md:flex-row md:p-3'>
      <div className='box-border w-full rounded-lg bg-white p-3 md:w-1/2'>
        <div className='flex flex-col items-center justify-between gap-3 md:flex-row'>
          <div className='flex items-center gap-2 md:gap-2'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaRegUserCircle className='social-icon' />
            </a>
            <p>Ongoing Purchases near me</p>
          </div>
          <div className='md:ml-2'>
            <p>Groups</p>
            <p>{groups.length}</p>
          </div>
          <div className='md:ml-2'>
            <p>Products</p>
            <p>{products?.length}+</p>
          </div>
        </div>
      </div>

      <div className="box-border w-full rounded-lg bg-['#fff'] p-3 md:w-1/2">
        <div className='flex flex-col items-center justify-between gap-3 md:flex-row'>
          <div className='flex items-center gap-2 md:gap-2'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaRegUserCircle className='social-icon' />
            </a>
            <p>Launch a purchase</p>
          </div>
          <div className='md:ml-2'>
            <p>Delivery Time</p>
            <p>2 : 00 : 00</p>
          </div>
          <div className='md:ml-2'>
            <p>Discounts</p>
            <p>20% off</p>
          </div>
          <div className='md:ml-2'>
            <p>Delivery Fee</p>
            <p>GHS 99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingRow;
