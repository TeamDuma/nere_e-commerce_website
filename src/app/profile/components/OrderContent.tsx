const OrderContent = () => {
  return (
    <div className='flex '>
      <div className='mb-8'>
        <p>Items</p>
        <div className='m-2 mt-8 flex flex-wrap'>
          <div className='m-2 bg-gray-700 p-8 '></div>
          <div className='m-2 bg-gray-600 p-8 '></div>
          <div className='m-2 bg-gray-500 p-8 '></div>
          <div className='m-2 bg-gray-400 p-8 '></div>
        </div>
        <h1 className='my-2'>order confirmed</h1>
        <div className='progress-line'>
          <div className='progress' style={{ width: `10%` }}></div>
          <h1 className='my-2'> Picked up on Fri, 23 Aug 2024</h1>
        </div>
      </div>
    </div>
  );
};

export default OrderContent;
