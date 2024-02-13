import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal, { Styles } from 'react-modal';
import {
  selectShopping,
  setSelectedLocationId,
} from '@/lib/redux/slices/shopping';
import { useGetlocationsQuery } from '@/lib/redux/services/location';
import { ILocation } from '@/types/location';

const customStylesLarge: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '550px',
    height: '550px',
    borderRadius: '15px',
  },
};
const customStylesSmall: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '400px',
    margin: 'auto',
    borderRadius: '15px',
    height: '90vh',
  },
};

const PickupLocation: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { selectedLocationId } = useSelector(selectShopping);

  const { data, isLoading } = useGetlocationsQuery();
  const locations = data?.data || [];

  const [selectedAddress, setSelectedAddress] = useState<ILocation | null>(
    () => {
      return (
        locations.find((location) => location.id === selectedLocationId) || null
      );
    }
  );

  const handleSelectLocation = () => {
    if (selectedAddress) {
      dispatch(setSelectedLocationId(selectedAddress.id));
      onClose();
    } else {
      onClose();
    }
  };

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
              defaultChecked={selectedAddress?.id === location.id}
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
        style={window.innerWidth > 600 ? customStylesLarge : customStylesSmall}
        contentLabel='Example Modal'
      >
        <div className='rounded-md bg-white p-2' style={{ width: '100%' }}>
          <h2 className='mb-4 text-xl font-bold text-[#298592]'>
            SELECT PICKUP LOCATION
          </h2>

          {renderAddresses()}

          <div className='m-5 flex flex-col sm:flex-row'>
            <button
              className='mb-2 rounded-md border-2 border-solid border-[#298592] p-2 text-[#298592] sm:mb-0 sm:mr-2'
              style={{ width: '100%' }}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className='rounded-md bg-[#298592] p-2 text-white'
              style={{ width: '100%' }}
              onClick={handleSelectLocation}
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
