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
                    {group?.members.length} participants
                  </th>
                  <th className='border border-slate-300 md:w-1/2'> Ends in</th>
                </tr>
              </thead>
            </table>

            <h1 className='my-5 text-[#F58929]'>Continue Shopping</h1>

            {product?.hasMinQuantity && (
              <div className='progress-bar'>
                <div className='progress-text'>{`${
                  product.min_quantity
                    ? product.min_quantity - (group?.members.length ?? 0)
                    : 0
                } Left, out of ${product.min_quantity ?? 0}`}</div>
                <div className='progress-line'>
                  <div
                    className='progress'
                    style={{
                      width: `${
                        (product.min_quantity
                          ? (product.min_quantity -
                              (group?.members.length ?? 0)) /
                            (product.min_quantity ?? 1)
                          : 0) * 100
                      }%`,
                    }}
                  ></div>
                </div>
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
};
export default OngoingDetails;
