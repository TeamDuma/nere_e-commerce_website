'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useGetGroupsQuery } from '@/lib/redux/services/group';

const Groups = () => {
  const { data, isLoading } = useGetGroupsQuery();
  const groups = data?.data?.groups ?? [];

  return (
    <div>
      <div className='container'>
        {isLoading && <div>Loading...</div>}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-10 xl:gap-y-5'>
          Groups Page
        </div>
      </div>
    </div>
  );
};

export default Groups;
