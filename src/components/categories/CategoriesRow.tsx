'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useLazyGetCategoryProductQuery } from '@/lib/redux/services/product';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { addToCart } from '@/lib/redux/slices/shopping';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '@/types/product';
import { toast } from 'react-toastify';
import { ProductCard } from '../common/ProductCardMain';

type Props = {
  params: {
    slug: string;
  };
};

const CategoriesRow = ({ params }: Props) => {
  const dispatch = useDispatch();

  const { slug } = params;

  const [getCategoryProduct, { data, isLoading }] =
    useLazyGetCategoryProductQuery();

  const products = data?.data?.products ?? [];
  const categoryNames = products
    .map((product) => product.categories?.name)
    .filter((name) => typeof name === 'string');
  const subTitleText = categoryNames.length > 0 ? categoryNames[0]! : '';
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  const product = products.find(
    (product) =>
      product.categories && typeof product.categories.name === 'string'
  );

  console.log('productWithCategory', product);

  useEffect(() => {
    getCategoryProduct(slug)
      .then(() => { })
      .catch(() => { });
  }, [slug]);

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
        {products.length > 0 ? (
          <div>
            <div className='container'>
              {isLoading && <div>Loading...</div>}
              <Link href={`/category/${slug}`}>
                <div className='flex items-center'>
                  <SubTitle text={subTitleText} />
                  <FaLongArrowAltRight
                    style={{ marginLeft: 10, color: '#298592' }}
                  />
                </div>
              </Link>
              <div className='overflow-x-auto'>
                <div className='flex flex-nowrap justify-start'>
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
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CategoriesRow;
