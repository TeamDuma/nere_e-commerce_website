import { Key, useEffect, useState } from 'react';
import Title from '@/components/Title';
import OrderProgressBar from '@/components/common/OrderProgressBar';
import ProgressBar from '@/components/common/ProgressBar';
import OrderContentCard from './OrderContentCard';
import { useLazyGetOrdersQuery } from '@/lib/redux/services/customers';
import { Orders } from '@/types/orders';
import { useSelector } from 'react-redux';
import { selectShopping } from '@/lib/redux/slices/shopping';
import Link from 'next/link';

const OrderContent = () => {
  const { userInfo } = useSelector(selectShopping);

  const uid = userInfo?.data?.customer?.uid || '';

  // const uid = 'fcCBb3H8GaKDcG5MBM2w1Q';

  const [getOrders, { data, isLoading, isError }] = useLazyGetOrdersQuery();
  const orders = data?.data;

  useEffect(() => {
    getOrders(uid);
  }, [uid, getOrders]);

  return (
    <div className='flex flex-col'>
      <h1 className='m-2 text-base font-bold text-[#1A464C]'>Orders</h1>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p style={{ color: 'red' }}>Error</p>}
        {orders && orders.length > 0 ? (
          <div>
            {orders.map((item: Orders) => (
              <div key={item.id}>
                <OrderContentCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          // <div className='flex flex-col items-center justify-center'>

          //   <p className='text-6xl font-semibold'>No Orders Yet!</p>
          //   <p
          //     onClick={() => window.location.replace('/products')}
          //     className='text-[#298592] cursor-pointer underline-offset-2 underline hover:text-[#1A464C] hover:underline-offset-2 hover:underline mt-4'
          //   >Start Shopping!</p>
          // </div>

          <div className='text-center text-5xl text-black font-semibold'>
            No Orders Yet!
            <Link href='/products'>
              <h1 className='my-5 cursor-pointer text-[#F58929] mt-4 font-normal text-xl hover:text-[#F58929] hover:underline hover:underline-offset-2'>
                Go to the Shop
              </h1>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderContent;
