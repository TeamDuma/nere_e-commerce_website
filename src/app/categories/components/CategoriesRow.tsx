'use client';
import React from 'react';
import { useGetCategoriesQuery } from '@/lib/redux/services/category';
import Link from 'next/link';
import { PiDropboxLogoLight } from 'react-icons/pi';

const CategoriesRow = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const categories = data?.data?.categories ?? [];

  return (
    <div className='my-4 overflow-x-auto bg-white'>
      <div className='mx-2 flex items-center'>
        <PiDropboxLogoLight style={{ marginTop: 5, color: '#298592' }} />

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
                      <h6 className='mt-2 whitespace-nowrap text-sm font-medium text-[#298592]'>
                        {category.name}
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesRow;
