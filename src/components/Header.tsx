"use client";

import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-secondary font-primary text-white p-5 text-xl z-50">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-[20px] lg:text-[32px] font-semibold">
          <div>Logo</div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-xl px-4 py-2 hover:outline-none"
          onClick={toggleMenu}
        >
          <FiMenu />
        </button>

        {/* Menu Items */}
        <div className={`hidden lg:flex lg:items-center lg:w-auto`}>
          <ul className="flex lg:flex-row lg:space-x-14 text-[18px] lg:items-center">
            <li className="hover:text-blue-500 hover:font-semibold">
              <Link href="/">Home</Link>
            </li>

            <li className="hover:text-blue-500 hover:font-semibold">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="hover:text-blue-500 hover:font-semibold">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-blue-500 hover:font-semibold">
              <Link href="#contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Menu Items for Mobile View */}
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden mt-4`}>
        <ul className="flex flex-col space-y-4 text-[18px]">
          <li className="hover:text-blue-500 hover:font-semibold">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:text-blue-500 hover:font-semibold">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:text-blue-500 hover:font-semibold">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:text-blue-500 hover:font-semibold">
            <Link href="#contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
