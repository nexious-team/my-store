import React, { useEffect, useState } from "react";

const ProductImagePreview = (props) => {
  // const [imagesarr, setimgarr] = useState([{ path: "" }]);
  // useEffect(() => {
  //   setimgarr(props.images);
  // }, []);
  const [allImages, setAllImages] = useState([]);
  useEffect(() => {
    const allImages = props.images;
    setAllImages(props.images);
  }, []);
  return (
    <div>
      <div className="relative " style={{ height: "25rem" }}>
        <div className="absolute inset-x-0 bottom-0">
          {props.images && (
            <img src={props.images[props.img_index].url} alt="" />
          )}
        </div>
      </div>
      <div className="flex">
        {props.images &&
          props.images.map((i, index) => (
            <div
              key={index}
              onClick={() => props.setImgIndex(index)}
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
