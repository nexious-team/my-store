import React, { useEffect, useState } from "react";
import FeatureProductCard from "./FeatureProductCard";
import axios from "axios";
import ENV from "../../config/config.json";

const FeatureProduct = (props) => {
  const [products, setProducts] = useState();
  function getFeatureProducts() {
    let api = ENV.API_ENDPOINT;
    axios
      .get(api + "products")
      .then((res) => {
        setProducts(res.data.payload.splice(0, 5));
        // console.log(res.data.payload);
      })
      .catch((res) => {
        console.log(res.message);
      });
  }
  useEffect(() => {
    getFeatureProducts();
  }, []);
  return (
    <div className="mx-auto container">
      <div className="py-2">
        <p className="font-bold text-3xl">{props.title}</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        {products &&
          products.map((p, index) => (
            <FeatureProductCard
              key={index}
              url={p.images[0].url}
              title={p.title}
              productId={p._id}
              product={p}
            ></FeatureProductCard>
          ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
