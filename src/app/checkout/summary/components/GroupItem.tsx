import React, { useState } from 'react'
import ProgressBar from '@/components/common/ProgressBar';
import { CiShare2 } from 'react-icons/ci';
import { FiMapPin } from 'react-icons/fi';
import { MdGroups, MdOutlineAccessAlarms } from 'react-icons/md';
import { Group } from '@/types/group';
import ShareModal from './ShareModal';

interface GroupItemProps {
    group: Group
    showModal: (group: Group) => void;
}

const GroupItem = ({ group, showModal }: GroupItemProps) => {

    // const [showModal, setShowModal] = useState(false)

    // const handleShareClick = () => {
    //     setShowModal(true)
    //     // alert('Share button clicked')
    // }

    // const handleClose = () => {
    //     setShowModal(false);
    // }

    return (
        <div className='flex flex-col rounded-md border p-4 text-lg font-semibold '>
            <div className='flex flex-col justify-between gap-0 md:flex-row'>
                {/* Product Information */}
                <div className='flex flex-row items-center gap-6 bg-slate-500'>
                    <div className='h-28 w-28'>
                        <img
                            className='h-full w-full'
                            src={group.product?.plain_image}
                        />
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

                        <div className='flex items-center '>
                            <div className='flex items-center'>
                                <MdOutlineAccessAlarms className='my-2 text-[#298592]' />
                                <p className='ml-2 text-sm font-normal text-[#828282]'>
                                    Ends in <span className='text-[#F58929]'>12:32:09</span>
                                </p>
                            </div>

                            <div className='ml-4 flex items-center'>
                                <FiMapPin className='my-2 text-[#298592]' />

                                <p className='ml-2 text-sm font-normal text-[#828282]'>
                                    {group.location?.name}
                                </p>
                            </div>
                        </div>

                        <ProgressBar remaining={group.total_quantity} total={group.product?.min_quantity!} />
                    </div>
                </div>

                <div className='self-center bg-[#FCF5E8] p-2 rounded-full' style={{ cursor: 'pointer' }}>
                    <CiShare2 className='text-[#F58929]' onClick={() => showModal(group)} />
                </div>
            </div>
        </div>
    )
}

export default GroupItem