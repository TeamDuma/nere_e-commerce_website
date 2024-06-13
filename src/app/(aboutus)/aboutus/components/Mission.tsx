import { Button } from '@/components/common/Button';
import { AffordableIcon } from '@/components/common/icons/AffordableIcon';
import Image from 'next/image';

export const Mission = () => {
  return (
    <>
  
  <div className="p-4 text-gray-600 flex justify-center items-center">
    <ul className="grid grid-cols-3 items-center">
        <li className="flex justify-end pr-8"> 
            <div>
                <div className="px-4 text-5xl font-extralight text-indigo-700">01.</div>
                <div>
                    <div className="text-xl font-bold text-indigo-800">Research</div>
                    <p className="max-w-xs py-2 text-sm text-indigo-900">
                        We love numbers! We collect data and insights, analyze them then
                        take the time to learn about your objectives, ask the right
                        questions to understand your business.
                    </p>
                </div>
            </div>
        </li>
        <div className="w-px bg-gray-300 self-stretch mx-8 "></div>
        <li className="flex justify-start pl-8">
            <div>
                <div className="px-4 text-5xl font-extralight text-indigo-700">02.</div>
                <div>
                    <div className="text-xl font-bold text-indigo-800">Strategy</div>
                    <p className="max-w-xs py-2 text-sm text-indigo-900">
                        Solutions are born from proper research, hard work, and strong
                        strategy. We build data-driven roadmaps for every project to make
                        pave the way to success.
                    </p>
                </div>
            </div>
        </li>
    </ul>
</div>


  </>
  
  
  );
};
