import React from "react";

const Input = ({ handleChange, name, value, color, title }) => {
  return (
    <label className="sidebar-label-container flex items-center space-x-2 cursor-pointer">
      <input type="radio" value={value} name={name} onChange={handleChange} />
      <span className="ml-2" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
