import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState({ email: "" });
  const [showswal, setshow] = useState(false);
  const handleSend = event => {
    event.preventDefault();
    console.log(email);
    if (email.email === "") return;
    axios
      .post("https://formcarry.com/s/yHekjKv5uto", email, {
        headers: { Accept: "application/json" }
      })
      .then(function(response) {
        console.log(response);
        setshow(true);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="w-full bg-gray-100 pt-16 text-gray-600">
      <div className="mx-auto container">
        <div className="flex flex-row justify-between">
          <div className="">
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
          <div style={{ maxWidth: "40rem" }} className="mx-4">
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
          <div className="">
            <div>
              <p className="text-lg font-bold py-3 text-gray-700">NEWSLETTER</p>
            </div>
            <div>
              <form>
                <input
                  className="h-10 w-56 border bg-gray-100"
                  type="text"
                  placeholder="Email Address"
                />
                <button className="h-10 bg-gray-200 p-2">SIGN UP</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
