'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

import { useLazyGetCategoryProductQuery } from '@/lib/redux/services/product';

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
          <div className='lg:grid-col-3 grid grid-cols-2  gap-10 sm:grid-cols-2  xl:grid-cols-4 xl:gap-x-20 xl:gap-y-10'>
            {products.map((product) => (
              <Link href={`/product/${product.id}`}>
                <div key={product?.id}>
                  <div
                    style={{
                      width: '40px',
                      height: '15px',
                      backgroundColor: '#F58929',
                      position: 'relative',
                      display: 'flex',
                      fontSize: '12px',
                      left: '146px',
                      top: '20px',
                      borderRadius: '8px',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    {` ${Math.round(
                      ((product.price - product.sale_price) / product.price) *
                        100
                    )}%`}
                  </div>
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
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div className='product-name'>{product?.name}</div>
                    <div style={{ display: 'flex', marginTop: '2px' }}>
                      <div style={{ color: '#F31748', marginLeft: '5px' }}>
                        {`¢ ${product?.sale_price}`}
                      </div>
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
