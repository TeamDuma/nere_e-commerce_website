const CategoriesCards = () => {
  return (
    <div className='sm:grid-md:grid- row grid gap-4 xl:grid-cols-4'>
      <div className='flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow'>
        <div className='inline-flex h-40 w-40 overflow-hidden rounded-full border border-gray-200 shadow-lg'>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2'
            alt=''
            className='h-full w-full'
          />
        </div>
        <h6 className='mt-2 text-sm font-medium'>Founder</h6>
      </div>
    </div>
  );
};

export default CategoriesCards;
