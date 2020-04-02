import React from "react";
import { animated, useSpring } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
const CarouselImage = props => {
  const style = props.style;
  const titleStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1100
  });
  const descriptionStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1300
  });
  return (
    <animated.div style={{ ...style, background: props.backgroundColor }}>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className="w-full h-full relative"
      >
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%,-50%)"
          }}
          className="text-center"
        >
          <animated.div
            style={titleStyle}
            className="text-5xl w-full text-white font-bold"
          >
            AirPods Pro
          </animated.div>
          <animated.div
            style={descriptionStyle}
            className="text-2xl w-full text-white font-light"
          >
            Visualize your music
          </animated.div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          {/* {props.imageNumber.map((i, index) => (
            <button key={index}>
              <FontAwesomeIcon
                icon={props.imageIndex == index ? faCircle : faDotCircle}
                color={"white"}
                style={{ fontSize: "1.2rem" }}
              ></FontAwesomeIcon>
            </button>
          ))} */}
        </div>
      </div>
    </animated.div>
  );
};

export default CarouselImage;
