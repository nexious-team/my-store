import React from "react";
import { useTransition, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
const CarouselImage = props => {
  const style = props.style;
  return (
    <animated.div style={{ ...style, background: props.backgroundColor }}>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className="w-full h-full flex flex-row justify-center items-end"
      >
        <div>
          {props.imageNumber.map((i, index) => (
            <button key={index}>
              <FontAwesomeIcon
                icon={props.imageIndex == index ? faCircle : faDotCircle}
                color={"white"}
                style={{ fontSize: "1.2rem" }}
              ></FontAwesomeIcon>
            </button>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default CarouselImage;
