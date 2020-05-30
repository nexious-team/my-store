import React, { useEffect, useState } from "react";
import axios from "axios";
import ENV from "../../config/config.json";

import FeatureCateProduct from "./FeatureCateProduct";

const FeatureCategory = () => {
  const [products, setProducts] = useState();
  function getFeatureProducts() {
    let api = ENV.API_ENDPOINT;
    axios
      .get(api + "categories")
      .then((res) => {
        setProducts(res.data.payload.splice(0, 5));
        console.log(res.data.payload);
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
        <p className="font-bold text-3xl">Shop For</p>
      </div>
      <div className="flex flex-row justify-between flex-wrap">
        {products &&
          products.map((p, index) => (
            <FeatureCateProduct
              key={index}
              image="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title={p.name}
              productId={p._id}
              product={p}
            ></FeatureCateProduct>
          ))}
      </div>
    </div>
  );
};

export default FeatureCategory;
