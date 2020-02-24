import React, { useState } from "react";
import auth from "../../services/authService";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionCallApi } from "../../services/actionCallApi";

const Register = props => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: ""
  });
  const [loginFail, setLoginFail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const authLogin = async e => {
    e.preventDefault();
    try {
      await auth.register(data);
      console.log("loggin in");
      // actionCallApi().then(res => {
      //   props.onCurrentUser(res.data.payload);
      // });
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div>
      <div className="flex justify-center py-3">
        <p className="font-bold text-3xl">Register</p>
      </div>
      <div className="flex justify-center">
        <div className="block"></div>
        <form>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              type="text"
              placeholder="First Name"
              onChange={e => setData({ ...data, first_name: e.target.value })}
            />
          </div>
          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              type="text"
              placeholder="Last Name"
              onChange={e => setData({ ...data, last_name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              type="text"
              placeholder="Username"
              onChange={e => setData({ ...data, username: e.target.value })}
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="email"
              type="text"
              placeholder="Enter Your Email"
              onChange={e => setData({ ...data, email: e.target.value })}
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="password"
              type="password"
              placeholder="Enter Your Password"
              onChange={e => setData({ ...data, password: e.target.value })}
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
              Register
            </button>
          </div>
          <div>
            <p>
              Already Have an Account?{" "}
              <a href="/login" className="text-blue-500">
                Login
              </a>
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

export default Register;
