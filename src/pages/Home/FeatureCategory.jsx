import React from "react";
import FeatureCateProduct from "./FeatureCateProduct";

const FeatureCategory = () => {
  const products = [
    {
      id: "1",
      name: "iPhone 11 Pro",
      url:
        "https://cdn.shopify.com/s/files/1/2595/5304/products/TENC_6.5_iPhone_11_PC-658CC-3_1024x1024.png?v=1569918779"
    },
    {
      id: "1",
      name: "iPhone 11 Pro",
      url:
        "https://cdn.shopify.com/s/files/1/2595/5304/products/TENC_6.5_iPhone_11_PC-658CC-3_1024x1024.png?v=1569918779"
    },
    {
      id: "1",
      name: "iPhone 11 Pro",
      url:
        "https://cdn.shopify.com/s/files/1/2595/5304/products/TENC_6.5_iPhone_11_PC-658CC-3_1024x1024.png?v=1569918779"
    },
    {
      id: "1",
      name: "iPhone 11 Pro",
      url:
        "https://cdn.shopify.com/s/files/1/2595/5304/products/TENC_6.5_iPhone_11_PC-658CC-3_1024x1024.png?v=1569918779"
    },
    {
      id: "1",
      name: "iPhone 11 Pro",
      url:
        "https://cdn.shopify.com/s/files/1/2595/5304/products/TENC_6.5_iPhone_11_PC-658CC-3_1024x1024.png?v=1569918779"
    },
    {
      id: "1",
      name: "iPhone 11 Pro",
      url:
        "https://cdn.shopify.com/s/files/1/2595/5304/products/TENC_6.5_iPhone_11_PC-658CC-3_1024x1024.png?v=1569918779"
    }
  ];
  return (
    <div className="mx-auto container">
      <div className="py-2">
        <p className="font-bold text-3xl">Shop For</p>
      </div>
      <div className="flex flex-row justify-between flex-wrap">
        {products.map((p, index) => (
          <FeatureCateProduct
            key={index}
            image={p.url}
            title={p.name}
          ></FeatureCateProduct>
        ))}
      </div>
    </div>
  );
};

export default FeatureCategory;
