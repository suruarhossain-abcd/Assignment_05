import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-3 items-center md:flex md:justify-between">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-2xl text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <div className="flex justify-center md:justify-start">
            <img
              src="/assets/logo-text.png"
              alt="Brand Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          <ul className="hidden md:flex gap-6 items-center">
            <li className="text-pink-500 font-medium cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Technologies</li>
            <li className="hover:text-pink-500 cursor-pointer">Projects</li>
            <li className="hover:text-pink-500 cursor-pointer">About</li>
            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
          </ul>

          <div className="flex justify-end items-center gap-2 sm:gap-3">
            <button className="text-sm font-medium hover:text-pink-500 whitespace-nowrap">
              Sign In
            </button>
            <button className="btn btn-secondary rounded-2xl text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>

        {isOpen && (
          <ul className="md:hidden flex flex-col gap-3 pt-4 pb-2 border-t mt-3 text-gray-700">
            <li className="text-pink-500 font-medium cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Technologies</li>
            <li className="hover:text-pink-500 cursor-pointer">Projects</li>
            <li className="hover:text-pink-500 cursor-pointer">About</li>
            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
