import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal, { Styles } from 'react-modal';
import {
  selectShopping,
  setSelectedLocationId,
} from '@/lib/redux/slices/shopping';
import { useGetlocationsQuery } from '@/lib/redux/services/location';
import { ILocation } from '@/types/location';
import { IoIosArrowDown } from 'react-icons/io';
import MoreInformation from './MoreInformation';

const customStylesLarge: Styles = {
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
    width: '650px',
    height: '50px',
    borderRadius: '15px',
    border: 'none',
  },
};
const customStylesSmall: Styles = {
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
    flexDirection: 'column',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '320px',
    margin: 'auto',
    borderRadius: '15px',
    border: 'none',
    height: '680px',
  },
};

const SelectPickupLocation: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
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

  const [expandedAddress, setExpandedAddress] = useState<number | null>(null);

  const [moreInformationData, setMoreInformationData] = useState<{ selectedOption: string | null; location: ILocation | null }>({
    selectedOption: null,
    location: null
  });
  
  const closeModal = () => {
    onClose();
  };
  const toggleAccordion = (locationId: number) => {
    if (expandedAddress === locationId) {
      setExpandedAddress(null);
    } else {
      setExpandedAddress(locationId);
    }
  };



  const renderAddresses = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (locations.length === 0) {
      return <div>No locations available.</div>;
    }

    return (
      <div className='mb-2 '>
        <label className='mb-2 block text-gray-400'>Address</label>
        {locations.map((location: ILocation) => (
          <div key={location.id}>
            <div className='flex justify-between p-2'>
              <div className='rounded-md bg-white'>
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
                  className='m-4 cursor-pointer text-gray-400'
                  onClick={() => toggleAccordion(location.id)}
                >
                  {location.name}
                </label>

                <div className='ml-8 text-gray-500'>
                  

                  <p className='my-1	text-xs text-[#000]'>
                    Mon - Fri 08:00 - 5:30 ; Sat 09:00 - 15:30
                  </p>
                  <p
                        onClick={() =>
                          setMoreInformationData({
                            selectedOption: 'more',
                            location: location
                          })
                        }
                        className='my-1 cursor-pointer text-xs font-bold text-[#298592] underline underline-offset-1'
                      >
                        {' '}
                        More information{'>'}
                      </p>
                </div>
              </div>
            </div>

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
          <h2 className=' text-xl font-bold text-[#298592]'>
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
          {moreInformationData.selectedOption === 'more' && (
            <MoreInformation
              onClose={closeModal}
              isOpen={isOpen}
              selectedAddress={selectedAddress}
              location={moreInformationData.location}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default SelectPickupLocation;
