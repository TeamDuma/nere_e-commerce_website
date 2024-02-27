import Products from './components/Products';
import { unstable_noStore as noStore } from 'next/cache';

const Index = () => {
  noStore();
  return <Products />;
};

export default Index;
