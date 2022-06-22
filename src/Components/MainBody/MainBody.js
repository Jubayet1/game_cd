import React from "react";
import AllCD from "../AllCD/AllCD";
import "./MainBody.css"

const MainBody = () => {
  return (
    <div className="grid grid-cols-4 gap-4 bg-">
      <div className="col-span-4">
        <AllCD />
      </div>
    </div>
  );
};

export default MainBody;
