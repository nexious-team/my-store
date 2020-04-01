import React from "react";

const ProductImagePreview = props => {
  return (
    <div>
      <div className="relative " style={{ height: "25rem" }}>
        <div className="absolute inset-x-0 bottom-0">
          <img src={props.images[props.img_index].url} alt="" />
        </div>
      </div>
      <div className="flex">
        {props.images.map((i, index) => (
          <div
            key={index}
            // onClick={props.setImgIndex(index)}
            className="w-1/4 px-5"
          >
            <img src={i.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImagePreview;
