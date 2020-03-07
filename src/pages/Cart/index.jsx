import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      key: 0,
      qty: 1,
      price: 1800.0
    },
    {
      key: 1,
      qty: 1,
      price: 1800.0
    },
    {
      key: 2,
      qty: 1,
      price: 1800.0
    }
  ]);
  const handleMinus = index => {
    const cartitems = { ...cart };
    cartitems[index].qty--;
    if (cartitems[index].qty < 0) {
      cartitems[index].qty = 0;
    }
    // setCart(cartitems);
    console.log(cart);
    console.log(cartitems);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto container px-32">
        <div className="h-12 border-b border-gray-200 flex items-center font-mono ">
          <div className="pr-5">
            <span>Home</span>
          </div>
          <div className="pr-5">></div>
          <div className="pr-5">Leica S</div>
        </div>
        <div>
          <p className="font-sans text-2xl ">Your Cart</p>
        </div>
        <div className="flex ">
          <div className="w-3/4 pr-2">
            <div className="border rounded  bg-white pl-5 py-4">
              <span className="font-semibold font-sans text-xl">
                There are 4 items in your cart
              </span>
              <hr />
              {cart.map((i, index) => (
                <div>
                  <div className="flex">
                    <div className="w-1/5 h-40 flex items-center">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0543/1637/products/1347911009_360x.jpg?v=1484754685"
                        alt=""
                      />
                    </div>
                    <div className="pt-4 pl-5 flex-1">
                      <p className="font-medium text-lg">Product Name</p>
                      <p>
                        Product Description: Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Non{" "}
                      </p>
                      <p className="text-lg font-medium">
                        <div className="flex">
                          <p className="pr-2">Qty: </p>
                          <div
                            onClick={() => handleMinus(index)}
                            className="px-2 text-white bg-blue-700 text-md rounded-l"
                          >
                            <FontAwesomeIcon
                              className=" mx-auto text-sm"
                              icon={faMinus}
                            />
                          </div>
                          <div className="w-10 border text-center font-light text-sm">
                            <p>{i.qty}</p>
                          </div>
                          <div className="px-2 text-white bg-red-700 text-md rounded-r ">
                            <FontAwesomeIcon
                              className=" mx-auto text-sm"
                              icon={faPlus}
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                    <div className="w-1/5 h-40 flex items-center">
                      <span className="text-blue-500 text-2xl font-medium">
                        ${i.qty * i.price}
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/4 pl-2">
            <div className=" border rounded  bg-white text-center py-4 font-sans font-semibold ">
              <span className="font-sans font-semibold text-xl pb-2">
                Your Order Summary
              </span>
              <hr />
              <div className="flex px-2 pt-3 text-md">
                <p className="flex-1 text-left">Total Unit Cost: </p>
                <p>$5400</p>
              </div>
              <div className="flex px-2 py-3 text-md">
                <p className="flex-1 text-left">Estimate Shipping Cost: </p>
                <p>$120</p>
              </div>
              <hr className="font-semibold" />
              <div className="flex px-2 pt-3 text-md">
                <p className="flex-1 text-left">Total Cost: </p>
                <p>$5520</p>
              </div>
            </div>
            <div className="pt-3">
              <button className="rounded-sm w-full bg-green-600 hover:bg-green-700 hover:underline text-white font-bold text-lg py-3 ">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
