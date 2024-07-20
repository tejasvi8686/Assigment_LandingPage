"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo1 from "@/public/assets/LOGO.svg";
import Hamburg from "@/public/assets/hamburg.svg";
import { itemleft, itemright } from "@/constant/index";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed bg-white z-20 top-0 left-0 right-0 px-0 rounded-xl mx-auto w-[95%] sm:w-auto sm:m-[36px] m-[10px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            href="/"
            className="flex flex-row items-center space-x-2 rtl:space-x-reverse mr-5"
          >
            <Image src={Logo1} alt=" Logo" height={60} width={180} />
          </Link>
          <div className="md:hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <ul className="hidden md:flex space-x-8 rtl:space-x-reverse items-center">
              {itemleft.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-black text-sm font-medium hover:text-[#4045C1]"
                    href={item.href}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
          <ul className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {itemright.map((item, index) => (
              <li key={index} className="flex flex-row items-center gap-2">
                <Image src={item.img} width={24} height={24} alt="" />
                <Link
                  className="text-black text-sm font-medium hover:text-[#4045C1]"
                  href={item.href}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="inline-flex items-center w-10 h-10 justify-center  lg:hidden "
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <Image src={Hamburg} height={16} width={16} alt="hamburg" />
        </button>
      </div>
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col px-4 py-4  lg:flex-row bg-[#F2F4F7] rounded-b-xl h-[100vh]  gap-5">
          {itemleft.map((item, index) => (
            <li key={index}>
              <Link className="text-lg  text-black" href={item.href}>
                {item.text}
              </Link>
            </li>
          ))}

          {itemright.map((item, index) => (
            <li key={index} className="flex flex-row items-center gap-2">
              <Image src={item.img} width={24} height={24} alt="" />
              <Link
                className="text-black sm:text-sm text-lg font-medium"
                href={item.href}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
