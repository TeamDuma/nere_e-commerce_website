'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';
import { Product } from '@/types/product';
import { addToCart, selectShopping } from '@/lib/redux/slices/shopping';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google';
import PostHogClient from '@/app/posthog';
import ProductCard from './common/ProductCardMain';

const FeaturedProducts = () => {
  const { data, isLoading } = useGetActiveProductsQuery();
  const products = data?.data?.products ?? [];
  const dispatch = useDispatch();

  const featureProducts = products.filter(
    (product) => product.isFeaturedProduct
  );

  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  const { userInfo } = useSelector(selectShopping);

  const postHogClient = PostHogClient();

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

  return (
    <>
      <div>
        <div className='container'>
          {isLoading && <div>Loading...</div>}

          <div className='grid grid-cols-2 sm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 xl:gap-x-5'>
            {featureProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                sendGTMEvent={sendGTMEvent}
                sendGAEvent={sendGAEvent}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { FeaturedProducts };
