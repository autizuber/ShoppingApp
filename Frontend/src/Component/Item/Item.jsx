import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="hover:scale-[1.03] transition-all py-4">
      <div className="card lg:w-72 w-96 shadow-2xl">
        <figure>
          <Link to={`/product/${props.id}`}>
            <img
              onClick={window.scrollTo(0, 0)}
              className="lg:w-[100%] lg:h-[100%]"
              src={props.image}
              alt="Shoes"
            />
          </Link>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[15px] text-black/90">
            {props.name}
            <div className="badge badge-error text-white">NEW</div>
          </h2>
          <div className="card-actions justify-end mt-3">
            <div className="badge badge-outline text-black font-semibold">
              $ {props.new_price}
            </div>
            <div className="badge badge-outline line-through text-black font-semibold">
              $ {props.old_price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
