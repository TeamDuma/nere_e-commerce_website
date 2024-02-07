'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';

const Products = () => {
  const { data, isLoading } = useGetActiveProductsQuery();
  const products = data?.data?.products ?? [];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProducts = currentProducts.map((product) => (
    <Link href={`/product/${product.id}`} key={product?.id}>
      <div key={product?.id}>
        <>
          <div className='px-4 md:px-4 lg:px-4'>
            <div className='relative rounded-md bg-gray-50 dark:bg-gray-800'>
              <div className='h-15 absolute right-2 top-2 flex w-10 items-center justify-center rounded-md bg-[#F58929] text-xs font-bold text-white'>
                {`${Math.round(
                  ((product.price - product.sale_price) / product.price) * 100
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
        <div className='lg:grid-col-4 grid grid-cols-2  sm:grid-cols-2 sm:place-items-start xl:grid-cols-4 xl:gap-x-10 xl:gap-y-5'>
          {renderProducts}
        </div>
        <ul className='pagination'>{renderPagination}</ul>
      </div>
    </div>
  );
};

export default Products;
