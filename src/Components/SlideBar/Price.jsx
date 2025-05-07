import React from "react";
import Input from "../../Components/Input";

const Price = ({ handleChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Price</h2>

      <label className="sidebar-label-container flex items-center space-x-2 cursor-pointer">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="ml-2"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={50}
        title="$0 - 50"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - $100"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - $150"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="test2"
      />
    </div>
  );
};

export default Price;
