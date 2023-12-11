'use client';
import Banner from '@/components/Banner';
import FeaturedProducts from '@/components/FeaturedProducts';
import ViewMore from '@/components/common/ViewMore';
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectShopping,
} from '@/lib/redux';
import { useLazyGetProductQuery } from '@/lib/redux/services/product';
import Link from 'next/link';
import { SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  params: {
    id: number;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const dispatch = useDispatch();
  const { id: productId } = params;
  const [quantity, setQuantity] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');

  const { cartItems } = useSelector(selectShopping);
  const [getProduct, { data, isLoading, isError }] = useLazyGetProductQuery();
  const product = data?.data?.product;

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!product) return null;

  const calculateSavingsPercentage = (oldPrice: number, newPrice: number) => {
    const savingsPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(savingsPercentage);
  };

  const remainingToMeetMOQ = product.min_quantity
    ? Math.max(product.min_quantity - quantity, 0)
    : 0;
  const progressPercentage = product.min_quantity
    ? ((product.min_quantity - remainingToMeetMOQ) / product.min_quantity) * 100
    : 0;

  const increaseQuantity = () => {
    if (product.hasMinQuantity && quantity + 1 > product.min_quantity!) {
      alert(`Cannot exceed the minimum quantity of ${product.min_quantity}.`);
      return;
    }
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity - 1 < 0) {
      alert('Quantity cannot go below 0.');
      return;
    }
    setQuantity(quantity - 1);
  };

  const variantsArray = product?.variants
    ? product.variants.split(',').map((variant) => variant.trim())
    : [];

  const handleVariantChange = (variantName: string) => {
    setSelectedVariant(variantName);
  };

  const cartProduct = cartItems.find((item) => item.id === productId);
  const cartQuantity = cartProduct ? cartProduct.quantity : 0;

  return (
    <div className='my-8'>
      <div className='container mx-auto px-6'>
        <div className='mb-8 md:flex md:items-center'>
          <div className='h-64 w-full bg-[#F8F8F8] md:w-1/2 lg:h-96 '>
            <img
              className='mx-auto h-full max-w-lg rounded-md object-cover '
              src={product.plain_image}
              alt='plain_image'
            />
          </div>
          <div className='mx-auto mt-5 w-full max-w-lg md:ml-8 md:mt-0 md:w-1/2'>
            <div className='flex items-center'>
              {' '}
              {/* Use flex to place items in the same row */}
              <h3 className='text-lg uppercase text-gray-700'>
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

            {/* <span className='mt-1 text-gray-500'>Rating: {product.rating}</span> */}

            <div className='mt-3 flex items-center'>
              <span className='text-4xl font-extralight text-[#1A464C]'>
                {product.sale_price}¢
              </span>
              <span
                className='ml-3 text-red-500'
                style={{ textDecoration: 'line-through' }}
              >
                {product.price}¢
              </span>
              {product.price && product.sale_price && (
                <span className='ml-3  rounded bg-[#8CCED7] text-white '>
                  Save{' '}
                  {calculateSavingsPercentage(
                    product.price,
                    product.sale_price
                  )}
                  %
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

            {product.min_quantity && (
              <div className='mt-3 text-gray-700'>
                {remainingToMeetMOQ} purchase required on this group
              </div>
            )}

            {product.min_quantity && (
              <div className='w-256 my-4 h-1 overflow-hidden rounded-full bg-gray-200'>
                <div
                  className='h-full bg-[#F58929]'
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            )}

            <h1 className='my-5 text-[#F58929]'>Continue Shopping</h1>
            <div className='flex items-center'>
              <div className='flex items-center border border-2'>
                <span
                  className='cursor-pointer rounded-l px-3.5 py-1 duration-100 hover:bg-[#F58929] hover:text-blue-50'
                  onClick={decreaseQuantity}
                >
                  {' '}
                  -{' '}
                </span>
                <input
                  className='h-8 w-8 bg-white text-center text-xs outline-none'
                  type='number'
                  value={quantity}
                  min={1}
                />
                <span
                  className='cursor-pointer rounded-r px-3 py-1 duration-100 hover:bg-[#F58929] hover:text-blue-50'
                  onClick={increaseQuantity}
                >
                  {' '}
                  +{' '}
                </span>
              </div>

              {/* "Add to Cart" button */}
              <button
                className='ml-4 rounded bg-[#F58929] px-8 py-2 text-sm font-medium text-white hover:bg-[#D47826] focus:bg-[#D47826] focus:outline-none'
                onClick={() => dispatch(addToCart(product))}
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
}
