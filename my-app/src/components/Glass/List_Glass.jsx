import React from "react";
import Glass_Item from "./Glass_Item";

const List_Glass = ({ arrGlass, getIdGlass }) => {
  return (
    <div className="container mx-auto p-10 mt-24">
      <div className="grid grid-cols-6 gap-3 place-content-center bg-white">
        {arrGlass.map((glass, index) => {
          // console.log(glass);
          return (
            <Glass_Item glass={glass} key={index} getIdGlass={getIdGlass} />
          );
        })}
      </div>
    </div>
  );
};

export default List_Glass;
