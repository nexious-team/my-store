import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductImagePreview from "./ProductImagePreview";
import { v1 as uuidv1 } from "uuid";
import CartService from "../../services/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const [NotFound, setNotFound] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://nexious-store-api.herokuapp.com/api/products/${id}`)
      .then((res) => {
        setProduct(res.data.payload);
      })
      .catch((res) => {
        setNotFound(true);
      });
    console.log(product);
  }, []);

  const [img_index, setImgIndex] = useState(0);
  const handleAddToCart = (_id) => {
    CartService.addItemToCart(product._id, product.product_units[0]._id);
    window.location.reload(true);
    console.log(product.product_units[0]._id);

    // newCart.push({ id: Math.random().toString() });
    // localStorage.setItem("cart", newCart);
  };
  const handleChangeImageIndex = (index) => {
    setImgIndex(index);
    console.log(index);
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
      {!NotFound ? (
        <div className="mx-auto container">
          <div className="flex m-0 p-0 pt-5">
            {/* Image Preview */}
            <div className="w-2/5 ">
              {product && (
                <ProductImagePreview
                  images={product.images}
                  img_index={img_index}
                  setImgIndex={handleChangeImageIndex}
                ></ProductImagePreview>
              )}
            </div>
            <div className="w-auto flex-1 pt-10 pl-8">
              <div className="uppercase text-xl font-bold py-2">
                {product && <p> {product.name} </p>}
              </div>
              <div className="flex py-3 py-3">
                <div className="text-2xl font-bold">
                  ${product.product_units && product.product_units[0].price}
                </div>
                <div className="px-3">
                  <button className=" rounded border-2 border-blue-700 text-xl text-blue-700 font-mono px-4">
                    Save $3
                  </button>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => handleAddToCart(product._id)}
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
                    The next generation in the successful line, the Leica S
                    offers increased imaging quality and sensor sensitivity,
                    predictive autofocus, higher speed and improved handling.
                    Numerous enhanced functions contribute to the camera's
                    further acceleration and greater security of the
                    professional photographic workflow.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>not found</div>
      )}
    </div>
  );
};

export default ProductDetail;
