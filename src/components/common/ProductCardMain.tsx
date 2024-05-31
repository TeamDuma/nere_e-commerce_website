import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
  sendGTMEvent: (event: { event: string; value: string }) => void;
  sendGAEvent: (event: { event: string; value: string }) => void;
}

const ProductCardMain: React.FC<ProductCardProps> = ({
  product,
  handleAddToCart,
  sendGTMEvent,
  sendGAEvent,
}) => {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  return (
    <Link href={`/product/${product.slug}`} key={product.id}>
      <div
        key={product.id}
        onMouseEnter={() => setHoveredProductId(String(product.id))}
        onMouseLeave={() => setHoveredProductId(null)}
        className='relative col-span-2 mx-8 rounded-md bg-gray-100'
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
              width: '250px',
              height: '250px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
            }}
          >
            <div className='relative overflow-x-hidden rounded-2xl'>
              <img
                className='h-40 w-full rounded-2xl object-cover'
                src={product?.plain_image}
              />
            </div>

            {/* <img src={product?.plain_image} 
                               style={{ width: '80px', height: '150px', objectFit: 'cover' }}
                               /> */}

            {hoveredProductId === String(product.id) && (
              <div
                style={{
                  position: 'absolute',
                  // top: 0,
                  // left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '10px',
                }}
              >
                <button
                  disabled={!product?.in_stock}
                  className=' w-full rounded-md   py-2 text-sm font-medium text-white hover:bg-[#D47826] focus:bg-[#D47826] focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400'
                  style={{ zIndex: 1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(product.id);
                    handleAddToCart(product);
                    toast.success(`${product.name} added to cart!`, {
                      autoClose: 500,
                    });
                    sendGTMEvent({
                      event: 'categoryProductClicked',
                      value: `${product.name}`,
                    });
                    sendGAEvent({
                      event: 'categoryProductClicked',
                      value: `${product.name}`,
                    });
                  }}
                >
                  Quick Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='relative col-span-2 mx-8 my-2 rounded-md'>
        <div className='flex items-center'>
          <div className='h-12'>
            <h5
              tabIndex={0}
              className='text ml-1 line-clamp-2 overflow-hidden overflow-ellipsis text-[#298592]'
              style={{ maxWidth: '12rem' }}
            >
              {product.name}
            </h5>
          </div>
        </div>
        <div className='ml-2 flex'>
          <div style={{ color: '#F31748' }}>{`¢ ${product.sale_price}`}</div>
          <div
            style={{
              marginLeft: '14px',
              color: '#B3B3B3',
              textDecoration: 'line-through',
            }}
          >
            {`¢ ${product.price}`}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardMain;
