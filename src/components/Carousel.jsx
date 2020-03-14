import React, { useState } from "react";

import "../assets/css/carousel.css";
import img1 from "../assets/img/img-1.jpg";
const Carousel = () => {
  const [cards] = useState([
    {
      image: img1,
      title: "Burgundy Flemming",
      subtitle: "Advertising"
    },
    {
      image: img1,
      title: "Nigel Nigel",
      subtitle: "Sound & Vision"
    },
    {
      image: img1,
      title: "Caspian Bellevedere",
      subtitle: "Accounting"
    }
  ]);
  return (
    <div style={{ height: "50vh" }} className="mx-auto container bg-blue-100">
      <div className="relative">
        <img
          src="https://www.apple.com/v/macbook-pro-16/b/images/meta/og__csakh451i0eq_large.png"
          alt=""
        />
        <div
          style={{
            opacity: "0.5",
            fontSize: "4rem",
            fontWeight: "bold",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
          className="absolute uppercase text-gray-500"
        >
          <p className="text-center">Carousel</p>
          <p className="text-center">Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
