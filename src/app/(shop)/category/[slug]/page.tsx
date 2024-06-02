'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Title from '@/components/Title';
import ProductGridLoader from '@/components/common/ProductGridLoader';
import { useLazyGetCategoryProductQuery } from '@/lib/redux/services/product';
import { addToCart } from '@/lib/redux/slices/shopping';
import { Product } from '@/types/product';
import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ProductCard } from '@/components/common/ProductCardMain';

type Props = {
  params: {
    slug: string;
  };
};

const Category = ({ params }: Props) => {
  const { slug } = params;

  const [getCategoryProduct, { data, isLoading }] =
    useLazyGetCategoryProductQuery();
  const dispatch = useDispatch();

  const products = data?.data?.products ?? [];

  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  const product = products.find(
    (product) =>
      product.categories && typeof product.categories.name === 'string'
  );
  const handleAddToCart = (product: Product) => {
    const itemToAdd = {
      ...product,
      cartQuantity: 0,
      productID: product.id,
      isGroupJoiner: false,
    };

    dispatch(addToCart({ item: itemToAdd }));
  };

  useEffect(() => {
    getCategoryProduct(slug)
      .then(() => { })
      .catch(() => { });
  }, [slug]);

  if (isLoading) {
    return (
      <div>
        {' '}
        <ProductGridLoader />
      </div>
    );
  }

  return (
    <>
      <div>
        <div className='container'>
          {isLoading && <div>Loading...</div>}
          <div className='px-4 md:px-4 lg:px-4'>
            <Title text={products[0]?.categories?.name || ''} />
          </div>
          {products.length === 0 ? (
            <div className='text-center text-5xl text-black'>
              This category has no items.
              <Link href='/products'>
                <h1 className='my-5 cursor-pointer text-[#F58929] underline'>
                  Continue Shopping
                </h1>
              </Link>
            </div>
          ) : (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-5 '>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  GAEvent='categoryProductClicked'
                  GTMEvent='categoryProductClicked'
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
