"use client"

import { addToCart, deleteitem } from '@/redux/shoppingSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart= () => {
  const dispatch = useDispatch();
  
  const  {cartItems}  = useSelector((state: any) => state.shopping);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      setLoading(true);
  
      // Replace the URL with your actual API endpoint
      const response = await fetch('https://nere-server.herokuapp.com/api/cart/update', {
        method: 'PATCH', // or 'PUT' or 'PATCH' depending on your API
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers your API requires
        },
        body: JSON.stringify({
          customer_id: 1,
          cart_object: JSON.stringify (cartItems),
        }),
      }

      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('API Response:', responseData);
  
      // Set the data in state
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
    dispatch(addToCart(cartItems));
  };
  




  return (
    <div className="min-h-screen bg-[#000]-100 pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        {cartItems.map((item) => (
           <div className="mb-6 rounded-lg bg-white p-6 shadow-md md:flex md:items-center">
           <div className="flex-shrink-0 w-1/3">
      <img
        src={item.plain_image}
        alt={item.name}
        className="w-full h-32 object-cover rounded-lg"
        style={{ width: "50px" }} // Set the fixed width for the image
      />
           </div>
           <div className="ml-4 flex-1">
             <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
             <p className="mt-1 text-xs text-gray-700">{item.size}</p>
             <div className="mt-4 flex justify-between items-center md:block md:space-x-6">
               <div className="flex items-center border-gray-100">
                 <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                 <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={item.min_quantity} min="1" />
                 <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
               </div>
               <div className="flex items-center space-x-4">
                 <p className="text-sm">{item.price}</p>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               </div>
             </div>
           </div>
         </div>
          // <div key={item.id} className="mb-6 rounded-lg bg-white p-6 shadow-md md:flex md:items-center">
          //   <img src={item.plain_image} alt="item-image" className="w-full rounded-lg md:w-40 md:mr-4" />
          //   <div className="flex-1">
          //     <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
          //     <p className="mt-1 text-xs text-gray-700">{item.size}</p>
          //     <div className="mt-4 flex justify-between items-center md:block md:space-x-6">
          //       <div className="flex items-center border-gray-100">
          //         <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
          //         <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={item.min_quantity} min="1" />
          //         <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
          //       </div>
          //       <div className="flex items-center space-x-4">
          //         <p className="text-sm">{item.price}</p>
          //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
          //           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          //         </svg>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        ))}

      </div>

      {/* <!-- Sub total --> */}
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        {/* <!-- ... your subtotal content ... --> */}
      </div>
    </div>
  </div>
  
  );
};

export default Cart;
