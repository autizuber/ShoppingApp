import React from "react";
import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
const Hero = () => {
  return (
    <div className="hero -mt-7 min-h-screen bg-gradient-to-tr from-[#f6f1f1] to-[#f6d2d2d3]">
      <div className="hero-content flex-col lg:flex-row">
        <img src={hero_image} className="max-w-sm rounded-lg -mt-8 lg:-ml-40" />
        <div className="lg:ml-32">
          <p className="text-black/80 font-bold">NEW ARRIVALS ONLY</p>
          <div>
            <div className="flex items-center gap-4 -mb-2">
              <p className="text-6xl text-black font-bold">New</p>
              <img className="w-[105px] " src={hand_icon} alt="" />
            </div>
            <p className="text-6xl text-black font-bold mb-4">Collection</p>
            <p className="text-6xl text-black font-bold">For Everyone</p>
          </div>
          <button className=" mt-10 btn bg-gradient-to-tr from-red-600 to-red-400 text-white border-none outline-none active:ring-2 active:ring-red-500 flex items-center">
            Letest Collection
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
