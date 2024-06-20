'use client';
import { MinusIcon } from '@/components/common/icons/MinusIcon';
import { PlusIcon } from '@/components/common/icons/PlusIcon';
import { nereContacts, socialMediaLinks } from '@/constants/contactDetails';
import { classNames } from '@/lib/classNames';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is group buying?',
    answer:
      'Group buying is a method of shopping which allows buyers to get a product at reduced prices on the condition that they jointly buy a set minimum amount of the product.',
  },
  {
    question: 'How do I become an agent or supplier?',
    answer:
      "Let's chat! Please fill in the form on our [website](/contact-us) and we'll get back to you.",
  },
  {
    question: 'After purchasing, how can I pick my order?',
    answer:
      "Nere currently facilitates pickups every Friday. When you shop on Nere, you'll be given the option to select your preferred pickup location.",
  },
  {
    question:
      'How long does it take for my order to be ready for pickup/delivery?',
    answer:
      'Orders are picked up or delivered every Friday. You will get your order on the Friday of the week you order.',
  },
  {
    question: 'Is there delivery?',
    answer: `You may request for delivery at your cost via our [email](${nereContacts.email.href}) or [Whatsapp](${socialMediaLinks.whatsapp.href}).`,
  },
  {
    question: 'Can I pay on delivery?',
    answer:
      'No, payment is required to complete your purchase on our platform.',
  },
];

export const FAQ = () => {
  return (
    <section className=''>
      <div className='nere-container pb-[111px] md:pb-[281px]'>
        <h2 className='mb-3 text-center text-[20px] font-bold leading-6 tracking-[-0.32px] text-nere-green md:mb-[44px] md:text-[40px] md:leading-[64px]'>
          Common Questions
        </h2>
        <div className='grid gap-x-[86px] gap-y-[14px] md:grid-cols-2 md:gap-y-[30px]'>
          {faqs.map(({ question, answer }, index) => (
            <Disclosure key={index} as='div' defaultOpen={false}>
              {({ open }) => (
                <>
                  <DisclosureButton
                    className={classNames(
                      'group flex h-[80px] w-full items-center justify-between rounded-xl border-[0.5px] border-[#04484D33]',
                      'bg-white px-4 py-[15px] md:py-6',
                      open && 'rounded-b-none border-b-0'
                    )}
                  >
                    <p className='text-left text-sm leading-[29.26px] md:max-w-[351px] md:text-[18px] md:leading-[29.26px]'>
                      {question}
                    </p>
                    <div className='relative h-6 w-6'>
                      <PlusIcon
                        className={classNames(
                          'absolute inset-0 transition-opacity duration-300',
                          open ? 'opacity-0' : 'opacity-100'
                        )}
                      />
                      <MinusIcon
                        className={classNames(
                          'absolute inset-0 transition-opacity duration-300',
                          open ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel className='rounded-b-xl border-[0.5px] border-t-0 border-[#04484D33] bg-white px-4 pb-5'>
                    <p className='text-nere-black'>
                      {answer.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
                        if (part.match(/\[.*?\]\(.*?\)/)) {
                          const match = part.match(/\[(.*?)\]\((.*?)\)/);
                          return (
                            <Link
                              key={i}
                              href={match![2]}
                              className='text-blue-500 underline'
                              {...(match![2].includes('https:')
                                ? {
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                  }
                                : {})}
                            >
                              {match![1]}
                            </Link>
                          );
                        }
                        return part;
                      })}
                    </p>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};
