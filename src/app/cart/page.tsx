"use client"

import { addToCart, deleteProduct } from '@/redux/shoppingSlice';
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
    <div>
      <div>cart</div>
      <div className="flex items-center text-lg w-20 justify-between">
        <span onClick={handleClick} className="cursor-pointer">
          -
        </span>
        <span onClick={handleClick} className="cursor-pointer">
          +
        </span>
      </div>
    </div>
  );
};

export default Cart;
