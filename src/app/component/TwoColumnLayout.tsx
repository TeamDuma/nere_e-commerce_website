const TwoColumnLayout = () => {
    return (  

<>

<div className="max-w-screen-full mx-auto grid gap-4 grid-cols-1">

    
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
    <div className="flex flex-col p-4 relative items-center justify-center border  shadow-lg rounded-2xl h-[400px] w-full" style={{ backgroundColor: '#298592' }}>
      <div className="">
        <div className="text-center p-5 flex-auto justify-center">
        </div>
      </div>
    </div>
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex flex-col p-4 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105 h-[200px] w-full" style={{ backgroundColor: '#298592' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center mr-auto">
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4  border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105 h-[200px] w-full" style={{ backgroundColor: '#298592' }}>
        <div className="flex items-center justify-between">
        </div>
      </div>
    </div>
  </div>
</div>

</>



    );
}
 
export default TwoColumnLayout;