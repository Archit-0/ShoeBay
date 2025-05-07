import React from "react";
import Input from "../../Components/Input";

const Color = ({ handleChange }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Color</h1>
      <label className="sidebar-label-container flex items-center space-x-2 cursor-pointer">
        <input onChange={handleChange} type="radio" value="" name="test1" />
        <span className="ml-2"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />

      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />

      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />

      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />

      {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          /> */}
    </div>
  );
};

export default Color;
