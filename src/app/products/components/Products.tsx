'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';
import OngoingPurchases from '@/app/groups/ongoingPurchases/page';
import Banner from '@/components/Banner';
import FeaturedProducts from '@/components/FeaturedProducts';
import ThreeBannerLayout from '@/components/ThreeBannerLayout';
import TwoBannerLayout from '@/components/TwoBannerLayout';
import Container from '@/components/common/Container';
import ViewMore from '@/components/common/ViewMore';
import CategoriesRow from '@/app/categories/components/CategoriesRow';

const Products = () => {
  const { data, isLoading } = useGetActiveProductsQuery();
  const products = data?.data?.products ?? [];

  return (
    <Container>
      <CategoriesRow />
      <Banner />
      <OngoingPurchases />
      <ThreeBannerLayout />
      <FeaturedProducts />
      <TwoBannerLayout />
      <FeaturedProducts />
      <ViewMore />
    </Container>
  );
};

export default Products;
