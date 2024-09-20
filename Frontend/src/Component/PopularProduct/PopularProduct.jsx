import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const PopularProduct = (prpos) => {
  const Url = "https://shoppingapp-backend-j4hr.onrender.com";
  const [popularProduct, setPopularProduct] = useState([]);
  useEffect(() => {
    fetch(`${Url}/popularinwomen`)
      .then((res) => res.json())
      .then((data) => setPopularProduct(data));
  }, []);
  return (
    <div className="py-10 lg:px-20 px-5 justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-zinc-800 font-bold text-center lg:my-8 uppercase">
          {prpos.titel}
        </h1>
        <hr className=" lg:w-[10%] w-[30%] mt-2 h-1 bg-black lg:-mt-5 mb-8 rounded-full"></hr>
      </div>
      <div className="lg:flex gap-4">
        {popularProduct.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularProduct;
