import React from "react";

const Manocanh = ({ detail }) => {
  return (
    <div className="container mx-auto flex justify-around my-10 relative">
      <div className="item_left w-60">
        <img className="" src="./public/glassimg/image/model.jpg" alt="" />
        <img className="glass_item" src={detail.url} alt="" />
        <div className="overlay bg-orange-300">
          <div className="flex flex-col">
            <p className="text-blue-500 font-bold ml-1">{detail.name}</p>
            <p className="text-white ml-1">{detail.desc}</p>
          </div>
        </div>
      </div>

      <div className="item_right w-60">
        <img src="./public/glassimg/image/model.jpg" alt="" />
      </div>
    </div>
  );
};

export default Manocanh;
