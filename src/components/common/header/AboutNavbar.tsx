'use client';
import React from 'react';
import Link from 'next/link';
import { MainLogo } from '../icons/MainLogo';
import { HumbugerIcon } from '../icons/HumbugerIcon';
import { usePathname } from 'next/navigation';
import { classNames } from '@/lib/classNames';

const navLinks = [
  { name: 'Home', link: '/home' },
  { name: 'Impact and Sustainability', link: '/sustainability' },
  { name: 'Contact us', link: '/contact-us' },
];

const AboutNavbar = () => {
  const pathname = usePathname();
  return (
    <div className='fixed top-0 z-30 w-full backdrop-blur-3xl'>
      <nav className='font-ttnorms text-nere-black'>
        <div className='nere-container flex h-14 items-center justify-between md:h-[72px]'>
          <div className='flex items-center'>
            <Link href='/'>
              <MainLogo className='mb-3 mr-16 h-[22.56px] w-[59px] text-[#298592] md:h-[48px] md:w-[125.53px] lg:mr-[88px]' />
            </Link>
            <div className='hidden items-center gap-x-4 md:flex lg:gap-x-9'>
              {navLinks.map(({ name, link }) => (
                <Link href={link}>
                  <p
                    className={classNames(
                      'font-medium leading-[14px]',
                      link === pathname && 'font-semibold text-[#298592]'
                    )}
                  >
                    {name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Link
              href='/'
              className={`hidden items-center justify-center gap-2 rounded-full
                bg-[#1A464C] px-[41.5px] py-[13.5px] text-sm font-semibold
                leading-[17.07px] text-white hover:bg-[#298592] md:flex
                `}
            >
              Shop now
            </Link>
            <Link href='#'>
              <HumbugerIcon className='md:hidden' />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AboutNavbar;
