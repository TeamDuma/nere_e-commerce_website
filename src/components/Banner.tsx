const Banner = () => {
    return (
      <div className="relative bg-gradient-to-r from-gray-500 to-gray-700 mb-8">
<div className="mx-auto px-8 py-48 flex flex-col gap-2 md:flex-row items-center justify-evenly rounded-8">
          <div>
            <h1 className="text-4xl text-white font-bold mb-4">40% OFF</h1>
            {/* Additional content can go here */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Shop Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  