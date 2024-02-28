'use client';
import { useEffect, useState } from 'react';
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
import UserIcon from '@/components/common/User';
import ProgressBar from '@/components/common/ProgressBar';
import PurchaseGuide from '@/components/common/PurchaseGuide';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { MdOutlineAccessAlarms } from 'react-icons/md';
import LoadingSpinner from '../../components/LoadingSpinner';
import PostHogClient from '@/app/posthog';

interface OngoingDetailsProps {
  ongoingUid: string;
}

const OngoingDetails: React.FC<OngoingDetailsProps> = ({ ongoingUid }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectShopping);
  const [selectedVariant, setSelectedVariant] = useState('');

  const [getGroup, { data, isLoading, isError }] = useLazyGetGroupQuery();
  const group = data?.data?.group;
  const product = group?.product;
  const totalQuantity = group?.total_quantity || 0;

  const { userInfo } = useSelector(selectShopping);

  const posthogClient = PostHogClient();

  useEffect(() => {
    getGroup(ongoingUid);
  }, [ongoingUid]);

  if (isLoading) {
    return (
      <div>
        {' '}
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }
  const calculateSavingsPercentage = (oldPrice: number, newPrice: number) => {
    const savingsPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(savingsPercentage);
  };

  const variantsArray = product?.variants
    ? product.variants.split(',').map((variant) => variant.trim())
    : [];

  const handleVariantChange = (variantName: string) => {
    setSelectedVariant(variantName);
  };

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product!,
      cartQuantity: 1,
      productID: product?.id!,
      isGroupJoiner: true,
      groupID: group?.id!,
      locationID: undefined,
      type: GroupType.PUBLIC,
      totalQuantity: group?.total_quantity!,
      groupCode: group?.join_code,
    };

    dispatch(addToCart({ item: itemToAdd }));

    toast.success('Item added to cart!', {
      autoClose: 500,
    });

    posthogClient.capture({
      distinctId: userInfo?.data?.customer.email,
      event: `group_product_added_to_cart`,
      properties: {
        productID: product?.id,
        productName: product?.name,
        groupID: group?.id,
        groupCode: group?.join_code,
      },
    });
  };

  const cartProduct = cartItems.find((item) => {
    return item.groupID
      ? item.id === product?.id && item.groupID === group?.id
      : item.id === product?.id;
  });

  const cartQuantity = cartProduct?.cartQuantity ?? 0;
  const remaining = cartQuantity + (group?.total_quantity ?? 0);

  return (
    <div className='my-8'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='my-2 flex flex-wrap items-center text-sm text-gray-400'>
            <a href='/' className='hover:text-gray-600 hover:underline'>
              Home
            </a>
            <span>
              <svg
                className='h-5 w-5 leading-none text-gray-300'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </span>
            <a
              href='/groups/ongoingPurchases'
              className='hover:text-gray-600 hover:underline'
            >
              Groups
            </a>
            <span>
              <svg
                className='h-5 w-5 leading-none text-gray-300'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </span>

            <a
              href={`/groups/ongoingPurchases/${group?.uid}`}
              className='font-bold hover:text-gray-600 hover:underline'
            >
              {group?.join_code} - {group?.product?.name}
            </a>

            {/* <span>
              <svg
                className='h-5 w-5 leading-none text-gray-300'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </span>
            <a className='font-bold hover:text-gray-600 hover:underline'>
              {product?.name}
            </a> */}
          </div>
        </div>
        <div className='mb-8 md:flex md:items-center'>
          <div className='h-387 w-387 bg-gray-100 md:w-1/2 lg:h-96 '>
            <img
              className='mx-auto h-full rounded-md object-cover md:max-w-lg '
              src={product?.plain_image}
              alt='plain_image'
            />
          </div>
          <div className='mx-auto mt-5 w-full max-w-lg md:ml-8 md:mt-0 md:w-1/2'>
            <div className='flex items-center'>
              {' '}
              <h3 className='text-20 text-lg font-medium uppercase text-[#1A464C]'>
                {product?.name}
              </h3>
              {variantsArray.length > 0 && (
                <div className='ml-12'>
                  <div className='mt-1'>
                    <select
                      id='variant'
                      value={selectedVariant}
                      onChange={(e) => handleVariantChange(e.target.value)}
                      className='w-full rounded border border-gray-300 p-2'
                    >
                      <option value='' disabled>
                        Select a variant
                      </option>
                      {variantsArray.map((variant, index) => (
                        <option key={index} value={variant}>
                          {variant}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div className='star-icon my-4 flex  items-center'>
              {' '}
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className='mt-3 flex items-center md:flex-row md:items-start'>
              <span className='text-lg font-medium text-[#1A464C]	'>
                ¢ {product?.sale_price}
              </span>
              <span
                className='ml-3 text-base font-medium text-red-500'
                style={{ textDecoration: 'line-through' }}
              >
                ¢{product?.price}
              </span>
              <div className='w-85 h-21 ml-3 flex items-center justify-center rounded bg-[#8CCED7]'>
                {product?.price && product.sale_price && (
                  <span className=' text-sm text-white '>
                    Save{' '}
                    {calculateSavingsPercentage(
                      product.price,
                      product.sale_price
                    )}
                    %
                  </span>
                )}
              </div>
            </div>
            <div className='grid grid-cols-2 divide-x divide-[#D9D9D9]'>
              <div className='flex items-center border-b border-t border-[#D9D9D9] p-2'>
                <MdGroups className='mr-2 text-[#298592]' />
                {group?.members?.length} participants
              </div>
              <div className='flex items-center border-b border-t border-blue-200 p-2'>
                <MdOutlineAccessAlarms className='mr-2 text-[#298592]' />
                <span>Ends in</span>
                <span
                  className='text-[#F58929]'
                  style={{ paddingLeft: '0.5rem' }}
                >
                  00:00:00
                </span>
              </div>
            </div>
            {/* <div className='grid grid-cols-2 divide-x divide-[#D9D9D9]'>
              <div className='flex items-center border-b border-t border-[#D9D9D9] p-2'>
                <MdGroups className='mr-2 text-[#298592]' />
                {group?.members?.length} participants
              </div>
              <div className='flex items-center border-b border-t border-[#D9D9D9] p-2'>
                <MdOutlineAccessAlarms className='mr-2 text-[#298592]' />
                <span>Ends in</span>
                <span
                  className='text-[#F58929]'
                  style={{ paddingLeft: '0.5rem' }}
                >
                  00:00:00
                </span>
              </div>
            </div> */}

            <Link href='/products'>
              <h1 className=' text-hover my-2 w-1/2 cursor-pointer  text-[#F58929] underline'>
                Continue Shopping
              </h1>
            </Link>
            {product?.hasMinQuantity ? (
              <h2>
                <span>
                  <span style={{ color: 'orange' }}>
                    {' '}
                    {product?.min_quantity && group?.total_quantity
                      ? product.min_quantity - group.total_quantity
                      : ''}{' '}
                  </span>
                  <span> remaining in this group</span>
                </span>
              </h2>
            ) : null}

            {product?.hasMinQuantity ? (
              <>
                {/* <ProgressBar
                  remaining={remaining ?? 0}
                  total={product.min_quantity ?? 0}
                /> */}

                <div className='flex items-center'>
                  <button
                    className={`my-4 rounded bg-[#F58929] px-8 py-2 text-sm font-medium text-white hover:bg-[#D47826] focus:bg-[#D47826] focus:outline-none ${
                      remaining >= (product.min_quantity ?? 0) ? 'disabled' : ''
                    }`}
                    onClick={handleAddToCart}
                    disabled={remaining >= (product.min_quantity ?? 0)}
                  >
                    Add to Cart
                  </button>
                </div>
              </>
            ) : (
              <div className='flex items-center'>
                <button
                  className={`my-4 rounded bg-[#F58929] px-8 py-2 text-sm font-medium text-white hover:bg-[#D47826] focus:bg-[#D47826] focus:outline-none`}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
        <PurchaseGuide />
        <div className='hidden sm:block'>
          <Banner />
          <div className='mt-12 flex items-center justify-center text-3xl font-bold		'>
            <h1>You might like</h1>
          </div>{' '}
          <FeaturedProducts />
          <ViewMore />
        </div>
      </div>
    </div>
  );
};
export default OngoingDetails;
