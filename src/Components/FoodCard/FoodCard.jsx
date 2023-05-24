import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 rounded-lg bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-500 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
