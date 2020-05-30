import React from "react";
import { Link, useParams } from "react-router-dom";

const FeatureCateProduct = (props) => {
  return (
    <div>
      <div className="w-40 bg-gray-100 border">
        <div className="w-40 h-48 flex ">
          <div
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-full"
          ></div>
          {/* <img src={props.image} alt="" /> */}
        </div>
        <div className="font-mono text-gray-800 py-3">
          <Link to={`/category/${props.productId}`}>
            <p className="text-center">{props.title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCateProduct;
