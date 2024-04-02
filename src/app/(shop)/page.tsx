'use client';
import Categories from '@/components/categories/page';
import Banner from '@/components/Slider';
import FeaturedProducts from '@/components/FeaturedProducts';
import OngoingRow from '@/components/OngoingRow';
import Title from '@/components/Title';
import TwoBannerLayout from '@/components/TwoBannerLayout';
import OngoingPurchases from '@/app/(shop)/groups/ongoingPurchases/page';
import Link from 'next/link';
import Container from '@/components/common/Container';
import EntertainmentSection from '@/components/common/EntertainmentSection';
import { useEffect, useState } from 'react';
import CartModal from '@/components/common/CartModal';
import { useGetPublicOngoingGroupsQuery } from '@/lib/redux/services/group';
import OngoingModal from '@/components/common/OngoingModal';
import ViewMore from '@/components/common/ViewMore';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, saveToken, selectShopping } from '@/lib/redux/slices/shopping';
import CartIcon from '@/components/common/CartIcon';
import { FaRegUserCircle } from 'react-icons/fa';
import { useGetActiveProductsQuery } from '@/lib/redux/services/product';
import { MdGroups } from 'react-icons/md';
import ThreeBannerLayout from '@/components/ThreeBannerLayout';
import { usePostHog } from 'posthog-js/react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { ILoginResponse } from '@/types/customer';
import { toast } from 'react-toastify';

export default function Home() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isOngoingModalOpen, setIsOngoingModalOpen] = useState(false);
  const { cartItems, userInfo } = useSelector(selectShopping);
  const {
    data: ongoingGroupsData,
    isLoading: ongoingGroupsLoading,
    error: ongoingGroupsError,
  } = useGetPublicOngoingGroupsQuery();
  const { data: productsData, isLoading: productsLoading } =
    useGetActiveProductsQuery();

  const posthog = usePostHog();
  posthog.identify(userInfo?.data?.customer.email);

  const products = productsData?.data?.products ?? [];
  const groups = ongoingGroupsData?.data?.groups ?? [];

  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const error = searchParams.get('error');

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.sale_price * item.cartQuantity;
    }, 0);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
    setIsOngoingModalOpen(false);
  };

  const openOngoingModal = () => {
    setIsOngoingModalOpen(true);
    setIsCartModalOpen(false);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const closeOngoingModal = () => {
    setIsOngoingModalOpen(false);
  };

  useEffect(() => {
    async function setUser() {
      if (!token && !error) {
        return;
      }

      try {
        if (token) {
          const response = await axios.get<ILoginResponse>(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/google/user`,
            {
              headers: { Authorization: `Bearer ${token}` }
            });

          const { data } = response
          dispatch(addUser({ data }));
          dispatch(saveToken(data.token));
          toast.success('Logged In successfully', {
            autoClose: 500,
          });

          posthog.identify(data.customer.email);
        }

        if (error) {
          toast.error('Sign in error! Login with username and password!', {
            autoClose: 3000,
            className: 'w-80',
          });
        }

      } catch (error) {
        toast.error(
          'Failed to verify token: ',
          { autoClose: 5000 }
        );
      }
    }

    setUser()
  }, []);

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
        <ThreeBannerLayout />
        <FeaturedProducts />

        <ViewMore />
        <div
          className={`hidden sm:block ${isCartModalOpen
            ? 'hidden'
            : 'fixed right-0 top-1/2 z-50 flex -translate-y-1/2 transform items-center justify-center'
            }`}
        >
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

        <div
          className={`hidden sm:block ${isOngoingModalOpen
            ? 'hidden'
            : 'fixed left-0 top-1/2 z-50 flex -translate-y-1/2 transform items-center justify-center'
            }`}
        >
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
                  <span>{groups.length}</span> Ongoing Purchases near me
                </p>
              </div>
            </div>
          </div>
        </div>

        <CartModal onClose={closeCartModal} isOpen={isCartModalOpen} />
        <OngoingModal onClose={closeOngoingModal} isOpen={isOngoingModalOpen} />
      </Container>
    </main>
  );
}
