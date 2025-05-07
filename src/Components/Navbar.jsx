import React from "react";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Navbar = ({ handleChange, query }) => {
  return (
    <nav className="flex justify-between items-center p-4  text-white ml-64">
      <div>
        <input
          type="text"
          placeholder="Enter your shoes name"
          value={query}
          className="p-2 text-lg rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center">
        <a href="" className="text-black text-xl ml-4 hover:text-orange-500">
          <FaRegHeart />
        </a>
        <a href="" className="text-black text-xl ml-4 hover:text-orange-500">
          <FaShoppingCart />
        </a>
        <a href="" className="text-black text-xl ml-4 hover:text-orange-500">
          <VscAccount />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
