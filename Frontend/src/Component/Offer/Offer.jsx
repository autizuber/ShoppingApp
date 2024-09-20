import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="flex justify-center py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row lg:w-3/4 w-full max-w-6xl bg-gradient-to-r from-[#fdeeee] to-[#f5e6e6] rounded-sm overflow-hidden lg:h-96">
        {/* Content Section */}
        <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 p-6 lg:p-12 text-center lg:text-left space-y-4">
          <h1 className="text-3xl lg:text-5xl font-bold text-black">
            Exclusive
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold text-black">
            Offer For You
          </h1>
          <p className=" font-semibold text-black uppercase">
            Only on best seller product
          </p>
          <button className="btn mt-6 bg-gradient-to-tr from-red-600 to-red-400 text-white border-none outline-none px-8 py-2 rounded-full transition hover:opacity-80 active:ring-2 active:ring-red-500">
            Click Now
          </button>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center p-6 lg:p-12">
          <img
            src={exclusive_image}
            alt="Exclusive Offer"
            className="w-[63%] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
