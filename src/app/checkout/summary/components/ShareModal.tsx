import React from 'react'
import { Group } from '@/types/group';

interface ShareModalProps {
    onClose: () => void;
    group: Group;
}

const ShareModal = ({ onClose, group }: ShareModalProps) => {
    return (
        // <div className="fixed inset-0 flex items-center justify-center z-50">
        //     <div className="bg-white rounded-lg shadow-lg p-6">
        //         {/* Close button */}
        //         <button
        //             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        //             onClick={onClose}
        //         >
        //             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        //                 {/* Close icon */}
        //                 <path
        //                     d="M18 6L6 18M6 6L18 18"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth="2"
        //                 />
        //             </svg>
        //         </button>
        //         {/* Social media icons */}
        //         <div className="flex items-center justify-center gap-4 mb-4">
        //             <a href="#" className="text-blue-500 hover:text-blue-700">
        //                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        //                     {/* WhatsApp icon */}
        //                     <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.5 17.5C9.67 17.5 8.84 17.26 8.16 16.77L6.07 17.07C5.5 17.23 5 16.73 5 16.15V14.5C5 13.12 6.12 12 7.5 12H8V11.5C8 10.12 9.12 9 10.5 9C11.88 9 13 10.12 13 11.5V12H13.5C14.88 12 16 13.12 16 14.5V16.15C16 16.73 15.5 17.23 14.93 17.07L12.84 16.77C12.16 17.26 11.33 17.5 10.5 17.5ZM12 3.5C6.20101 3.5 1.5 8.20101 1.5 14C1.5 16.0609 2.18482 18.0783 3.46447 19.5355L2.05025 22.7071L5.22292 21.2929C6.68015 22.5726 8.69759 23.25 10.5 23.25C16.299 23.25 20.999 18.549 20.999 12.75C20.999 6.95101 16.299 2.25 10.5 2.25C8.69759 2.25 6.68015 2.92742 5.22292 4.20711L2.05025 2.79289L3.46447 5.96447C2.18482 7.4217 1.5 9.43913 1.5 11.5C1.5 8.20101 4.70101 5 8 5H9V4H8C3.58172 4 0 7.58172 0 12C0 16.4183 3.58172 20 8 20H9V19H8C4.70101 19 2 16.299 2 13C2 9.70099 4.70101 7 8 7H9V6H8C5.23858 6 3 8.23858 3 11C3 13.7614 5.23858 16 8 16H9V15H8C4.70101 15 2 12.299 2 9C2 5.70101 4.70101 3 8 3H9V2H8C7.46957 2 7 2.46957 7 3V5H8C11.299 5 14 7.70101 14 11C14 14.299 11.299 17 8 17H7V18H8C12.4183 18 16 14.4183 16 10C16 5.58172 12.4183 2 8 2H7V3H8C8.53043 3 9 3.46957 9 4V6H8C11.299 6 14 8.70101 14 12C14 15.299 11.299 18 8 18H7V19H8C11.299 19 14 21.701 14 25H15C15 21.6863 12.3137 19 9 19H8V18H9C12.3137 18 15 15.3137 15 12C15 8.68629 12.3137 6 9 6H8V5H9C12.3137 5 15 2.31371 15 0H14Z" />
        //                 </svg>
        //             </a>
        //             <a href="#" className="text-purple-500 hover:text-purple-700">
        //                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        //                     {/* Instagram icon */}
        //                     <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM17.5 5.5H19V7H17.5V5.5ZM19 9H17.5V15.5H16V9H14.5V7H19V9Z" />
        //                 </svg>
        //             </a>
        //         </div>
        //         {/* Input field with copy to clipboard icon */}
        //         <div className="flex items-center gap-2">
        //             <input
        //                 type="text"
        //                 value="Some text"
        //                 readOnly
        //                 className="border border-gray-300 px-2 py-1 rounded"
        //             />
        //             <button className="bg-gray-200 hover:bg-gray-300 p-1 rounded">
        //                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        //                     {/* Copy to clipboard icon */}
        //                     <path
        //                         d="M16 1H6C4.9 1 4 1.9 4 3V4H3C1.9 4 1 4.9 1 6V20C1 21.1 1.9 22 3 22H17C18.1 22 19 21.1 19 20V19H20C21.1 19 22 18.1 22 17V7C22 5.9 21.1 5 20 5H19V3C19 1.9 18.1 1 17 1H16ZM17 19H3V6H17V19ZM19 17H5V8H19V17ZM19 7H5V6H19V7Z"
        //                     />
        //                 </svg>
        //             </button>
        //         </div>
        //     </div>
        // </div>

        <div className='fixed inset-0 flex items-center justify-center z-50 bg-slate-500 h-56 w-56'>
            <button onClick={onClose}>
                Close {group.product?.name}
            </button>
        </div>
    )
}

export default ShareModal