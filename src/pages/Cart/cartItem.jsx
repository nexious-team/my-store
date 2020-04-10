import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const CartItem = (props) => {
  return (
    <div>
      <div className="flex font-hindSiliguri">
        <div className="w-1/5 h-40 flex items-center">
          <img src={props.product.images[0].url} alt="" />
        </div>
        <div className="pt-4 pl-5 flex-1">
          <p className="font-medium text-lg">{props.product.name}</p>
          <p>
            Product Description: Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Non{" "}
          </p>
          <div className="text-lg font-medium">
            <div className="flex">
              <p className="pr-2">Qty: </p>
              <div className="px-2 text-white hover:bg-blue-800 bg-blue-700 text-md rounded-l">
                <button onClick={() => props.onMinusClick(props.index)}>
                  <FontAwesomeIcon
                    className=" mx-auto text-sm"
                    icon={faMinus}
                  />
                </button>
              </div>
              <div className="w-10 border text-center font-light text-sm">
                <p>{props.qty}</p>
              </div>
              <div className="px-2 text-white hover:bg-red-800 bg-red-700 text-md rounded-r ">
                <button onClick={() => props.onPlusClick(props.index)}>
                  <FontAwesomeIcon className=" mx-auto text-sm" icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-40 flex items-center">
          <span className="text-blue-500 text-2xl font-medium">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(props.product.product_units[0].price)}
          </span>
        </div>
      </div>
      <div className="">
        <hr />
      </div>
    </div>
  );
};

export default CartItem;
