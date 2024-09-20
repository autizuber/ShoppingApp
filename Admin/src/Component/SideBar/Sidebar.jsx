import React from "react";
import { Link } from "react-router-dom";
import product_cart from "../../assets/Product_Cart.svg";
import product_list from "../../assets/Product_list_icon.svg";
const Sidebar = () => {
  return (
    <div className="md:max-w-[250px] bg-white md:h-[89vh] md:flex md:flex-col md:gap-6 md:px-2 md:justify-normal   flex justify-between px-5 py-5 md:-mt-1">
      <Link to="/addproduct">
        <div className="flex gap-2 ml-3 w-fit bg-zinc-100 px-3 py-2 rounded-lg justify-center items-center ring-1 ring-zinc-200">
          <img src={product_cart} alt="" />
          <p className="font-semibold text-black/85">Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct">
        <div className="flex gap-2 ml-3 w-fit bg-zinc-100 px-3 py-2 rounded-lg justify-center items-center ring-1 ring-zinc-200">
          <img src={product_list} alt="" />
          <p className="font-semibold text-black/85">Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
