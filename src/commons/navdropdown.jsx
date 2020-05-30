import React from "react";

const NavDropdown = (props) => {
  return (
    <div className="group inline-block relative">
      <button className=" text-white font-semibold py-1 pr-4 rounded inline-flex items-center">
        <span className="mr-1 text-lg font-sans">{props.item}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul
        className="absolute hidden text-gray-700 pt-2 group-hover:block"
        style={{ marginTop: "1px", zIndex: "10" }}
      >
        {props.submenu.map((s) => (
          <li className="" key={s.name}>
            <a
              className="w-56 bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href={s.route}
            >
              {s.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDropdown;
