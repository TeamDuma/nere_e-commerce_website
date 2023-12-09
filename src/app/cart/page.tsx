'use client';
import {
  useCheckoutCartMutation,
  useUpdateCartMutation,
} from '@/lib/redux/services/cart';
import {
  decreaseQuantity,
  increaseQuantity,
  selectShopping,
} from '@/lib/redux/slices/shopping';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'


const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [checkoutCart] = useCheckoutCartMutation();
  const [updateCart] = useUpdateCartMutation();


  const { cartItems } = useSelector(selectShopping);
 const savedAddresses =[
  {id:1,address:"where ever1"},
 { id:2,address:"where ever2"},
  {id:3,address:"where ever3"}

 ]
 
 const handleCheckout = async () => {
  if (savedAddresses.length > 0) {
    // Redirect to the delivery page with saved addresses
    // You can use Next.js router for navigation
    router.push('/delivery');
  } else {
    // Inform the user that there are no saved addresses
    // and prompt them to add a new one
    alert('No saved addresses. Please add a new address.');
    // Optionally, you can redirect the user to the address adding page
    // router.push('/add-address');
  }
};


  return (
    <div className='bg-[#000]-100 min-h-screen pt-20'>
      <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
      <div className='mx-auto flex max-w-5xl flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 xl:px-0'>
        <div className='rounded-lg md:w-2/3'>
          {cartItems.map((item) => (
            <div className='mb-6 rounded-lg bg-white p-6 shadow-md md:flex md:items-center'>
              <div className='w-1/3 flex-shrink-0'>
                <img
                  src={item.plain_image}
                  alt={item.name}
                  className='h-32 w-full rounded-lg object-cover'
                  style={{ width: '50px' }} // Set the fixed width for the image
                />
              </div>
              <div className='ml-4 flex-1'>
                <h2 className='text-lg font-bold text-gray-900'>{item.name}</h2>
                {/* <p className="mt-1 text-xs text-gray-700">{item.size}</p> */}
                <div className='mt-4 flex items-center justify-between md:block md:space-x-6'>
                  <div className='flex items-center border-gray-100'>
                    <span
                      className='cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      {' '}
                      -{' '}
                    </span>
                    <input
                      className='h-8 w-8 border bg-white text-center text-xs outline-none'
                      type='number'
                      value={item.min_quantity!!}
                      min='1'
                    />
                    <span
                      className='cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      {' '}
                      +{' '}
                    </span>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <p className='text-sm'>{item.price}</p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
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
        <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
          <button
            className='text-gray-500 focus:text-gray-600 focus:outline-none'
            onClick={async () => await updateCart(cartItems)}
          >
            <svg
              className='h-5 w-5'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </button>
          {/* <!-- ... your subtotal content ... --> */}

         
          <span
            className='cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'
            onClick={
              // async () => await checkoutCart(cartItems)
              handleCheckout()
            }
          >
            {' '}
            chekOut
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
