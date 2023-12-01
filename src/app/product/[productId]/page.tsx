"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, resetCart } from "@/redux/shoppingSlice";

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = params;

  console.log("params", params);
  console.log("productId", productId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await fetch(`https://nere-server.herokuapp.com/api/products/${productId}`);
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
    <main className="my-8">
    <div className="container mx-auto px-6">
      <div className="md:flex md:items-center">
        <div className="w-full h-64 md:w-1/2 lg:h-96">
          <img
            className="h-full rounded-md object-cover max-w-lg mx-auto "
            src={product.plain_image}
            alt="plain_image"
          />
        </div>
        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
          <h3 className="text-gray-700 uppercase text-lg">
            {product?.name}
          </h3>
          <span className="text-gray-500 mt-3">{product.sale_price}¢</span>
          <span className="text-gray-500 mt-3 ml-5" style={{ textDecoration: 'line-through' }}>{product.price}¢</span>

          <hr className="my-3" />
          <div className="mt-2">
            <label className="text-gray-700 text-sm" htmlFor="count">
              Count:
            </label>
            <div className="flex items-center mt-1">
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <span className="text-gray-700 text-lg mx-2">20</span>
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
          {product?.variants !== null && (
<div className="mt-3">
<label className="text-gray-700 text-sm" htmlFor="count">
  Variants:
</label>
<div className="flex items-center mt-1">
  <button className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none" />
  <button className="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none" />
  <button className="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none" />
</div>
</div>
)}
          <div className="flex items-center mt-6">
            <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
              Order Now
            </button>
            <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    {/* Items related to your cart */}
    </div>
  </main>
    // <div className="w-full max-w-[400px] m-auto flex flex-row justify-center">
    //   <div className="w-full mt-4">
    //     <img
    //       src={product?.plain_image}
    //       alt={product?.title}
    //       width={400}
    //       height={400}
    //     />
    //     <div className="w-full mt-2">
    //       <h1 className="font-bold text-2xl text-red-500">{product?.name}</h1>
    //       <p className="text-gray-500">{product?.description}</p>
    //       <p className="text-gray-500">Price: ${product?.price}</p>
    //       <button
    //         className="bg-yellow-400 px-4 py-2 text-white mt-1"
    //         onClick={() => dispatch(addToCart(product))}
    //       >
    //         Add to Cart
    //       </button>

    //       <button
    //         className="bg-yellow-400 px-4 py-2 text-white mt-1"
    //         onClick={() => dispatch(resetCart(product)
    //           )}
    //       >
    //       resetCart
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
