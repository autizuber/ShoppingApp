import React, { useContext } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ContextApi";
const Navbar = () => {
  const { getTotalCartItem } = useContext(ShopContext);

  const handelLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/");
  };

  return (
    <>
      <div className="navbar px-5 lg:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white/90"
            >
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/kid">Kids</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            {" "}
            <img className="hidden lg:block lg:w-12" src={logo} alt="" />
          </Link>
          <Link to="/" className="btn btn-ghost text-xl text-zinc-700">
            Shopper
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <Link to="/" className="font-semibold text-zinc-500">
                Shop{" "}
              </Link>
            </li>
            <li>
              <Link to="/men" className="font-semibold text-zinc-500">
                Men
              </Link>
            </li>
            <li>
              <Link to="/women" className="font-semibold text-zinc-500">
                Women
              </Link>
            </li>
            <li>
              <Link to="/kid" className="font-semibold text-zinc-500">
                Kids
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={handelLogout}
              className=" rounded-full px-5 py-1 active:bg-zinc-200 transition-all cursor-pointer ring-1 ring-red-400 text-red-400  btn-ghost font-semibold "
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className=" rounded-full px-5 py-1 active:bg-zinc-200 transition-all cursor-pointer ring-1 ring-zinc-400  btn-ghost font-semibold text-zinc-500"
            >
              Login
            </Link>
          )}

          <div className="indicator">
            <span className="indicator-item badge badge-error lg:w-3 text-white">
              {getTotalCartItem()}
            </span>
            <Link to="/card">
              <img
                className="w-8 sm:w-10 lg:w-7 opacity-50 cursor-pointer"
                src={cart_icon}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </>
  );
};

export default Navbar;
