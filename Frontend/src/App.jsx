import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Card from "./Pages/Card";
import LoginSinup from "./Pages/LoginSinup";
import Footer from "./Component/Footer/Footer";
import men_banner from "./Component/Assets/banner_mens.png";
import women_banner from "./Component/Assets/banner_women.png";
import kids_banner from "./Component/Assets/banner_kids.png";

const App = () => {
  return (
    <div className=" min-h-[100vh] bg-white w-full overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={men_banner} />}
          />
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={women_banner} />}
          />
          <Route
            path="/kid"
            element={<ShopCategory category="kid" banner={kids_banner} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/login" element={<LoginSinup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
