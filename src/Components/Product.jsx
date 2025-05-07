import React from "react";
import data from "../Db/Data";
import Card from "./Card";

const Product = ({ result }) => {
  if (!Array.isArray(result)) {
    return <p className="px-4">No products found.</p>;
  }
  if (result.length === 0) {
    return <p className="px-4">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
      {result.map((product, index) => (
        <Card
          key={index}
          image={product.img}
          star={product.star}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
          title={product.title}  
        />
      ))}
    </div>
  );
};

export default Product;
