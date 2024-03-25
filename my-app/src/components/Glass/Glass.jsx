import React, { useState } from "react";
import Manocanh from "./Manocanh";
import List_Glass from "./List_Glass";

const Glass = () => {
  const [arrList, setArrList] = useState([]);
  const [detail, setDetail] = useState({});
  const arrGlass = [
    {
      id: 1,
      price: 30,
      image: "./public/glassimg/image/g1.jpg",
      name: "GUCCI G8850U",
      url: "./public/glassimg/image/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      image: "./public/glassimg/image/g2.jpg",
      name: "GUCCI G8759H",
      url: "./public/glassimg/image/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      image: "./public/glassimg/image/g3.jpg",
      name: "DIOR D6700HQ",
      url: "./public/glassimg/image/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      image: "./public/glassimg/image/g4.jpg",
      name: "DIOR D6005U",
      url: "./public/glassimg/image/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      image: "./public/glassimg/image/g5.jpg",
      name: "PRADA P8750",
      url: "./public/glassimg/image/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      image: "./public/glassimg/image/g6.jpg",
      name: "PRADA P9700",
      url: "./public/glassimg/image/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      image: "./public/glassimg/image/g7.jpg",
      name: "FENDI F8750",
      url: "./public/glassimg/image/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      image: "./public/glassimg/image/g8.jpg",
      name: "FENDI F8500",
      url: "./public/glassimg/image/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      image: "./public/glassimg/image/g9.jpg",
      name: "FENDI F4300",
      url: "./public/glassimg/image/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  let getIdGlass = (id) => {
    arrGlass.forEach((glass, index) => {
      if (glass.id == id) {
        setDetail(glass);
      }
    });
  };

  return (
    <div
      className="h-screen bg-no-repeat w-full bg-center bg-cover"
      style={{ backgroundImage: `url(./public/glassimg/image/background.jpg)` }}
    >
      <div>
        <h2 className="bg-black opacity-80 py-5 text-2xl text-white text-center">
          TRY GLASS APP ONLINE
        </h2>
      </div>

      {/* Nhân vật */}
      <Manocanh detail={detail} />
      {/* List Glass */}
      <List_Glass arrGlass={arrGlass} getIdGlass={getIdGlass} />
    </div>
  );
};

export default Glass;
