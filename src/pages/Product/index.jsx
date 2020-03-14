import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import CartService from "../../services/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const images = [
    {
      url:
        "https://cdn.shopify.com/s/files/1/0543/1637/products/1347910998_360x.jpg?v=1484754685"
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/0543/1637/products/1347911009_360x.jpg?v=1484754685"
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/0543/1637/products/1347910998_360x.jpg?v=1484754685"
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/0543/1637/products/1347911009_360x.jpg?v=1484754685"
    }
  ];
  const [img_index, setImgIndex] = useState(0);
  const handleAddToCart = id => {
    CartService.addItemToCart(id);
    // newCart.push({ id: Math.random().toString() });
    // localStorage.setItem("cart", newCart);
  };
  return (
    <div className="mx-auto container px-32">
      <div className="h-12 border-b border-gray-200 flex items-center font-mono ">
        <div className="pr-5">
          <span>Home</span>
        </div>
        <div className="pr-5">></div>
        <div className="pr-5">Leica S</div>
      </div>
      <div className="mx-auto container">
        <div className="flex m-0 p-0 pt-5">
          <div className="w-2/5 ">
            <div className="relative " style={{ height: "25rem" }}>
              <div className="absolute inset-x-0 bottom-0">
                <img src={images[img_index].url} alt="" />
              </div>
            </div>
            <div className="flex">
              {images.map((i, index) => (
                <div onClick={() => setImgIndex(index)} className="w-1/4 px-5">
                  <img src={i.url} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-auto flex-1 pt-10">
            <div className="uppercase text-xl font-bold py-2">
              leica s (typ 006)
            </div>
            <div className="flex py-3 py-3">
              <div className="text-2xl font-bold">$18,000</div>
              <div className="px-3">
                <button className=" rounded border-2 border-blue-700 text-xl text-blue-700 font-mono px-4">
                  Save $3,600
                </button>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={() => handleAddToCart(uuidv1())}
                className="rounded w-48 border-2 border-blue-600 px-4 py-2 text-blue-600 font-sans text-md"
              >
                <FontAwesomeIcon className="mr-2" icon={faCoffee} />
                <span className="uppercase">add to cart</span>
              </button>
              <a
                href="/payment_information"
                className="block w-48 rounded border-2 border-blue-600 bg-blue-600 px-4 py-2 text-white font-sans text-md mt-2"
              >
                <FontAwesomeIcon className="mr-2" icon={faCoffee} />
                <span className="uppercase">Buy It Now</span>
              </a>
            </div>
            <div className="mt-20">
              <hr />
            </div>
            <div>
              <p>
                This is a demonstration store. You can purchase products like
                this from Leica Store Miami.
              </p>
              <ul>
                <li>
                  The next generation in the successful line, the Leica S offers
                  increased imaging quality and sensor sensitivity, predictive
                  autofocus, higher speed and improved handling. Numerous
                  enhanced functions contribute to the camera's further
                  acceleration and greater security of the professional
                  photographic workflow.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
