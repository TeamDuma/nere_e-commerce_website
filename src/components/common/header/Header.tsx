"use client"
import React, { useState } from 'react';
import CartIcon from "../CartIcon";
import Location from "../Location";
import Logo from "../Logo";
import UserIcon from "../User";
import { useSelector } from 'react-redux';
import Link from 'next/link';
// import Cart from '@/app/cart/Page';
const Header = () => {

  return (
    <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-16 h-20  ">
    <div className="inline-flex">
      <a className="_o6689fn" href="/"><div className="hidden md:block">
        <Logo/>
        </div>
      </a>
    </div>

    <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
      <div className="inline-block">
      <div className="flex rounded-full bg-[#F5F5F5] px-2 w-full max-w-[600px]">
    
      <input
        type="text"
        className="w-full bg-[#F5F5F5] flex bg-transparent pl-2 text-[#0c0c0c] outline-0"
        placeholder="Search for products"
      />
      <a type="submit" className="relative p-2 bg-[#F5F5F5] rounded-full">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#999"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </g>
        </svg>
      </a>
    </div>
      </div>
    </div>

    <div className="flex-initial my-4">
      <div className="flex justify-end items-center relative">
        <div className="flex mr-4 items-center">
          <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
          <div className="hidden md:flex items-center">
          <Location/>
      <div className="ml-2">
  <p style={{ color: '#298592', fontSize: '0.875rem' }}>Pick up from</p>
  <p style={{ color: '#298592', fontWeight: 'bold', fontSize: '0.875rem' }}>Location</p>
</div>
    </div>
          </a>
          <div className="block relative">
          <div className="hidden md:flex items-center">
          <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#" >
          <div className="hidden md:flex items-center">
          <UserIcon/>
      <div className="ml-2">
  <p style={{ color: '#298592', fontSize: '0.875rem' }}>Login/Registeration</p>
</div>
    </div>
          </a>
     
     
    </div>
          </div>
        </div>
        <Link href='/cart' className='bg-white p-2 block rounded-md'>
                <div className='flex flex-row gap-2'>
                <CartIcon/>   <span className='font-bold text-[#298592] inline-block'>
                  </span></div>
                  
            </Link>
     
      </div>
    </div>
  </nav>

  );
};

export default Header;
