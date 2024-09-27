import React, { useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 ">
      <Logo />
      <div className="md:hidden" onClick={toggleMenu}>
        <button className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`flex-col md:flex md:flex-row ${isOpen ? "flex" : "hidden"} md:items-center md:space-x-8`}>
        <a href="/" className="py-2 text-black-700 font-bold hover:text-gray-500">Home</a>
        <a href="/aboutus" className="py-2 text-black-700 font-bold hover:text-gray-500">About</a>
        <a href="/product" className="py-2 text-black-700 font-bold hover:text-gray-500">Product</a>
        <a href="/contact" className="py-2 text-black-700 font-bold hover:text-gray-500">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
