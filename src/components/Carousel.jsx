import React, { useState, useEffect } from "react";
import { animated, useTransition } from "react-spring";
import CarouselImage from "./CarouselImage";

import "../assets/css/carousel.css";
import "./styles.css";

const Carousel = () => {
  const carouselText = [
    {
      text: "a",
      backgroundColor: "white",
      image:
        "https://images.pexels.com/photos/3586911/pexels-photo-3586911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      text: "b",
      backgroundColor: "red",
      image:
        "https://images.pexels.com/photos/3862601/pexels-photo-3862601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      text: "c",
      backgroundColor: "blue",
      image:
        "https://images.pexels.com/photos/2692464/pexels-photo-2692464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ];
  const [index, set] = useState(0);
  // const onClick = useCallback(() => set(state => (state + 1) % 3), []);
  // const onClick = () => {
  //   console.log("click carousel");
  // };
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 3), 4500),
    []
  );
  const transitions = useTransition(index, p => p, {
    from: { opacity: 1, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    // config: { friction: 45, clamp: false, tension: 120 }
    config: { tension: 110 }
  });
  return (
    <div
      className="overflow-hidden  w-full "
      style={{ minHeight: "50vh", position: "relative" }}
    >
      <div className="mx-auto container carousel-animated">
        {transitions.map(({ item, props, key }) => {
          return (
            <CarouselImage
              imageNumber={carouselText}
              imageIndex={item}
              key={key}
              text={carouselText[item].text}
              backgroundColor={carouselText[item].backgroundColor}
              style={props}
              image={carouselText[item].image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
