import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import ArrowIcon from './ArrowIcon';

const WhatsappCommunityBanner = () => {
  return (
    <>
      <div className='overflow-x-auto'>
        <div className='mb-4 flex h-16 justify-center'>
          <div className='flex items-center'>
            <ArrowIcon />
            <a
              className='hover:opacity-75'
              href='https://chat.whatsapp.com/GPWialGrINjHtW4tJyzqEt'
              target='_blank'
            >
              <div className='flex h-16 w-96 cursor-pointer items-center justify-center rounded bg-[#FCF5E8] text-center md:mr-8'>
                <BsWhatsapp className='mr-2' color='#25D366' fontSize={24} />
                <span className='text-lg font-bold text-[#0E464E]'>
                  Join our WhatsApp Community
                </span>
              </div>{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsappCommunityBanner;
