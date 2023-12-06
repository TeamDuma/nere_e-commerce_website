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

interface OngoingDetailsProps {
  ongoingUid: string;
}

const OngoingDetails: React.FC<OngoingDetailsProps> = ({ ongoingUid }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectShopping);

  const [getGroup, { data, isLoading, isError }] = useLazyGetGroupQuery();
  const product = data?.data?.group.product;

  useEffect(() => {
    getGroup(ongoingUid);
  }, [ongoingUid]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const cartProduct = cartItems.find((item) => item.id === product!.id);
  const cartQuantity = cartProduct ? cartProduct.quantity : 0;

  return (
    <div className='my-8'>
      <div className='container mx-auto px-6'>
        <div className='md:flex md:items-center'>
          <div className='h-64 w-full md:w-1/2 lg:h-96'>
            <img
              className='mx-auto h-full max-w-lg rounded-md object-cover '
              src={product?.plain_image}
              alt='plain_image'
            />
          </div>
          <div className='mx-auto mt-5 w-full max-w-lg md:ml-8 md:mt-0 md:w-1/2'>
            <h3 className='text-lg uppercase text-gray-700'>{product!.name}</h3>
            <span className='mt-3 text-gray-500'>{product!.sale_price}¢</span>
            <span
              className='ml-5 mt-3 text-gray-500'
              style={{ textDecoration: 'line-through' }}
            >
              {product!.price}¢
            </span>

            <hr className='my-3' />
            <div className='mt-2'>
              <label className='text-sm text-gray-700' htmlFor='count'>
                Count:
              </label>
              <div className='mt-1 flex items-center'>
                <button
                  className='text-gray-500 focus:text-gray-600 focus:outline-none'
                  onClick={() => dispatch(decreaseQuantity(product!.id))}
                >
                  <svg
                    className='h-5 w-5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </button>
                <span className='mx-2 text-lg text-gray-700'>
                  {cartQuantity}
                </span>

                <button
                  className='text-gray-500 focus:text-gray-600 focus:outline-none'
                  onClick={() => dispatch(increaseQuantity(product!.id))}
                >
                  <svg
                    className='h-5 w-5'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </button>
              </div>
            </div>
            {product!.variants !== null && (
              <div className='mt-3'>
                <label className='text-sm text-gray-700' htmlFor='count'>
                  Variants:
                </label>
                <div className='mt-1 flex items-center'>
                  <button className='mr-2 h-5 w-5 rounded-full border-2 border-blue-200 bg-blue-600 focus:outline-none' />
                  <button className='mr-2 h-5 w-5 rounded-full bg-teal-600 focus:outline-none' />
                  <button className='mr-2 h-5 w-5 rounded-full bg-pink-600 focus:outline-none' />
                </div>
              </div>
            )}
            <div className='mt-6 flex items-center'>
              <button
                className='rounded bg-indigo-600 px-8 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none'
                onClick={() =>
                  dispatch(
                    // addToCart({
                    //   cartQuantity: data.total_quantity,
                    //   productID: data.product.id,
                    //   isGroupJoiner: true,
                    //   groupID: data.id,
                    //   type: "Public",
                    // })
                    addToCart(product!)
                  )
                }
              >
                Order Now
              </button>
              <button className='mx-2 rounded-md border p-2 text-gray-600 hover:bg-gray-200 focus:outline-none'>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OngoingDetails;
