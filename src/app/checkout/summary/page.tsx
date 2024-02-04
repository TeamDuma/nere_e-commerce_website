'use client'

import { useLazyGetOrderConfirmationQuery } from '@/lib/redux/services/cart';
import { Group } from '@/types/group';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import GroupItem from './components/GroupItem';
import OrderSummary from './components/OrderSummary';
import ShareModal from './components/ShareModal';

const Page = () => {
    const [getOrderConfirmation, { data, isFetching, isLoading, isSuccess }] = useLazyGetOrderConfirmationQuery({ pollingInterval: 3000 });

    const [status, setStatus] = useState<'pending' | 'success'>('pending');
    const [groups, setGroups] = useState<Group[]>([]);

    const [total, setTotal] = useState<number>(0);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [groupModal, setGroupModal] = useState<Group>();

    const searchParams = useSearchParams();
    const reference = searchParams.get('ref');

    const router = useRouter();

    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleShowModal = (group: Group) => {
        setShowModal(true);
        setGroupModal(group);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        if (reference) {
            getOrderConfirmation(reference).then(response => {
                setStatus(response.data?.status!);
                console.log('response', response.data?.status);
                setGroups(response.data?.data?.groups!);
                setTotal(response.data?.data?.amount!);
                setTotalItems(response.data?.data?.total_items!);
            });
        } else {
            router.push('/');
        }
    }, [reference]);

    useEffect(() => {
        const handleClickOutsideModal = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowModal(false);
            }
        };

        window.addEventListener('click', handleClickOutsideModal);

        return () => {
            window.removeEventListener('click', handleClickOutsideModal);
        };
    }, []);

    return (
        <>
            {status === 'pending' && (
                <div>
                    <div className='flex flex-col relative justify-center items-center'>
                        <div className='flex flex-col gap-3 w-72 h-72 bg-[#298592] justify-center items-center rounded-xl'>
                            <div className="animate-spin rounded-full border-t-4 border-b-4 border-white h-20 w-20"></div>
                            <div className='text-white'>Awaiting payment verification...</div>
                        </div>
                    </div>
                </div>
            )}
            {status === 'success' && (
                <div className='flex h-full w-screen flex-col px-8 py-7 md:flex-row'>
                    <div className='flex h-fit w-full flex-col gap-4'>
                        <p className='text-xl font-extrabold text-[#298592]'>
                            Congrats! 🎉 You Saved GHC 50 on your basket
                        </p>
                        {groups.map(group => (
                            <GroupItem key={group.id} group={group} showModal={handleShowModal}/>
                        ))}
                    </div>
                    <div className='flex h-fit w-full flex-col gap-4 p-4 md:w-2/3'>
                        <OrderSummary amount={total} totalItems={totalItems}/>
                    </div>

                    {/* Modal */}
                    {showModal && (
                        <div ref={modalRef}>
                            <ShareModal onClose={handleCloseModal} group={groupModal!}/>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Page;
