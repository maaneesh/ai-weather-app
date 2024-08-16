import React from "react";

function Card({ prop }) {
  return (
    <div className="w-96  rounded-lg overflow-hidden ">
      <div className="m-0 px-2 py-4">
        <h2 className="font-bold  mb-2 text-inherit"></h2>
        <h2 className="font-bold ml-0 px-0 text-orange text-lg">{prop}</h2>
      </div>
    </div>
  );
}

export default Card;
