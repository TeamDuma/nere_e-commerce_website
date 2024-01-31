'use client';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Logo from '../Logo';

const Footer = () => {
  return (
    <>
      {/* component */}
      <footer className='body-font text-gray-600'>
        <div className='bg-gray-100'>
          <div className='container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row'>
            <p className='text-center text-sm text-gray-500 sm:text-left'>
              Product of Duma
              <a
                rel='noopener noreferrer'
                className='ml-4 text-gray-600'
                target='_blank'
              >
                © All Rights Reserved{' '}
              </a>
            </p>
            <span className='mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start'>
              <a className='text-gray-500' href='https://facebook.com/'>
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />
                </svg>
              </a>
              <a
                className='ml-3 text-gray-500'
                href='https://www.linkedin.com/company/nere-community'
              >
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={0}
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='none'
                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                  />
                  <circle cx={4} cy={4} r={2} stroke='none' />
                </svg>
              </a>
              <a className='ml-3 text-gray-500' href='https://twitter.com/'>
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
                </svg>
              </a>
              <a
                className='ml-3 text-gray-500'
                href='https://www.instagram.com/nere_community/'
              >
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
