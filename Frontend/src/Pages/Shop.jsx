import React from "react";
import Hero from "../Component/Hero/Hero";
import PopularProduct from "../Component/PopularProduct/PopularProduct";
import Offer from "../Component/Offer/Offer";
import NewCollection from "../Component/NewCollection/NewCollection";
import NewsLater from "../Component/NewsLater/NewsLater";

const Shop = () => {
  return (
    <div>
      <Hero />
      <PopularProduct titel="Popular Product" />
      <Offer />
      <NewCollection />
      <NewsLater />
    </div>
  );
};

export default Shop;
