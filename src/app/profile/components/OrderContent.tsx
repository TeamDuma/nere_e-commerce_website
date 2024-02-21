import Title from '@/components/Title';
import OrderProgressBar from '@/components/common/OrderProgressBar';
import ProgressBar from '@/components/common/ProgressBar';
import OrderContentCard from './OrderContentCard';
import OldOrderContentCard from './OldOrderContentCard';

const OrderContent = () => {
  return (
    <div className='flex flex-col '>
      <h1 className='m-2 text-base	 font-bold text-[#1A464C]'>Orders</h1>
      <OrderContentCard />
      <OldOrderContentCard />
    </div>
  );
};

export default OrderContent;
