import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal, { Styles } from 'react-modal';
import {
  selectShopping,
  setSelectedLocationId,
} from '@/lib/redux/slices/shopping';
import { useGetlocationsQuery } from '@/lib/redux/services/location';
import { ILocation } from '@/types/location';

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'rgba( 190,192,193, 0.7)',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '700px',
    borderRadius: '15px',
  },
};

interface ISession {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
}

const PickupLocation: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { selectedLocationId } = useSelector(selectShopping);

  const { data, isLoading } = useGetlocationsQuery();

  const locations = data || [];

  console.log('data', locations);

  const [selectedAddress, setSelectedAddress] = useState<ILocation | null>(
    () =>
      locations.find((location) => location.id === selectedLocationId) || null
  );

  useEffect(() => {
    if (data && selectedLocationId) {
      const newlySelectedAddress = locations.find(
        (location) => location.id === selectedLocationId
      );
      setSelectedAddress(newlySelectedAddress || null);
    }
  }, [selectedLocationId, data]);

  const renderAddresses = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (locations.length === 0) {
      return <div>No locations available.</div>;
    }

    return (
      <div className='mb-4'>
        <label className='mb-4 block text-gray-400'>Address</label>
        {locations.map((location: ILocation) => (
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

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='rounded-md bg-white p-8' style={{ width: '100%' }}>
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
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className='rounded-md bg-[#298592] px-4 py-2 text-white'
              style={{ width: '100%' }}
              //  onClick={handleSelectLocation}
            >
              Select Pickup Location
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PickupLocation;
