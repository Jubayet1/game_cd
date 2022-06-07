import React from 'react';

const SingleCD = ({stars, name, price, image}) => {
    return (
        <div>
            <img src={image} alt="" className="w-48" />
            <p className="text-2xl my-4">{name}</p>
            <p className="text-xl">Ratings: {stars}</p>
            <p className="text-md">Price: {price}</p>
        </div>
    );
};

export default SingleCD;