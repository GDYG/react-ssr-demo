import routes from "@/router";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  // console.log("client render", (window as any).__context__);
  const handleClick = (e: any) => {
    console.log(21312323123, e);
  };
  return (
    <div onClick={handleClick}>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
