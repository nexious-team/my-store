import React from "react";
import { Link, useParams } from "react-router-dom";

const FeatureProductCard = (props) => {
  const link = `/product-detail/${props.productId}`;
  return (
    <div>
      <Link to={link}>
        <div className="w-40 h-56">
          <div style={{ minHeight: "77%" }} className="flex items-center">
            <img src={props.url} alt="" />
          </div>
          <div className="font-mono text-gray-800">
            <p className="text-center text-lg">{props.title}</p>
          </div>
          <div>
            <p className="font-bold text-xl">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(props.product.product_units[0].price)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeatureProductCard;
