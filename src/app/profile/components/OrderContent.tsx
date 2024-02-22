import { Key, useEffect } from 'react';
import Title from '@/components/Title';
import OrderProgressBar from '@/components/common/OrderProgressBar';
import ProgressBar from '@/components/common/ProgressBar';
import OrderContentCard from './OrderContentCard';
import { useLazyGetOrdersQuery } from '@/lib/redux/services/customers';
import { Orders } from '@/types/orders';

const OrderContent = () => {
  const uid = 'fcCBb3H8GaKDcG5MBM2w1Q';

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
        {orders && (
          <div>
            {orders.map((item: Orders) => (
              <div key={item.id}>
                <OrderContentCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderContent;
