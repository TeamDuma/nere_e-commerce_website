import Link from 'next/link';
import { MainLogo } from '../icons/MainLogo';
import { WecareIcon } from '../icons/WeCareIcon';
import { nereContacts, socialMediaLinks } from '@/constants/contactDetails';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About us', href: '/home', isExternal: false },
      { name: 'Agent Locations', href: '/agent-locations', isExternal: false },
      { name: 'Careers', href: '/careers', isExternal: false },
    ],
  },
  {
    title: 'Join our community',
    links: [
      {
        name: 'Become an Agent',
        href: 'https://forms.gle/V2gyKYt9xdD6EL4JA',
        isExternal: true,
      },
      {
        name: 'Become a Supplier',
        href: 'https://forms.gle/LLoZ5uqj8wBnRo8FA',
        isExternal: true,
      },
      {
        name: 'WhatsApp Community',
        href: 'https://chat.whatsapp.com/GPWialGrINjHtW4tJyzqEt',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Contact Us',
    links: Object.values(nereContacts),
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Notice', href: '/legal/privacy', isExternal: false },
      { name: 'Cookie Statement', href: '/legal/cookies', isExternal: false },
      {
        name: 'Terms of service',
        href: '/legal/terms-of-service',
        isExternal: false,
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-[url('/images/styled-green-background.png')] bg-cover bg-center bg-no-repeat p-0 font-ttnorms">
        <div className='nere-container pb-[101px] pt-[84px]'>
          <div className='flex flex-wrap gap-y-8 md:flex-nowrap'>
            <MainLogo
              className='mr-[40px] shrink-0 text-white lg:mr-[40px]'
              height={83}
              width={207.99}
            />
            <div className='flex flex-wrap gap-[40px]'>
              {footerLinks.map((link, index) => (
                <div key={index} className='min-w-[149px]'>
                  <h3 className='mb-6 whitespace-nowrap text-base font-bold leading-[18.88px] text-white'>
                    {link.title}
                  </h3>
                  <nav className='flex flex-col gap-y-[15px] text-sm text-white'>
                    {link.links.map((item, index) => (
                      <Link
                        key={index}
                        className='text-sm leading-[16.52px] text-white/80 hover:opacity-75'
                        href={item.href}
                        {...(item.isExternal
                          ? { target: '_blank', rel: 'noreferrer' }
                          : {})}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
              <div>
                <p className='mb-6 font-bold text-white'>Social</p>
                <div className='flex gap-x-5'>
                  {Object.values(socialMediaLinks).map((social, index) => (
                    <Link
                      key={index}
                      className='rounded-full hover:opacity-75'
                      href={social.href}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <span className='sr-only'>{social.name}</span>
                      <social.icon />
                    </Link>
                  ))}
                </div>
                <div className='mt-[9px]'>
                  <WecareIcon />
                </div>
              </div>
            </div>
          </div>
          <div className='mx-auto mb-[30px] mt-[58px] w-11/12 border-b-2 border-b-white border-opacity-10'></div>
          <p className='text-center text-sm capitalize text-[#fff]'>
            Product of Nere LTD © All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
