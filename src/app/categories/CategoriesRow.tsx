'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

import { useLazyGetCategoryProductQuery } from '@/lib/redux/services/product';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import { FaLongArrowAltRight } from 'react-icons/fa';

type Props = {
  params: {
    slug: string;
  };
};

const CategoriesRow = ({ params }: Props) => {
  const { slug } = params;

  const [getCategoryProduct, { data, isLoading }] =
    useLazyGetCategoryProductQuery();

  const products = data?.data?.products ?? [];
  const categoryNames = products
    .map((product) => product.categories?.name)
    .filter((name) => typeof name === 'string');
  const subTitleText = categoryNames.length > 0 ? categoryNames[0]! : '';

  console.log(categoryNames);

  useEffect(() => {
    getCategoryProduct(slug)
      .then(() => {})
      .catch(() => {});
  }, [slug]);

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
                    <Link href={`/product/${product.slug}`} key={product?.id}>
                      <div
                        key={product?.id}
                        className='relative rounded-md bg-gray-50 dark:bg-gray-800'
                      >
                        <div className='h-15 absolute right-2 top-2 flex w-10 items-center justify-center rounded-md bg-[#F58929] text-xs font-bold text-white'>
                          {`${Math.round(
                            ((product.price - product.sale_price) /
                              product.price) *
                              100
                          )}%`}
                        </div>
                        <div className='mt-2 flex items-center justify-center md:mt-4'>
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
                                  : '60px'
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
                    </Link>
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
