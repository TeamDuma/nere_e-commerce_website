import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import ArrowIcon from './ArrowIcon';

const WhatsappCommunityBanner = () => {
  return (
    <>
      <div className='overflow-x-auto'>
        <div className=' flex justify-center pb-1 '>
          <ArrowIcon />

          <div className='flex items-center '>
            <a
              className='hover:opacity-75'
              href='https://chat.whatsapp.com/GPWialGrINjHtW4tJyzqEt'
              target='_blank'
            >
              <div className=' flex flex-col items-center justify-center rounded-2xl bg-[#FCF5E8] p-4 text-center md:mr-8 md:flex-row'>
                <BsWhatsapp className='mr-2' color='#25D366' fontSize={24} />
                <span className='text-lg font-bold text-[#0E464E]'>
                  Join our WhatsApp Community 🥳
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsappCommunityBanner;
