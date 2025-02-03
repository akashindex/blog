import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Nav: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const closeNavbar = () => {
    setNavbar(false);
  };

  return (
    <nav className="w-full bg fixed top-0 left-0 right-0 z-10 font-rethink">
      <div className="justify-between px-4 mx-[23px] md:items-center md:flex md:px-8">
        {/* Logo Section */}
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image src="/images/logo copy.png" alt="Logo" width={80} height={80} />
            </Link>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-300 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src="/close.svg"
                    width={30}
                    height={30}
                    alt="Close Menu"
                  />
                ) : (
                  <Image
                    src="/open.svg"
                    width={30}
                    height={30}
                    alt="Open Menu"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "p-12 md:p-0 block" : "hidden"
          }`}
        >
          <ul className="h-screen md:h-auto items-center justify-end md:flex space-y-0 md:space-y-0 md:space-x-6">
            <li className="text-white text-lg hover:text-purple-500 transition-all duration-300" onClick={closeNavbar}>
              <Link href="/">Home</Link>
            </li>
            <li className="text-white text-lg hover:text-purple-500 transition-all duration-300" onClick={closeNavbar}>
              <Link href="/About">About</Link>
            </li>
            <li className="text-white text-lg hover:text-purple-500 transition-all duration-300" onClick={closeNavbar}>
              <Link href="/contactpage">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;