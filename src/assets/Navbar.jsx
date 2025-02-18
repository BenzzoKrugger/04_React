import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 text-white">
      <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={toggleNav} className="block cursor-pointer md:hidden">
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={isOpen ? 'fixed top-0 left-0 h-full w-2/3 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-600' : 'fixed left-[-100%]'}>
        <h1 className="m-4 text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="p-4 uppercase">
          <li className="border-b border-gray-700 p-4">Home</li>
          <li className="border-b border-gray-700 p-4">Company</li>
          <li className="border-b border-gray-700 p-4">Resources</li>
          <li className="border-b border-gray-700 p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
