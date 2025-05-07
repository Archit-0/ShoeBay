import React from "react";

const Card = ({ image, star, reviews, prevPrice, newPrice, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-md w-72 m-auto hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="h-48 overflow-hidden flex items-center justify-center">
        <img src={image} alt={title} className="h-full object-contain" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>

        <div className="flex items-center text-yellow-500 text-sm mb-1">
          <p className="flex space-x-1">
            <span>{star}</span>
            <span>{star}</span>
            <span>{star}</span>
            <span>{star}</span>
          </p>
          <span className="ml-2 text-gray-600">({reviews})</span>
        </div>

        <div className="text-sm text-gray-700 mt-auto">
          <del className="mr-2 text-gray-500">{prevPrice}</del>
          <span className="text-green-600 font-semibold">{newPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
