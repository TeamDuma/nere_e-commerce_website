import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
    

    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
      
     
      </div>
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">NERE</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    <img
      src="./images/Facebook.png" // Adjust the path to your Facebook icon
      alt="Facebook Icon"
      className="w-4 h-4"
    />
    <span className="sr-only">Facebook page</span>
  </a>

  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
    <img
      src="./images/LinkedIn.png" // Adjust the path to your LinkedIn icon
      alt="LinkedIn Icon"
      className="w-4 h-4"
    />
    <span className="sr-only">LinkedIn page</span>
  </a>

  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
    <img
      src="./images/Twitter.png" // Adjust the path to your Twitter icon
      alt="Twitter Icon"
      className="w-4 h-4"
    />
    <span className="sr-only">Twitter page</span>
  </a>

  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
    <img
       src="./images/Instagram.png" // Adjust the path to your Instagram icon
      alt="Instagram Icon"
      className="w-4 h-4"
    />
    <span className="sr-only">Instagram page</span>
  </a>
</div>

      </div>
    </div>
</footer>






  );
};

export default Footer;
