// PickupLocation.tsx
import React, { useState } from 'react';

interface PickupLocationProps {
  closePickupModal: () => void;
}

const PickupLocation: React.FC<PickupLocationProps> = ({ closePickupModal }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedAddress, setSelectedAddress] = useState<string>('');

  const regions = ['Region 1', 'Region 2']; // Add more regions as needed
  const cities = ['City 1', 'City 2']; // Add more cities as needed

  return (
    <div
      id='modal-overlay'
      className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'
    >
      <div className='rounded-md bg-white p-8 'style={{ width: '50%' }}>
        <h2 className='mb-4 text-xl font-bold text-[#298592]'>SELECT PICKUP LOCATION</h2>

        {/* Set width for the row */}
        <div className='flex mb-4 ' style={{ width: '100%' }}>
          <div className='w-1/2 mr-2 '>
            <label className='block  text-gray-400'>Region</label>
            <select
              className='w-full border border-gray-300 p-2 text-gray-400 rounded-md'
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value='' disabled>Select Region</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <div className='w-1/2 ml-2'>
            <label className='block  text-gray-400'>City</label>
            <select
              className='w-full border border-gray-300 p-2 text-gray-400 rounded-md'
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value='' disabled>Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>


        {/* Radio buttons for Address */}
        <div className='mb-4'>
          <label className='block  text-gray-400'>Address</label>
          <div>
            <input
              type='radio'
              id='address1'
              name='address'
              value='Address 1'
              checked={selectedAddress === 'Address 1'}
              onChange={() => setSelectedAddress('Address 1')}
            />
            <label htmlFor='address1'  className='text-gray-400' >Address 1</label>
          </div>
                  <hr className='my-4 ' />

          <div>
            <input
              type='radio'
              id='address2'
              name='address'
              value='Address 2'
              checked={selectedAddress === 'Address 2'}
              onChange={() => setSelectedAddress('Address 2')}
            />
            <label htmlFor='address2'   className=' text-gray-400'>Address 2</label>
          </div>
        </div>

        {/* Separator */}

        {/* Buttons */}
        <div className='rounded-md bg-white p-8 m-5 flex' style={{ width: '100%' }}>
  <button
    className='mr-5 px-4 py-2 [#298592]  border-[#298592] border-solid border-2 text-[#298592] rounded-md' style={{ width: '100%' }}
    onClick={closePickupModal}
  >
    Cancel
  </button>
  <button
    className=' bg-[#298592] px-4 py-2 text-white rounded-md'style={{ width: '100%' }}
    onClick={() => {
      // Handle Save
      console.log('Selected Region:', selectedRegion);
      console.log('Selected City:', selectedCity);
      console.log('Selected Address:', selectedAddress);
    }}
  >
    Select Pickup Location
  </button>
</div>

<>

</>

      </div>
    </div>
  );
};

export default PickupLocation;
