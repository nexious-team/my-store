import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import FeatureCategory from "./FeatureCategory";
import FeatureProduct from "./FeatureProduct";

const Home = () => {
  return (
    <div>
      <div className="mx-auto container px-32">
        <Carousel></Carousel>
        <FeatureCategory></FeatureCategory>
        <div className="mx-auto container my-10">
          <hr />
        </div>
        <FeatureProduct title="Feature Colletions"></FeatureProduct>
        <div className="mx-auto container my-10">
          <hr />
        </div>
        <FeatureProduct title="Apple Products"></FeatureProduct>
        <div className="mx-auto container my-10">{""}</div>
      </div>
    </div>
  );
};

export default Home;
