import React, { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { FaAlignRight } from "react-icons/fa6";
import assets from "../assets/assets";

const Navbar = () => {
  const [phoneMenu, setPhoneMenu] = useState(false);

  return (
    <div className="flex items-center gap-4 px-6 py-3 sticky top-0 z-20 backdrop-blur-md sm:px-20 sm:py-4 sm:justify-between">
      <div className=" flex-2 w-32 sm:w-40 sm:flex-1 ">
        <img src={assets.logo} alt="logo" />
      </div>

      <div
        className={`${phoneMenu ? "flex" : "hidden"} flex-col absolute max-sm:bg-primary right-0 top-0 w-1/2 px-4 pt-20 pb-8 text-lg gap-6 rounded-bl-lg text-white sm:rounded-bl-none sm:flex sm:items-center sm:text-sm sm:gap-4 sm:flex-row sm:static sm:text-gray-600 sm:font-bold sm:flex-1 sm:p-0  `}
      >
        <span
          className=" text-2xl cursor-pointer absolute top-8 right-8 sm:hidden"
          onClick={() => setPhoneMenu(false)}
        >
          <VscChromeClose />
        </span>

        <a href="#" className="sm:hover:border-b-2 border-b-primary">
          Home
        </a>
        <a href="#services" className="sm:hover:border-b-2 border-b-primary">
          Services
        </a>
        <a href="#our-work" className="sm:hover:border-b-2 border-b-primary">
          Our work
        </a>
        <a href="#contact-us" className="sm:hover:border-b-2 border-b-primary">
          Contact Us
        </a>
      </div>

      <a
        href="#contact-us"
        className=" hidden bg-primary sm:flex text-white text-xs font-bold items-center px-8 py-2 w-fit rounded-4xl gap-2 "
      >
        Contact
        <span>
          <VscArrowRight />
        </span>
      </a>

      <a
        className=" text-2xl cursor-pointer sm:hidden "
        onClick={() => setPhoneMenu(true)}
      >
        <FaAlignRight />
      </a>
    </div>
  );
};

export default Navbar;
