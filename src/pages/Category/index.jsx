import React from "react";

const Category = () => {
  return (
    <div className="container mx-auto px-32">
      <div className="h-12 border-b border-gray-200 flex items-center font-mono ">
        <div className="pr-5">
          <span>Home</span>
        </div>
        <div className="pr-5">></div>
        <div className="pr-5">Leica S</div>
      </div>
      {/* Header */}
      <div className="flex justify-between items-center pt-12">
        <div className="font-bold text-3xl uppercase font-josefin">
          Category Title
        </div>
        <div className=" border rounded bg-gray-400 hover:bg-gray-600 py-2 px-8 text-white cursor-pointer">
          browse other product
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        {/* Product List */}
        {[1, 2, 3, 4, 5].map((i, index) => (
          <div className="w-1/4 px-2 pt-4">
            <div className="border rounded p-3">
              {/* Image */}
              <div>
                <img
                  src="https://purepng.com/public/uploads/large/apple-watch-pcq.png"
                  alt=""
                />
              </div>
              {/* Product name */}
              <div className="font-josefin text-lg">
                Leica Adapter for 21mm f/1.4 ASPH to Accept E82 Filter
              </div>
              {/* product price */}
              <div className="font-mono text-gray-500">$10500</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
