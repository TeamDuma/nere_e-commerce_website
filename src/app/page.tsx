'use client';
import Categories from '@/app/categories/page';
import Banner from '@/components/Slider';
import FeaturedProducts from '@/components/FeaturedProducts';
import OngoingRow from '@/components/OngoingRow';
import Title from '@/components/Title';
import TwoBannerLayout from '@/components/TwoBannerLayout';
import OngoingPurchases from '@/app/groups/ongoingPurchases/page';
import Link from 'next/link';
import Container from '@/components/common/Container';
import EntertainmentSection from '@/components/common/EntertainmentSection';
import { useState } from 'react';
import CartModal from '@/components/common/CartModal';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import OngoingModal from '@/components/common/OngoingModal';
import ViewMore from '@/components/common/ViewMore';
import { useSelector } from 'react-redux';
import { selectShopping } from '@/lib/redux/slices/shopping';
import CartIcon from '@/components/common/CartIcon';
import { FaRegUserCircle } from 'react-icons/fa';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';
import { MdGroups } from 'react-icons/md';

export default function Home() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isOngoingModalOpen, setIsOngoingModalOpen] = useState(false);
  const { cartItems } = useSelector(selectShopping);
  const {
    data: ongoingGroupsData,
    isLoading: ongoingGroupsLoading,
    error: ongoingGroupsError,
  } = useGetPublicOngoingGroupsQuery();
  const { data: productsData, isLoading: productsLoading } =
    useGetActiveProductsQuery();
  const products = productsData?.data?.products ?? [];
  const groups = ongoingGroupsData?.data?.groups ?? [];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.sale_price * item.cartQuantity;
    }, 0);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const openOngoingModal = () => {
    setIsOngoingModalOpen(true);
  };

  const closeModal = () => {
    setIsOngoingModalOpen(false);
    setIsCartModalOpen(false);
  };

  return (
    <main>
      <Container>
        <OngoingRow />
        <Banner />
        <EntertainmentSection />
        <Categories />
        <Title text={'Ongoing Groups'} />
        <OngoingPurchases />
        <TwoBannerLayout />
        <FeaturedProducts />
        <ViewMore />
        <div className='fixed right-0 top-1/2 z-50 flex -translate-y-1/2 transform items-center justify-center'>
          <div
            onClick={openCartModal}
            className='sm:w-110 sm:mt-35 mt-8 h-16 w-28 cursor-pointer rounded-bl-2xl rounded-tl-2xl bg-orange-500 py-2 text-center text-sm font-semibold text-white sm:h-20 sm:py-4 sm:text-base'
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='ml-2 flex flex-row gap-2'>
                <CartIcon />
                <p className='text-xs text-white sm:text-sm'>
                  {(cartItems ?? []).length} Items
                </p>
              </div>
              <div className='m-1 flex flex-row items-center justify-center rounded bg-white'>
                <p className='mx-1 text-xs text-orange-500 sm:text-sm '>
                  GH¢ {calculateTotal().toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='fixed left-0 top-1/2 z-50 -translate-y-1/2 transform'>
          <div
            onClick={openOngoingModal}
            className='h-15 mt-8 w-28 cursor-pointer rounded-br-2xl rounded-tr-2xl bg-orange-500 pt-2 text-center text-sm font-semibold text-white shadow'
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='ml-2 flex flex-row gap-2'>
                <MdGroups />
              </div>
              <div className='m-2 flex flex-row rounded'>
                <p className='mb-1 hidden text-xs text-white sm:block'>
                  {groups.length} Ongoing Purchases near me
                </p>
                <p className='mb-1 text-xs text-white sm:block lg:hidden'>
                  {groups.length} groups
                </p>
              </div>
            </div>
          </div>
        </div>

        <CartModal onClose={closeModal} isOpen={isCartModalOpen} />
        <OngoingModal onClose={closeModal} isOpen={isOngoingModalOpen} />
      </Container>
    </main>
  );
}
