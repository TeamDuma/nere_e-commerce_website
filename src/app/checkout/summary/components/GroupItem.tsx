import React, { useState } from 'react';
import ProgressBar from '@/components/common/ProgressBar';
import { CiShare2 } from 'react-icons/ci';
import { FiMapPin } from 'react-icons/fi';
import { MdGroups, MdOutlineAccessAlarms } from 'react-icons/md';
import { Group } from '@/types/group';
import ShareModal from './ShareModal';
import CountdownTimer from '@/components/CountdownTimer';

interface GroupItemProps {
  group: Group;
  showModal: (group: Group) => void;
}

const GroupItem = ({ group, showModal }: GroupItemProps) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <div className='flex max-w-[700px] flex-col rounded-sm border p-4 text-lg font-semibold shadow-md'>
      <div className='flex flex-col justify-between gap-3 md:flex-row'>
        {/* Product Information */}
        <div className='flex flex-row items-center gap-6'>
          <div className='h-28 w-28'>
            <img className='h-full w-full' src={group.product?.plain_image} />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold text-[#298592]'>
              {group.product?.name}
            </p>
            <div>
              <p className='text-sm font-normal text-[#F58929]  '>
                GH¢{group.product?.sale_price}
                <span className='ml-2 text-[#C1C2C2] line-through'>
                  GH¢{group.product?.price}
                </span>
              </p>
            </div>

            <div className='flex flex-col md:flex-row '>
              <div className='flex items-center md:mr-4'>
                <MdOutlineAccessAlarms className='my-2 text-[#298592]' />
                <p className='ml-2 text-sm font-normal text-[#828282]'>
                  Ends in{' '}
                  <span className='text-[#F58929]'>
                    <CountdownTimer />
                  </span>
                </p>
              </div>

              <div className='mt-4 flex items-center md:mt-0'>
                <FiMapPin className='my-2 text-[#298592]' />
                <p className='ml-2 text-sm font-normal text-[#828282]'>
                  group.location?.name
                </p>
              </div>
            </div>

            {group.product?.min_quantity ? (
              <ProgressBar
                remaining={group.total_quantity}
                total={group.product?.min_quantity}
                unit={group.product?.unit}
              />
            ) : null}

            <button
              className=' mt-2 inline-flex w-full items-center justify-center space-x-2 rounded-lg border-[#298592] bg-[#298592] p-2 font-medium text-white hover:bg-[#298592] hover:shadow'
              onClick={openShareModal}
            >
              <span>Invite to your purchase </span>
            </button>
          </div>
        </div>

        <div className='self-center'>
          {isShareModalOpen && (
            <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
              <ShareModal
                onClose={closeShareModal}
                group={group}
                isOpen={isShareModalOpen}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
