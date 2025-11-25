import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSectors, setShowSectors] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <h1 className="text-[#064EA4] text-xl font-bold">
          Software Recruitment co.
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium">
          <li className="text-gray-700 hover:text-[#064EA4] cursor-pointer flex items-center gap-1">
            For Jobseekers<FaAngleDown className="text-sm" />
          </li>
          <li className="text-gray-700 hover:text-[#064EA4] cursor-pointer flex items-center gap-1">
            Clients<FaAngleDown className="text-sm" />
          </li>
            <li
            className="relative text-gray-700 hover:text-[#064EA4] cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setShowSectors(true)}
            onMouseLeave={() => setShowSectors(false)}
            >
            Sectors <FaAngleDown className="text-sm" />

            {/* Dropdown menu */}
            {showSectors && (
                <div className="absolute left-0 top-6 bg-white shadow-lg rounded-md py-3 w-40 z-50">
                <a className="block px-4 py-2 hover:bg-gray-100">Software Engineering</a>
                <a className="block px-4 py-2 hover:bg-gray-100">DevOps</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Cloud</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Infrastructure</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Security</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Testing</a>
                </div>
            )}
            </li>
          <li className="text-gray-700 hover:text-[#064EA4] cursor-pointer flex items-center gap-1">
            Resources<FaAngleDown className="text-sm" />
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-[#F7D45A] rounded-full px-5 py-2 hover:bg-yellow-400 transition">
            Upload CV
          </button>
          <button className="bg-[#F2996A] rounded-full px-5 py-2 hover:bg-orange-400 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            {!open ? (
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-md">
          <ul className="flex flex-col gap-4 font-medium">
            <li className="text-gray-700 hover:text-[#064EA4]">
                <button className="w-full flex items-center justify-between py-2">For jobseekers<FaAngleDown /></button>
            </li>
            <li className="text-gray-700 hover:text-[#064EA4]">
                <button className="w-full flex items-center justify-between py-2">Clients<FaAngleDown /></button>
            </li>
            <li className="text-gray-700 hover:text-[#064EA4]">
  <button
    onClick={() => setShowSectors(!showSectors)}
    className="w-full flex items-center justify-between py-2"
  >
    Sectors
    <FaAngleDown
      className={`transition-transform ${
        showSectors ? "rotate-180" : "rotate-0"
      }`}
    />
  </button>

  {showSectors && (
    <ul className="pl-4 space-y-2">
      <li className="hover:text-[#064EA4]">Software Engineering</li>
      <li className="hover:text-[#064EA4]">DevOps</li>
      <li className="hover:text-[#064EA4]">Cloud</li>
      <li className="hover:text-[#064EA4]">Infrastructure</li>
      <li className="hover:text-[#064EA4]">Security</li>
      <li className="hover:text-[#064EA4]">Testing</li>
    </ul>
  )}
</li>
            <li className="text-gray-700 hover:text-[#064EA4]">
                <button className="w-full flex items-center justify-between py-2">Resources<FaAngleDown /></button>
            </li>
          </ul>

          <div className="flex flex-col gap-3 pt-3">
            <button className="bg-[#F7D45A] hover:bg-yellow-400 rounded-full px-5 py-2 transition">
              Upload CV
            </button>
            <button className="bg-[#F2996A] hover:bg-orange-400 rounded-full px-5 py-2 transition">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}