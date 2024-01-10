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

          <div className='lg:grid-col-3 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 sm:place-items-start xl:grid-cols-4 xl:gap-x-20 xl:gap-y-10'>
            {products.map((product) => (
              <div key={product?.id}>
                <div
                  style={{
                    width: '100px',
                    height: '40px',
                    backgroundColor: '#F58929',
                    position: 'relative',
                    display: 'flex',
                    fontSize: '14px',
                    left: '146px',
                    top: '43px',
                    borderRadius: '8px',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    alignItems: 'center',
                    color: 'white',
                  }}
                >
                  {`Save GHC ${product.price - product.sale_price}`}
                </div>
                <Link href={`/product/${product.id}`}>
                  <div
                    style={{
                      backgroundColor: '#F5F5F5',
                      backgroundSize: 'cover',
                      width: '250px',
                      height: '250px',
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
                </Link>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#298592',
                    marginTop: '2px',
                  }}
                >
                  {product?.name}
                </div>

                <div style={{ display: 'flex', marginTop: '2px' }}>
                  <div
                    style={{
                      marginLeft: '4px',
                      color: '#C1C2C2',
                      textDecoration: 'line-through',
                    }}
                  >{`GHC ${product?.price}`}</div>
                  <div
                    style={{ color: '#F58929', marginLeft: '5px' }}
                  >{`GHC ${product?.sale_price}`}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
