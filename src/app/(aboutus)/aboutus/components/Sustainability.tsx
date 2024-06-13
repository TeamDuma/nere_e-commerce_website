import { Button } from '@/components/common/Button';
import { AffordableIcon } from '@/components/common/icons/AffordableIcon';
import Image from 'next/image';

export const Sustainability = () => {
  return (
    <>
      <section className='px-8 py-24 '>
        <div className='mt-24 '>
        <div className='mx-auto flex w-full max-w-[767px] flex-col items-center justify-center'>
            <h2 className='mb-3 text-2xl font-bold leading-[27.36px] text-nere-green md:text-[40px] md:leading-[45.6px]'>
            Our Sustainability Initiatives{' '}
            </h2>
            <p className='mb-6 text-center text-sm md:mb-8 md:text-[20px] md:leading-8'>
            Nere is committed to driving measurable impact, aligning with Sustainable Development Goals (SDGs), and continuously evolving to meet the needs of our communities.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='border-blue-gray-100 relative flex flex-col items-center justify-center rounded-xl border bg-white bg-clip-border text-center text-gray-700 shadow-md lg:max-w-[387px]'>
              <div className='relative !m-0 mx-4 mt-4 overflow-hidden rounded-xl bg-transparent bg-clip-border p-6 text-gray-700 shadow-none'>
                <p>icon</p>
                <h5 className='text-blue-gray-900 block font-sans text-xl font-semibold capitalize leading-snug tracking-normal antialiased'>
                  Eco-Friendly Deliveries{' '}
                </h5>

                <h3 className='text-blue-gray-900 mt-4 flex gap-1 font-sans text-sm font-semibold leading-snug tracking-normal antialiased'>
                  Nere's agent system minimizes carbon footprint by using
                  sustainable transportation options{' '}
                  <span className='text-blue-gray-900 block -translate-y-0.5 self-end font-sans text-base font-semibold leading-relaxed tracking-normal antialiased opacity-70' />
                </h3>
              </div>
            </div>
            <div className='border-blue-gray-100 relative flex flex-col items-center justify-center rounded-xl border bg-white bg-clip-border text-center text-gray-700 shadow-md lg:max-w-[387px]'>
              <div className='relative !m-0 mx-4 mt-4 overflow-hidden rounded-xl bg-transparent bg-clip-border p-6 text-gray-700 shadow-none'>
                <p>icon</p>
                <h5 className='text-blue-gray-900 block font-sans text-xl font-semibold capitalize leading-snug tracking-normal antialiased'>
                Reduced Packaging{' '}
                </h5>

                <h3 className='text-blue-gray-900 mt-4 flex gap-1 font-sans text-sm font-semibold leading-snug tracking-normal antialiased'>
                We actively work with suppliers to minimize unnecessary packaging and promote eco-friendly materials{' '}
                  <span className='text-blue-gray-900 block -translate-y-0.5 self-end font-sans text-base font-semibold leading-relaxed tracking-normal antialiased opacity-70' />
                </h3>
              </div>
            </div>
            <div className='border-blue-gray-100 relative flex flex-col items-center justify-center rounded-xl border bg-white bg-clip-border text-center text-gray-700 shadow-md lg:max-w-[387px]'>
              <div className='relative !m-0 mx-4 mt-4 overflow-hidden rounded-xl bg-transparent bg-clip-border p-6 text-gray-700 shadow-none'>
                <p>icon</p>
                <h5 className='text-blue-gray-900 block font-sans text-xl font-semibold capitalize leading-snug tracking-normal antialiased'>
                Food Waste Reduction:{' '}
                </h5>

                <h3 className='text-blue-gray-900 mt-4 flex gap-1 font-sans text-sm font-semibold leading-snug tracking-normal antialiased'>
                We actively work with suppliers to minimize unnecessary packaging and promote eco-friendly materials{' '}
                  <span className='text-blue-gray-900 block -translate-y-0.5 self-end font-sans text-base font-semibold leading-relaxed tracking-normal antialiased opacity-70' />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
