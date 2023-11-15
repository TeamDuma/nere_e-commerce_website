import Link from "next/link";
import Container from "../Container";
import { FaMapMarkerAlt, FaRegUserCircle, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="
      sticky
      top-0
      w-full
      bg-white
      shadow-sm
    ">
      <div className="py-4 ">
        <Container>
          <div className="flex 
            items-center
            justify-between
            gap-3
            md:gap-0
          ">
            {/* Logo */}
            <div>
              <Link href="/">Nere</Link>
            </div>

            {/* Search Bar */}
            <div className="relative flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search for products"
                className="border rounded-md p-2 pr-10 focus:outline-none focus:border-blue-500" // Added border radius and focus style
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-5.2-5.2"
                  />
                  <circle cx="10" cy="10" r="8" />
                </svg>
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt className="social-icon" />
              </a>
              <div className="ml-2">
                <p>Pick up from</p>
                <p>Location</p>
              </div>
            </div>

            {/* User and Cart Icons */}
            <div className="flex items-center gap-2 md:gap-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaRegUserCircle className="social-icon" />
              </a>
              <p>Login/Registeration</p>
            </div>

            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaShoppingCart className="social-icon border-b-[1px]" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
