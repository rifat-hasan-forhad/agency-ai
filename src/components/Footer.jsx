import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-8 px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="max-w-md">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-blue-600 text-2xl">◆</span> agency.ai
          </h2>
          <p className="text-gray-600 mt-3 text-sm">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <div className="flex gap-6 mt-6 text-gray-700 text-sm">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              Services
            </a>
            <a href="#" className="hover:text-blue-600">
              Our work
            </a>
            <a href="#" className="hover:text-blue-600">
              Testimonial
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="max-w-md w-full">
          <h3 className="text-md font-semibold">Subscribe to our newsletter</h3>
          <p className="text-gray-600 text-sm mt-2">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-5 py-2 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>Copyright 2025 © agency.ai - All Right Reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0 text-gray-600">
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaTwitter className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-blue-600" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
