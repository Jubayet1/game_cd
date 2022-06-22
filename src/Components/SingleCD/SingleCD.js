import React from "react";

const SingleCD = (props) => {
  const { image, name, stars, price, addToCartBTN } = props;
  return (
    <div className="flex flex-col content-center">
      <img src={image} alt="" className="w-48 ml-4" />
      <p className="text-2xl my-4">{name}</p>
      <p className="text-xl">Ratings: {stars}</p>
      <p className="text-md">Price: {price}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-6/12 mx-auto"
        onClick={() => addToCartBTN(props)}
      >
        Add To List
      </button>
    </div>
  );
};

export default SingleCD;
