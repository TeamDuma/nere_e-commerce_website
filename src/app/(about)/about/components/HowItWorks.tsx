'use client';
import { classNames } from '@/lib/classNames';
import Image from 'next/image';
import { useState } from 'react';
import { OngoingPurchases } from './OngoingPurchases';
import { ListNumber } from './ListNumber';

enum TabEnum {
  SUPPLIER = 'Supplier',
  AGENT = 'Agent',
  CUSTOMERS = 'Customers',
}

const agentInfo = [
  {
    count: 1,
    title: 'Become a Nere Agent',
    description:
      'Be part of a growing network empowering your community while earning income. Leverage your existing shop space to serve as a convenient pick-up location.',
  },
  {
    count: 2,
    title: 'Receive Group Buy Orders',
    description:
      "Once a group buy in your area reaches the minimum threshold, you'll receive notification of confirmed orders and the specific items needed.",
  },
  {
    count: 3,
    title: 'Coordinate with Suppliers',
    description:
      'Collaborate seamlessly with local suppliers to efficiently fulfill the group buy order. Nere facilitates communication and streamlines the process.',
  },
  {
    count: 4,
    title: 'Prepare & Bag Orders',
    description:
      "Once you receive the group buy order from suppliers, use the Nere-branded bags to neatly package each customer's order according to their selections",
  },
];

const supplierInfo = [
  {
    count: 1,
    title: 'List Your Products',
    description:
      'Showcase your high-quality products on the Nere platform, reaching a wider customer base eager for savings. ',
  },
  {
    count: 2,
    title: 'Receive Group Buy Orders',
    description:
      "Once a group buy reaches the minimum threshold for your product, you'll receive a notification with the confirmed order details and quantity.",
  },
  {
    count: 3,
    title: 'Fulfill Orders Efficiently',
    description:
      "Prepare and package the group buy orders according to Nere's guidelines for the designated agent to ensure timely delivery.",
  },
  {
    count: 4,
    title: 'Grow Your Business:',
    description:
      "Gain valuable exposure to a new customer base and increase sales volume through Nere's growing network",
  },
];

const customersInfo = [
  {
    count: 1,
    title: 'Launch Purchase',
    description: 'Join an ongoing purchase group near you or launch a purchase',
  },
  {
    count: 2,
    title: 'Share with friends',
    description:
      'Get your friends and family to join the buy! You can also ebuy as part of a public Nere group.',
  },
  {
    count: 3,
    title: 'Reach target',
    description:
      'For every product on offer, there is a minimum quantity that must be purchased for the deal to be unlocked.',
  },
  {
    count: 4,
    title: 'Pick and go',
    description: 'Select your pick up location and pass by for your purchase!',
  },
];

const tabs = [
  {
    id: TabEnum.SUPPLIER,
    name: 'Supplier',
    info: supplierInfo,
    image: '/images/about/supplier.png',
  },
  {
    id: TabEnum.AGENT,
    name: 'Agent',
    info: agentInfo,
    image: '/images/about/agent.png',
  },
  {
    id: TabEnum.CUSTOMERS,
    name: 'Customers',
    info: customersInfo,
    image: '/images/about/customer.png',
  },
];

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.SUPPLIER);
  const activeTabInfo = tabs.find((tab) => tab.id === activeTab)!;

  const handleActiveTab = (tab: TabEnum) => {
    setActiveTab(tab);
  };

  return (
    <section className='pt-[110px]'>
      <div className='nere-container'>
        <div className='mx-auto flex max-w-[767px] flex-col items-center justify-center'>
          <h2 className='mb-3 text-2xl font-bold leading-[27.36px] text-nere-green md:text-[40px] md:leading-[45.6px]'>
            How Nere Works
          </h2>
          <p className='mb-6 text-center text-sm md:mb-8 md:text-[20px] md:leading-8'>
            Unleashing Savings for Customers, Empowering Agents, and Growing
            Businesses for Suppliers
          </p>
          <div className='flex w-fit items-center gap-4 rounded-3xl bg-neutral-100'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleActiveTab(tab.id)}
                className={classNames(
                  'duration-2000 transform rounded-full px-[33.67px] py-3 leading-relaxed transition-colors ease-in-out lg:px-[69.5px] lg:py-4',
                  activeTab === tab.id
                    ? 'rounded-2xl bg-nere-green px-3 font-bold text-white'
                    : 'font-normal text-nere-black'
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        <div className='gap grid-col-1 grid gap-x-4 pt-20 md:grid-cols-2'>
          <div className='pr-6 lg:pr-[89px]'>
            {activeTabInfo.info.map((info, index) => (
              <ListNumber
                key={info.count}
                count={info.count}
                title={info.title}
                description={info.description}
                isLast={index === activeTabInfo.info.length - 1}
              />
            ))}
          </div>
          <div>
            <Image
              src={activeTabInfo.image}
              alt={`${activeTabInfo.name} image`}
              width={580}
              height={507}
              className='rounded-[18px] object-fill'
            />
          </div>
        </div>
        <div className='relative mt-[160px] h-[339px]'>
          <OngoingPurchases />
        </div>
      </div>
    </section>
  );
};
