import { CurvedLine } from '@/components/common/icons/CurvedLine';

export const FormsTitle = () => {
  return (
    <div className='pt-0 md:pt-[72px]'>
      <div className='nere-container relative'>
        <div className='flex flex-col items-center justify-center pt-20 text-center'>
          <h1 className='text-2xl font-bold leading-[28.32px] text-nere-green md:text-[60px] md:leading-[70.81px]'>
            <span className='inline-flex flex-col'>
              <span>Collaborate</span>
              <CurvedLine className='-mt-3.5 w-28 md:-mt-2 md:w-full' />
            </span>
            <span> with us! </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
