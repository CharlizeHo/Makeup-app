import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, brand, imgUrl, price }) => (
  <Link
    className="flex flex-col align-center rounded-md mb-6 px-4 py-6 transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out"
    to={`/product/${id}`}
  >
    <div className="flex flex-1 flex-col justify-center mb-4">
      <img width="130" src={imgUrl} alt={name} className="mx-auto" />
    </div>

    <div>
      <span className="flex justify-between items-center">
        <p className="text-lg font-semibold">{name}</p>
        <i className="fa-solid fa-heart hover:text-orange-500"></i>
      </span>

      <p className="text-sm mb-4">{brand}</p>
      <span className="flex justify-between items-center">
        <p className="font-semibold">${price}</p>
        <button className="btn btn-sm border-none hover:bg-orange-500">
          Add Cart
        </button>
      </span>
    </div>
  </Link>
);

export default ProductCard;
