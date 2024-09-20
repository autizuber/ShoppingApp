import React, { useContext } from "react";
import { ShopContext } from "../Context/ContextApi";
import { useParams } from "react-router-dom";
import Breadcrum from "../Component/Breadcrum/Breadcrum";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import Discripition from "../Component/Discripition/Discripition";
import PopularProduct from "../Component/PopularProduct/PopularProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Discripition />
      <PopularProduct titel="Related Product" />
    </div>
  );
};

export default Product;
