import React from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SlideBar/SideBar";
import Product from "./Components/Product";

import { useState } from "react";
import data from "./Db/Data";
import Recommnedation from "./Components/Recomdation/Recommnedation";

const App = () => {
  const [buttonQuery, setButtonQuery] = useState("");
  const [inputQuery, setInputQuery] = useState("");

  const handleInputQuery = (event) => {
    // console.log("Input query:", event.target.value);
    setInputQuery(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setButtonQuery(event.target.value);
    // console.log("Selected category:", event.target.value);
  };
  const handleButtonClick = (event) => {
    setButtonQuery(event.target.value);
  };

  const filteredProducts = (data, buttonQuery, inputQuery) => {
    return data.filter((product) => {
      const matchesInput =
        !inputQuery ||
        product.title.toLowerCase().includes(inputQuery.toLowerCase());

      const matchesButton =
        !buttonQuery ||
        product.category === buttonQuery ||
        product.newPrice === buttonQuery ||
        product.color === buttonQuery ||
        product.company === buttonQuery;

      return matchesInput && matchesButton;
    });
  };

  let result = filteredProducts(data, buttonQuery, inputQuery);
  // console.log("Filtered products:", result);
  return (
    <div>
      <Navbar query={inputQuery} handleChange={handleInputQuery} />
      <Recommnedation handleClick={handleButtonClick} />
      <SideBar handleCategoryChange={handleCategoryChange} />
      <main className="ml-64 p-6 w-full min-h-screen bg-gray-50 overflow-x-hidden">
        <Product result={result} />
      </main>
    </div>
  );
};

export default App;
