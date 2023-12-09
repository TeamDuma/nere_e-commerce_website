'use client';
import Categories from '@/app/categories/page';
import Banner from '@/components/Banner';
import FeaturedProducts from '@/components/FeaturedProducts';
import OngoingRow from '@/components/OngoingRow';
import Title from '@/components/Title';
import TwoBannerLayout from '@/components/TwoBannerLayout';
import OngoingPurchases from '@/app/groups/ongoingPurchases/page';
import Link from 'next/link';
import Container from '@/components/common/Container';
import EntertainmentSection from '@/components/common/EntertainmentSection';
import { useState } from 'react';
import SideModal from '@/components/common/OngoingModal';
import CartModal from '@/components/common/CartModal';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import OngoingModal from '@/components/common/OngoingModal';

export default function Home() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isOngoingModalOpen, setIsOngoingModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
    setIsOngoingModalOpen(false);
  };

  const openOngoingModal = () => {
    setIsOngoingModalOpen(true);
    setIsCartModalOpen(false);
  };

  const closeModals = () => {
    setIsOngoingModalOpen(false);
    setIsCartModalOpen(false);
  };

  return (
    <>
      <Container>
        <OngoingRow />
        <Banner />
        <EntertainmentSection />
        <Categories />
        <Title text={'Ongoing Groups'} />
        <OngoingPurchases />
        <TwoBannerLayout />
        <FeaturedProducts />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
          }}
        >
          <Link href='/products'>
            <div
              className='rounded-lg py-3 text-center text-base font-semibold text-white shadow'
              style={{
                background: '#298592',
                width: '150px',
                marginTop: '9px',
              }}
            >
              View All Items
            </div>
          </Link>
        </div>
      </Container>
      <div
        style={{
          position: 'fixed',
          top: '80%',
          transform: 'translateY(-50%)',
          right: 0,
          zIndex: 1000,
        }}
      >
        <div
          onClick={openCartModal}
          className='rounded-lg py-3 text-center text-base font-semibold text-white shadow'
          style={{
            background: '#F58929',
            width: '150px',
            height: '80px',
            marginTop: '9px',
            cursor: 'pointer',
          }}
        >
          Open Cart
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          top: '80%',
          transform: 'translateY(-50%)',
          left: 0,
          zIndex: 1000,
        }}
      >
        <div
          onClick={openOngoingModal}
          className='rounded-lg py-3 text-center text-base font-semibold text-white shadow'
          style={{
            background: '#F58929',
            width: '150px',
            marginTop: '9px',
            cursor: 'pointer',
            height: '80px',
          }}
        >
          Open Ongoing
        </div>
      </div>

      {isCartModalOpen && <CartModal closeModal={closeModals} />}
      {isOngoingModalOpen && <OngoingModal closeModal={closeModals} />}
    </>
  );
}
