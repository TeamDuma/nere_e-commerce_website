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
      <div className='container lg:pt-0'>
        <OngoingRow />
        <Banner />
        <EntertainmentSection />
        <Categories />
        <Title text={'Ongoing Groups'} />
        <OngoingPurchases />
        <TwoBannerLayout />
        <FeaturedProducts />
        <ViewMore />
        <div
          style={{
            position: 'fixed',
            top: '75%',
            transform: 'translateY(-50%)',
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            onClick={openCartModal}
            className=' py-4 text-center text-base font-semibold text-white'
            style={{
              background: '#F58929',
              width: '110px',
              height: '110px',
              marginTop: '35px',
              cursor: 'pointer',
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
            }}
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='ml-2 flex flex-row gap-2'>
                <CartIcon />
                <p style={{ color: '#FFF', fontSize: 12 }}>
                  {(cartItems ?? []).length} Items
                </p>{' '}
              </div>

              <div className='m-2 flex flex-row rounded bg-white'>
                <p
                  style={{ color: '#F58929', fontSize: 12, marginLeft: '4px' }}
                >
                  GH¢ {calculateTotal().toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'fixed',
            top: '75%',
            transform: 'translateY(-50%)',
            left: 0,
            zIndex: 1000,
          }}
        >
          <div
            onClick={openOngoingModal}
            className='pt-2 text-center text-base font-semibold text-white shadow'
            style={{
              background: '#F58929',
              width: '110px',
              height: '110px',
              marginTop: '35px',
              cursor: 'pointer',
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='ml-2 flex flex-row gap-2'>
                <MdGroups />
              </div>
              <div className='m-2 flex  flex-row rounded'>
                <p style={{ color: '#fff', fontSize: 12, marginBottom: 2 }}>
                  {groups.length} Ongoing Purchases near me
                </p>
              </div>
            </div>
          </div>
        </div>

        <CartModal onClose={closeModal} isOpen={isCartModalOpen} />
        <OngoingModal onClose={closeModal} isOpen={isOngoingModalOpen} />
      </div>
    </main>
  );
}
