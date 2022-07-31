import React from "react";
import NavBar from "../component/Navbar";
import ThemeSwitch from "../component/Theme";
import "./index.scss";

const Home = () => {
  return (
    <div className="main-container light-theme" id="main-container">
      <ThemeSwitch />
      <NavBar />
    </div>
  );
};

export default Home;
