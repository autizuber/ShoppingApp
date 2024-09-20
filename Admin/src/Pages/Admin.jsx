import React from "react";
import Sidebar from "../Component/SideBar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../Component/AddProduct/AddProduct";
import ListProduct from "../Component/ListProduct/ListProduct";

const Admin = () => {
  return (
    <div className="md:flex ">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/listproduct" element={<ListProduct />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
