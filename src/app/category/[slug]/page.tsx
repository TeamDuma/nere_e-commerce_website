'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useLazyGetCategoryProductQuery } from '@/lib/redux/services/product';
import Title from '@/components/Title';
import { useDispatch } from 'react-redux';
import { Product } from '@/types/product';
import { addToCart } from '@/lib/redux/slices/shopping';
import { toast } from 'react-toastify';
import { sendGTMEvent } from '@next/third-parties/google';

type Props = {
  params: {
    slug: string;
  };
};

const Category = ({ params }: Props) => {
  const { slug } = params;

  const [getCategoryProduct, { data, isLoading }] =
    useLazyGetCategoryProductQuery();
  const dispatch = useDispatch();

  const products = data?.data?.products ?? [];

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
            <Title text={products[0]?.categories?.name || ''} />
          </div>
          {products.length === 0 ? (
            <div className='flex h-screen items-center justify-center'>
              <h2 className='text-center'>This category has no items.</h2>
            </div>
          ) : (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-5 '>
              {products.map((product) => (
                <Link href={`/product/${product.slug}`} key={product?.id}>
                  <div key={product?.id}>
                    <>
                      <div
                        key={product?.id}
                        onMouseEnter={() =>
                          setHoveredProductId(String(product.id))
                        }
                        onMouseLeave={() => setHoveredProductId(null)}
                        className='relative mx-4 mb-4 rounded-md bg-gray-100  dark:bg-gray-800'
                      >
                        <div className='h-15 absolute  right-2 top-2 flex w-10 items-center justify-center rounded-md bg-[#F58929] text-xs font-bold text-white'>
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
                                    sendGTMEvent({ event: 'categoryroductClicked', value: `${product.name}` })
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
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
