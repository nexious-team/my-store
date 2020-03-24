import React, { useState, useEffect } from "react";
import CartService from "../../services/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [cart, setCart] = useState([]);
  // let cart = [];

  const getTotalUnitPrice = () => {
    let price = 0;
    cart.forEach(c => {
      price += c.price * c.qty;
    });
    return price;
  };
  const getShippingCost = () => {
    return 100;
  };
  const getTotalPrice = () => {
    return getTotalUnitPrice() + getShippingCost();
  };
  const handleMinus = index => {
    const cartitems = [...cart];
    cartitems[index].qty--;
    if (cartitems[index].qty < 0) {
      cartitems[index].qty = 0;
    }
    CartService.editCartItems(index, cartitems[index].qty);
    setCart(cartitems);
  };

  const handlePlus = index => {
    const cartitems = [...cart];
    cartitems[index].qty++;
    setCart(cartitems);
    CartService.editCartItems(index, cartitems[index].qty);
  };
  useEffect(() => {
    setCart(CartService.getCartItems());
  }, []);
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
          <p className="font-anton font-hairline text-2xl ">Your Cart</p>
        </div>
        <div className="flex ">
          <div className="w-3/4 pr-2">
            <div className="border rounded  bg-white pl-5 py-4">
              <span className="font-semibold font-hindSiliguri text-xl">
                There are {cart.length} items in your cart
              </span>
              <hr />
              {cart.map((i, index) => (
                <div key={i.id}>
                  <div className="flex font-hindSiliguri">
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
                      <div className="text-lg font-medium">
                        <div className="flex">
                          <p className="pr-2">Qty: </p>
                          <div
                            onClick={() => handleMinus(index)}
                            className="px-2 text-white hover:bg-blue-800 bg-blue-700 text-md rounded-l"
                          >
                            <button onClick={() => handleMinus(index)}>
                              <FontAwesomeIcon
                                className=" mx-auto text-sm"
                                icon={faMinus}
                              />
                            </button>
                          </div>
                          <div className="w-10 border text-center font-light text-sm">
                            <p>{i.qty}</p>
                          </div>
                          <div className="px-2 text-white hover:bg-red-800 bg-red-700 text-md rounded-r ">
                            <button onClick={() => handlePlus(index)}>
                              <FontAwesomeIcon
                                className=" mx-auto text-sm"
                                icon={faPlus}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/5 h-40 flex items-center">
                      <span className="text-blue-500 text-2xl font-medium">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD"
                        }).format(i.qty * i.price)}
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
                <p>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                  }).format(getTotalUnitPrice())}
                </p>
              </div>
              <div className="flex px-2 py-3 text-md">
                <p className="flex-1 text-left">Estimate Shipping Cost: </p>
                <p>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                  }).format(getShippingCost())}
                </p>
              </div>
              <hr className="font-semibold" />
              <div className="flex px-2 pt-3 text-md">
                <p className="flex-1 text-left">Total Cost: </p>
                <p>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                  }).format(getTotalUnitPrice())}
                </p>
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
