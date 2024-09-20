import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Admin from "./Pages/Admin";

const App = () => {
  return (
    <div className="w-full h-screen bg-[#f0f0f0]">
      <Navbar />
      <Admin />
    </div>
  );
};

export default App;
