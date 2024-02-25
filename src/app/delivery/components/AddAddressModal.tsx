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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '650px',
    borderRadius: '15px',
    border: 'none',
  },
};

const AddAddressModal: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const dispatch = useDispatch();
  const { selectedLocationId } = useSelector(selectShopping);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  const regions = ['Region 1', 'Region 2'];
  const cities = ['City 1', 'City 2'];

  const { data, isLoading } = useGetlocationsQuery();

  const locations = data?.data || [];

  const [selectedAddress, setSelectedAddress] = useState<ILocation | null>(
    () => {
      return data
        ? locations.find((location) => location.id === selectedLocationId) ||
            null
        : null;
    }
  );

  useEffect(() => {
    if (data && selectedLocationId) {
      const newlySelectedAddress = locations.find(
        (location) => location.id === selectedLocationId
      );
      setSelectedAddress(newlySelectedAddress || null);
    }
  }, [selectedLocationId, data]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel='ADD NEW ADDRESS'
      >
        <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
          <div
            className='w-96 rounded-md bg-white p-8'
            style={{ width: '100%' }}
          >
            <h2 className='mb-4 text-xl font-bold text-[#298592]'>
              ADD NEW ADDRESS
            </h2>

            <div className='m-2 flex'>
              <div className='w-1/2 pr-2'>
                <label className='block  text-gray-400'>First Name</label>
                <input
                  type='text'
                  className='w-full rounded-md border px-3 py-2'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className='w-1/2 pl-2'>
                <label className='block  text-gray-400'>Last Name</label>
                <input
                  type='text'
                  className='w-full rounded-md border px-3 py-2'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className='mb-4'>
              <label className='block  text-gray-400'>Phone Number</label>
              <input
                type='text'
                className='w-full rounded-md border px-3 py-2'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block  text-gray-400'>Address</label>
              <input
                type='text'
                className='w-full rounded-md border px-3 py-2'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block  text-gray-400'>
                Additional Information
              </label>
              <input
                type='text'
                className='w-full rounded-md border px-3 py-2'
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
            </div>

            <div className='mb-4 flex ' style={{ width: '100%' }}>
              <div className='mr-2 w-1/2 '>
                <label className='block  text-gray-400'>Region</label>
                <select
                  className='w-full border border-gray-300 p-2 text-gray-400'
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  <option value='' disabled>
                    Select Region
                  </option>
                  {regions.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              <div className='ml-2 w-1/2'>
                <label className='block  text-gray-400'>City</label>
                <select
                  className='w-full border border-gray-300 p-2 text-gray-400'
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value='' disabled>
                    Select City
                  </option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='mb-2 '>
              <label className='block  text-gray-400'>
                <input
                  type='checkbox'
                  checked={isDefault}
                  onChange={() => setIsDefault(!isDefault)}
                />
                Set as Default
              </label>
            </div>

            <div
              className='flex rounded-md bg-white p-8'
              style={{ width: '100%' }}
            >
              <button
                className='[#298592] mr-5 rounded-md border-2  border-solid border-[#298592] px-4 py-2 text-[#298592]'
                style={{ width: '100%' }}
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className=' rounded-md bg-[#298592] px-4 py-2 text-white'
                style={{ width: '100%' }}
                onClick={() => {
                  console.log(
                    'Selected address:',
                    selectedRegion,
                    selectedCity,
                    address
                  );
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddAddressModal;
