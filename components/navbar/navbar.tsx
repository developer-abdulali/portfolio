"use client";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [navbar, setNavbar] = useState(false);

//   function triggerNavbar() {
//     setNavbar(!navbar);
//   }

//   console.log({ navbar });

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 shadow-md sm:px-3">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link href="/" className="flex items-center">
//           <span className="text-xl font-semibold hover:text-blue-700 duration-300">
//             ABDUL ALI
//           </span>
//         </Link>
//         <button
//           data-collapse-toggle="navbar-default"
//           type="button"
//           onClick={triggerNavbar}
//           className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-default"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-6 h-6"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 2xl:text-xl md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link
//                 href="/Services"
//                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl"
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/"
//                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/"
//                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           <div
//             className={`${navbar ? "block" : "hidden"} md:hidden`}
//             id="mobile-menu"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <a
//                 href="#"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 About
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-600 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between items-center gap-[750px] sm:gap-[240px] lg:gap-[500px]">
            <div className="">
              <Link href="/">
              <span className="text-xl text-gray-300">
                ABDUL ALI
              </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 md:pl-20">
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  target="_blank"
                  href="/Services"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/Services"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
