'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';
import OngoingPurchases from '@/app/(shop)/groups/ongoingPurchases/page';
import ThreeBannerLayout from '@/components/ThreeBannerLayout';
import TwoBannerLayout from '@/components/TwoBannerLayout';
import Container from '@/components/common/Container';
import ViewMore from '@/components/common/ViewMore';
import CategoriesHeader from '@/components/categories/components/CategoriesHeader';
import CategoriesRow from '@/components/categories/CategoriesRow';
import Banner from '@/components/Slider';

const Products = () => {
  const { data, isLoading } = useGetActiveProductsQuery();
  const products = data?.data?.products ?? [];

  return (
    <Container>
      <CategoriesHeader />
      <Banner />
      <OngoingPurchases />
      <ThreeBannerLayout />
      <CategoriesRow
        params={{
          slug: 'baby-food',
        }}
      />
      <TwoBannerLayout />
      <CategoriesRow
        params={{
          slug: 'baby-care',
        }}
      />

      <ThreeBannerLayout />
      <CategoriesRow
        params={{
          slug: 'packaged-foods',
        }}
      />
      <TwoBannerLayout />
      <CategoriesRow
        params={{
          slug: 'oils,-condiments-and-spices',
        }}
      />

      <ThreeBannerLayout />
      <CategoriesRow
        params={{
          slug: 'water-and-beverages',
        }}
      />
      <ThreeBannerLayout />
      <CategoriesRow
        params={{
          slug: 'breakfast',
        }}
      />
    </Container>
  );
};

export default Products;
