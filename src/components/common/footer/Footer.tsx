import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 bg-white p-2 shadow dark:border-gray-600 dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-2'>
      <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        Product of Duma &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; © &nbsp; All Rights
        Reserved.
      </span>
      <ul className='mr-4 mt-1 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <a href='#' className='hover:underline md:me-6'>
            <FaFacebookSquare size={30} />
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline md:me-6'>
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline md:me-6'>
            <FaTwitterSquare size={30} />
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline md:me-6'>
            <FaInstagramSquare size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
