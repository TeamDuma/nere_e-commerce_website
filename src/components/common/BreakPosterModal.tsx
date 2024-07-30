import * as Dialog from '@radix-ui/react-dialog';
import { AlertIcon } from './icons/AlertIcon';
import { WhiteLogo } from './icons/WhiteLogo';
import { AlertIconSmall } from './icons/AlertIconSmall';
import { WeCareIconWhite } from './icons/WeCareIconWhite';
import Link from 'next/link';
import { FacebookIconYellow } from './icons/FacebookIconYellow';
import { InstagramIconYellow } from './icons/InstagramIconYellow';
import Button from './Button';

const LinkedInIcon = () => (
  <svg
    width='34'
    height='35'
    viewBox='0 0 34 35'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='17.1029' cy='17.7318' r='16.7748' fill='#F58929' />
    <path
      d='M8.2775 13.0661H12.2412V25.8557H8.2775V13.0661ZM10.299 6.71094C10.7531 6.71095 11.1971 6.84545 11.5748 7.09748C11.9526 7.34952 12.2473 7.70779 12.4217 8.1271C12.5961 8.54641 12.6423 9.00798 12.5547 9.45357C12.4671 9.89916 12.2494 10.3088 11.9292 10.6308C11.609 10.9529 11.2006 11.1729 10.7555 11.2631C10.3105 11.3533 9.84864 11.3096 9.42834 11.1376C9.00804 10.9657 8.64808 10.673 8.39389 10.2967C8.1397 9.92041 8.00265 9.47723 8.00004 9.02311C7.9983 8.7201 8.05648 8.41973 8.17123 8.13928C8.28598 7.85883 8.45505 7.60383 8.6687 7.38895C8.88235 7.17407 9.13637 7.00355 9.41616 6.88719C9.69595 6.77083 9.99598 6.71093 10.299 6.71094ZM14.778 13.0661H18.5964V14.8101C18.9786 14.1578 19.5308 13.6216 20.194 13.2586C20.8572 12.8956 21.6065 12.7194 22.3619 12.749C26.3257 12.749 27.1316 15.3915 27.1316 18.8399V25.8557H23.1679V19.6723C23.1679 18.1925 23.1679 16.2767 21.1068 16.2767C19.0456 16.2767 18.7285 17.8886 18.7285 19.5534V25.8822H14.7648L14.778 13.0661Z'
      fill='#FCF5E8'
    />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width='35'
    height='35'
    viewBox='0 0 35 35'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='17.4272' cy='17.7318' r='16.7748' fill='#F58929' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M27.6305 11.6396C26.8363 11.9912 25.994 12.2219 25.1315 12.324C26.0335 11.7828 26.7232 10.9286 27.0415 9.91528C26.1884 10.421 25.2555 10.778 24.2827 10.9711C23.6866 10.3312 22.9115 9.88578 22.0584 9.69298C21.2054 9.50018 20.3141 9.56893 19.5007 9.89026C18.6874 10.2116 17.9898 10.7706 17.4988 11.4943C17.0079 12.2181 16.7465 13.073 16.7487 13.9475C16.7477 14.2814 16.7851 14.6143 16.8602 14.9397C15.1296 14.8529 13.4366 14.4032 11.891 13.6199C10.3454 12.8366 8.98171 11.7371 7.88846 10.3928C7.32921 11.3511 7.15725 12.4869 7.40776 13.5678C7.65826 14.6487 8.31229 15.5931 9.23607 16.2077C8.54394 16.186 7.86712 15.9986 7.2624 15.6612V15.7143C7.2624 17.8259 8.76387 19.5873 10.7535 19.9852C10.1134 20.1599 9.44182 20.1853 8.7904 20.0595C9.06863 20.924 9.60977 21.68 10.3383 22.2222C11.0669 22.7643 11.9465 23.0655 12.8545 23.0837C11.9514 23.7935 10.9172 24.3183 9.81103 24.6278C8.70488 24.9373 7.54853 25.0256 6.4082 24.8876C8.33412 26.1238 10.6208 26.84 13.0826 26.84C21.094 26.84 25.4711 20.2081 25.4711 14.4515C25.4711 14.2658 25.4711 14.0802 25.4605 13.8892C26.3094 13.279 27.0522 12.5097 27.6358 11.6396H27.6305Z'
      fill='#FCF5E8'
    />
  </svg>
);

