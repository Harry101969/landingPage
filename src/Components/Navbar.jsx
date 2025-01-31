import { Globe } from "lucide-react";
import "./../App.css";

const Navbar = (isLoaded) => {
  return (
    <div>
      <nav
        className={`bg-transparent rounded-xl transition-all duration-500 delay-500 w-full pt-4 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } fixed top-0 left-0 z-10`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <Globe className="h-8 w-8 text-white" />
            </div>

            {/* Middle - Centered Navigation Links */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="px-3 py-2 text-md font-medium text-gray-300 hover:text-white"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-md font-medium text-gray-300 hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-md font-medium text-gray-300 hover:text-white"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-md font-medium text-gray-300 hover:text-white"
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Why GCore
                </a>
              </div>
            </div>

            {/* Right - Contact Us & Sign Up Buttons */}
            <div className="flex items-center gap-4">
              <button
                className="px-4 py-2 text-md font-medium text-gray-300 
                bg-[rgba(255,255,255,0.1)] rounded-full 
              hover:bg-[rgba(255,255,255,0.2)] hover:text-white transition duration-300 ease-in-out cursor-pointer"
              >
                Contact us
              </button>
              <button className="px-4 py-2 text-md font-medium bg-orange-600 text-white rounded-full hover:bg-orange-700 cursor-pointer">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
