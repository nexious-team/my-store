import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import CardSection from "../CardSelection";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment(
      "pi_1GJKbWI4G9Faq2rzDrmLH2kr_secret_yULYZWlaBtJw7Zd8k9bDIReEF",
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Jenny Rosen"
          }
        }
      }
    );

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        console.log("payment is success. yay!!!!");
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <form className="px-3 py-5 shadow rounded" onSubmit={handleSubmit}>
      <CardSection />
      <button
        className="mt-3 bg-blue-600 w-full rounded text-white font-mono text-lg py-3 hover:bg-blue-700"
        disabled={!stripe}
      >
        Pay Now
      </button>
    </form>
  );
}
