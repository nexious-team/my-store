import React from "react";

const FeatureProductCard = props => {
  return (
    <div>
      <a href="/product-detail">
        <div className="w-40 h-56">
          <div style={{ minHeight: "77%" }} className="flex items-center">
            <img src={props.url} alt="" />
          </div>
          <div className="font-mono text-gray-800">
            <p className="text-center text-lg">{props.title}</p>
          </div>
          <div>
            <p className="font-bold text-xl">$18,000</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FeatureProductCard;
