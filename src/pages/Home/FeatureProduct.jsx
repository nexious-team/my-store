import React from "react";

const FeatureProduct = props => {
  const products = [
    {
      id: "1",
      name: "iPhone 11 Pro",
      url:
        "https://cdn.shopify.com/s/files/1/2595/5304/products/TENC_6.5_iPhone_11_PC-658CC-3_1024x1024.png?v=1569918779"
    },
    {
      id: "1",
      name: "MacBook Pro",
      url:
        "https://www.freepnglogos.com/uploads/macbook-png/macbook-cleanmymac-the-best-mac-cleanup-app-for-macos-get-32.png"
    },
    {
      id: "1",
      name: "iPhone 11 Pro",
      url:
        "https://www.freepnglogos.com/uploads/airpods-png/apple-airpods-png-35.png"
    },
    {
      id: "1",
      name: "iPhone 11 Pro",
      url: "http://pluspng.com/img-png/imac-vector-png-view-project-574.png"
    },
    {
      id: "1",
      name: "iPhone 11 Pro",
      url:
        "https://help.apple.com/assets/5D685479094622DB54849471/5D685B8E680CE2364361F458/en_US/cf42c331284c2c7d642cf36e06b39cf3.png"
    },
    {
      id: "1",
      name: "iPhone 11 Pro",
      url:
        "https://www.freepnglogos.com/uploads/airpods-png/apple-airpods-png-35.png"
    }
  ];
  return (
    <div className="mx-auto container">
      <div className="py-2">
        <p className="font-bold text-3xl">{props.title}</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        {products.map(p => (
          <div>
            <div className="w-40 h-56">
              <div style={{ minHeight: "77%" }} className="flex items-center">
                <img src={p.url} alt="" />
              </div>
              <div className="font-mono text-gray-800">
                <p className="text-center text-lg">{p.name}</p>
              </div>
              <div>
                <p className="font-bold text-xl">$18,000</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
