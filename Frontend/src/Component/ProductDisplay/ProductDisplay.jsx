import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_icon_half from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ContextApi";
import { useNavigate } from "react-router-dom";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  let naviget = useNavigate();

  const handleAddToCart = () => {
    if (localStorage.getItem("auth-token")) {
      console.log("Adding to cart:", product.id); // Debugging
      addToCart(product.id);
    } else {
      naviget("/login");
    }
  };

  return (
    <div className="lg:px-20 px-5 py-9 lg:grid lg:grid-cols-2">
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          <img src={product.image} className="h-24 w-20" alt="Product" />
          <img src={product.image} className="h-24 w-20" alt="Product" />
          <img src={product.image} className="h-24 w-20" alt="Product" />
          <img src={product.image} className="h-24 w-20" alt="Product" />
        </div>
        <div>
          <img src={product.image} alt="Product" />
        </div>
      </div>
      <div className="lg:-ml-24">
        <h1 className="text-black/75 font-bold text-xl lg:mt-0 mt-3 lg:w-1/2">
          {product.name}
        </h1>
        <div className="flex gap-1 items-center py-3">
          <img src={star_icon} className="h-3" alt="Star" />
          <img src={star_icon} className="h-3" alt="Star" />
          <img src={star_icon} className="h-3" alt="Star" />
          <img src={star_icon} className="h-3" alt="Star" />
          <img src={star_icon_half} className="h-3" alt="Half Star" />
          <p>(122)</p>
        </div>
        <div className="flex gap-3">
          <p className="line-through font-bold">$ {product.old_price}</p>
          <p className="font-bold text-error">$ {product.new_price}</p>
        </div>
        <div className="py-4 lg:py-6">
          <p className="text-sm font-semibold text-black/75">
            {product.description}
          </p>
        </div>
        <div className="py-2">
          <h2 className="mb-4 font-bold text-black/70">Select Size</h2>
          <div className="flex gap-2">
            <p className="bg-zinc-200 text-sm text-black/75 w-8 h-8 items-center justify-center flex">
              S
            </p>
            <p className="bg-zinc-200 text-sm text-black/75 w-8 h-8 items-center justify-center flex">
              M
            </p>
            <p className="bg-zinc-200 text-sm text-black/75 w-8 h-8 items-center justify-center flex">
              L
            </p>
            <p className="bg-zinc-200 text-sm text-black/75 w-8 h-8 items-center justify-center flex">
              XL
            </p>
            <p className="bg-zinc-200 text-sm text-black/75 w-8 h-8 items-center justify-center flex">
              XXL
            </p>
          </div>
        </div>
        <div className="mt-5">
          <button
            className="btn btn-error text-white"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
        <div className="mt-5">
          <p className="text-sm pb-1">
            <span className="font-semibold text-black/70">Category:</span>
            Women, T-shirt, Crop Top
          </p>
          <p className="text-sm">
            <span className="font-semibold text-black/70">Tags:</span> Modern,
            Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
