import Link from "next/link";
import React from "react";
import { BiCycling, BiShoppingBag } from "react-icons/bi";
import { FaBurger } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";

interface NavProps {
  openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {
  return (
    <div className="h-[12vh] bg-white px-2 fixed top-0 z-50 left-0 right-0">
      <div className="sm:w-[90%] mx-auto flex h-[100%] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
          <h1 className="text-[20px] sm:text-[25px] font-semibold">
            Mr.Burger
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[20px] font-medium hover:text-orange-600">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-orange-600">
            <Link href="/">Shop</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-orange-600">
            <Link href="/">Menu</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-orange-600">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-orange-600">
            <Link href="/">Contact</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-2 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-orange-600 flex items-center rounded-md space-x-2 text-white">
            <span>
              <BiCycling className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
            </span>
            <span className="font-bold tracking-widest">Order Now</span>
          </button>

          {/* Cart Button */}
          <button className="sm:px-6 sm:py-3 px-4 py-2 hover:bg-green-700 transition-all duration-200 bg-orange-600 flex items-center rounded-md text-white">
            <BiShoppingBag className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
          </button>
          <HiBars3BottomRight
            onClick={openNav}
            className="lg:hidden w-[2rem] h-[2rem] text-black cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
