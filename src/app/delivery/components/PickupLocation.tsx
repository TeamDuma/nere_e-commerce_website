import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetlocationsQuery } from '@/lib/redux/services/location';
import {
  selectShopping,
  setSelectedLocationId,
} from '@/lib/redux/slices/shopping';

interface Location {
  id: number;
  name: string;
}

interface PickupLocationProps {
  closePickupModal: () => void;
}

const PickupLocation: React.FC<PickupLocationProps> = ({
  closePickupModal,
}) => {
  const dispatch = useDispatch();
  const { selectedLocationId } = useSelector(selectShopping);

  const { data, isLoading } = useGetlocationsQuery();
  console.log('useGetLocationsQuery', selectedLocationId);

  const [selectedAddress, setSelectedAddress] = useState<Location | null>(
    () => {
      return data
        ? data.find((location) => location.id === selectedLocationId) || null
        : null;
    }
  );

  useEffect(() => {
    if (data && selectedLocationId) {
      const newlySelectedAddress = data.find(
        (location) => location.id === selectedLocationId
      );
      setSelectedAddress(newlySelectedAddress || null);
    }
  }, [selectedLocationId, data]);

  const renderAddresses = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!data || data.length === 0) {
      return <div>No locations available.</div>;
    }

    return (
      <div className='mb-4'>
        <label className='mb-4 block text-gray-400'>Address</label>
        {data.map((location: Location) => (
          <div key={location.id}>
            <input
              type='radio'
              id={`address${location.id}`}
              name='address'
              value={location.name}
              checked={selectedAddress?.id === location.id}
              onChange={() => setSelectedAddress(location)}
            />
            <label
              htmlFor={`address${location.id}`}
              className='m-4 text-gray-400'
            >
              {location.name}
            </label>
            <hr className='my-2' />
          </div>
        ))}
      </div>
    );
  };

  const handleSelectLocation = () => {
    if (selectedAddress) {
      dispatch(setSelectedLocationId(selectedAddress.id));
      closePickupModal();
    } else {
      console.log('No address selected.');
      closePickupModal();
    }
  };

  return (
    <div
      id='modal-overlay'
      className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'
    >
      <div className='rounded-md bg-white p-8' style={{ width: '50%' }}>
        <h2 className='mb-4 text-xl font-bold text-[#298592]'>
          SELECT PICKUP LOCATION
        </h2>

        {renderAddresses()}

        <div
          className='m-5 flex rounded-md bg-white p-8'
          style={{ width: '100%' }}
        >
          <button
            className='[#298592] mr-5 rounded-md border-2 border-solid border-[#298592] px-4 py-2 text-[#298592]'
            style={{ width: '100%' }}
            onClick={closePickupModal}
          >
            Cancel
          </button>
          <button
            className='rounded-md bg-[#298592] px-4 py-2 text-white'
            style={{ width: '100%' }}
            onClick={handleSelectLocation}
          >
            Select Pickup Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default PickupLocation;
