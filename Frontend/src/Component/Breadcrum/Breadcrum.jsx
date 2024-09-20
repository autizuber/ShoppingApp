import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  if (!product) {
    return (
      <div className="lg:flex hidden items-center gap-3 px-20 mt-3 text-black/70 text-sm font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="lg:flex hidden items-center gap-3 px-20 mt-3 text-black/70 text-sm font-bold">
        Home <img src={arrow_icon} className="h-3" alt="" /> Shop{" "}
        <img src={arrow_icon} alt="" className="h-3" />
        {product.category ? product.category : "No category available"}
        <img src={arrow_icon} alt="" className="h-3" />
        {product.name ? product.name : "No name available"}
      </div>
    </div>
  );
};

export default Breadcrum;
