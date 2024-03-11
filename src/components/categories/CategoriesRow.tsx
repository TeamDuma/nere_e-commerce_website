'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useLazyGetCategoryProductQuery } from '@/lib/redux/services/product';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { addToCart } from '@/lib/redux/slices/shopping';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '@/types/product';
import { toast } from 'react-toastify';

type Props = {
  params: {
    slug: string;
  };
};

const CategoriesRow = ({ params }: Props) => {
  const dispatch = useDispatch();

  const { slug } = params;

  const [getCategoryProduct, { data, isLoading }] =
    useLazyGetCategoryProductQuery();

  const products = data?.data?.products ?? [];
  const categoryNames = products
    .map((product) => product.categories?.name)
    .filter((name) => typeof name === 'string');
  const subTitleText = categoryNames.length > 0 ? categoryNames[0]! : '';
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  const product = products.find(
    (product) =>
      product.categories && typeof product.categories.name === 'string'
  );

  console.log('productWithCategory', product);

  useEffect(() => {
    getCategoryProduct(slug)
      .then(() => {})
      .catch(() => {});
  }, [slug]);

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
                        onMouseEnter={() =>
                          setHoveredProductId(String(product.id))
                        }
                        onMouseLeave={() => setHoveredProductId(null)}
                        className='relative col-span-2 mx-8 rounded-md bg-gray-100  '
                      >
                        <div className='h-15 absolute right-2 top-2 flex w-16 items-center justify-center rounded-md bg-[#F58929] text-xs font-bold text-white'>
                          Save ¢
                          <span className='ml-1'>{`${Math.round(
                            product.price - product.sale_price
                          )}`}</span>
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
                                  // top: 0,
                                  // left: 0,
                                  right: 0,
                                  bottom: 0,
                                  width: '100%',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                  borderRadius: '10px',
                                }}
                              >
                                <button
                                  disabled={!product?.in_stock}
                                  className=' w-full rounded-md   py-2 text-sm font-medium text-white hover:bg-[#D47826] focus:bg-[#D47826] focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed'
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
                      </div>
                      <div className='relative col-span-2 mx-8  my-2 rounded-md  '>
                        <div className='flex items-center '>
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
