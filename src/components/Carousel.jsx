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
      <p style={{ fontSize: "100px" }}>Carousel</p>
    </div>
  );
};

export default Carousel;
