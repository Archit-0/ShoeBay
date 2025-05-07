import React from "react";
import Input from "../../Components/Input";

const Category = ({ handleChange }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">Categories</h1>

      <label className="sidebar-label-container flex items-center space-x-2 cursor-pointer">
        <input onChange={handleChange} type="radio" value="" name="category" />
        <span className="ml-2"></span>All
      </label>
      <Input
        title={"Sneakers"}
        value="sneakers"
        name="category"
        handleChange={handleChange}
      />
      <Input
        title={"Sandals"}
        value="sandals"
        name="category"
        handleChange={handleChange}
      />
      <Input
        title={"Heels"}
        value="boots"
        name="category"
        handleChange={handleChange}
      />
      <Input
        title={"Flats"}
        s
        value="flats"
        name="category"
        handleChange={handleChange}
      />
    </>
  );
};

export default Category;
