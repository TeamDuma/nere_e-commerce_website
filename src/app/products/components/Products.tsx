'use client';
import React from 'react';
import Link from 'next/link';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';

const Products = () => {
  const { data, isLoading } = useGetActiveProductsQuery();
  const products = data?.data?.products ?? [];

  return (
    <>
      <div>
        <div className='container pt-16'>
          {isLoading && <div>Loading...</div>}
          <div className='lg:grid-col-3 grid grid-cols-2 place-items-center gap-10 sm:grid-cols-2 sm:place-items-start xl:grid-cols-4 xl:gap-x-20 xl:gap-y-10'>
            {products.map((product) => (
              <Link href={`/product/${product.id}`}>
                <div key={product?.id} style={{ marginTop: '50px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '15px',
                      backgroundColor: '#F58929',
                      position: 'relative',
                      display: 'flex',
                      fontSize: '12px',
                      left: '146px',
                      top: '43px',
                      borderRadius: '8px',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      alignItems: 'center',
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
                      alignItems: 'center',
                    }}
                  >
<div className='product-name'>
                      {product?.name}
                    </div>
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

export default Products;
