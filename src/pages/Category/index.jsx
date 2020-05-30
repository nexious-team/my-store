import React, { useState, useEffect } from "react";
import axios from "axios";
import ENV from "../../config/config.json";
import { Link, useParams } from "react-router-dom";

const Category = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const getProductInCategory = () => {
    axios.get(ENV.API_ENDPOINT + "products?_categories[]=" + id).then((res) => {
      setProduct(res.data.payload);
    });
  };
  useEffect(() => {
    getProductInCategory();
  }, []);
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
        {product &&
          product.map((i, index) => (
            <div key={index} className="w-1/4 px-2 pt-4">
              <Link to={`/product-detail/${i._id}`}>
                <div className="border rounded p-3">
                  {/* Image */}
                  <div>
                    <img src={i.images[0].url} alt="" />
                  </div>
                  {/* Product name */}
                  <div className="font-josefin text-lg">{i.name}</div>
                  {/* product price */}
                  <div className="font-mono text-gray-500">
                    ${i.product_units[0].price}
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
