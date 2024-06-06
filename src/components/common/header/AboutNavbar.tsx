import React from 'react';
import UserIcon from '../User';
import Link from 'next/link';
import { MainLogo } from '../icons/MainLogo';
import { HumbugerIcon } from '../icons/HumbugerIcon';

const navLinks = [
  { name: 'About us', link: '' },
  { name: 'Impact', link: '' },
  { name: 'Sustainability', link: '' },
  { name: 'Contact us', link: '' },
];

const AboutNavbar = () => {
  return (
    <div className='fixed top-0 z-30 w-full backdrop-blur-3xl'>
      <nav className='font-ttnorms text-nere-black'>
        <div className='nere-container flex h-[72px] items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/'>
              <MainLogo className='mb-3 mr-16 text-[#298592] lg:mr-[88px]' />
            </Link>
            <div className='hidden items-center gap-x-4 md:flex lg:gap-x-9'>
              {navLinks.map(({ name, link }) => (
                <Link href={link}>
                  <p>{name}</p>
                </Link>
              ))}
            </div>
          </div>
          <Link href='#'>
            <div className='hidden items-center gap-x-2.5 md:flex'>
              <UserIcon />
              <div>Login & Register</div>
            </div>
            <HumbugerIcon className='md:hidden' />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AboutNavbar;
