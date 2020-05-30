import React, { useState, useEffect } from "react";
import { FormInput } from "../../components/Form";
import CartService from "../../services/cart";
import SweetAlert from "sweetalert2-react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import CheckoutForm from "./CheckoutForm";
import ENV from "../../config/config.json";

// import CheckoutForm from "./CheckoutForm";
// const stripePromise = loadStripe("pk_test_WaCkQbtLC5eFJWAW5bMZ5Cpx00v6MiilgA");

const Payment = () => {
  // State
  const [data, setData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    paymentType: "credit card",
    cardNumber: "",
    billingAddress: "",
    cardValid: "",
    ccv: "",
  });
  const [cart, setCart] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [alertState, setAlertState] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const setCartCallProduct = () => {
    // setCart(CartService.getCartItems());
    const api = "https://nexious-store-api.herokuapp.com/api/products/";
    let request = [];
    const inCart = CartService.getCartItems();
    inCart.forEach((i, index) => {
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
        // console.log(inCart);
        setCart(cartitems);
        // console.log(cart);
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

  //handle checkout
  const handleCheckout = () => {
    // console.log(elements.getElement(CardElement));
    // return;
    let orderID = "";

    // Check payment method
    console.log(paymentMethod);
    if (paymentMethod === "cash" || paymentMethod === "card") {
    } else {
      console.log("please Select Payment Method");
      setAlertState(true);
      return;
    }
    // get product from cart
    let itemsInCart = CartService.getCartItems();
    if (!itemsInCart) itemsInCart = [];

    console.log(itemsInCart);
    // create order from order api
    setDisableBtn(true);
    try {
      axios
        .post(ENV.API_ENDPOINT + "order", null, {
          headers: {
            "x-store": localStorage.getItem("userToken"),
          },
        })
        .then((response) => {
          console.log(response);
          orderID = response.data.payload._id;
          // Convert Each items in cart to api data format
          // This is not supported at the moment. Now support
          let APIData = [];
          itemsInCart.forEach((i, index) => {
            APIData[index] = {
              _order: response.data.payload._id,
              _product: i.id,
              _product_unit: i.unit_id,
              quantity: i.qty,
            };
          });

          // Use this function temporary
          // let APIData = {
          //   _order: orderID,
          //   _product: itemsInCart[0].id,
          //   _product_unit: itemsInCart[0].unit_id,
          //   quantity: itemsInCart[0].qty,
          // };

          console.log(JSON.stringify(APIData));
          // Send Request to create Order Detail
          try {
            axios
              .post(ENV.API_ENDPOINT + "order-details", APIData, {
                headers: {
                  "x-store": localStorage.getItem("userToken"),
                },
              })
              .then((response) => {
                console.log(response);
                // Check the payment method
                if (paymentMethod === "cash") {
                  console.log("Customer Will Pay With Cash");
                } else if (paymentMethod === "card") {
                  console.log("Need to send request to stripe API");
                  try {
                    axios
                      .post(
                        ENV.API_ENDPOINT + "payment",
                        { _order: orderID },
                        {
                          headers: {
                            "x-store": localStorage.getItem("userToken"),
                          },
                        }
                      )
                      .then((response) => {
                        console.log(response);
                        try {
                          handleStripe(response.data.payload.client_secret);
                        } catch (error) {
                          console.log(error);
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  } catch (error) {
                    console.log(error);
                    setDisableBtn(false);
                  }
                }
              })
              .catch((error) => {
                console.log(error);
                setDisableBtn(false);
              });
          } catch (error) {
            console.log(error);
            setDisableBtn(false);
          }
        })
        .catch((error) => {
          setDisableBtn(false);
        });
    } catch (error) {
      console.log(error);
      setDisableBtn(false);
    }
    // create order detail using the order id
    // u
  };

  const handleStripe = async (cs_key) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment(cs_key, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Jenny Rosen",
        },
      },
    });

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
  useEffect(() => {
    setCartCallProduct();
  }, []);
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
                updateData={(e) =>
                  setData({ ...data, fullName: e.target.value })
                }
                data={data.name}
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
                name="paymentMethod"
                onClick={() => setPaymentMethod("card")}
              />
              <span className="px-4 flex-1 text-gray-500">Credit Card</span>
              <div className="overflow-hidden">
                <img
                  src="https://www.merchantequip.com/image/?logos=v|m|a|d|p|dc&height=32"
                  alt="Merchant Equipment Store Credit Card Logos"
                />
              </div>
            </div>
            <div className="h-10 border rounded  flex row items-center mt-3">
              <input
                className="ml-3"
                type="radio"
                name="paymentMethod"
                onClick={() => setPaymentMethod("cash")}
              />
              <span className="px-4 flex-1 text-gray-500">Pay with Cash</span>
            </div>
            <div className={paymentMethod === "card" ? "block" : "hidden"}>
              <CheckoutForm></CheckoutForm>
            </div>
          </div>
          <div className="py-3">
            <hr />
          </div>
          <div>
            <button
              disabled={disableBtn}
              onClick={() => handleCheckout()}
              className="w-full bg-green-400 hover:bg-green-500 rounded text-lg text-white py-4"
            >
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
                <p>${calTotalProductCost()}</p>
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
                <p>$100</p>
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
                <p>${calTotalCost()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SweetAlert
        show={alertState}
        title="Please Select Payment Method"
        text="Select Card or Cash Payment to continue."
        type="warning"
        onConfirm={() => setAlertState(false)}
      />
    </div>
  );
};

export default Payment;
