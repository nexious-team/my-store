import React, { useState } from "react";
import auth from "../../services/authService";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionCallApi } from "../../services/actionCallApi";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFail, setLoginFail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const authLogin = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await auth.login(email, password);
      setLoginFail(false);
      actionCallApi().then(res => {
        props.onCurrentUser(res.data.payload);
      });
    } catch (ex) {
      setLoginFail(true);
      setIsLoading(false);
      if (ex.response && ex.response.status === 400) {
        console.log("login Error");
      }
    }
  };
  return (
    <div>
      <div className="flex justify-center py-3">
        <p className="font-bold text-3xl">Login</p>
      </div>
      <div className="flex justify-center">
        <div className="block"></div>
        <form>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="email"
              type="text"
              placeholder="Enter Your Email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="password"
              type="password"
              placeholder="Enter Your Password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className={loginFail ? "m-0 p-0 d-block" : "m-0 p-0 d-none"}>
            <p className="text-red-500">
              Your Credentials did not match our records
            </p>
          </div>
          <div className="mt-5 flex justify-center text-white">
            <button
              onClick={authLogin}
              className="bg-blue-800 px-5 py-3 font-bold rounded-sm"
            >
              Login
            </button>
          </div>
          <div>
            <p>
              Don't have an account?{" "}
              <a href="/register">Click Here to register</a>
            </p>
          </div>
          <div>
            <hr />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
