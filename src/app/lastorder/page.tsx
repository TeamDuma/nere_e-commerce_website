'use client';

import { useLazyGetOrderConfirmationQuery } from '@/lib/redux/services/cart';
import { Group } from '@/types/group';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef, use } from 'react';
import { resetCart, selectShopping, useDispatch } from '@/lib/redux';
import PostHogClient from '@/app/posthog';
import { useSelector } from 'react-redux';
import { useLazyGetOrdersQuery } from '@/lib/redux/services/customers';
import ProgressBar from '@/components/common/ProgressBar';
import { CiShare2 } from 'react-icons/ci';
import { FiMapPin } from 'react-icons/fi';
import { MdGroups, MdOutlineAccessAlarms } from 'react-icons/md';
import GroupItem from '../checkout/summary/components/GroupItem';
import OrderSummary from '../checkout/summary/components/OrderSummary';
import ShareModal from '../checkout/summary/components/ShareModal';
import Link from 'next/link';

const Orders = () => {
  const { userInfo } = useSelector(selectShopping);

  const uid = userInfo?.data?.customer?.uid || '';

  // const uid = 'fcCBb3H8GaKDcG5MBM2w1Q';

  const [getOrders, { data, isLoading, isError }] = useLazyGetOrdersQuery();

  useEffect(() => {
    getOrders(uid);
  }, [uid, getOrders]);

  const orders = data?.data || [];
  const latestOrder = orders.at(-1);
  const latestOrderItems = latestOrder?.groups || [];
  console.log('orders', orders);

  const [status, setStatus] = useState<'pending' | 'success'>('pending');
  const [groups, setGroups] = useState<Group[]>([]);

  const [total, setTotal] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalSavings, setTotalSavings] = useState<number>(0);
  const [groupModal, setGroupModal] = useState<Group>();

  const searchParams = useSearchParams();
  const reference = searchParams.get('reference');

  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const posthogClient = PostHogClient();
  posthogClient.capture({
    distinctId: userInfo?.data?.customer.email,
    event: 'order_confirmation_page_viewed',
    properties: { reference },
  });

  const handleShowModal = (group: Group) => {
    setShowModal(true);
    setGroupModal(group);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleClickOutsideModal = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    window.addEventListener('click', handleClickOutsideModal);

    return () => {
      window.removeEventListener('click', handleClickOutsideModal);
    };
  }, []);

  if (!userInfo || !userInfo.data) {
    return (
      <div className='text-center text-5xl text-black'>
        Please log in to view this content
      </div>
    );
  }

  return (
    <>
      <div className='flex h-full w-screen flex-col px-8 py-7 md:flex-row'>
        {latestOrderItems.length === 0 ? (
          <div className='flex w-full flex-col items-center justify-center text-5xl font-bold'>
            No Orders Yet!
            <Link href='/products'>
              <h1 className='my-5 mt-4 cursor-pointer text-xl font-normal text-[#F58929] hover:text-[#F58929] hover:underline hover:underline-offset-2'>
                Go to the Shop
              </h1>
            </Link>
          </div>
        ) : (
          <>
            <div className='flex h-fit w-full flex-col gap-4'>
              <p className='text-xl font-extrabold text-[#298592]'>
                Congrats! 🎉 You Saved GHC {totalSavings.toFixed(2)} on your
                basket
              </p>
              {latestOrderItems.map((group) => (
                <GroupItem
                  key={group.id}
                  group={group as Group}
                  showModal={handleShowModal}
                />
              ))}
            </div>
            <div className='flex h-fit w-full flex-col gap-4 p-4 '>
              <OrderSummary amount={total} totalItems={totalItems} />
            </div>
          </>
        )}

        {/* Modal */}
        {showModal && (
          <div ref={modalRef}>
            <ShareModal
              onClose={handleCloseModal}
              group={groupModal!}
              isOpen={false}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
