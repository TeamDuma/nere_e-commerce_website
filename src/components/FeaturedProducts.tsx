'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';
import { Product } from '@/types/product';
import { addToCart } from '@/lib/redux/slices/shopping';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const FeaturedProducts = () => {
  const { data, isLoading } = useGetActiveProductsQuery();
  const products = data?.data?.products ?? [];
  const dispatch = useDispatch();

  const featureProducts = products.filter(
    (product) => product.isFeaturedProduct
  );

  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  const product = products.find(
    (product) =>
      product.categories && typeof product.categories.name === 'string'
  );

  const handleAddToCart = (product: Product) => {
    const itemToAdd = {
      ...product,
      cartQuantity: 0,
      productID: product.id,
      isGroupJoiner: false,
    };

    dispatch(addToCart({ item: itemToAdd }));
  };

  return (
    <>
      <div>
        <div className='container'>
          {isLoading && <div>Loading...</div>}

          <div className='lg:grid-col-3 grid grid-cols-2  gap-5 sm:grid-cols-2 sm:place-items-start xl:grid-cols-4 xl:gap-x-20 xl:gap-y-10'>
            {featureProducts.map((product) => (
              <Link href={`/product/${product.slug}`} key={product?.id}>
                <div key={product?.id}>
                  <>
                    <div
                      key={product?.id}
                      onMouseEnter={() =>
                        setHoveredProductId(String(product.id))
                      }
                      onMouseLeave={() => setHoveredProductId(null)}
                      className='relative mx-4 rounded-md bg-gray-100 dark:bg-gray-800'
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
                            position: 'relative',
                            backgroundSize: 'cover',
                            backgroundColor: 'gray-100',
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
                          {hoveredProductId === String(product.id) && (
                            <div
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                borderRadius: '10px',
                              }}
                            >
                              <button
                                className=' mx-6 my-4 rounded-md px-8  py-2 text-sm font-medium text-white hover:bg-[#D47826] focus:bg-[#D47826] focus:outline-none'
                                style={{ zIndex: 1 }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  console.log(product.id);
                                  handleAddToCart(product);
                                  toast.success(
                                    `${product.name} added to cart!`,
                                    {
                                      autoClose: 500,
                                    }
                                  );
                                }}
                              >
                                Quick Add
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className='flex items-center'>
                        <div className='h-12'>
                          <h5
                            tabIndex={0}
                            className='text ml-1  line-clamp-2 overflow-hidden overflow-ellipsis  text-[#298592]'
                            style={{ maxWidth: '12rem' }}
                          >
                            {product?.name}
                          </h5>
                        </div>
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

export default FeaturedProducts;
