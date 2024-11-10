'use client'
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-customYellow shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-customBlue text-2xl font-bold">
            Hamza
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-customBlue focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex space-x-8">
          <Link
              href="/"
              className="text-customBlue hover:text-gray-300 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/Components/about"
              className="text-customBlue hover:text-gray-300 transition duration-200"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-customBlue hover:text-gray-300 transition duration-200"
            >
              Services
            </Link>
            <Link
              href="/Components/contact"
              className="text-customBlue hover:text-gray-300 transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-4 px-4 py-6">
          <Link
            href="#"
            className="block text-customBlue hover:text-gray-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/Components/about"
            className="block text-customBlue hover:text-gray-300 transition duration-200"
          >
            About
          </Link>
          <Link
            href="#"
            className="block text-customBlue hover:text-gray-300 transition duration-200"
          >
            Services
          </Link>
          <Link
            href="#"
            className="block text-customBlue hover:text-gray-300 transition duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
