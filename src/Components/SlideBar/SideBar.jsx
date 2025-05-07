import React from "react";
import Category from "./Category";
import Price from "./Price";
import Color from "./Color";

const SideBar = ({ handleCategoryChange }) => {
  return (
    <div className="w-64 bg-gray-800 text-white p-5 fixed top-0 left-0 h-full">
      <Category handleChange={handleCategoryChange} />
      <Price handleChange={handleCategoryChange} />
      <Color handleChange={handleCategoryChange} />
    </div>
  );
};

export default SideBar;
