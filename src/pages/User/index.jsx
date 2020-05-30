import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faDoorOpen,
  faCogs,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";

// Asset
import bgimg from "../../assets/images/User/background";

const User = () => {
  return (
    <div className="container mx-auto px-32">
      {/* <div style={{ height: "100vh" }}>asdfs</div> */}
      {/* Background Cover */}
      <div
        style={{
          backgroundImage: `url(${bgimg.bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-64 overflow-hidden"
      ></div>
      {/* User Profile and name */}
      <div
        style={{ marginTop: "-4rem" }}
        className=" overflow-hidden flex justify-center "
      >
        <div>
          <div style={{ borderRadius: "50%" }} className="p-1 bg-white">
            <div
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "50%",

                zIndex: 1000,
              }}
              className="w-32 h-32 overflow-hidden"
            ></div>
          </div>
          <div className="text-center">
            <span className="text-lg font-bold uppercase">User Name</span>
          </div>
        </div>
      </div>

      <div className="flex mt-12">
        <div className="w-1/4 border rounded overflow-hidden cursor-pointer">
          <div className="text-center text-xl text-white bg-blue-700 py-5">
            <span>My Account Info</span>
          </div>
          <div className="py-3 border-t">
            <span className="px-5">
              <FontAwesomeIcon className=" mx-auto" icon={faUserCheck} />
            </span>
            <span className="px-5">My Account</span>
          </div>
          <div className="py-3 border-t">
            <span className="px-5">
              <FontAwesomeIcon className=" mx-auto" icon={faShippingFast} />
            </span>
            <span className="px-5">My Shipping Address</span>
          </div>
          <div className="py-3 border-t">
            <span className="px-5">
              <FontAwesomeIcon className=" mx-auto" icon={faCogs} />
            </span>
            <span className="px-5">Update Information</span>
          </div>
          <div className="py-3 border-t">
            <span className="px-5">
              <FontAwesomeIcon className=" mx-auto" icon={faDoorOpen} />
            </span>
            <span className="px-5">Log Out</span>
          </div>
        </div>
        <div className="w-3/4 px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          omnis suscipit a vitae expedita iusto ab quis nulla cum vero provident
          accusamus facere, reiciendis dolor quidem quam ipsam sequi! Obcaecati.
        </div>
      </div>
    </div>
  );
};

export default User;
