import React, { useContext } from "react";
import { ShopContext } from "../../Context/ContextApi";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItem, removeToCart } =
    useContext(ShopContext);

  if (!all_product) return <p>Loading...</p>; // Simple loading message or similar

  return (
    <div className="w-full lg:px-20 px-5">
      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-6 py-4 font-bold">
        <p>Products</p>
        <p className="lg:-ml-24">Title</p>
        <p className="lg:ml-10">Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col py-4 font-bold">
        <p className="text-lg font-bold">Cart Items</p>
      </div>

      <hr />
      {all_product.map((item) => {
        if (cartItem[item.id] > 0) {
          return (
            <div key={item.id} className="py-3 text-black/65 font-bold">
              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-6 items-center gap-4">
                <img
                  src={item.image}
                  className="w-14 lg:w-10"
                  alt={item.name}
                />
                <p className="font-bold lg:text-[12px] text-black/65 lg:-ml-24">
                  {item.name}
                </p>
                <p className="lg:ml-10 lg:text-[12px]">${item.new_price}</p>
                <p className="lg:text-[12px] w-6 h-6 items-center flex justify-center ring-1 ring-zinc-400">
                  {cartItem[item.id]}
                </p>
                <p className="lg:text-[12px]">
                  ${item.new_price * cartItem[item.id]}
                </p>
                <img
                  src={remove_icon}
                  onClick={() => removeToCart(item.id)}
                  alt="Remove"
                  className="w-3 h-3 cursor-pointer"
                />
              </div>
              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col py-3 border-b border-gray-200">
                <div className="flex items-center relative">
                  <img src={item.image} className="w-24" alt={item.name} />
                  <img
                    src={remove_icon}
                    onClick={() => removeToCart(item.id)}
                    alt="Remove"
                    className="absolute right-0 top-0 w-6 h-6 cursor-pointer"
                  />
                </div>
                <p className="font-bold text-black/65 mt-2">{item.name}</p>
                <p className="text-black/65">Price: ${item.new_price}</p>
                <p className="text-black/65">Quantity: {cartItem[item.id]}</p>
                <p className="text-black/65">
                  Total: ${item.new_price * cartItem[item.id]}
                </p>
              </div>
            </div>
          );
        }
        return null; // Ensure map always returns a valid element
      })}
      <hr />
      <div className="lg:flex lg:my-20 my-10">
        <div className=" lg:flex-1 lg:flex lg:flex-col lg:mr-40 lg:gap-7">
          <h1 className="text-black/70 font-bold">Cart Total</h1>
          <div>
            <div className="flex justify-between py-4 text-black">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-4 text-black">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-4 text-black">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button className="w-48 text-sm font-semibold bg-[#ff6868] text-white py-3 px-4">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="mt-10 lg:mt-0">
          <p className="text-black text-sm font-semibold mb-2">
            If You Have A Promo Code Enter Hear
          </p>
          <div className="join py-2">
            <input
              className="input input-bordered lg:w-80 w-72  join-item bg-white"
              placeholder="Enter Promo Code"
            />
            <button className="btn join-item">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
