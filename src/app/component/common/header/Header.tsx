import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRegUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import Container from "../Container";

const Header = () => {
  return (
    <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
        <div className="w-full">

    <Container>
        <div className="py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="inline-flex">
      <a className="_o6689fn" href="/">
        <div className="hidden md:block">
          <img
            width={102}
            height={32}
            fill="currentcolor"
            style={{ display: "block" }}
             src={'./images/logo.png'}>
          </img>
        </div>
        <div className="block md:hidden">
          <img
            width={30}
            height={32}
            fill="currentcolor"
            style={{ display: "block" }}
            src={'./images/logo.png'}  
          >
        </img>
        </div>
      </a>
    </div>
          {/* <div>
      <img src={'./images/logo.png'} alt="Description of your image"  style={{ width: '100px', height: 'auto' }} />
    </div> */}

          {/* Search Bar */}
          <div className="relative flex items-center space-x-2">
  <input
    type="text"
    placeholder="Search for products"
    className="border rounded-md p-2 pr-10 focus:outline-none bg-gray-100" // Set background color to #F5F5F5
  />
  <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
    <svg
      className="w-5 h-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2" />
      <circle cx="10" cy="10" r="8" />
    </svg>
  </span>
</div>




          {/* Location */}
          <div className="hidden md:flex items-center">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="./images/pin.png" // Adjust the path to your image
          alt="Map Marker Icon"
          className="social-icon"
        />
      </a>
      <div className="ml-2">
  <p style={{ color: '#298592', fontSize: '0.875rem' }}>Pick up from</p>
  <p style={{ color: '#298592', fontWeight: 'bold', fontSize: '0.875rem' }}>Location</p>
</div>
    </div>

          {/* User and Cart Icons */}
          <div className="hidden md:flex items-center">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="./images/userIcon.png" // Adjust the path to your image
          alt="Map Marker Icon"
          className="social-icon"
        />
      </a>
      <div className="ml-2">
  <p style={{ color: '#298592', fontSize: '0.875rem' }}>Login/Registeration</p>
</div>
    </div>
      

          <div>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
<img
          src="./images/cart.png" // Adjust the path to your image
          alt="Map Marker Icon"
          className="social-icon"
        />            </a>
          </div>
        </div>
      </Container>
      </div>
    </nav>
  );
};

export default Header;
