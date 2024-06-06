'use client';

import Link from 'next/link';
import Logo from '../Logo';
import FooterLogo from '../FooterLogo';
import Instagram from '../InstagramIcon';
import InstagramIcon from '../InstagramIcon';
import WhatsappIcon from '../WhatsappIcon';
import FaceBookIcon from '../FaceBookIcon';
import WecareIcon from '../WecareIcon';
import { useState } from 'react';
import CookieModal from '../CookieModal';

export const FooterOld = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <footer className='bg-[#F0F4F5]'>
        <div className='md:flex-no-wrap container mx-auto flex flex-col flex-wrap p-1 md:flex-row md:items-center lg:items-start'>
          <div className='mb grid grid-cols-1 lg:grid-cols-3'>
            <div className='mb-5 ml-7'>
              <FooterLogo />

              <p className='mt-2 max-w-xs text-sm text-[#1A464C]'>
                Follow us on
              </p>
              <div className='mt-2 flex space-x-6 text-[#1A464C]'>
                <a
                  className='rounded-full bg-orange-500 p-2 hover:opacity-75'
                  href='https://www.facebook.com/nerecommunity'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> Facebook </span>
                  <FaceBookIcon />
                </a>

                <a
                  className='rounded-full bg-orange-500 p-2 hover:opacity-75'
                  href='https://www.instagram.com/nere_community'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> Instagram </span>
                  <InstagramIcon />
                </a>
                <a
                  className='rounded-full bg-orange-500 p-2 hover:opacity-75'
                  href='https://chat.whatsapp.com/GPWialGrINjHtW4tJyzqEt'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='sr-only'> Whatsapp </span>
                  <WhatsappIcon />
                </a>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
              <div>
                <p className='font-bold text-[#1A464C]'>About</p>
                <nav className='mt-2 flex flex-col  text-sm text-[#1A464C]'>
                  <a className='hover:opacity-75' href='/maintenance-page'>
                    {' '}
                    What we do{' '}
                  </a>
                  <a className='hover:opacity-75' href='/maintenance-page'>
                    {' '}
                    Agent Locations{' '}
                  </a>
                  <a className='hover:opacity-75' href='/maintenance-page'>
                    {' '}
                    Careers{' '}
                  </a>
                </nav>
              </div>
              <div>
                <p className='font-bold  text-[#1A464C]'>Join our community </p>
                <nav className='mt-2 flex flex-col  text-sm text-[#1A464C]'>
                  <a
                    className='hover:opacity-75'
                    href='https://chat.whatsapp.com/GPWialGrINjHtW4tJyzqEt'
                  >
                    {' '}
                    WhatsApp Community{' '}
                  </a>
                  <a
                    className='hover:opacity-75'
                    href='https://forms.gle/V2gyKYt9xdD6EL4JA'
                    target='_blank'
                  >
                    {' '}
                    Become an Agent{' '}
                  </a>
                  <a
                    className='hover:opacity-75'
                    href='https://forms.gle/LLoZ5uqj8wBnRo8FA'
                    target='_blank'
                  >
                    {' '}
                    Become a Supplier{' '}
                  </a>
                </nav>
              </div>
              <div>
                <p className='font-bold text-[#1A464C]'>Legal</p>
                <nav className='mt-2 flex flex-col text-sm text-[#1A464C]'>
                  <a className='hover:opacity-75' href='/legal/privacy'>
                    {' '}
                    Privacy Notice{' '}
                  </a>

                  <a
                    className='hover:opacity-75'
                    href='/legal/cookies'
                    //  onClick={openModal}
                  >
                    {' '}
                    Cookie Policy
                  </a>
                  <a
                    className='hover:opacity-75'
                    href='/legal/terms-of-service'
                  >
                    {' '}
                    Terms of service
                  </a>
                </nav>
              </div>
              <div>
                <p className='font-bold text-[#1A464C]'>Contact</p>
                <nav className='mt-2 flex flex-col text-sm text-[#1A464C]'>
                  <a className='hover:opacity-75' href='tel:+233532686733'>
                    {' '}
                    +233 53 268 6733{' '}
                  </a>
                  <a
                    className='hover:opacity-75'
                    href='mailto: info@nerecommunity.com'
                  >
                    {' '}
                    info@nerecommunity.com{' '}
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className='row bg-[#1A464C] '>
          <div className='container py-2 '>
            <div className='flex items-center justify-between '>
              <p className='m-4 text-sm capitalize text-[#fff] '>
                Product of Nere LTD © All rights reserved
              </p>

              {/* <WecareIcon /> */}
            </div>

            <CookieModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </footer>
    </>
  );
};
