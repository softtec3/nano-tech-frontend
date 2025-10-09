import React from "react";
import ReactImageZoom from "react-image-zoom";

const ProductImageZoom = () => {
  const props = {
    width: 400,
    height: 300,
    zoomWidth: 500,
    zoomPosition: "left",
    img: "https://cdn.waltonplaza.com.bd/2ee348dc-781e-4d24-acc5-cca8675ac304.jpeg",
  };

  return <ReactImageZoom {...props} />;
};

export default ProductImageZoom;
