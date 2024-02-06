'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useLazyGetSearchProductsQuery } from '@/lib/redux/services/product';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/product';

type Props = {
  params: {
    query: string;
  };
};

const Search = ({ params }: Props) => {
  const [responseProduct, setresponseProduct] = useState<Product[]>([]);

  const { query } = params;
  console.log('query', query);

  const [getSearchProducts, { data, isLoading }] =
    useLazyGetSearchProductsQuery();

  const products = data?.data ?? [];

  useEffect(() => {
    getSearchProducts(query)
      .then(() => {})
      .catch(() => {});
  }, [query]);

  console.log('products', products);
  console.log('typeproducts', Array.isArray(products));

  return (
    <>
      <div>
        <div className='container'>
          {isLoading && <div>Loading...</div>}
          <div className='lg:grid-col-3 grid grid-cols-2  gap-10 sm:grid-cols-2  xl:grid-cols-4 xl:gap-x-20 xl:gap-y-10'>
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product?.id}>
                <div key={product?.id}>
                  <>
                    <div className='px-4 md:px-4 lg:px-4'>
                      <div className='relative rounded-md bg-gray-50 dark:bg-gray-800'>
                        <div className='h-15 absolute right-2 top-2 flex w-10 items-center justify-center rounded-md bg-[#F58929] text-xs font-bold text-white'>
                          {`${Math.round(
                            ((product.price - product.sale_price) /
                              product.price) *
                              100
                          )}%`}
                        </div>

                        <div className='mt-8 flex items-center justify-center md:mt-24'>
                          <div
                            style={{
                              backgroundSize: 'cover',
                              backgroundColor: '#F8F8F8',
                              width: '200px',
                              height: '200px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: '10px',
                            }}
                          >
                            <img
                              style={{ borderRadius: '10px' }}
                              src={product?.plain_image}
                              width={
                                product.name === 'Frytol sunflower oil 0.9L' ||
                                product.name === "Dr. Annie's honey 500ml"
                                  ? '60px'
                                  : '90px'
                              }
                              alt='cerelac image'
                            />
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <h2
                            tabIndex={0}
                            className='product-name text-lg font-semibold focus:outline-none lg:text-lg lg:font-semibold'
                          >
                            {product?.name}
                          </h2>
                        </div>
                        <div className='ml-2 flex'>
                          <div
                            style={{ color: '#F31748' }}
                          >{`¢ ${product?.sale_price}`}</div>
                          <div
                            style={{
                              marginLeft: '14px',
                              color: '#B3B3B3',
                              textDecoration: 'line-through',
                            }}
                          >
                            {`¢ ${product?.price}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
