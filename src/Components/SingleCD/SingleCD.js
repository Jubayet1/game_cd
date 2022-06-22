import React from "react";

const SingleCD = (props) => {
  const { image, name, stars, price, addToCartBTN } = props;
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Game CD" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Ratings: {stars}</p>
        <p>Price: {price}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => addToCartBTN(props)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCD;
