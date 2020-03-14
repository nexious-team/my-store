import React, { useState, useEffect } from "react";
import NavDropdown from "../commons/navdropdown";
import authService from "../services/authService";
const NavBar = props => {
  const [dropdown, setDropdown] = useState([
    {
      id: 1,
      Name: "Camera",
      submenu: [
        {
          name: "Canon",
          route: "#"
        },
        {
          name: "Sony",
          route: "#"
        },
        {
          name: "Red",
          route: "#"
        }
      ]
    },
    {
      id: 2,
      Name: "Case",
      submenu: [
        {
          name: "Shoulder",
          route: "#"
        },
        {
          name: "Backpack",
          route: "#"
        },
        {
          name: "Straps",
          route: "#"
        }
      ]
    },
    {
      id: 3,
      Name: "Video",
      submenu: [
        {
          name: "Canon",
          route: "#"
        },
        {
          name: "Sony",
          route: "#"
        },
        {
          name: "Red",
          route: "#"
        }
      ]
    },
    {
      id: 4,
      Name: "Accessories",
      submenu: [
        {
          name: "Canon",
          route: "#"
        },
        {
          name: "Sony",
          route: "#"
        },
        {
          name: "Red",
          route: "#"
        }
      ]
    },
    {
      id: 5,
      Name: "Lens",
      submenu: [
        {
          name: "Canon",
          route: "#"
        },
        {
          name: "Sony",
          route: "#"
        },
        {
          name: "Red",
          route: "#"
        }
      ]
    },
    {
      id: 6,
      Name: "Lifestyles",
      submenu: [
        {
          name: "Canon",
          route: "#"
        },
        {
          name: "Sony",
          route: "#"
        },
        {
          name: "Red",
          route: "#"
        }
      ]
    }
  ]);
  useEffect(() => {
    console.log(authService.getCurrentUser());
  });
  const getTotalCartItems = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) cart = new Array();
    return cart.length;
  };

  return (
    <div className="h-48 bg-blue-800">
      <div className="container mx-auto px-32">
        <div className="flex flex-row justify-between h-32 items-center">
          <div>
            <a href="/">
              <h1 className="text-4xl font-anton text-white">Digital</h1>
            </a>
          </div>
          <div>
            <div className="w-full max-w-sm ml-0 text-right pb-3">
              {!authService.getCurrentUser() ? (
                <a href="/login">
                  <span className="text-white text-sm">
                    Sign in or Create an Account
                  </span>
                </a>
              ) : (
                <p>{authService.getCurrentUser()}</p>
              )}
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-2">
                <form className="w-full max-w-sm">
                  <div className="flex items-center bg-blue-900 rounded-sm px-5 border-b border-b-2 border-white-500 py-2">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Search All Products"
                      aria-label="Full name"
                    />
                    <button
                      className="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-900 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded"
                      type="button"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="ml-2">
                <button
                  className="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-900 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                >
                  <a href="/user/cart">
                    <span className="text-2xl">
                      CART ({getTotalCartItems()})
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-5">
          {dropdown.map(d => (
            <div className="self-end mr-3" key={d.id}>
              <NavDropdown item={d.Name} submenu={d.submenu}>
                {" "}
              </NavDropdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
