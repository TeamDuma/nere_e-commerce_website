'use client';

interface ProductDetailsProps {
  productId: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
  return (
    <>
      <div className='flex h-screen w-full flex-col'></div>
    </>
  );
};

export default ProductDetails;
