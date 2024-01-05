'use client';
import { useState, useEffect } from 'react';
import PickupLocation from './components/PickupLocation';
import { useRouter } from 'next/navigation';
import AddAddressModal from './components/AddAddressModal';

const DeliveryPage = () => {
  const [isPickupModalOpen, setPickupModalOpen] = useState(false);
  const [isCustomAddressModalOpen, setCustomAddressModalOpen] = useState(false);

  const router = useRouter();

  const openPickupModal = () => {
    setPickupModalOpen(true);
  };
  const openCustomAddressModal = () => {
    setCustomAddressModalOpen(true);
  };

  const closeModal = () => {
    setPickupModalOpen(false);
    setCustomAddressModalOpen(false);
  };

  return (
    <>
      <div className='flex h-full w-screen flex-col px-14 py-7 md:flex-row'>
        <div className='flex h-fit w-full flex-col gap-4 p-4 '>
          <div className='mt-5 flex flex-col rounded-sm border p-4 text-lg font-semibold shadow-md'>
            <div className='flex flex-col justify-between gap-3 md:flex-row'>
              <div className='mb-4'>
                <h3 className='mb-2 text-lg font-bold'>DELIVERY DETAILS</h3>

                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='pickupLocation'
                    name='deliveryOption'
                    className='mr-2'
                    onChange={openPickupModal}
                  />
                  <label htmlFor='pickupLocation'>Pick-up location</label>
                </div>

                <div className='pl-8 text-sm text-gray-500'>
                  Delivery between 05 December and 07 December
                </div>
                <div className='mb-4'>
                  <div className='mb-2 flex items-center'>
                    <input
                      type='radio'
                      id='customAddress'
                      name='deliveryOption'
                      className='mr-2'
                      onChange={openCustomAddressModal}
                    />
                    <label htmlFor='customAddress'>Select Custom Address</label>
                  </div>
                  <div className='pl-8 text-sm text-gray-500'>
                    Delivery between 05 December and 07 December
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ml-3 mt-5 flex h-fit w-full flex-col gap-3 p-4 md:w-2/3'>
          <div className='flex flex-col gap-4 rounded-sm border p-4 text-lg font-semibold shadow-md'>
            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>Your order summary</p>
            </div>
            <hr className='h-0.5 bg-gray-200' />

            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>Total items (5) </p>
              <p className='text-end font-bold'> GH¢ 1280.00</p>
            </div>

            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>Delivery fee</p>
              <p className='text-end font-bold'> GH¢ 0.00</p>
            </div>

            <hr className='h-0.5 bg-gray-200' />
            <div className='flex flex-row justify-between'>
              <p className='text-gray-600'>Total</p>
              <div>
                <p className='text-end font-bold'> GH¢ 1280.00</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <button
                onClick={() => router.push('/orderPreview')}
                className='text-hover w-full rounded-sm bg-[#298592] p-2 text-sm text-white shadow-md transition-colors hover:bg-[#298592]'
              >
                FINISH
              </button>
            </div>
          </div>
        </div>
      </div>

      <PickupLocation onClose={closeModal} isOpen={isPickupModalOpen} />
      <AddAddressModal onClose={closeModal} isOpen={isCustomAddressModalOpen} />
    </>
  );
};

export default DeliveryPage;
