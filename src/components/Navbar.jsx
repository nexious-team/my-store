import React from "react";
const NavBar = props => {
  return (
    <div className="h-48 bg-blue-800">
      <div className="container mx-auto px-32">
        <div className="flex flex-row justify-between h-32 items-center">
          <div>
            <h1 className="text-4xl font-anton text-white">Digital</h1>
          </div>
          <div>
            <div className="w-full max-w-sm ml-0 text-right pb-3">
              <span className="text-white text-sm">
                Sign in or Create an Account
              </span>
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-2">
                <form class="w-full max-w-sm">
                  <div class="flex items-center bg-blue-900 rounded-sm px-5 border-b border-b-2 border-white-500 py-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Search All Products"
                      aria-label="Full name"
                    />
                    <button
                      class="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-900 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded"
                      type="button"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="ml-2">
                <button
                  class="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-900 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                >
                  <span className="text-2xl">CART</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
