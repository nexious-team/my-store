import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faPaypal,
  faCcDinersClub,
  faCcDiscover,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
const Footer = () => {
  const [email, setEmail] = useState({ email: "" });
  const [showswal, setshow] = useState(false);
  const handleSend = (event) => {
    event.preventDefault();
    console.log(email);
    if (email.email === "") return;
    axios
      .post("https://formcarry.com/s/yHekjKv5uto", email, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        console.log(response);
        setshow(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const textStyle = {
    background: "-webkit-linear-gradient(#C9FFBF, #FFAFBD)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className="w-full bg-gray-100 pt-16 text-gray-600 ">
      <div className="mx-auto container px-32">
        <div className="flex flex-row justify-between mb-5 font-josefin">
          <div className="w-1/4">
            <div>
              <p className="text-lg font-bold py-3 text-gray-700">
                QUICK LINKS
              </p>
            </div>
            <div>
              <ul>
                <li>Search</li>
                <li>Contact</li>
                <li>About Us</li>
                <li>News</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="mx-4">
            <div>
              <p className="text-lg font-bold py-3 text-gray-700">
                GET IN TOUCH
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                obcaecati optio pariatur nihil omnis! Libero tempora, id aliquam
              </p>
            </div>
          </div>
          <div className="w-2/4">
            <div>
              <p className="text-lg font-bold py-3 text-gray-700">NEWSLETTER</p>
            </div>
            <div>
              <form>
                <input
                  className="h-10 w-auto border bg-gray-100"
                  type="text"
                  placeholder="Email Address"
                />
                <button className="h-10 bg-gray-200 p-2">SIGN UP</button>
                <select>
                  <option value="A">Apple</option>
                  <option value="B">Banana</option>
                  <option value="C">Cranberry</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between mt-4 font-mono text-sm">
          <div>© 2020 Digitalshop E-commerce by Shopify</div>
          <div className="flex text-2xl">
            <div className="px-2">
              <FontAwesomeIcon icon={faCcVisa}></FontAwesomeIcon>
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faCcMastercard}></FontAwesomeIcon>
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faCcAmex}></FontAwesomeIcon>
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faCcDiscover}></FontAwesomeIcon>
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faCcPaypal}></FontAwesomeIcon>
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faCcDinersClub}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
