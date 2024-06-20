'use client';
import { classNames } from '@/lib/classNames';
import Image from 'next/image';
import { useState } from 'react';
import { SupplierForm } from './SupplierForm';
import { AgentForm } from './AgentForm';
import { PartnerForm } from './PartnerForm';
import { ContactType } from '@/types/customer';

const tabs = [
  {
    id: ContactType.SUPPLIER,
    name: 'Become a supplier',
    description:
      'Join the nere community and sell your goods directly to a robust customer base. Please leave your details below and we will be in touch with you within 48 hours.',
    image: '/images/contact-us/supplier.png',
    Component: SupplierForm,
  },
  {
    id: ContactType.AGENT,
    name: 'Become an agent',
    description:
      'As a Nere agent, you will help us package orders and interact with our community members as they pick up their orders from your location. Please leave your details and we will be in touch with you within 48 hours.',
    image: '/images/contact-us/agent.png',
    Component: AgentForm,
  },
  {
    id: ContactType.PARTNER,
    name: 'Partner with us',
    description:
      "Support Nere's mission with grant funding. Contact Us to discuss how your support can help us create lasting change",
    image: '/images/contact-us/partner.png',
    Component: PartnerForm,
  },
];

export const FormTabs = () => {
  const [activeTab, setActiveTab] = useState<ContactType>(ContactType.SUPPLIER);
  const activeTabInfo = tabs.find((tab) => tab.id === activeTab)!;

  const handleActiveTab = (tab: ContactType) => {
    setActiveTab(tab);
  };

  return (
    <section className='relative pb-[120px] pt-[22px] md:pt-[34px]'>
      <div className='nere-container '>
        <div className='mx-auto flex w-full max-w-[767px] flex-col items-center justify-center pb-8 md:pb-[60px]'>
          <div className='flex w-full items-center overflow-hidden rounded-full bg-neutral-100 md:w-fit'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleActiveTab(tab.id)}
                className={classNames(
                  'duration-2000 w-full transform rounded-full py-3 leading-relaxed transition-colors ease-in-out md:w-[200px] lg:py-4',
                  'text-xs font-medium leading-[14.16px] md:text-base md:leading-[18.88px]',
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
        <div className='mx-auto rounded-lg bg-[#FCF5E8] px-3 pb-[102px] pt-6 md:max-w-[1011px] md:px-[64px] md:pt-[72px]'>
          <div className='gap grid-col-1 grid gap-x-[57px] md:grid-cols-2'>
            <div className=''>
              <div className='mb-6 pr-8'>
                <p className='text-[14px] font-medium leading-[20px] text-nere-green md:text-[18px] md:leading-6'>
                  {activeTabInfo.description}
                </p>
              </div>
              <Image
                src={activeTabInfo.image}
                alt={`${activeTabInfo.name} image`}
                width={580}
                height={507}
                className='hidden rounded-[18px] object-fill md:block'
              />
            </div>
            <div className=''>
              <activeTabInfo.Component />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
