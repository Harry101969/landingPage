import { Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import "./../App.css";

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200); // 0.2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: "Product", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Why GCore", href: "#" },
  ];

  return (
    <div>
      <nav
        className={` fixed w-full pt-4 z-50 transition-all duration-200 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <Globe className="h-8 w-8 text-white" />
            </div>

            {/* Middle - Navigation Links (Hidden on mobile) */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3 py-2 text-md font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Buttons (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-4">
              <button className="px-4 py-2 text-md font-medium text-gray-300 bg-[rgba(255,255,255,0.1)] rounded-full hover:bg-[rgba(255,255,255,0.2)] hover:text-white transition duration-300 ease-in-out">
                Contact us
              </button>
              <button className="px-4 py-2 text-md font-medium bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
                Sign up for free
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "opacity-100 max-h-96"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black rounded-lg mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.1)] rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="space-y-2 pt-2">
                <button className="w-full px-4 py-2 text-md font-medium text-gray-300 bg-[rgba(255,255,255,0.1)] rounded-full hover:bg-[rgba(255,255,255,0.2)] hover:text-white transition duration-300 ease-in-out">
                  Contact us
                </button>
                <button className="w-full px-4 py-2 text-md font-medium bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
                  Sign up for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
