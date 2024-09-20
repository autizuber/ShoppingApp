import React, { useContext } from "react";
import dropdown_img from "../Component/Assets/dropdown_icon.png";
import { ShopContext } from "../Context/ContextApi";
import Item from "../Component/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!all_product || all_product.length === 0) {
    return (
      <div>
        Loading...<span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  return (
    <div className="lg:px-16">
      <img src={props.banner} alt="" />
      <div className="flex justify-between items-center lg:px-2 px-5 py-4">
        <p className="font-semibold text-black/80">
          <span className="text-black font-semibold">Shoing 1-13 </span>out of
          36 product
        </p>
        <div className="flex justify-center items-center gap-3 bg-zinc-100 hover:bg-zinc-300 ring-zinc-200 ring-1 rounded-full px-8 py-2 btn outline-none border-none text-black/80">
          Sort by
          <img src={dropdown_img} alt="dropdown" />
        </div>
      </div>
      <div className="lg:grid  lg:grid-cols-4 gap-4 px-5 justify-center">
        {all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                name={item.name}
                description={item.description}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="flex items-center justify-center w-full h-8 py-20">
        <button className="bg-zinc-100 hover:bg-zinc-300 ring-zinc-200 ring-1 rounded-full px-8 py-2 btn outline-none border-none text-black/80">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
