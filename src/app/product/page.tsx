'use client';
import { addToCart, decreaseQuantity } from '@/lib/redux';
import { useLazyGetProductQuery } from '@/lib/redux/services/product';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

type Props = {
  params: {
    id: number;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const { id: productId } = params;
  const dispatch = useDispatch();
  const [getProduct, { data, isLoading, isError }] = useLazyGetProductQuery();
  const product = data?.data?.product;

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!product) return null;

  return (
    <div className='m-auto flex w-full max-w-[400px] flex-col justify-center'>
      <div className='mt-4 w-full'>
        <img
          src={product?.plain_image}
          alt={product?.name}
          width={400}
          height={400}
        />
        <div className='mt-2 w-full'>
          <h1 className='text-2xl font-bold text-red-500'>{product?.name}</h1>
          <p className='text-gray-500'>{product?.description}</p>
          <p className='text-gray-500'>Price: ${product?.price}</p>
          <button
            className='mt-1 bg-yellow-400 px-4 py-2 text-white'
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
        <button
          className='mt-1 bg-yellow-400 px-4 py-2 text-white'
          onClick={() => dispatch(decreaseQuantity(product.id))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
