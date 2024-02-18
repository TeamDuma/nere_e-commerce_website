'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

import { useLazyGetCategoryProductQuery } from '@/lib/redux/services/product';
import Title from '@/components/Title';

type Props = {
  params: {
    slug: string;
  };
};

const Category = ({ params }: Props) => {
  const { slug } = params;

  const [getCategoryProduct, { data, isLoading }] =
    useLazyGetCategoryProductQuery();

  const products = data?.data?.products ?? [];

  useEffect(() => {
    getCategoryProduct(slug)
      .then(() => {})
      .catch(() => {});
  }, [slug]);

  return (
    <>
      <div>
        <div className='container'>
          {isLoading && <div>Loading...</div>}
          <div className='px-4 md:px-4 lg:px-4'>
            <Title text={products[0]?.categories?.name || 'Category Name'} />
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-5 '>
            {products.map((product) => (
              <Link href={`/product/${product.slug}`} key={product?.id}>
                <div key={product?.id}>
                  <>
                    <div className='px-2 md:px-2 lg:px-2'>
                      <div className='relative rounded-md bg-gray-50 dark:bg-gray-800'>
                        <div className='absolute right-2 top-2 flex h-5 w-10 items-center justify-center rounded-md bg-[#F58929] text-xs font-bold text-white'>
                          {`${Math.round(
                            ((product.price - product.sale_price) /
                              product.price) *
                              100
                          )}%`}
                        </div>

                        <div className='mt-8 flex items-center justify-center md:mt-4'>
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
                              src={product?.plain_image}
                              className='h-[83px] w-[83px] rounded-lg'
                              style={{ width: '70px', height: '105px' }}
                            />
                          </div>
                        </div>
                        <div className='ml-4 flex-1'>
                          <h2 className='text line-clamp-2 overflow-hidden overflow-ellipsis font-bold text-[#298592]'>
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

export default Category;
