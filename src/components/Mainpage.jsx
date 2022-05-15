import React from "react";
import Header from "./Header";
import "../components/custom.css";
import bg from "../assets/images/wiut.JPG";
import Modules from "./Modules";

function Mainpage() {
  return (
    <div className="mainpage">
      <Header />
      <Modules />
    </div>
  );
}

export default Mainpage;
