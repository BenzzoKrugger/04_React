import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 text-white">
      <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={20} />
      </div>
      <div className="fixed top-0 left-0 h-full w-2/3 border-r border-r-gray-900 bg-[#000300]">
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-700">Home</li>
          <li className="p-4 border-b border-gray-700">Company</li>
          <li className="p-4 border-b border-gray-700">Resources</li>
          <li className="p-4 border-b border-gray-700">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
