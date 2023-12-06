'use client';
import React from 'react';
import { useGetCategoriesQuery } from '@/lib/redux/services/category';

const Categories = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const categories = data?.data?.categories ?? [];

  return (
    <div className='flex flex-nowrap'>
      {categories.length > 0 ? (
        categories.map((category: any) => (
          <div key={category.id}>
            <div>
              <img
                src={category.image}
                alt={category.name}
                className='h-full w-full object-cover'
              />
            </div>
            <h6 className='mr-8 mt-2 text-sm font-medium'>{category.name}</h6>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Categories;
