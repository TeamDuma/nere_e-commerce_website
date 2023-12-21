'use client';
import Banner from '@/components/Banner';
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

type Props = {
  params: {
    id: number;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const dispatch = useDispatch();
  const { id: productId } = params;
  const [selectedVariant, setSelectedVariant] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);

  const { cartItems } = useSelector(selectShopping);
  const [getProduct, { data, isLoading, isError }] = useLazyGetProductQuery();
  const product = data?.data?.product;
  const [getGroup, { data: groupData }] = useLazyGetGroupQuery();
  const group = groupData?.data?.group;

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
    );

    // Show toast notification
    toast.success('Item added to cart!');
  };

  const cartProduct = cartItems.find((item) => item.id === productId);

  const cartQuantity = cartProduct ? cartProduct.quantity : 0;
  console.log('cartQuantity');

  console.log('group:', group);

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

            <div className='mt-3 flex flex-col items-center md:flex-row md:items-start'>
              <span className='font-semibold text-[#1A464C]'>
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
                  Save{' '}
                  {calculateSavingsPercentage(
                    product.price,
                    product.sale_price
                  )}
                  %
                </span>
              )}
            </div>

            <table className='my-3 w-full border-collapse border border-slate-400 md:my-5'>
              <thead>
                <tr>
                  <th className='border border-slate-300 md:w-1/2'>
                    {' '}
                    0 participants
                  </th>
                  <th className='border border-slate-300 md:w-1/2'> Ends in</th>
                </tr>
              </thead>
            </table>

            <h1 className='my-5 text-[#F58929]'>Continue Shopping</h1>

            {product?.hasMinQuantity && (
              <div className='progress-bar'>
                <div className='progress-line'></div>
              </div>
            )}

            <div className='flex items-center'>
              <button
                className='my-4 rounded bg-[#F58929] px-8 py-2 text-sm font-medium text-white hover:bg-[#D47826] focus:bg-[#D47826] focus:outline-none'
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <PurchaseGuide />
        <Banner />
        <div className='mt-12 flex items-center justify-center '>
          <h1>You might like</h1>
        </div>{' '}
        <FeaturedProducts />
        <ViewMore />
      </div>
    </div>
  );
}
