import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import ShoppingCircle from "../components/shoppingCart/Shoppingcircle";

const Home = () => {
  const style = {
    position: "relative",
  };
  return (
    <div style={style}>
      <Nav />
      <Outlet />
      <ShoppingCircle />
    </div>
  );
};

export default Home;
