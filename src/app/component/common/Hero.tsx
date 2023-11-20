import React from 'react';

interface HeroProps {
  images: { id: string; url: string }[];
}

const Hero: React.FC<HeroProps> = ({ images }) => {
  return (
    <>
      <div className="max-w-full mx-auto" style={{ backgroundColor: '#298592' ,borderRadius: '10px'}}>
        <div id="default-carousel" className="relative" data-carousel="static">
          {/* Carousel wrapper */}
          <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            {/* Carousel Items */}
            {images.map((image, index) => (
              <div key={image.id} className={`hidden duration-700 ease-in-out ${index === 0 ? 'block' : ''}`} data-carousel-item="">
                <img
                  src={image.url}
                  className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          {/* Slider indicators */}
          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-300'}`}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
              />
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev=""
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next=""
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
