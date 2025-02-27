import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-neutral-900 z-50">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex flex-shrink-0 items-center">
          <a href="#hero" className="text-3xl">
            RM
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin className="hover:text-blue-600 hover:scale-110 transition-transform duration-200" />
          <FaGithub className="hover:text-blue-600 hover:scale-110 transition-transform duration-200" />
          <FaInstagram className="hover:text-blue-600 hover:scale-110 transition-transform duration-200" />
          <FaSquareXTwitter className="hover:text-blue-600 hover:scale-110 transition-transform duration-200" />
        </div>
      </div>
    </nav>
  );
};
