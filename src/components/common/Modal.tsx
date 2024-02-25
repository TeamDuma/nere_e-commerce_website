import React from 'react';
import Modal from 'react-modal';

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles: ReactModal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // border: '2px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
  },
};

Modal.setAppElement('#root');

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div className='text-center'>
        <h2 className='mb-4 text-2xl font-bold'>Coming Soon</h2>
        <img
          src='your_image_url.jpg'
          alt='Coming Soon'
          className='mb-4 h-40 w-full object-cover'
        />
        <h3 className='mb-2 text-lg font-semibold'>Your Header</h3>
        <p className='text-gray-600'>Your text goes here.</p>
      </div>
    </Modal>
  );
};

export default CustomModal;
