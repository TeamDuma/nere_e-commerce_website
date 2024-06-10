import { PlusIcon } from '@/components/common/icons/PlusIcon';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

const faqs = Array.from({ length: 6 }).map(() => ({
  question: 'Is there a minimum contract?',
  answer: 'This is an answer to there a minimum contract.',
}));

export const FAQ = () => {
  return (
    <section className='bg-[#FEFDFB]'>
      <div className='nere-container pb-[111px] md:pb-[281px]'>
        <h2 className='mb-3 text-center text-[20px] font-bold leading-6 tracking-[-0.32px] text-nere-green md:mb-[44px] md:text-[40px] md:leading-[64px]'>
          Common Questions
        </h2>
        <div className='grid gap-x-[86px] gap-y-[14px] md:grid-cols-2 md:gap-y-[30px]'>
          {faqs.map(({ question, answer }, index) => (
            <Disclosure key={index} as='div' defaultOpen={true}>
              <DisclosureButton className='flex w-full items-center justify-between rounded-md border-[0.5px] border-[#04484D33] bg-white px-4 py-[15px] md:py-6'>
                <span className='text-sm leading-[29.26px] text-[18px] md:leading-[29.26px]'>
                  {question}
                </span>
                <PlusIcon />
              </DisclosureButton>
              <DisclosurePanel className='mt-2 text-black'>
                {answer}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};
