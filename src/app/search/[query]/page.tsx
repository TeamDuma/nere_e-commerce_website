'use client';

import Link from 'next/link';
import { useLazyGetSearchProductsQuery } from '@/lib/redux/services/product';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';
import Title from '@/components/Title';

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
          <div className='mt-12 text-center text-5xl text-black'>
            No products found.
            <Link href='/products'>
              <h1 className='my-5 text-[#F58929]'>Go to the Shop</h1>
            </Link>
          </div>
          // <div className="flex justify-center items-center h-screen text-5xl">
          //   <p>No products found.</p>
          // </div>
        )}
        <div className='px-4 md:px-4 lg:px-4'></div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-5 '>
          {products.map((product) => (
            <Link href={`/product/${product.slug}`} key={product?.id}>
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

                      <div className='mt-8 flex items-center justify-center md:mt-8'>
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
    </>
  );
};

export default Search;
