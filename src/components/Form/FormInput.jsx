import React from "react";

const FormInput = (props) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-md font-bold mb-2"
        htmlFor="{props.label}"
      >
        {props.label}
      </label>
      <input
        onChange={(e) => props.updateData(e, props.data)}
        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.label}
        type={props.type}
        placeholder={props.placeholder}
      />
      <span className="text-sm text-gray-500 font-mono">{props.note}</span>
    </div>
  );
};

export default FormInput;
