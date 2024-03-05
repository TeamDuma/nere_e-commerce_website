'use client';
import FeaturedProducts from '@/components/FeaturedProducts';
import PurchaseGuide from '@/components/common/PurchaseGuide';
import ViewMore from '@/components/common/ViewMore';
import { addToCart, selectShopping } from '@/lib/redux';
import { useLazyGetGroupQuery } from '@/lib/redux/services/group';
import { useLazyGetProductQuery } from '@/lib/redux/services/product';
import { GroupType } from '@/types/group';
import Link from 'next/link';
import { SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar } from 'react-icons/fa';
import Stepper from '@/components/common/PurchaseGuide';
import ProgressBar from '@/components/common/ProgressBar';
import { MdGroups, MdOutlineAccessAlarms } from 'react-icons/md';
import PostHogClient from '@/app/posthog';
import Banner from '@/components/Slider';

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const dispatch = useDispatch();
  const { slug: productSlug } = params;
  const [selectedVariant, setSelectedVariant] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);

  const { cartItems, userInfo } = useSelector(selectShopping);
  const [getProduct, { data, isLoading, isError }] = useLazyGetProductQuery();
  const product = data?.data?.product;
  const [getGroup, { data: groupData }] = useLazyGetGroupQuery();
  const group = groupData?.data?.group;

  const posthogClient = PostHogClient();

  useEffect(() => {
    getProduct(productSlug);
  }, [productSlug]);

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!product) return null;

  const calculateSavingsPercentage = (oldPrice: number, newPrice: number) => {
    const savingsPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(savingsPercentage);
  };

  const remainingToMeetMOQ = product.min_quantity
    ? Math.max(product.min_quantity - productQuantity, 0)
    : 0;
  const progressPercentage = product.min_quantity
    ? ((product.min_quantity - remainingToMeetMOQ) / product.min_quantity) * 100
    : 0;

  const increaseQuantity = () => {
    if (product.hasMinQuantity && productQuantity + 1 > product.min_quantity!) {
      alert(`Cannot exceed the minimum quantity of ${product.min_quantity}.`);
      return;
    }
    setProductQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (productQuantity - 1 < 0) {
      alert('Quantity cannot go below 0.');
      return;
    }
    setProductQuantity((prev) => prev - 1);
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
      cartQuantity: 0,
      productID: product?.id!,
      isGroupJoiner: false,
    };

    dispatch(addToCart({ item: itemToAdd }));
    toast.success('Item added to cart!', {
      autoClose: 500,
    });
  };

  const cartProduct = cartItems.find((item) => item.slug !== productSlug);

  const cartQuantity = cartProduct ? cartProduct.cartQuantity : 0;

  return (
    <>
      <div>
        <div className='px-2 py-2'>
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
                href='/products'
                className='hover:text-gray-600 hover:underline'
              >
                Products
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
                href={`/category/${product.categories?.slug}`}
                className='hover:text-gray-600 hover:underline'
              >
                {product.categories?.name}
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
              <a className='font-bold hover:text-gray-600 hover:underline'>
                {product?.name}
              </a>
            </div>
          </div>
          <div className='mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='-mx-4 flex flex-col md:flex-row'>
              <div className='px-4 md:flex-1'>
                <div x-data='{ image: 1 }' x-cloak=''>
                  <div className='mb-4 h-64 rounded-lg  md:h-80'>
                    <div
                      x-show='image === 1'
                      className='mb-4 flex h-64 items-center justify-center rounded-lg  bg-gray-100 md:h-80'
                    >
                      <img
                        className='mx-auto h-full rounded-md object-cover md:max-w-lg '
                        src={product?.plain_image}
                        alt='plain_image'
                      />
                    </div>
                  </div>

                  <div className='-mx-2 mb-4 flex'>
                    <template x-for='i in 4' />
                  </div>
                </div>
              </div>
              <div className='px-4 md:flex-1'>
                <div className='flex items-center'>
                  {' '}
                  <h3 className='text-20 text-lg font-medium uppercase text-[#1A464C]'>
                    {product?.name}
                  </h3>
                  {/* {variantsArray.length > 0 && (
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
                  )} */}
                </div>
                <div className='star-icon my-4 flex  items-center'>
                  {' '}
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className='my-4 flex items-center space-x-4'>
                  <div>
                    <div className='flex rounded-lg px-3 py-2'>
                      <span className='text-lg font-medium text-[#1A464C]	'>
                        ¢ {product?.sale_price}
                      </span>
                      <span
                        className='font-small ml-2 mt-1 text-sm text-red-500	'
                        style={{ textDecoration: 'line-through' }}
                      >
                        ¢{product?.price}
                      </span>
                    </div>
                  </div>
                  <div className='flex-6'>
                    <p className='text-xl font-semibold text-green-500'>
                      <div className='w-25 h-21 ml-3 flex items-center justify-center rounded bg-[#8CCED7]'>
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
                    </p>
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

                <Link href='/products'>
                  <h1 className=' text-hover my-2 w-1/2 cursor-pointer  text-[#F58929] underline'>
                    Continue Shopping
                  </h1>

                  {/* <h1 className='mt-5 text-[#F58929]'>Continue Shopping</h1> */}
                </Link>
                {product.min_quantity ? (
                  <h2>
                    <span style={{ color: 'orange', marginLeft: 5 }}>
                      {product.min_quantity}{' '}
                    </span>{' '}
                    people required for this group buy
                  </h2>
                ) : null}

                {/* {product.min_quantity ? (
                  <ProgressBar
                    remaining={cartQuantity}
                    total={product.min_quantity}
                  />
                ) : null} */}
                <div className='flex space-x-4 py-4'>
                  <div className='flex items-center justify-center sm:justify-start'>
                    <div className='flex flex-col items-center justify-center sm:justify-start'>
                      <div className='mt-4 sm:mt-0 sm:flex'>
                        <button
                          className='my-4 rounded bg-[#F58929] px-8 py-2 text-sm font-medium text-white hover:bg-[#D47826] focus:bg-[#D47826] focus:outline-none'
                          onClick={() => {
                            handleAddToCart();
                            console.log('Product added to cart');
                            console.log(product);
                            posthogClient.capture({
                              distinctId: userInfo?.data?.customer.email,
                              event: 'product_added_to_cart',
                              properties: { ...product },
                            });
                          }}
                        >
                          <span className='hidden sm:inline'>Add to Cart</span>
                          <span className='sm:hidden'>Launch Purchase</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Stepper />
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
    </>
  );
}
