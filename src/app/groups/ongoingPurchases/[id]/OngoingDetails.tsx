'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectShopping,
} from '@/lib/redux';
import { useLazyGetGroupQuery } from '@/lib/redux/services/group';
import FeaturedProducts from '@/components/FeaturedProducts';
import Banner from '@/components/Banner';
import ViewMore from '@/components/common/ViewMore';
import { Product } from '@/types/product';
import { GroupType } from '@/types/group';

interface OngoingDetailsProps {
  ongoingUid: string;
}

const OngoingDetails: React.FC<OngoingDetailsProps> = ({ ongoingUid }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectShopping);

  const [getGroup, { data, isLoading, isError }] = useLazyGetGroupQuery();
  const group = data?.data?.group;
  const product = group?.product;

  useEffect(() => {
    getGroup(ongoingUid);
  }, [ongoingUid]);

  console.log('product in  OngoingDetails', data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const cartProduct = cartItems.find((item) => item.id);
  const cartQuantity = cartProduct ? cartProduct.quantity : 0;

  return (
    <div className='my-8'>
      <div className='container mx-auto px-6'>
        <div className='mb-8 md:flex md:items-center'>
          <div className='h-64 w-full bg-[#F8F8F8] md:w-1/2 lg:h-96 '>
            <img
              className='mx-auto h-full max-w-lg rounded-md object-cover '
              src={product?.plain_image}
              alt='plain_image'
            />
          </div>
          <div className='mx-auto mt-5 w-full max-w-lg md:ml-8 md:mt-0 md:w-1/2'>
            <div className='flex items-center'>
              {' '}
              <h3 className='text-lg uppercase text-gray-700'>
                {product?.name}
              </h3>
            </div>

            <div className='mt-3 flex items-center'>
              <span className='text-4xl font-extralight text-[#1A464C]'>
                {product?.sale_price}¢
              </span>
              <span
                className='ml-3 text-red-500'
                style={{ textDecoration: 'line-through' }}
              >
                {product?.price}¢
              </span>
              {product?.price && product.sale_price && (
                <span className='ml-3  rounded bg-[#8CCED7] text-white '>
                  Save
                </span>
              )}
            </div>

            <table
              className='... border-collapse border border-slate-400'
              style={{ width: '100%' }}
            >
              <thead>
                <tr>
                  <th
                    className='... border border-slate-300'
                    style={{ width: '50%' }}
                  >
                    participants
                  </th>
                  <th
                    className='... border border-slate-300'
                    style={{ width: '50%' }}
                  >
                    Ends in
                  </th>
                </tr>
              </thead>
            </table>

            <h1 className='my-5 text-[#F58929]'>Continue Shopping</h1>
            <div className='flex items-center'>
              <button
                className='ml-4 rounded bg-[#F58929] px-8 py-2 text-sm font-medium text-white hover:bg-[#D47826] focus:bg-[#D47826] focus:outline-none'
                onClick={() =>
                  dispatch(
                    addToCart({
                      item: {
                        ...product!,
                        cartQuantity: 0,
                        productID: product?.id!,
                        isGroupJoiner: true,
                        groupID: group?.id!,
                        locationID: undefined,
                        type: GroupType.PUBLIC,
                      },
                    })
                  )
                }
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
        <Banner />

        <FeaturedProducts />
        <ViewMore />
      </div>
    </div>
  );
};
export default OngoingDetails;
