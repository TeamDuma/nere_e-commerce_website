import React from 'react';

const Range = ({ minQuantity, members = [] }) => {
    // Calculate the remaining quantity
  const remainingQuantity = minQuantity ? minQuantity - members.length : 0;

  // Calculate the percentage
  const percentage = Array.isArray(members) ? (members.length / minQuantity) * 100 : 0;

  return (
    <>
  <div className="flex  w-64 m-auto items-center h-32 justify-center">
    <div className="py-1 relative min-w-full">
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-2 rounded-full bg-teal-600 w-0"
          style={{ width: "58.5714%" }}
        />
       
        </div>
        <div className="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">
{         minQuantity
}        </div>
        <div className="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">
        {  members.length}
        </div>
      </div>
    </div>

</>

  );
};

export default Range;
