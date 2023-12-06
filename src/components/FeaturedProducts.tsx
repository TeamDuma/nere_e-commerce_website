'use client';

import React from 'react';
import Link from 'next/link';
import { useGetActiveProductsQuery } from '@/lib/redux/services/products';

const FeaturedProducts = () => {
  const { data, isLoading } = useGetActiveProductsQuery();
  const products = data?.data?.products ?? [];

  const featureProducts = products.filter(
    (product) => product.isFeaturedProduct
  );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginLeft: '10%',
        }}
      >
        {featureProducts.map((product) => (
          <Link href={`/product/${product.id}`}>
            <div key={product?.id} style={{ marginTop: '50px' }}>
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
          </Link>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
