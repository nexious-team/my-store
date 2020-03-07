import React, { Component } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardSeletion from "./CardSelection";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_WaCkQbtLC5eFJWAW5bMZ5Cpx00v6MiilgA");
const Payment = () => {
  return (
    <div>
      <div>Page for payment</div>
      <div style={{ width: "30rem" }} className="shadow rounded">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
        <div></div>
      </div>
    </div>
  );
};

export default Payment;
