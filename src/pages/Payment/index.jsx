import React from "react";
import { FormInput } from "../../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faPaypal,
  faCcDinersClub,
  faCcDiscover,
  faCcPaypal
} from "@fortawesome/free-brands-svg-icons";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_WaCkQbtLC5eFJWAW5bMZ5Cpx00v6MiilgA");
const Payment = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="container mx-auto px-32 pt-5"
    >
      <div className="flex">
        <div className="h-64 pr-10">
          <div className="font-bold text-2xl">
            <p>Shipping Address</p>
          </div>
          <div className="mt-3">
            {/* Form Shipping Address*/}
            <div>
              <FormInput
                label="Full Name"
                placeholder={"Enter Your Full Name Here"}
                type={"text"}
              ></FormInput>
            </div>
            <div>
              <FormInput
                label="Address"
                placeholder={"Address you wish to recieve the product"}
                note={"Eg. House Num St Address District Commune City/Province"}
                type={"text"}
              ></FormInput>
            </div>
            <div>
              <FormInput
                label="Phone Number"
                placeholder={
                  "Phone Number without country code. We dont ship to outside Cambodia."
                }
                type={"text"}
              ></FormInput>
            </div>
          </div>
          <div className="py-5">
            <hr className="" />
          </div>
          <div>
            {/* Form Payment Method */}
            <div>
              <div className="font-bold text-2xl pb-3">
                <p>Payment Method</p>
              </div>
            </div>
            <div className="h-10 border rounded  flex row items-center">
              <input
                className="ml-3"
                type="radio"
                checked
                name="paymentMethod"
                id=""
              />
              <span className="px-4 flex-1 text-gray-500">Credit Card</span>
              <div className="overflow-hidden">
                <img
                  src="https://www.merchantequip.com/image/?logos=v|m|a|d|p|dc&height=32"
                  alt="Merchant Equipment Store Credit Card Logos"
                />
              </div>
            </div>
            <div>
              <FormInput
                type="text"
                label="Name On Card"
                placeholder="Name on card"
              ></FormInput>
            </div>
            <div>
              <FormInput
                label="Card Number"
                placeholder="Card Number"
              ></FormInput>
            </div>
            <div>
              <FormInput
                label="Billing Address"
                placeholder="Billing Address"
              ></FormInput>
            </div>
            <div className="flex row">
              <div className="flex-1 pr-3">
                <FormInput
                  label="Valid Until"
                  placeholder="Valid Until"
                ></FormInput>
              </div>
              <div className="flex-1 pl-3">
                <FormInput label="CCV" placeholder="CCV"></FormInput>
              </div>
            </div>
          </div>
          <div className="py-3">
            <hr />
          </div>
          <div>
            <button className="w-full bg-green-400 hover:bg-green-500 rounded text-lg text-white py-4">
              Checkout
            </button>
          </div>
        </div>
        <div className=" border rounded p-3 w-2/5 text-lg">
          <div className="font-bold text-2xl pb-3">
            <p>Payment Summary</p>
          </div>
          <div>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Total product costs:</p>
              </div>
              <div>
                <p>$100</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div>
                <p className="font-semibold">Ship to:</p>
              </div>
              <div className="pl-5">
                <p>63e, St 54, Sangkat BKK, Khan Daun Penh, Phnom Penh</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div>
                <p className="font-semibold">Shipping Cost: </p>
              </div>
              <div>
                <p>$10</p>
              </div>
            </div>
            <div className="pt-3 pb-3">
              <hr />
            </div>
            <div className="flex flex-wrap justify-between">
              <div>
                <p className="font-semibold">Total Cost: </p>
              </div>
              <div>
                <p>$110</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ width: "30rem" }} className="shadow rounded">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
        <div></div>
      </div> */}
    </div>
  );
};

export default Payment;
