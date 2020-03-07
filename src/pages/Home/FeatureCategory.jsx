import React from "react";

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
      <div className="flex flex-row justify-between">
        {products.map(p => (
          <div>
            <div className="w-40 bg-gray-100 border">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/2595/5304/products/TENC_6.5_iPhone_11_PC-658CC-3_1024x1024.png?v=1569918779"
                  alt=""
                />
              </div>
              <div className="font-mono text-gray-800">
                <a href="/product-detail"><p className="text-center">iPhone 11 Pro</p></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCategory;
