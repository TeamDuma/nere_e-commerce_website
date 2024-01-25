'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';

const Products = () => {
  const { data, isLoading } = useGetActiveProductsQuery();
  const products = data?.data?.products ?? [];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Adjust as needed

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProducts = currentProducts.map((product) => (
    <Link href={`/product/${product.id}`} key={product?.id}>
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
              ((product.price - product.sale_price) / product.price) * 100
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
      </Link>{' '}
    </Link>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number: number) => {
    setCurrentPage(number);
  };

  const renderPagination = pageNumbers.map((number) => (
    <li
      key={number}
      className={`pagination-item ${number === currentPage ? 'active' : ''}`}
      onClick={() => handleClick(number)}
    >
      {number}
    </li>
  ));

  return (
    <div>
      <div className='container'>
        {isLoading && <div>Loading...</div>}
        <div className='lg:grid-col-3 grid grid-cols-2  gap-10 sm:grid-cols-2 sm:place-items-start xl:grid-cols-4 xl:gap-x-20 xl:gap-y-10'>
          {renderProducts}
        </div>
        <ul className='pagination'>{renderPagination}</ul>
      </div>
    </div>
  );
};

export default Products;
