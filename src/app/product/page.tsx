
"use client"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


export default function ProductDetailPage({ params }: { params: { id: number } }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log("params",params)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch (`https://nere-server.herokuapp.com/api/products/
        
        ${params.id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };



    fetchData();
  }, [params.id]);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!product) return null;

  return (
    <div className='w-full max-w-[400px] m-auto flex flex-col justify-center'>
      <div className="w-full mt-4">
        <img src={product?.thumbnail} alt={product?.title} width={400} height={400} />
        <div className='w-full mt-2'>
          <h1 className='font-bold text-2xl text-red-500'>{product?.title}</h1>
          <p className='text-gray-500'>{product?.description}</p>
          <p className='text-gray-500'>Price: ${product?.price}</p>
          <button className='bg-yellow-400 px-4 py-2 text-white mt-1' onClick={() => dispatch(AddCart(product))}>
            Add to Cart
          </button>

        </div>
        <button className='bg-yellow-400 px-4 py-2 text-white mt-1' onClick={() => dispatch(DecreaseQuantity(product))}>
            Add to Cart
          </button>
      </div>
    </div>
  );
}
