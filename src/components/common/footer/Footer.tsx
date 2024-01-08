const Footer = () => {
  return (
    <footer className='border-t border-gray-200 bg-white p-2 shadow dark:border-gray-600 dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-2'>
      <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
        Product of Duma &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; © &nbsp; All Rights
        Reserved.
      </span>
      <ul className='mt-1 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <a href='#' className='me-4 hover:underline md:me-6'>
            About
          </a>
        </li>
        <li>
          <a href='#' className='me-4 hover:underline md:me-6'>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href='#' className='me-4 hover:underline md:me-6'>
            Licensing
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
