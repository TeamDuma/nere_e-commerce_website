'use client';
import React from 'react';
import { useGetCategoriesQuery } from '@/lib/redux/services/category';

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
              <div className='sm:grid-md:grid- row grid gap-2 xl:grid-cols-2'>
                <div className='flex flex-col items-center justify-center rounded-lg '>
                  <div className='inline-flex h-20 w-20 overflow-hidden rounded-full border border-gray-200 shadow-lg'>
                    <img
                      src={category.image}
                      alt={category.name}
                      className='h-full w-full'
                    />
                  </div>
                  <h6 className='mt-2 text-sm font-medium'>{category.name}</h6>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