export const socialMediaLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/nerecommunity',
    icon: FacebookIconYellow,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nere_community/',
    icon: InstagramIconYellow,
  },
  {
    name: 'Whatsapp',
    href: 'https://chat.whatsapp.com/GPWialGrINjHtW4tJyzqEt',
    icon: LinkedInIcon, //replace this with Whatsapp icon
  },
  {
    name: 'Tiktok',
    href: 'https://www.tiktok.com/@nere_community',
    icon: TwitterIcon, //replace this with Tiktok icon
  },
];

export const BreakPosterModal = () => (
  <Dialog.Root open={true}>
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 z-50 bg-black/50' />
      <Dialog.Content className='fixed left-1/2 top-1/2 z-50 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] px-0 font-montserrat text-[#FCF5E8] md:w-fit'>
        <Dialog.Title />
        <Dialog.Description />
        <div className="rounded-[20px] bg-nere-green bg-[url('/images/styled-green-background.png')] bg-cover bg-center bg-no-repeat">
          <section className='w-full md:pb-[65px] md:pl-[65px] md:pr-[37px] md:pt-6'>
            <div className='flex flex-col justify-center p-5 md:items-center md:p-0 lg:flex-row'>
              <AlertIconSmall className='-rotate-[17.01deg] md:hidden' />
              <h1 className='mx-auto w-[247px] text-center text-[32px] font-black uppercase leading-[39.01px] md:mx-0 md:w-[467px] md:text-left md:text-[60px] md:leading-[73.14px]'>
                WE’RE TEMPORARILY NOT TAKING ORDERS!
              </h1>
              <div className='relative w-full md:w-[496px]'>
                <div className='hidden w-full justify-between md:flex'>
                  <AlertIcon className='mt-10 -rotate-[15deg] ' />
                  <WhiteLogo className='' />
                </div>
                <p className='mx-auto mb-6 mt-4 w-[247px] text-center text-[12px] font-medium leading-[14.63px] md:mx-0 md:mb-[39px] md:mt-[50px] md:w-full md:text-left md:text-[18px] md:leading-[21.94px]'>
                  We are sorry to inform you that Nere Community will
                  temporarily not be acccepting orders as we readjust to market
                  fluctuations. Our mission is to bring you quality goods at the
                  best prices!
                </p>
                <div className='relative flex justify-between'>
                  <div className='mx-auto flex flex-col items-center gap-x-[33px] gap-y-2 md:mx-0 md:flex-row md:items-start'>
                    <div className=''>
                      <div className='flex gap-x-2'>
                        {socialMediaLinks.map((social, index) => (
                          <Link
                            key={index}
                            className='rounded-full hover:opacity-75'
                            href={social.href}
                            target='_blank'
                            rel='noreferrer'
                          >
                            <span className='sr-only'>{social.name}</span>
                            <social.icon />
                          </Link>
                        ))}
                      </div>
                      <p className='font-medium'>@nere_community</p>
                    </div>
                    <WeCareIconWhite className='h-[34.79px] w-[34.47px] md:h-[65.79px] md:w-[65.18px]' />
                  </div>
                  <AlertIcon className='mt-8 hidden rotate-[15deg] md:block' />
                  <AlertIconSmall className='absolute right-0 top-8 rotate-[17.01deg] md:hidden' />
                </div>
                <Link href='/home'>
                  <Button className='mb-4 mt-[37px] w-full !bg-nere-orange !ring-0 hover:!bg-nere-orange/70 md:mb-0 md:mt-[43px]'>
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
