import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import SingleCD from "../SingleCD/SingleCD";

const AllCD = () => {
  const [cds, setCds] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setCds(data));
  }, []);
  const [cart, setCart] = useState([]);

  const addToCartBTN = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  
  return (
    <div className="grid grid-cols-3 gap-4 gap-y-8">
      {cds.map((cd) => (
        <SingleCD
          key={cd.id}
          stars={cd.stars}
          name={cd.name}
          price={cd.price}
          image={cd.img}
          addToCartBTN={addToCartBTN}
        />
      ))}

      <Cart cds={cart} />
    </div>
  );
};

export default AllCD;
