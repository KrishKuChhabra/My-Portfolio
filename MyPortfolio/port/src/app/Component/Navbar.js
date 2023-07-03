import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <div>
      <nav className="overflow-hidden fixed top-0 left-0 w-full h-20 border border-gray-300 shadow-lg shadow-gray-400 px-2 text-black bg-[#dbeafe]">
        <div className="flex flex-wrap items-center h-20 justify-between mx-auto p-5">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              Krish Chhabra
            </span>
          </Link>
          <div className="px-2 hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 dark:text-black md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  href="/"
                  className="font-bold block py-2 pl-3 pr-4 text-black bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-bold block py-2 pl-3 pr-4 text-black bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Portfolio"
                  className="font-bold block py-2 pl-3 pr-4 text-black bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-blue-500"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skill"
                  className="font-bold block py-2 pl-3 pr-4 text-black bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-blue-500"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-bold block py-2 pl-3 pr-4 text-black bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
