import React from "react";
import AllCD from "../AllCD/AllCD";
import Cart from "../Cart/Cart";

const MainBody = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <AllCD />
      </div>
      <div className="">
        <Cart />
      </div>
    </div>
  );
};

export default MainBody;
