import React from "react";
import "./recommend.css";

const Recommnedation = ({ handleClick }) => {
  return (
    <div>
      <div className="recommended-flex">Recommendation</div>
      <div className="recommended-title">
        <button onClick={handleClick} value="" className="btns">
          All Products
        </button>
        <button onClick={handleClick} value="Nike" className="btns">
          Nike{" "}
        </button>
        <button onClick={handleClick} value={"Adidas"} className="btns">
          Adidas
        </button>
        <button onClick={handleClick} value={"Puma"} className="btns">
          Puma
        </button>
      </div>
    </div>
  );
};

export default Recommnedation;
