'use client';
import React from 'react';
import { useGetCategoriesQuery } from '@/lib/redux/services/category';
import Link from 'next/link';

const Categories = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const categories = data?.data?.categories ?? [];

  return (
    <div className='overflow-x-auto'>
      <div className='flex flex-nowrap justify-start'>
        {categories.length > 0 ? (
          categories.map((category: any) => (



            <div
              key={category.id}
              className='w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'
            >
              <Link href={`/category/${category.slug}`}>
                <div className='sm:grid-md:grid- row grid gap-2 xl:grid-cols-2'>
                  <div className='flex flex-col items-center justify-center rounded-lg'>
                    <div className='inline-flex h-20 w-20 overflow-hidden rounded-full border border-gray-200 shadow-lg'>
                      <img
                        src={category.image}
                        alt={category.name}
                        className='relative inline-block h-[80px] w-[80px] !rounded-full object-cover object-center'
                      />
                    </div>
                    <h6 className='mt-2 text-sm font-medium'>
                      {category.name}
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div role="status" className="space-y-2.5 animate-pulse max-w-lg">





          <div className="mt-4 ">
          <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#808080" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/>
        </svg>
        
                <div className="flex items-center w-full max-w-[360px] my-4">
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
            </div>
            </div>
          <span className="sr-only">Loading...</span>
        </div>        )}
      </div>
    </div>
  );
};

export default Categories;
