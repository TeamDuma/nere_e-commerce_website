'use client';

import Link from 'next/link';
import { useLazyGetSearchProductsQuery } from '@/lib/redux/services/product';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';
import Title from '@/components/Title';
import { ProductCard } from '@/components/common/ProductCardMain';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/redux/slices/shopping';

type Props = {
  params: {
    query: string;
  };
};

const Search = ({ params }: Props) => {
  const { query } = params;

  const [responseProduct, setresponseProduct] = useState<Product[]>([]);
  const [getSearchProducts, { data, isLoading }] =
    useLazyGetSearchProductsQuery();
  const products = data?.data ?? [];
  const dispatch = useDispatch();

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
    getSearchProducts(query)
      .then(() => {})
      .catch(() => {});
  }, [query]);

  return (
    <>
      <div className='container'>
        {isLoading && <div>Loading...</div>}
        {products.length === 0 && !isLoading && (
          <div className='text-center text-5xl text-black'>
            No products found.
            <Link href='/products'>
              <h1 className='my-5 cursor-pointer text-[#F58929] underline'>
                Go to the Shop
              </h1>
            </Link>
          </div>
        )}
        <div className='px-4 md:px-4 lg:px-4'></div>

        <div className='grid grid-cols-2 sm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 xl:gap-x-5'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              GAEvent='searchProductCllicked'
              GTMEvent='searchProductCllicked'
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
