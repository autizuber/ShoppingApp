import React from "react";

const NewsLater = () => {
  return (
    <div className="flex justify-center items-center w-full py-8">
      <div className="lg:w-[80%] lg:h-[50vh] w-full  py-4 bg-gradient-to-t from-[#fffbfb] to-[#feecec] flex flex-col items-center justify-center">
        <h1 className="lg:text-4xl text-2xl text-black/75 font-bold">
          Get Exclusive Offer On Email
        </h1>
        <p className="text-sm mt-3 text-black font-semibold">
          Subscribe To Our Newslater and stay updated
        </p>
        <div className="join py-4">
          <input
            className="input input-bordered lg:w-80 rounded-l-full join-item bg-white"
            placeholder="Email"
          />
          <button className="btn join-item rounded-r-full">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
