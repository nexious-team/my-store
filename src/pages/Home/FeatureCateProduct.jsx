import React from "react";

const FeatureCateProduct = props => {
  return (
    <div>
      <div className="w-40 bg-gray-100 border">
        <div>
          <img src={props.image} alt="" />
        </div>
        <div className="font-mono text-gray-800">
          <a href="/product-detail">
            <p className="text-center">{props.title}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureCateProduct;
