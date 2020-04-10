import React, { useState, useEffect } from "react";
import CartService from "../../services/cart";
import CartItem from "./cartItem";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [proInCart, setProInCart] = useState();
  // let cart = [];

  const getTotalUnitPrice = () => {
    let price = 0;
    cart.forEach((c) => {
      price += c.price * c.qty;
    });
    return price;
  };
  const getShippingCost = () => {
    return 100;
  };

  const handleMinus = (i) => {
    const cartitems = [...cart];
    cartitems[i].qty = cartitems[i].qty - 1;
    if (cartitems[i].qty < 0) {
      cartitems[i].qty = 0;
    }
    CartService.editCartItems(i, cartitems[i].qty);
    setCart(cartitems);
  };

  const handlePlus = (index) => {
    const cartitems = [...cart];
    cartitems[index].qty++;
    setCart(cartitems);
    CartService.editCartItems(index, cartitems[index].qty);
  };

  async function getProduct() {
    const response = axios(
      `https://nexious-store-api.herokuapp.com/api/products/5da9c598ed822e0f944cfd18`
    );
    return await response;
  }

  const setCartCallProduct = () => {
    // setCart(CartService.getCartItems());
    const api = "https://nexious-store-api.herokuapp.com/api/products/";
    let request = [];
    const inCart = CartService.getCartItems();
    inCart.map((i, index) => {
      request[index] = axios.get(api + i.id);
    });
    axios.all(request).then(
      axios.spread((...responses) => {
        let cartitems = [];
        responses.forEach((res, index) => {
          cartitems[index] = {
            product: res.data.payload,
            qty: inCart[index].qty,
          };
        });
        console.log(inCart);
        setCart(cartitems);
        console.log(cart);
        // use/access the results
      })
    );
  };
  const calTotalProductCost = () => {
    let totalCost = 0;
    cart.forEach((c) => {
      const cost = c.qty * c.product.product_units[0].price;
      totalCost += cost;
    });
    return totalCost;
  };

  const calTotalCost = () => {
    return calTotalProductCost() + 100;
  };
  useEffect(() => {
    setCartCallProduct();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto container px-32">
        <div className="h-12 border-b border-gray-200 flex items-center font-mono ">
          <div className="pr-5">
            <span>Home</span>
          </div>
          <div className="pr-5">></div>
          <div onClick={() => console.log(proInCart)} className="pr-5">
            Leica S
          </div>
          <div className="flex-grow text-right">
            <a className="rounded bg-blue-400 hover:bg-blue-500 px-5 py-2 text-white">
              Continue Shopping
            </a>
          </div>
        </div>
        <div>
          <p className="font-anton font-hairline text-2xl ">Your Cart</p>
        </div>
        <div className="flex ">
          <div className="w-3/4 pr-2">
            <div className="border rounded  bg-white pl-5 py-4">
              <span className="font-semibold font-hindSiliguri text-xl">
                There are {cart && cart.length} items in your cart
              </span>
              <hr />
              {cart &&
                cart.map((i, index) => (
                  <CartItem
                    product={i.product}
                    qty={i.qty}
                    key={index}
                    index={index}
                    onMinusClick={handleMinus}
                    onPlusClick={handlePlus}
                  ></CartItem>
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
                    currency: "USD",
                  }).format(calTotalProductCost())}
                </p>
              </div>
              <div className="flex px-2 py-3 text-md">
                <p className="flex-1 text-left">Estimate Shipping Cost: </p>
                <p>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(getShippingCost())}
                </p>
              </div>
              <hr className="font-semibold" />
              <div className="flex px-2 pt-3 text-md">
                <p className="flex-1 text-left">Total Cost: </p>
                <p>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(calTotalCost())}
                </p>
              </div>
            </div>
            <div className="pt-3 ">
              <div className="rounded-sm w-full bg-green-600 hover:bg-green-700 hover:underline text-white font-bold text-lg py-3 text-center">
                <a href="/payment_information">Proceed To Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
