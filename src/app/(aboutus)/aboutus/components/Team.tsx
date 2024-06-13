import { Button } from '@/components/common/Button';
import { AffordableIcon } from '@/components/common/icons/AffordableIcon';
import Image from 'next/image';

export const Team = () => {
  return (
    <>
      <>
        <div className='flex min-h-screen items-center justify-center bg-white py-48'>
          <div className='flex flex-col'>
            {/* Notes */}

            <div className='mt-8 flex flex-col'>
              {/* Meet the Team */}
              <div className='container max-w-7xl px-4'>
                {/* Section Header */}
                <div className='mb-24 flex flex-wrap justify-center text-center'>
                  <div className='w-full px-4 lg:w-6/12'>
                    {/* Header */}
                    <h1 className='mb-8 text-4xl font-bold text-gray-900'>
                      Meet the Team
                    </h1>
                    {/* Description */}
                  </div>
                </div>
                {/* Team Members */}
                <div className='flex flex-wrap'>
                  {/* Member #1 */}
                  <div className='mb-6 w-full px-6 sm:px-6 md:w-6/12 lg:w-3/12 lg:px-4'>
                    <div className='flex flex-col'>
                      {/* Avatar */}
                      <a href='#' className='mx-auto'>
                        <img
                          className='rounded-2xl drop-shadow-md transition-all delay-100 duration-200 hover:drop-shadow-xl'
                          src='https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80'
                        />
                      </a>
                      {/* Details */}
                      <div className='mt-6 text-center'>
                        {/* Name */}
                        <h1 className='mb-1 text-xl font-bold text-gray-900'>
                          Kojo Selete-Avemegah{' '}
                        </h1>
                        {/* Title */}
                        <div className='mb-2 font-light text-gray-700'>
                          Product Lead{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Member #2 */}
                  <div className='mb-6 w-full px-6 sm:px-6 md:w-6/12 lg:w-3/12 lg:px-4'>
                    <div className='flex flex-col'>
                      {/* Avatar */}
                      <a href='#' className='mx-auto'>
                        <img
                          className='rounded-2xl drop-shadow-md transition-all delay-100 duration-200 hover:drop-shadow-xl'
                          src='https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80'
                        />
                      </a>
                      {/* Details */}
                      <div className='mt-6 text-center'>
                        {/* Name */}
                        <h1 className='mb-1 text-xl font-bold text-gray-900'>
                          John Istutsah{' '}
                        </h1>
                        {/* Title */}
                        <div className='mb-2 font-light text-gray-700'>
                          Backend Lead{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Member #3 */}
                  <div className='mb-6 w-full px-6 sm:px-6 md:w-6/12 lg:w-3/12 lg:px-4'>
                    <div className='flex flex-col'>
                      {/* Avatar */}
                      <a href='#' className='mx-auto'>
                        <img
                          className='rounded-2xl drop-shadow-md transition-all delay-100 duration-200 hover:drop-shadow-xl'
                          src='https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80'
                        />
                      </a>
                      {/* Details */}
                      <div className='mt-6 text-center'>
                        {/* Name */}
                        <h1 className='mb-1 text-xl font-bold text-gray-900'>
                          Alaa Ali{' '}
                        </h1>
                        {/* Title */}
                        <div className='mb-2 font-light text-gray-700'>
                          Front-end Lead{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Member #4 */}
                  <div className='mb-6 w-full px-6 sm:px-6 md:w-6/12 lg:w-3/12 lg:px-4'>
                    <div className='flex flex-col'>
                      {/* Avatar */}
                      <a href='#' className='mx-auto'>
                        <img
                          className='rounded-2xl drop-shadow-md transition-all delay-100 duration-200 hover:drop-shadow-xl'
                          src='https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80'
                        />
                      </a>
                      {/* Details */}
                      <div className='mt-6 text-center'>
                        {/* Name */}
                        <h1 className='mb-1 text-xl font-bold text-gray-900'>
                          Jentrix Wanyama{' '}
                        </h1>
                        {/* Title */}
                        <div className='mb-2 font-light text-gray-700'>
                          Business Development{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
