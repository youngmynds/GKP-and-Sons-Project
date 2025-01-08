import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <header className="flex items-center justify-between p-4 bg-gray-800 w-full">
        {/* Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <Image src="/MenuIcon.svg" alt="MenuIcon" width={25} height={25} />
        </button>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/Logo.svg" alt="Logo" width={150} height={150} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {["Home", "About Us", "Contact Us", "FAQs"].map((item, index) => (
            <a
              href="#"
              key={index}
              className="hover:underline text-sm tracking-wide text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Side Navbar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white z-50 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 w-64`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleMenu} className="focus:outline-none">
            <Image src="/CloseIcon.svg" alt="CloseIcon" width={20} height={20} />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-4">
          {["Home", "About Us", "Products", "Collections", "Contact Us", "FAQs"].map((item, index) => (
            <a
              href="#"
              key={index}
              className="hover:underline text-base tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
}
