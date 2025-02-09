import React from "react";
import Nav from "./Nav";
import Headerimg from "../assets/Headerimg.jpg";

const Header = () => {
  console.log(Headerimg);

  return (
    <header>
      <img src={Headerimg} alt="Header" />
      <h1>Nicole Barger</h1>
      <Nav />
    </header>
  );
};

export default Header;
