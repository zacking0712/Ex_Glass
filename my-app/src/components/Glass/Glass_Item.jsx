import React from "react";

const Glass_Item = ({ glass, key, getIdGlass }) => {
  console.log(glass);
  return (
    <div>
      <button
        onClick={() => {
          getIdGlass(glass.id);
        }}
      >
        <div className="flex flex-col items-center my-3 border-2 rounded p-3 cursor-pointer">
          <img className="w-1/2" src={glass.image} alt="" />
          <p>{glass.name}</p>
        </div>
      </button>
    </div>
  );
};

export default Glass_Item;
