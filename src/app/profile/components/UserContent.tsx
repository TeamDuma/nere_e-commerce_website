import PickupLocation from '@/app/delivery/components/SelectPickupLocation';
import EditProfile from '@/components/common/EditProfile';
import { selectShopping, setSelectedLocationId } from '@/lib/redux';
import { useGetlocationsQuery } from '@/lib/redux/services/location';
import { ILocation } from '@/types/location';
import { useEffect, useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

const UserContent = () => {
  const [PickupLocationVisible, setPickupLocationVisible] = useState(false);
  const [ProfileEditVisible, setProfileEditVisible] = useState(false);

  const dispatch = useDispatch();
  const { selectedLocationId } = useSelector(selectShopping);
  const { userInfo } = useSelector(selectShopping);

  const { data, isLoading } = useGetlocationsQuery();
  const locations = data?.data || [];
  const [selectedAddress, setSelectedAddress] = useState<ILocation | null>(
    () => {
      return (
        locations.find((location) => location.id === selectedLocationId) || null
      );
    }
  );

  const [formData, setFormData] = useState({
    name: userInfo?.data?.customer?.name || '',
    email: userInfo?.data?.customer?.email || '',
    phone: userInfo?.data?.customer?.phone || '',
    title: userInfo?.data?.customer?.title || '',
  });

  // const [formData, setFormData] = useState({
  //   name: userInfo.data.customer.name || '',
  //   email: userInfo.data.customer.email || '',
  //   phone: userInfo.data.customer.phone || '',
  // });

  useEffect(() => {
    if (data && selectedLocationId) {
      const newlySelectedAddress = locations.find(
        (location) => location.id === selectedLocationId
      );
      setSelectedAddress(newlySelectedAddress || null);
    }
  }, [selectedLocationId, data]);

  const openPickupModal = () => {
    setPickupLocationVisible(true);
  };

  const closeModal = () => {
    setPickupLocationVisible(false);
  };
  const openEditModal = () => {
    setProfileEditVisible(true);
  };

  const closeEditModal = () => {
    setProfileEditVisible(false);
  };

  if (!userInfo || !userInfo.data) {
    return <div>Please log in to view this content</div>;
  }

  return (
    <>
      <h1 className='m-2 text-base font-bold text-[#1A464C]'>Profile</h1>

      <div>
        <div className='mb-4 grid grid-cols-6 gap-y-2 rounded-md border border-gray-100 bg-white p-5'>
          <div className='col-span-5  '>
            <p className='text-sm font-medium text-[#1A464C]'>
              {' '}
              <FaCircleCheck />
              {formData.name}{' '}
            </p>
            <div className='col-span-5   '>
              <div className='mt-4 flex flex-wrap'>
                <div className='w-full border-l-2 p-1 md:w-auto md:flex-1 md:border-l-0'>
                  <p className='text-xs font-medium text-[#979797]'>
                    Email Address
                  </p>
                  <p className='font-medium text-[#1A464C]'>{formData.email}</p>
                </div>
                <div className='w-full border-l-2  p-1 md:w-auto md:flex-1 md:border-l-0'>
                  <p className='text-xs font-medium text-[#979797]'>Number</p>
                  <p className='font-medium text-[#1A464C]'>{formData.phone}</p>
                </div>
                <div className='w-full border-l-2 p-1 md:w-auto md:flex-1 md:border-l-0'>
                  <p className='text-xs font-medium text-[#979797]'>Title</p>
                  <p className='font-medium text-[#1A464C]'>{formData.title}</p>
                </div>
                <div className='w-full border-l-2 p-1 md:w-auto md:flex-1 md:border-l-0'>
                  <p className='text-xs font-medium text-[#979797]'>
                    Total Savings
                  </p>
                  <p className='font-medium text-[#1A464C]'>GHS 500.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className=' sm:ml-0 md:col-start-auto md:ml-0 md:justify-end'>
            <p
              onClick={openEditModal}
              className='cursor-pointer text-xs font-medium text-[#298592] underline underline-offset-1'
            >
              Edit
            </p>
          </div>
        </div>

        <div className='mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <div className='rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5'>
            <div className='rounded-md  bg-white' style={{ width: '100%' }}>
              <div className='flex justify-between p-1'>
                <div className='rounded-md bg-white'>Pickup Location</div>
                <div
                  className='cursor-pointer text-xs text-[#1A464C] underline underline-offset-1	 '
                  onClick={openPickupModal}
                >
                  Change pickup location {'>'}
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='rounded-md bg-white p-1'>
                  {selectedAddress ? (
                    <>
                      <p className='text-sm	 font-medium	'>
                        {selectedAddress.name}
                      </p>
                      <p className='text-xs font-medium		 text-[#979797] '>
                        MEST Ambassadorial Enclave, 20 Aluguntugui St, Accra
                      </p>
                    </>
                  ) : (
                    <p className='text-xs font-medium		 text-[#979797] '>
                      Please select a Location
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5'>
            <div className='flex justify-between p-1'>
              <div className='rounded-md bg-white'>
                <p className='ml-2'> 22 Nere Quest</p>
              </div>
              <div className='cursor-pointer text-xs text-[#1A464C]	 '>
                <img
                  className='mx-5 my-1'
                  src='/images/coinSmall.svg'
                  alt='Coin'
                />
              </div>
            </div>
            <div className='flex justify-between p-1'>
              <div className='cursor-pointer text-xs text-[#1A464C]	 '>
                <img
                  className='mx-5 my-1'
                  src='/images/joystickSmall.svg'
                  alt='Coin'
                />

                <p className='my-1 ml-8'> 34</p>
                <p className='ml-2'> Game point</p>
              </div>
              <div className='mt-1 cursor-pointer text-xs text-[#1A464C]	 '>
                <img
                  className='mx-5 my-1'
                  src='/images/loyaltySmall.svg'
                  alt='Coin'
                />

                <p className='my-1 ml-8'> 34</p>
                <p className='ml-2'> Loyalty point</p>
              </div>
            </div>
          </div>

          <PickupLocation onClose={closeModal} isOpen={PickupLocationVisible} />
          <EditProfile onClose={closeEditModal} isOpen={ProfileEditVisible} />
        </div>
      </div>
    </>
  );
};

export default UserContent;
