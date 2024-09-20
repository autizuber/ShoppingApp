import React from "react";
import nav_logo from "../../assets/nav-logo.svg";
import nav_profile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-white md:px-20 px-5 border-b-2 border-zinc-200">
      <div className="flex-1">
        <img className="w-52" src={nav_logo} alt="" />
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          ></div>
        </div>
        <div tabIndex={0} role="button" className="avatar w-16">
          <img src={nav_profile} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
