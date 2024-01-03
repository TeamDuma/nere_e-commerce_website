import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';
import React from 'react';
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#F0F4F5',
        padding: '5px',
        borderRadius: '15px',
        marginTop: '10px',
        marginBottom: '30px',
      }}
    >
      <div style={{ width: '48%', padding: '8px', boxSizing: 'border-box' }}>
        {
          <div
            className='flex 
             items-center
             justify-between
             gap-3
             md:gap-0
             '
          >
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
            <div className='ml-2'>
              <p>Groups</p>
              <p>{groups.length}</p>
            </div>
            <div className='ml-2'>
              <p>Products</p>
              <p>{products?.length}+</p>
            </div>
          </div>
        }
      </div>
      <div
        style={{
          width: '48%',
          padding: '8px',
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          borderRadius: '15px',
        }}
      >
        {
          <div
            className='flex 
             items-center
             justify-between
             gap-3
             md:gap-0
            '
          >
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
            <div className='ml-2'>
              <p>Delivery Time</p>
              <p>2 : 00 : 00</p>
            </div>
            <div className='ml-2'>
              <p>Discounts</p>
              <p>20% off</p>
            </div>
            <div className='ml-2'>
              <p> Delivery Fee</p>
              <p>GHS 99</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default OngoingRow;
