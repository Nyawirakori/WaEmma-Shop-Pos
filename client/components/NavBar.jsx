"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  //  Makes the navigation mobile responsive
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-gray-200/20 shadow-lg">
        <div className="lg:max-w-screen-xl flex lg:flex-wrap items-center justify-between mx-auto px-3 py-3">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="self-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-teal-700 transition-all duration-300">
              WaEmma Shop
            </span>
          </a>

          <div className="flex items-center md:order-2 space-x-6 rtl:space-x-reverse">
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="/"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 border-b-2 border-blue-500"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:border-b-2 hover:border-blue-500 border-b-2 border-transparent"
              >
                Contact
              </a>
            </div>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300/50 font-semibold rounded-xl text-sm px-6 py-2.5 text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>

            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 rounded-xl md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300"
              aria-controls="navbar-sticky"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg /*This is the hamburger menu icon(three horizontal lines*/
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`items-center justify-between w-full md:hidden md:w-auto md:w-auto ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 space-y-2">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-semibold transition-all duration-300"
                  aria-current="page"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 rounded-lg hover:bg-gray-100 font-medium transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
